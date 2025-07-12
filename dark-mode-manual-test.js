import { chromium } from 'playwright';

async function testDarkMode() {
  const baseURL = 'http://localhost:5173/';
  
  console.log('🚀 Starting Dark Mode Test...');
  console.log('='.repeat(50));
  
  // Launch browser
  const browser = await chromium.launch({ 
    headless: false,
    slowMo: 1000 // Slow down for visibility
  });
  
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Set up console logging
  page.on('console', msg => {
    console.log(`BROWSER CONSOLE ${msg.type()}: ${msg.text()}`);
  });
  
  page.on('pageerror', error => {
    console.log(`BROWSER ERROR: ${error.message}`);
  });

  try {
    console.log('🌐 Opening the website...');
    await page.goto(baseURL, { waitUntil: 'networkidle' });
    console.log('✅ Successfully loaded the website');

    // Take initial screenshot in light mode
    console.log('📸 Taking screenshot of light mode...');
    await page.screenshot({ 
      path: 'light-mode.png', 
      fullPage: true 
    });
    console.log('✅ Light mode screenshot saved as light-mode.png');

    // Check initial state
    console.log('🔍 Checking initial document classes...');
    const initialBodyClass = await page.getAttribute('body', 'class') || '';
    const initialHtmlClass = await page.getAttribute('html', 'class') || '';
    const initialDocumentElement = await page.evaluate(() => document.documentElement.className);
    
    console.log('  Initial body class:', initialBodyClass);
    console.log('  Initial html class:', initialHtmlClass);
    console.log('  Initial document element class:', initialDocumentElement);

    // Get initial background colors
    console.log('🎨 Checking initial background colors...');
    const initialBodyBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    
    const initialRootBg = await page.evaluate(() => {
      return window.getComputedStyle(document.documentElement).backgroundColor;
    });

    console.log('  Initial body background:', initialBodyBg);
    console.log('  Initial root background:', initialRootBg);

    // Look for dark mode toggle
    console.log('🔍 Looking for dark mode toggle...');
    
    const possibleSelectors = [
      '[data-testid="dark-mode-toggle"]',
      '[aria-label*="dark mode" i]',
      '[aria-label*="theme" i]',
      'button[class*="dark" i]',
      'button[class*="theme" i]',
      'button:has(svg)',
      '.toggle',
      '[role="switch"]',
      'button:has([data-icon="sun"])',
      'button:has([data-icon="moon"])',
      'button svg[class*="sun"]',
      'button svg[class*="moon"]',
      'nav button',
      'header button'
    ];

    let toggleButton = null;
    let usedSelector = '';

    for (const selector of possibleSelectors) {
      try {
        const element = page.locator(selector).first();
        if (await element.isVisible()) {
          toggleButton = element;
          usedSelector = selector;
          console.log(`✅ Found toggle button using selector: ${selector}`);
          break;
        }
      } catch (e) {
        // Continue to next selector
      }
    }

    if (!toggleButton) {
      // Get all buttons to help debug
      console.log('🔍 No toggle found with standard selectors. Listing all buttons...');
      const allButtons = await page.locator('button').all();
      console.log(`  Found ${allButtons.length} buttons total`);
      
      for (let i = 0; i < allButtons.length; i++) {
        const button = allButtons[i];
        try {
          const text = await button.textContent();
          const classList = await button.getAttribute('class');
          const ariaLabel = await button.getAttribute('aria-label');
          console.log(`  Button ${i + 1}: text="${text}", class="${classList}", aria-label="${ariaLabel}"`);
        } catch (e) {
          console.log(`  Button ${i + 1}: Could not get details`);
        }
      }
      
      // Try to find any button that might be the toggle
      console.log('🔍 Looking for any button that might contain theme-related content...');
      const buttons = await page.locator('button').all();
      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        try {
          const innerHTML = await button.innerHTML();
          if (innerHTML.includes('sun') || innerHTML.includes('moon') || innerHTML.includes('dark') || innerHTML.includes('theme')) {
            toggleButton = button;
            usedSelector = `button containing theme-related content (button #${i + 1})`;
            console.log(`✅ Found potential toggle button: Button ${i + 1}`);
            console.log(`   Content: ${innerHTML}`);
            break;
          }
        } catch (e) {
          // Continue
        }
      }
    }

    if (!toggleButton) {
      console.log('❌ Could not find dark mode toggle button');
      console.log('   The test will continue to examine the current state but cannot test toggle functionality');
    } else {
      // Click the toggle button
      console.log('🖱️ Clicking dark mode toggle...');
      await toggleButton.click();
      
      // Wait for transition
      await page.waitForTimeout(2000);

      // Take screenshot in dark mode
      console.log('📸 Taking screenshot of dark mode...');
      await page.screenshot({ 
        path: 'dark-mode.png', 
        fullPage: true 
      });
      console.log('✅ Dark mode screenshot saved as dark-mode.png');

      // Check if dark class was added
      console.log('🔍 Checking if dark class was added...');
      const afterBodyClass = await page.getAttribute('body', 'class') || '';
      const afterHtmlClass = await page.getAttribute('html', 'class') || '';
      const afterDocumentElement = await page.evaluate(() => document.documentElement.className);
      
      console.log('  After body class:', afterBodyClass);
      console.log('  After html class:', afterHtmlClass);
      console.log('  After document element class:', afterDocumentElement);

      // Check if any element has 'dark' class
      const hasDarkClass = afterBodyClass.includes('dark') || 
                          afterHtmlClass.includes('dark') || 
                          afterDocumentElement.includes('dark');

      // Get new background colors
      console.log('🎨 Checking background colors after toggle...');
      const afterBodyBg = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
      });
      
      const afterRootBg = await page.evaluate(() => {
        return window.getComputedStyle(document.documentElement).backgroundColor;
      });

      console.log('  After body background:', afterBodyBg);
      console.log('  After root background:', afterRootBg);

      // Check for background color changes
      const backgroundChanged = initialBodyBg !== afterBodyBg || initialRootBg !== afterRootBg;

      // Test toggle back to light mode
      console.log('🖱️ Toggling back to light mode...');
      await toggleButton.click();
      await page.waitForTimeout(2000);

      // Check if we're back to light mode
      const finalDocumentElement = await page.evaluate(() => document.documentElement.className);
      const finalBodyBg = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
      });

      console.log('  Final document element class:', finalDocumentElement);
      console.log('  Final body background:', finalBodyBg);

      // Take final screenshot
      await page.screenshot({ 
        path: 'light-mode-final.png', 
        fullPage: true 
      });

      // Generate report
      console.log('\n' + '='.repeat(50));
      console.log('🎯 DARK MODE TEST REPORT');
      console.log('='.repeat(50));
      console.log(`✅ Website loaded successfully: ${baseURL}`);
      console.log(`✅ Dark mode toggle found using: ${usedSelector}`);
      console.log(`${hasDarkClass ? '✅' : '❌'} Dark class added to DOM: ${hasDarkClass}`);
      console.log(`${backgroundChanged ? '✅' : '❌'} Background colors changed: ${backgroundChanged}`);
      console.log(`📸 Screenshots saved: light-mode.png, dark-mode.png, light-mode-final.png`);
      
      if (hasDarkClass && backgroundChanged) {
        console.log('🎉 RESULT: Dark mode appears to be working correctly!');
      } else {
        console.log('⚠️ RESULT: Dark mode may not be working as expected');
        if (!hasDarkClass) console.log('   - No "dark" class found on document elements');
        if (!backgroundChanged) console.log('   - Background colors did not change');
      }
    }

    // Additional checks for gradients and theme consistency
    console.log('\n' + '='.repeat(50));
    console.log('🎨 ADDITIONAL THEME ANALYSIS');
    console.log('='.repeat(50));
    
    // Check for CSS custom properties that might indicate theming
    const cssVariables = await page.evaluate(() => {
      const styles = window.getComputedStyle(document.documentElement);
      const variables = [];
      for (let i = 0; i < styles.length; i++) {
        const property = styles[i];
        if (property.startsWith('--')) {
          variables.push(`${property}: ${styles.getPropertyValue(property)}`);
        }
      }
      return variables;
    });
    
    if (cssVariables.length > 0) {
      console.log('🎨 CSS Custom Properties found:');
      cssVariables.slice(0, 15).forEach(variable => console.log(`   ${variable}`));
      if (cssVariables.length > 15) {
        console.log(`   ... and ${cssVariables.length - 15} more`);
      }
    } else {
      console.log('No CSS custom properties found');
    }

    // Check for Tailwind dark mode classes
    const tailwindDarkElements = await page.evaluate(() => {
      const allElements = document.querySelectorAll('*');
      const darkClassElements = [];
      allElements.forEach(el => {
        const classList = el.className;
        if (typeof classList === 'string' && classList.includes('dark:')) {
          darkClassElements.push({
            tag: el.tagName,
            classes: classList
          });
        }
      });
      return darkClassElements.slice(0, 10); // Limit to first 10
    });

    if (tailwindDarkElements.length > 0) {
      console.log('🌙 Tailwind dark mode classes found:');
      tailwindDarkElements.forEach(el => {
        console.log(`   ${el.tag}: ${el.classes}`);
      });
    } else {
      console.log('No Tailwind dark mode classes found');
    }

    console.log('\n🏁 Test completed. Browser will remain open for manual inspection.');
    console.log('Press Ctrl+C to close the browser and exit.');

    // Keep browser open for manual inspection
    await new Promise(() => {}); // This will keep the script running

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    await page.screenshot({ path: 'error-screenshot.png', fullPage: true });
    console.log('📸 Error screenshot saved as error-screenshot.png');
  } finally {
    // Browser will be closed by Ctrl+C
  }
}

// Run the test
testDarkMode().catch(console.error);