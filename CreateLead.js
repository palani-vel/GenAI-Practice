const { test, expect } = require('@playwright/test');

test('Create Lead - Playwright JavaScript', async ({ page }) => {
  // Navigate to the application
  await page.goto('http://leaftaps.com/opentaps');
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Login
  await page.fill('#username', 'DemoSalesManager');
  await page.fill('#password', 'crmsfa');
  await page.click('.decorativeSubmit');

  // Print page title after login
  console.log(await page.title());

  // Navigate to CRM/SFA
  await page.click('text=CRM/SFA');

  // Click on Create Lead
  await page.click('text=Create Lead');

  // Fill the Create Lead form
  await page.fill('#createLeadForm_companyName', 'TestLeaf');
  await page.fill('#createLeadForm_firstName', 'Palanivel');
  await page.fill('#createLeadForm_lastName', 'Palaniyappan');

  // Select dropdown options
  await page.selectOption('#createLeadForm_dataSourceId', { label: 'Employee' });
  await page.selectOption('#createLeadForm_marketingCampaignId', { value: '9001' });

  // Submit the form
  await page.click('[name="submitButton"]');

  // Print title after submission
  console.log(await page.title());
});
