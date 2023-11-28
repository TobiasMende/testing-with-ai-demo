import {test, expect} from "playwright/test";
import {auto} from "auto-playwright";

test('Testimonial slider works', async ({page}) => {
    await page.goto('https://unblocked.engineering/')

    const aiArgs = {page, test}

    await auto('Accept the cookie banner..', aiArgs)
    await auto('Scroll to the Testimonials.', aiArgs)
    const first = await auto('Get the full testimonial text.', aiArgs)
    await auto('Go to the next testimonial.', aiArgs,)
    const second = await auto('Get the full testimonial text.', aiArgs)
    expect(first).not.toEqual(second)

    await auto('Go to the previous testimonial.', aiArgs)
    const firstAgain = await auto('Get the full testimonial text.', aiArgs)
    expect(first).toEqual(firstAgain)
})
