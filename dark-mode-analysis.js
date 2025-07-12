import { chromium } from 'playwright';

async function analyzeDarkMode() {
  const baseURL = 'http://localhost:5173/';
  
  console.log('🔍 DETAILED DARK MODE ANALYSIS');
  console.log('='.repeat(60));
  
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto(baseURL, { waitUntil: 'networkidle' });
    console.log('✅ Website loaded successfully');

    // Function to get detailed element styles
    const getElementStyles = async (selector, description) => {
      const element = await page.locator(selector).first();
      const exists = await element.count() > 0;
      
      if (!exists) {
        console.log(`❌ ${description}: Element not found`);
        return null;
      }

      const styles = await element.evaluate(el => {
        const computed = window.getComputedStyle(el);
        return {
          backgroundColor: computed.backgroundColor,
          color: computed.color,
          backgroundImage: computed.backgroundImage,
          className: el.className
        };
      });

      console.log(`📊 ${description}:`);
      console.log(`   Background: ${styles.backgroundColor}`);
      console.log(`   Color: ${styles.color}`);
      console.log(`   Background Image: ${styles.backgroundImage !== 'none' ? 'Has gradient' : 'None'}`);
      console.log(`   Classes: ${styles.className}`);
      
      return styles;
    };

    // Test in light mode first
    console.log('\n🌞 LIGHT MODE ANALYSIS');
    console.log('-'.repeat(40));

    const lightModeStyles = {
      heroSection: await getElementStyles('.min-h-screen', 'Hero Section'),
      overlay: await getElementStyles('.absolute.inset-0', 'Hero Overlay'),
      servicesSection: await getElementStyles('.bg-white', 'Services Section'),
      serviceCard1: await getElementStyles('.bg-gradient-to-br.from-blue-400', 'Blue Service Card'),
      personalitySection: await getElementStyles('.bg-gradient-to-r.from-yellow-400', 'Personality Section'),
      ctaSection: await getElementStyles('.bg-gray-900', 'CTA Section')
    };

    // Find and click dark mode toggle
    const toggleButton = await page.locator('[aria-label*="dark mode" i]').first();
    await toggleButton.click();
    await page.waitForTimeout(1000);

    console.log('\n🌙 DARK MODE ANALYSIS');
    console.log('-'.repeat(40));

    const darkModeStyles = {
      heroSection: await getElementStyles('.min-h-screen', 'Hero Section'),
      overlay: await getElementStyles('.absolute.inset-0', 'Hero Overlay'),
      servicesSection: await getElementStyles('.bg-white', 'Services Section'),
      serviceCard1: await getElementStyles('.bg-gradient-to-br.from-blue-400', 'Blue Service Card'),
      personalitySection: await getElementStyles('.bg-gradient-to-r.from-yellow-400', 'Personality Section'),
      ctaSection: await getElementStyles('.bg-gray-900', 'CTA Section')
    };

    // Compare the changes
    console.log('\n📊 COMPARISON ANALYSIS');
    console.log('='.repeat(60));

    const compareStyles = (lightStyle, darkStyle, sectionName) => {
      if (!lightStyle || !darkStyle) {
        console.log(`❌ ${sectionName}: Missing style data`);
        return;
      }

      const backgroundChanged = lightStyle.backgroundColor !== darkStyle.backgroundColor;
      const colorChanged = lightStyle.color !== darkStyle.color;
      const backgroundImageChanged = lightStyle.backgroundImage !== darkStyle.backgroundImage;

      console.log(`\n${sectionName}:`);
      console.log(`   Background Color Changed: ${backgroundChanged ? '✅' : '❌'}`);
      if (backgroundChanged) {
        console.log(`     Light: ${lightStyle.backgroundColor}`);
        console.log(`     Dark:  ${darkStyle.backgroundColor}`);
      }
      console.log(`   Text Color Changed: ${colorChanged ? '✅' : '❌'}`);
      if (colorChanged) {
        console.log(`     Light: ${lightStyle.color}`);
        console.log(`     Dark:  ${darkStyle.color}`);
      }
      console.log(`   Background Image Changed: ${backgroundImageChanged ? '✅' : '❌'}`);
    };

    compareStyles(lightModeStyles.heroSection, darkModeStyles.heroSection, 'Hero Section');
    compareStyles(lightModeStyles.overlay, darkModeStyles.overlay, 'Hero Overlay');
    compareStyles(lightModeStyles.servicesSection, darkModeStyles.servicesSection, 'Services Section');
    compareStyles(lightModeStyles.serviceCard1, darkModeStyles.serviceCard1, 'Service Card');
    compareStyles(lightModeStyles.personalitySection, darkModeStyles.personalitySection, 'Personality Section');
    compareStyles(lightModeStyles.ctaSection, darkModeStyles.ctaSection, 'CTA Section');

    // Check if dark class is present
    const hasDarkClass = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });

    // Count elements with dark: classes
    const darkClassCount = await page.evaluate(() => {
      const allElements = document.querySelectorAll('*');
      let count = 0;
      allElements.forEach(el => {
        if (el.className && typeof el.className === 'string' && el.className.includes('dark:')) {
          count++;
        }
      });
      return count;
    });

    console.log('\n🎯 FINAL ASSESSMENT');
    console.log('='.repeat(60));
    console.log(`✅ Dark class applied to document: ${hasDarkClass}`);
    console.log(`📊 Elements with dark: classes: ${darkClassCount}`);

    // Take focused screenshots of specific sections
    console.log('\n📸 Taking detailed screenshots...');
    
    // Screenshot of services section specifically
    const servicesSection = page.locator('.bg-white').first();
    await servicesSection.screenshot({ path: 'services-section-dark.png' });
    
    // Screenshot of service cards
    const serviceCards = page.locator('.bg-gradient-to-br').first();
    await serviceCards.screenshot({ path: 'service-card-dark.png' });

    console.log('✅ Detailed screenshots saved');

    // Toggle back to light mode for comparison
    await toggleButton.click();
    await page.waitForTimeout(1000);
    
    await servicesSection.screenshot({ path: 'services-section-light.png' });
    await serviceCards.screenshot({ path: 'service-card-light.png' });

    console.log('\n🏁 Analysis complete. Check the detailed screenshots for visual differences.');

    // Keep browser open
    await new Promise(() => {});

  } catch (error) {
    console.error('❌ Analysis failed:', error.message);
  }
}

analyzeDarkMode().catch(console.error);