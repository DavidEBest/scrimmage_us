import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test.describe('Dark Mode Functionality Test', () => {
  let browser, page, context;
  const baseURL = 'http://localhost:5174/';
  
  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    
    // Listen for console messages and errors
    page.on('console', msg => {
      console.log(`CONSOLE ${msg.type()}: ${msg.text()}`);
    });
    
    page.on('pageerror', error => {
      console.log(`PAGE ERROR: ${error.message}`);
    });
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('Dark mode toggle functionality', async () => {
    console.log('🌐 Opening the website...');
    
    try {
      await page.goto(baseURL, { waitUntil: 'networkidle' });
      console.log('✅ Successfully loaded the website');
    } catch (error) {
      console.log('❌ Failed to load website:', error.message);
      throw error;
    }

    // Take initial screenshot in light mode
    console.log('📸 Taking screenshot of light mode...');
    await page.screenshot({ 
      path: 'light-mode.png', 
      fullPage: true 
    });
    console.log('✅ Light mode screenshot saved as light-mode.png');

    // Check initial state - should be light mode
    console.log('🔍 Checking initial document class...');
    const initialBodyClass = await page.getAttribute('body', 'class');
    const initialHtmlClass = await page.getAttribute('html', 'class');
    const initialDocumentElement = await page.evaluate(() => document.documentElement.className);
    
    console.log('Initial body class:', initialBodyClass);
    console.log('Initial html class:', initialHtmlClass);
    console.log('Initial document element class:', initialDocumentElement);

    // Look for dark mode toggle - try multiple possible selectors
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
        const element = await page.locator(selector).first();
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
      console.log(`Found ${allButtons.length} buttons total`);
      
      for (let i = 0; i < allButtons.length; i++) {
        const button = allButtons[i];
        const text = await button.textContent();
        const classList = await button.getAttribute('class');
        const ariaLabel = await button.getAttribute('aria-label');
        console.log(`Button ${i + 1}: text="${text}", class="${classList}", aria-label="${ariaLabel}"`);
      }
      
      throw new Error('❌ Could not find dark mode toggle button');
    }

    // Get initial background colors
    console.log('🎨 Checking initial background colors...');
    const initialBodyBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    
    const initialRootBg = await page.evaluate(() => {
      return window.getComputedStyle(document.documentElement).backgroundColor;
    });

    console.log('Initial body background:', initialBodyBg);
    console.log('Initial root background:', initialRootBg);

    // Click the toggle button
    console.log('🖱️ Clicking dark mode toggle...');
    await toggleButton.click();
    
    // Wait a moment for the transition
    await page.waitForTimeout(1000);

    // Take screenshot in dark mode
    console.log('📸 Taking screenshot of dark mode...');
    await page.screenshot({ 
      path: 'dark-mode.png', 
      fullPage: true 
    });
    console.log('✅ Dark mode screenshot saved as dark-mode.png');

    // Check if dark class was added
    console.log('🔍 Checking if dark class was added...');
    const afterBodyClass = await page.getAttribute('body', 'class');
    const afterHtmlClass = await page.getAttribute('html', 'class');
    const afterDocumentElement = await page.evaluate(() => document.documentElement.className);
    
    console.log('After body class:', afterBodyClass);
    console.log('After html class:', afterHtmlClass);
    console.log('After document element class:', afterDocumentElement);

    // Check if any element has 'dark' class
    const hasDarkClass = afterBodyClass?.includes('dark') || 
                        afterHtmlClass?.includes('dark') || 
                        afterDocumentElement?.includes('dark');

    // Get new background colors
    console.log('🎨 Checking background colors after toggle...');
    const afterBodyBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    
    const afterRootBg = await page.evaluate(() => {
      return window.getComputedStyle(document.documentElement).backgroundColor;
    });

    console.log('After body background:', afterBodyBg);
    console.log('After root background:', afterRootBg);

    // Check for background color changes
    const backgroundChanged = initialBodyBg !== afterBodyBg || initialRootBg !== afterRootBg;

    // Test toggle back to light mode
    console.log('🖱️ Toggling back to light mode...');
    await toggleButton.click();
    await page.waitForTimeout(1000);

    // Check if we're back to light mode
    const finalDocumentElement = await page.evaluate(() => document.documentElement.className);
    const finalBodyBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });

    console.log('Final document element class:', finalDocumentElement);
    console.log('Final body background:', finalBodyBg);

    // Take final screenshot
    await page.screenshot({ 
      path: 'light-mode-final.png', 
      fullPage: true 
    });

    // Generate report
    console.log('\n=== DARK MODE TEST REPORT ===');
    console.log(`✅ Website loaded successfully: ${baseURL}`);
    console.log(`✅ Dark mode toggle found using: ${usedSelector}`);
    console.log(`${hasDarkClass ? '✅' : '❌'} Dark class added to DOM: ${hasDarkClass}`);
    console.log(`${backgroundChanged ? '✅' : '❌'} Background colors changed: ${backgroundChanged}`);
    console.log(`📸 Screenshots saved: light-mode.png, dark-mode.png, light-mode-final.png`);
    
    if (hasDarkClass && backgroundChanged) {
      console.log('🎉 Dark mode appears to be working correctly!');
    } else {
      console.log('⚠️ Dark mode may not be working as expected');
      if (!hasDarkClass) console.log('   - No "dark" class found on document elements');
      if (!backgroundChanged) console.log('   - Background colors did not change');
    }

    // Additional checks for gradients and theme consistency
    console.log('\n=== ADDITIONAL THEME CHECKS ===');
    
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
      cssVariables.slice(0, 10).forEach(variable => console.log(`   ${variable}`));
      if (cssVariables.length > 10) {
        console.log(`   ... and ${cssVariables.length - 10} more`);
      }
    }
  });
});

// Export for standalone running
export default test;