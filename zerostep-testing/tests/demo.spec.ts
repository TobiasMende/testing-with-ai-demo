import {test} from "playwright/test";
import {ai} from "@zerostep/playwright";
import {expect} from "@playwright/test";

test('Testimonial slider works', async ({page}) => {
    await page.goto('https://unblocked.engineering/')

    const aiArgs = {page, test}

    await ai('Accept the cookie banner.', aiArgs)
    await ai('Scroll to the Testimonials.', aiArgs)
    const first = await ai('Get the full testimonial text.', aiArgs)
    await ai('Go to the next testimonial.', aiArgs)
    const second = await ai('Get the full testimonial text.', aiArgs)
    expect(first).not.toEqual(second)

    await ai('Go to the previous testimonial.', aiArgs)
    const firstAgain = await ai('Get the full testimonial text.', aiArgs)
    expect(first).toEqual(firstAgain)
})
