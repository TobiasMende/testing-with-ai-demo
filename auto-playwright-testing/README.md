# Testing with [auto-playwright](https://github.com/lucgagan/auto-playwright) (not working!)
- Create an [OpenAI Developer Account](https://platform.openai.com)
- `npm i`
- `export ZEROSTEP_TOKEN=<your token>`
- `npm run test`

## Considerations
- Calling `auto` is much slower than executing native Playwright calls.
- Calling `auto` might yield different actions with every call.'
- I am using `auto` for almost everything in this example for demonstration purposes. In a real-world scenario, you would
  only use `auto` for the most complex scenarios.