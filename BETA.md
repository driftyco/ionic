# Ionic Framework v6 Beta

Thanks for your interest in trying out the Framework v6 beta! We are looking for developers to help test our new changes and provide feedback so that we can make Framework v6 the best release yet! Follow this guide to get setup with the beta.

## Installation

We have worked to make the Framework v6 migration as easy as possible, so the upgrade process should be a breeze!

Developers can follow the guide below to begin updating their existing apps to Framework v6. If you want to try out Framework v6 in a new app, you can create a starter application using `ionic start` with the Ionic CLI and then follow the guide below. See https://ionicframework.com/docs/intro/cli for information on how to get started with a new Ionic Framework application.

> Note: Framework v6 is currently in beta, so do not push any apps running v6 to production!

### Ionic Vue

Ionic Vue developers should first begin by upgrading to the latest version of `vue` and `vue-router`. As of Framework v6, `vue@3.0.6+` is required.

```shell
npm install vue@next vue-router@4
```

Ionic Vue users have access to the new Custom Elements build of Framework v6. To make the most out of this improvement, we recommend using Webpack 5. To do this, developers should first install the latest version of the Vue CLI:

```shell
npm install -g @vue/cli@next
```

From there, they can upgrade all Vue CLI plugins which will automatically migrate them to Webpack 5:

```shell
vue upgrade --next
```

The new Vue CLI will automatically generate two different bundles based on your `browserslist` configuration: one for modern browsers and one for legacy browsers. New Ionic Vue starter apps will only generate the bundle for modern browsers, but some older starter apps may need to have their `.browserslistrc` file updated. You can ensure your app only builds for modern browsers by setting `.browserlistrc` to have the following content:

```
> 1%, last 2 versions, not dead, not ie 11
```

From there, developers can install the Framework v6 beta:

```shell
npm install @ionic/vue@next @ionic/vue-router@next
```

Next, developers should review the breaking changes and make any changes necessary in their apps: https://github.com/ionic-team/ionic-framework/blob/next/BREAKING.md

After that, you should be good to go! Check out https://beta.ionicframework.com/docs for the Framework v6 documentation.

### Ionic React

Ionic React developers should first begin by upgrading to the latest version of `react` and `react-dom`. As of Framework v6, `react@17+` is required:

```shell
npm install react@latest react-dom@latest
```

From there, developers can install the Framework v6 beta:

```shell
npm install @ionic/react@next @ionic/react-router@next
```

Next, developers should review the breaking changes and make any changes necessary in their apps: https://github.com/ionic-team/ionic-framework/blob/next/BREAKING.md

After that, you should be good to go! Be sure to review the other breaking changes: https://github.com/ionic-team/ionic-framework/blob/next/BREAKING.md

Check out https://beta.ionicframework.com/docs for the Framework v6 documentation.

### Ionic Angular

Ionic Angular developers should first begin by upgrading to the latest version of Angular. As of Framework v6, Angular 11+ is required.

Please see https://update.angular.io/ for a guide on how to update to the latest version of Angular.

From there, developers can install the Framework v6 beta:

```shell
npm install @ionic/angular@next
```

Next, developers should review the breaking changes and make any changes necessary in their apps: https://github.com/ionic-team/ionic-framework/blob/next/BREAKING.md

After that, you should be good to go! Check out https://beta.ionicframework.com/docs for the Framework v6 documentation.

### Ionic Core

Developers using `@ionic/core` directly should install the Framework v6 beta directly:

```shell
npm install @ionic/core@next
```

If you are using Ionic Framework in a Stencil app, be sure to update to the latest version of Stencil as well:

```shell
npm install @stencil/core@latest
```

Next, developers should review the breaking changes and make any changes necessary in their apps: https://github.com/ionic-team/ionic-framework/blob/next/BREAKING.md

After that, you should be good to go! Check out https://beta.ionicframework.com/docs for the Framework v6 documentation.

## Providing Feedback

Feedback should be provided on our GitHub repo by creating a new issue: https://github.com/ionic-team/ionic-framework/issues/new/choose

Please note in the issue title that you are using the Framework v6 beta!
