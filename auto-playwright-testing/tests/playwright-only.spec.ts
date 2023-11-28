import {test, expect} from '@playwright/test';

test('Testimonial slider works without AI', async ({page}) => {
    await page.goto('https://unblocked.engineering/');
    await page.getByRole('button', {name: 'Accept all'}).click();

    const first = await page.locator('div:nth-child(2) > .elementor-testimonial > .elementor-testimonial__content').innerText()

    await page.getByLabel('Next slide').click();
    const second = await page.locator('div:nth-child(3) > .elementor-testimonial > .elementor-testimonial__content').innerText();
    expect(first).not.toEqual(second);

    await page.getByLabel('Previous slide').click();
    const firstAgain = await page.locator('div:nth-child(2) > .elementor-testimonial > .elementor-testimonial__content').innerText();

    expect(first).toEqual(firstAgain);
});