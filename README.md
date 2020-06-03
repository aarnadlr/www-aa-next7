
# www-aa-next7

## Run app in development:

```bash
npm run dev
```


---
---
---
---
---
---
---
---


Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Run production build with:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## The idea behind the example

This example features:

* An app with next-sass

This example uses next-sass without css-modules. The config can be found in `next.config.js`, change `withSass()` to `withSass({cssModules: true})` if you use css-modules. Then in the code, you import the stylesheet as `import style '../styles/style.scss'` and use it like `<div className={style.example}>`.

[Learn more](https://github.com/zeit/next-plugins/tree/master/packages/next-sass)
