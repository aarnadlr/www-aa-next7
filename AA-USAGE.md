❌❌❌❌❌❌❌❌ Now NOT working! Use Netlify instructions below:

This app is configured to deploy a STATIC build, not node.

To change to a NODE build, you will need to adjust the
`package.json`
and the
`next.config.js`

using the information here:
`https://zeit.co/examples/nextjs/`



✅✅✅✅👇👇👇👇

DEPLOY with NETLIFY (STATIC)(Which should be fine):

1. export static build (netlify is static only):
  `npm run export`


2. Netlify CLI:
  `netlify deploy`
  (👆👆👆 Will give you a "Draft URL" to check if it looks good)

3. CLI will ask you for a path. Give it:
  `./out`


4. Netlify CLI:
  `netlify deploy --prod`
  (👆👆👆 Will give you a "Draft URL" to check if it looks good)
