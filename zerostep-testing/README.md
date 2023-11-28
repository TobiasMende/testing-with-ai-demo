# Testing with ZeroStep
- Create a [ZeroStep](https://zerostep.com/) account
- `npm i`
- `export ZEROSTEP_TOKEN=<your token>`
- `npm run test`

## Considerations

- Keep in mind that ZeroStep is a paid service. The free tier allows up to 1,000 `ai`calls per month.
- Calling `ai` is much slower than executing native Playwright calls.
- I am using `ai` for almost everything in this example for demonstration purposes. In a real-world scenario, you would
  only use `ai` for the most complex scenarios.