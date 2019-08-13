---
title: Compiling Tagged GraphQL Query Literals in TypeScript with Rollup
date: '2019-08-13T20:19:03.284Z'
---

I am currently converting our company's soon-to-be open-source NPM library from
JavaScript to [TypeScript](https://www.typescriptlang.org/); and earlier today,
I got stuck on a roadblock.

I'm using [Rollup](https://rollupjs.org/) and [`rollup-plugin-typescript2`](https://www.npmjs.com/package/rollup-plugin-typescript2)
to compile and bundle the library. Unfortunately, it does not have support for
GraphQL queries tagged by [`graphql-tag`](https://www.npmjs.com/package/graphql-tag).
Worse, since Rollup is a relatively new bundling tool (compared to something like
[Webpack](https://webpack.js.org/)), there's not much information out there on how
to configure it to compile GraphQL tagged literals.

Through hours of digging through Google and library documentation, I found this
package called [`ts-transform-graphql-tag`](https://www.npmjs.com/package/ts-transform-graphql-tag).
There's another problem though, while the package's README, discusses how to
integrate it with Webpack and [Fusebox](https://fuse-box.org/), it doesn't mention
anything about Rollup.

Miraculously, I found a way to make it work. Here's how to do it:

First, install the package:

```bash
npm install ts-transform-graphql-tag --save-dev
```

Then in `rollup.config.js`, add the following:

```javascript
// imports...
import typescript from 'rollup-plugin-typescript2';
import { getTransformer } from 'ts-transform-graphql-tag';

const graphQLTransformer = () => ({
  before: [getTransformer()],
});

export default [
  {
    input: 'src/index.ts',
    // rollup options...
    plugins: [
      // rollup plugins...
      typescript({
        // typescript plugin options...
        transformers: [graphQLTransformer],
      }),
    ],
  },
];
```

That's it! Do take note that at the time of writing
(`rollup-plugin-typescript` v0.22.1), TypeScript transformers are still in
experimental stage. It also requires TypeScript version 2.4.1 and up.
