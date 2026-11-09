const { test, expect } = require('@playwright/test');

test.describe('edit-chart', () => {
  test('displays saved text without allowing editing in analysis mode', async ({ page }) => {
    await page.goto('/render?fixture=hello.fix.js');
    const input = page.getByRole('textbox', { name: 'Text' });
    await expect(input).toHaveValue('Sample text');
    await expect(input).toHaveAttribute('readonly', '');
    await expect(input).toHaveAttribute('tabindex', '-1');
  });
});
