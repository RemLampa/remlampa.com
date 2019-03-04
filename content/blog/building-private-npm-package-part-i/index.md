---
title: Building a Private NPM Package Part I (Local Development)
date: "2019-03-04T14:20:03.284Z"


---

There will come a point when there's a piece of JavaScript code that you wrote that often gets used in your projects, and you end up copying and pasting it across all projects that need it.

If you've experienced this, I've come to tell you that there is definitely a better way of sharing pieces of JavaScript code between your projects: create a local NPM package!

### TL;DR

The code for the NPM package is available at https://github.com/RemLampa/npm-package-tutorial.

For a sample of how to import it into a local project: https://github.com/RemLampa/npm-package-demo.

### First Things First

For the sake of clarity, let me just define a few terms that I'll use for the remainder of this article:

* `npm package` - A library/framework/piece of code that can be shared among any number of JavaScript projects. I will also refer to it as simply `package`.
* `project` - Any code that reuses a `package`.

I don't know if this matters, but I'm running Node v.10.15.0 at the time of this writing. So if you run into bugs, you might want to look into that.

### Setting Up

Create two folders, one for the package and another for a sample project that will install and demo the package, and run `npm init` on both of them. Name the package and project folders as `npm-package-tutorial` and `npm-package-demo`, respectively. Optionally, you may also run `git init` to create repositories for each folder.

Go to the package directory and create a folder named `src`, and inside it create a file named `index.js`.

Go to the project directory and create a file named `index.js` at the root.

### Writing the Package Code

For this tutorial, we will not do anything wild. The package will just be a simple Node script that will print a short message on the console.

Add the following into `npm-package-tutorial/src/index.js`:

```javascript
function printFromPackage() {
    console.log('Hello from package');
}

module.exports = printFromPackage;
```

### Making the Package Available to Local Projects

If you're a masochist like me, you'd probably import the package into `npm-package-demo/index.js` relatively:

```javascript
const printFromPackage = require('../npm-package-tutorial/src');
```

That's well and good, but what if the file you want the package to import into is several folders deep inside your OS file system? You may end up with the "Dot-Dot Hell":

```javascript
const printFromPackage = require('../../../../../../../../Documents/projects/npm-package-tutorial/src');
```

Looks awful, doesn't it?

Luckily, NPM (and Yarn) has a utility that allows absolute imports for local packages: **Package Linking**!

I'll take a gradual approach in developing the package, hoping that it'll be easy for beginners to follow.

First, let's edit `npm-package-demo/index.js`:

```javascript
const printFromPackage = require('npm-package-tutorial');

printFromPackage();
```

Let's run the demo:

```bash
$ cd /path/to/npm-package-demo
$ node index.js
```

We'll be encountering an error similar to this:

```bash
internal/modules/cjs/loader.js:583
    throw err;
    ^

Error: Cannot find module 'npm-package-tutorial'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)
```

This is expected since there is no package named `npm-package-tutorial` installed in the project yet.

Let's do that. Open up `npm-package-demo/package.json` and add this under dependencies:

```json
  "dependencies": {
    "npm-package-tutorial": ""
  }
```

Then let's install it:

```bash
$ npm install
```

Again, we are met with another error:

```bash
npm ERR! code E404
npm ERR! 404 Not Found - GET https://registry.npmjs.org/npm-package-tutorial - Not found
npm ERR! 404
npm ERR! 404  'npm-package-tutorial@latest' is not in the npm registry.
npm ERR! 404 Your package name is not valid, because
npm ERR! 404  1. name can only contain URL-friendly characters
npm ERR! 404 It was specified as a dependency of 'npm-package-demo'
npm ERR! 404
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url.

npm ERR! A complete log of this run can be found in:
npm ERR!     /some-folder-in-your-filesystem/.npm/_logs/2019-03-04T05_24_10_963Z-debug.log
```

By default, NPM will try to download the package from its online registry (https://registry.npmjs.org).

We will have to tell NPM to find the package from our local environment on our development machine instead. We do this by first calling `npm link` inside our package directory:

```bash
$ cd /path/to/npm-package-tutorial
$ npm link
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN npm-package-tutorial@1.0.0 No description

up to date in 1.148s
found 0 vulnerabilities

/path/to/lib/node_modules/npm-package-tutorial -> /path/to/npm-package-tutorial
```

`npm link` just created a global link (or symlink) and made it available in our development environment and named it according to the `name` property provided in the package's `package.json` (not the name of the current directory).

So if we run `npm install` again inside our project directory, it will now recognize our local package, right? Not quite.

We still need to explicitly tell NPM that our project should search for `npm-package-tutorial` from our local "registry", again using `npm link` but this time, providing the name of the linked package:

```bash
$ cd /path/to/npm-package-demo
$ npm link npm-package-tutorial
/path/to/npm-package-demo/node_modules/npm-package-tutorial -> /path/to/lib/node_modules/npm-package-tutorial -> /path/to/npm-package-tutorial
```

Compare the paths from the ones we got from the link we did inside `npm-package-tutorial`. Notice any similarities?

Ok, so now we can run `npm install` and everything will finally be well and good, right? Try it.

Surprise! You're met with the same error!

Don't worry. I'm not playing with you. Let me explain later.

Let's try running the project demo again:

```bash
$ node index.js
internal/modules/cjs/loader.js:583
    throw err;
    ^

Error: Cannot find module 'npm-package-tutorial'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)
```

"It's the same error, Rem! You're playing us!" No, no, put down your pitchforks, please! There's only one more step we're missing here, I promise. :sweat_smile:

Open up `npm-package-tutorial/package.json` and point the `main` property to `src/index.js` file that we created earlier:

```json
  "main": "src/index.js",
```

Now run the project demo one last time:

```bash
$ node index.js
Hello from package
```

:tada: :tada: :tada: **TADAAAAAAAA!** :tada: :tada: :tada:

`npm link` tells NPM that when it encounters any require (or import) of a package named `npm-package-tutorial` in the project's code, it should use the global symlink we created earlier. Actually, we never really needed to add an `dependencies` entry inside the project's `package.json` file (nor run `npm install`). The magic of `npm link` takes care of everything.

(But you might wanna keep the package as a dependency in the project's `package.json` so that your linter won't be complaining on you. Besides, we will be needing it in Part II.)

### Next Steps

Any change that you make inside your package directory will reflect on any project that uses it. The sky is the limit for you now. You can create complex packages like distributable React components and reuse them in your projects.

On the second of this three-part series, I will discuss how to share our package by letting other people install it from a remote Git repository.

Thanks for reading!