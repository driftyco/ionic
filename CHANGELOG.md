# [6.0.0-beta.1](https://github.com/ionic-team/ionic/compare/v6.0.0-beta.0...v6.0.0-beta.1) (2021-07-01)


### Bug Fixes

* **accordion:** improved reliability of accordion animations ([#23531](https://github.com/ionic-team/ionic/issues/23531)) ([6fbd60b](https://github.com/ionic-team/ionic/commit/6fbd60b0df56dc927226474a1ffa322d979c563e)), closes [#23504](https://github.com/ionic-team/ionic/issues/23504)
* **content:** add touch-action manipulation for zoom and pan ([#23534](https://github.com/ionic-team/ionic/issues/23534)) ([6ca1780](https://github.com/ionic-team/ionic/commit/6ca17805b8b1ea38d7fc16d091324da16a4193c6)), closes [#22805](https://github.com/ionic-team/ionic/issues/22805)
* **datetime:** scroll position no longer gets reset when using datetime in overlay ([#23543](https://github.com/ionic-team/ionic/issues/23543)) ([b735b58](https://github.com/ionic-team/ionic/commit/b735b587cda777ac481bb580c883d9734145f31e))
* **input, select, textarea:** change type of placeholder prop to string only ([#23500](https://github.com/ionic-team/ionic/issues/23500)) ([f3ae431](https://github.com/ionic-team/ionic/commit/f3ae4319bb64debab304973856a33e422ac910a1)), closes [#22976](https://github.com/ionic-team/ionic/issues/22976)
* **popover:** size property now works when providing only event ([#23532](https://github.com/ionic-team/ionic/issues/23532)) ([bdc1f23](https://github.com/ionic-team/ionic/commit/bdc1f2360d7795472cc242a86eb4376d05fa0bb7)), closes [#23528](https://github.com/ionic-team/ionic/issues/23528)
* **popover:** update animation to better match MD spec ([#23541](https://github.com/ionic-team/ionic/issues/23541)) ([bdb95b7](https://github.com/ionic-team/ionic/commit/bdb95b7b6dd798cbc6d1786ae54fa95ac1dfd096))
* **react:** export accordion and accordion group components ([#23497](https://github.com/ionic-team/ionic/issues/23497)) ([a664d42](https://github.com/ionic-team/ionic/commit/a664d4268dea8e84ab9e3b150043ac8f87fb53c7))
* **vue:** navigating between parameterized pages now results in page transition ([#23525](https://github.com/ionic-team/ionic/issues/23525)) ([e30b17c](https://github.com/ionic-team/ionic/commit/e30b17c5bbd1af6936a8d7a98d1f7a115073e029)), closes [#22662](https://github.com/ionic-team/ionic/issues/22662)


### Features

* **accordion-group:** add animated property to disable animations ([#23530](https://github.com/ionic-team/ionic/issues/23530)) ([9a60dd0](https://github.com/ionic-team/ionic/commit/9a60dd0ea7c55acf0fdd1161433e5b4ed40778f2))
* **action-sheet, alert:** add id to AlertButton and ActionSheetButton ([#18992](https://github.com/ionic-team/ionic/issues/18992)) ([9e24a0b](https://github.com/ionic-team/ionic/commit/9e24a0b49357a3a39ca89f026ff23271a365d935)), closes [#22959](https://github.com/ionic-team/ionic/issues/22959)
* **vue:** extend useIonRouter hook for programmatic navigation with animation control  ([#23499](https://github.com/ionic-team/ionic/issues/23499)) ([fc9e1b4](https://github.com/ionic-team/ionic/commit/fc9e1b4b361938e5644683c395a565be2de1eab9)), closes [#23450](https://github.com/ionic-team/ionic/issues/23450)


### BREAKING CHANGES

> We recommend updating to the latest version of 5.x before trying out version 6 in order to see deprecation warnings related to your app in the developer console.

* **input, select, textarea:** Updated the `placeholder` property on `ion-input`, `ion-textarea`, and `ion-select` to have a type of `string | undefined`.
* **vue:** The `IonRouter` type for `useIonRouter` has been renamed to `UseIonRouterResult`, and the `IonKeyboardRef` type for `useKeyboard` has been renamed to `UseKeyboardResult`.

Please see the [BREAKING.md](./BREAKING.md#version-6x) file for a complete list of breaking changes in Framework v6.

Looking to test out the Framework v6 beta? Check out our [v6 Beta Getting Started Guide](./BETA.md).



# [6.0.0-beta.0](https://github.com/ionic-team/ionic/compare/v5.6.10...v6.0.0-beta.0) (2021-06-23)


### Bug Fixes

* **accordion:** toggle icon now shows up in vue and react ([#23426](https://github.com/ionic-team/ionic/issues/23426)) ([c716617](https://github.com/ionic-team/ionic/commit/c7166179457a8e2c7e1702c5761bc6368dbd156f))
* **datetime:** changing time emits ionChange ([#23463](https://github.com/ionic-team/ionic/issues/23463)) ([b0cce36](https://github.com/ionic-team/ionic/commit/b0cce360c83ac564e053523cc31b32d1deaeda0c))
* **modal:** add additional padding to toolbars in iOS modal ([#23262](https://github.com/ionic-team/ionic/issues/23262)) ([a037b65](https://github.com/ionic-team/ionic/commit/a037b65aad5cfc0477322a8f36105b9009366ec2)), closes [#22778](https://github.com/ionic-team/ionic/issues/22778)
* **modal:** border radius is correctly set on card style modal ([#23461](https://github.com/ionic-team/ionic/issues/23461)) ([bccb8ad](https://github.com/ionic-team/ionic/commit/bccb8ad5fb5ec7f98a6cbfa62a403ecaca7fbdb6))
* **modal, popover:** overlays now automatically determine if they are inline ([#23434](https://github.com/ionic-team/ionic/issues/23434)) ([8dbe8ba](https://github.com/ionic-team/ionic/commit/8dbe8ba7bc26792c5024f81cf4752f5b78317492))
* **popover:** shadow parts now correctly added ([#23446](https://github.com/ionic-team/ionic/issues/23446)) ([e1a9613](https://github.com/ionic-team/ionic/commit/e1a96130ebab1e481e880f0f3876f421976f08d5))
* **popover:** update prop defaults, use correct delegate ([#23340](https://github.com/ionic-team/ionic/issues/23340)) ([960778a](https://github.com/ionic-team/ionic/commit/960778a36f6eb6318cc740c4f7a255107723b8fd))
* **searchbar:** showClearButton now defaults to 'always' for improved usability with screen readers ([#23475](https://github.com/ionic-team/ionic/issues/23475)) ([80f181d](https://github.com/ionic-team/ionic/commit/80f181d4846507ee6bd4150bb568fca9b6660428))
* **vue:** ensure webpack does not eliminate core css ([#23465](https://github.com/ionic-team/ionic/issues/23465)) ([ee3a00f](https://github.com/ionic-team/ionic/commit/ee3a00fde61b4d1d3168d34b3d23bb97dd154154))


### Code Refactoring

* **all:** update required browser, framework, and mobile platform versions for v6 ([#23443](https://github.com/ionic-team/ionic/issues/23443)) ([c842dd8](https://github.com/ionic-team/ionic/commit/c842dd88c98888b2afab08ac5e8bc57c2a4c2fbd))
* **angular:** remove Config.set() method ([#22918](https://github.com/ionic-team/ionic/issues/22918)) ([9e05891](https://github.com/ionic-team/ionic/commit/9e0589173607b3c0eff7794079123354c2eeaa1a))
* **header:** removed border from last toolbar when using collapsible large title ([#22891](https://github.com/ionic-team/ionic/issues/22891)) ([c72bc5d](https://github.com/ionic-team/ionic/commit/c72bc5dbd76cd3ce622a4b3cedcb7446a2819384)), closes [#22777](https://github.com/ionic-team/ionic/issues/22777)
* **ios:** update toolbar and tabbar default background colors ([#22852](https://github.com/ionic-team/ionic/issues/22852)) ([3d615cb](https://github.com/ionic-team/ionic/commit/3d615cb3c7b233b08b9da6ac04096e16bbb60bfc)), closes [#22780](https://github.com/ionic-team/ionic/issues/22780)
* **toast:** whitespace variable now defaults to normal ([#22866](https://github.com/ionic-team/ionic/issues/22866)) ([9b78689](https://github.com/ionic-team/ionic/commit/9b786899e550c391b9395c669f9bba8f39ac98aa))
* **vue:** drop support for "on" prefixed overlay events and bump minimum required version of vue to 3.0.6 ([#23229](https://github.com/ionic-team/ionic/issues/23229)) ([6fcb3a6](https://github.com/ionic-team/ionic/commit/6fcb3a62b1b12c5ded11179e83854592d4309bdf))
* **vue:** remove support for child routes nested inside of tabs ([#22919](https://github.com/ionic-team/ionic/issues/22919)) ([75458ac](https://github.com/ionic-team/ionic/commit/75458ac7fb95f56a6ec460f85cf7d7720ce0c070))


### Features

* **accordion:** add accordion and accordion-group components ([#22865](https://github.com/ionic-team/ionic/issues/22865)) ([073883a](https://github.com/ionic-team/ionic/commit/073883a0987149e9f6258ca43c46f5ed4bce0dc5)), closes [#17094](https://github.com/ionic-team/ionic/issues/17094)
* **breadcrumbs:** add breadcrumbs component ([#22701](https://github.com/ionic-team/ionic/issues/22701)) ([2f6b1e4](https://github.com/ionic-team/ionic/commit/2f6b1e4eea307c6f14345704e5824378ef079acb)), closes [#22770](https://github.com/ionic-team/ionic/issues/22770)
* **datetime:** add calendar picker ([#23416](https://github.com/ionic-team/ionic/issues/23416)) ([932d3ca](https://github.com/ionic-team/ionic/commit/932d3ca62f3e3ef08acb065ce6ec46faa3811f96)), closes [#19423](https://github.com/ionic-team/ionic/issues/19423)
* **item:** add helper text, error text, counter, shape, and fill mode ([#23354](https://github.com/ionic-team/ionic/issues/23354)) ([faefe97](https://github.com/ionic-team/ionic/commit/faefe97da6a9d5beff1183d10efd0df9c4e3ebd7)), closes [#19619](https://github.com/ionic-team/ionic/issues/19619)
* **modal:** modals can now be used inline ([#23341](https://github.com/ionic-team/ionic/issues/23341)) ([3be1c3d](https://github.com/ionic-team/ionic/commit/3be1c3dcd73e6039a89b19b409e63877cda37f6e)), closes [#20117](https://github.com/ionic-team/ionic/issues/20117) [#20263](https://github.com/ionic-team/ionic/issues/20263)
* **popover:** account for ionShadowTarget elements ([#23436](https://github.com/ionic-team/ionic/issues/23436)) ([0e38d42](https://github.com/ionic-team/ionic/commit/0e38d4276110dcd94db5adc3b6aee3b5b0befc5c))
* **popover:** add desktop support ([#23258](https://github.com/ionic-team/ionic/issues/23258)) ([a67a0fa](https://github.com/ionic-team/ionic/commit/a67a0fabb8249685bbe93ed862839e2b2e76cd5a)), closes [#21599](https://github.com/ionic-team/ionic/issues/21599)
* **popover:** popover can now be used inline ([#23231](https://github.com/ionic-team/ionic/issues/23231)) ([308fa1c](https://github.com/ionic-team/ionic/commit/308fa1c0dd054cfc2ea54d2edc99e7a4b549f6f0))
* **slides:** add IonicSwiper modules, deprecate ion-slides, and add link to migration ([#23447](https://github.com/ionic-team/ionic/issues/23447)) ([623c84a](https://github.com/ionic-team/ionic/commit/623c84ab082668a996c654e18ffc9768f68b85dd))
* **spinner:** add lines-sharp, lines-sharp-small, update styles for ios 14 ([#22397](https://github.com/ionic-team/ionic/issues/22397)) ([2a5b272](https://github.com/ionic-team/ionic/commit/2a5b272a329bbad1ca07705f84f0fd06e3ef32ad))
* **vue:** add custom elements bundle ([#23458](https://github.com/ionic-team/ionic/issues/23458)) ([dc48a9f](https://github.com/ionic-team/ionic/commit/dc48a9f1a2dff8a2d644112bbe1df8b0b6811848))


### BREAKING CHANGES

* **searchbar:** The `showClearButton` property on `ion-searchbar` now defaults to `'always'`.
* **datetime:** The `ion-datetime` component has been revamped to use a new calendar style. As a result, some APIs have been removed. See https://github.com/ionic-team/ionic-framework/blob/master/BREAKING.md for more details.
* **all:** Browser, JS Framework, and mobile platform minimum required versions have been updated.
* **popover:** Converted `ion-popover` to use the Shadow DOM.
* **vue:** - Dropped support for prefixed overlay events in favor of non prefixed events (I.e. `@onDidDismiss` becomes `@didDismiss`).
- Minimum required version of Vue is now Vue v3.0.6 or newer.
* **vue:** Support for child routes nested inside of tabs has been removed to better conform to Vue Router's best practices. Additional routes should be written as sibling routes with the parent tab as the path prefix.
* **angular:** The `Config.set()` method has been removed. See https://ionicframework.com/docs/angular/config for examples on how to set config globally, per-component, and per-platform.
* **ios:** The tab bar and toolbar default background colors have been updated to better reflect the latest iOS styles.
* **header:** The last toolbar in the header with a collapsible large title no longer has a border.
* **toast:** The `--white-space` CSS Variable now defaults to `normal`.



## [5.6.11](https://github.com/ionic-team/ionic/compare/v5.6.10...v5.6.11) (2021-07-01)

### Bug Fixes

* **animation:** typescript interface has correct return value for progress methods ([#23536](https://github.com/ionic-team/ionic/issues/23536)) ([f3d6abb](https://github.com/ionic-team/ionic/commit/f3d6abbc1beeafe3b5e7f473d70d0b8ef4c79bc8))
* **ios, md:** double tapping back button no longer causes app to go back 2 pages ([#23526](https://github.com/ionic-team/ionic/issues/23526)) ([69be51d](https://github.com/ionic-team/ionic/commit/69be51dc54e670b2f75cbfac28a4a09517dbf355)), closes [#18455](https://github.com/ionic-team/ionic/issues/18455)



# [6.0.0-beta.0](https://github.com/ionic-team/ionic/compare/v5.6.10...v6.0.0-beta.0) (2021-06-23)

### Bug Fixes

* **modal:** add additional padding to toolbars in iOS modal ([#23262](https://github.com/ionic-team/ionic/issues/23262)) ([a037b65](https://github.com/ionic-team/ionic/commit/a037b65aad5cfc0477322a8f36105b9009366ec2)), closes [#22778](https://github.com/ionic-team/ionic/issues/22778)
* **searchbar:** showClearButton now defaults to 'always' for improved usability with screen readers ([#23475](https://github.com/ionic-team/ionic/issues/23475)) ([80f181d](https://github.com/ionic-team/ionic/commit/80f181d4846507ee6bd4150bb568fca9b6660428))
* **toast:** whitespace variable now defaults to normal ([#22866](https://github.com/ionic-team/ionic/issues/22866)) ([9b78689](https://github.com/ionic-team/ionic/commit/9b786899e550c391b9395c669f9bba8f39ac98aa))
* **header:** removed border from last toolbar when using collapsible large title ([#22891](https://github.com/ionic-team/ionic/issues/22891)) ([c72bc5d](https://github.com/ionic-team/ionic/commit/c72bc5dbd76cd3ce622a4b3cedcb7446a2819384)), closes [#22777](https://github.com/ionic-team/ionic/issues/22777)
* **ios:** update toolbar and tabbar default background colors ([#22852](https://github.com/ionic-team/ionic/issues/22852)) ([3d615cb](https://github.com/ionic-team/ionic/commit/3d615cb3c7b233b08b9da6ac04096e16bbb60bfc)), closes [#22780](https://github.com/ionic-team/ionic/issues/22780)

### Code Refactoring

* **all:** update required browser, framework, and mobile platform versions for v6 ([#23443](https://github.com/ionic-team/ionic/issues/23443)) ([c842dd8](https://github.com/ionic-team/ionic/commit/c842dd88c98888b2afab08ac5e8bc57c2a4c2fbd))
* **angular:** remove Config.set() method ([#22918](https://github.com/ionic-team/ionic/issues/22918)) ([9e05891](https://github.com/ionic-team/ionic/commit/9e0589173607b3c0eff7794079123354c2eeaa1a))
* **vue:** drop support for "on" prefixed overlay events and bump minimum required version of vue to 3.0.6 ([#23229](https://github.com/ionic-team/ionic/issues/23229)) ([6fcb3a6](https://github.com/ionic-team/ionic/commit/6fcb3a62b1b12c5ded11179e83854592d4309bdf))
* **vue:** remove support for child routes nested inside of tabs ([#22919](https://github.com/ionic-team/ionic/issues/22919)) ([75458ac](https://github.com/ionic-team/ionic/commit/75458ac7fb95f56a6ec460f85cf7d7720ce0c070))


### Features

* **accordion:** add accordion and accordion-group components ([#22865](https://github.com/ionic-team/ionic/issues/22865)) ([073883a](https://github.com/ionic-team/ionic/commit/073883a0987149e9f6258ca43c46f5ed4bce0dc5)), closes [#17094](https://github.com/ionic-team/ionic/issues/17094)
* **breadcrumbs:** add breadcrumbs component ([#22701](https://github.com/ionic-team/ionic/issues/22701)) ([2f6b1e4](https://github.com/ionic-team/ionic/commit/2f6b1e4eea307c6f14345704e5824378ef079acb)), closes [#22770](https://github.com/ionic-team/ionic/issues/22770)
* **datetime:** add calendar picker ([#23416](https://github.com/ionic-team/ionic/issues/23416)) ([932d3ca](https://github.com/ionic-team/ionic/commit/932d3ca62f3e3ef08acb065ce6ec46faa3811f96)), closes [#19423](https://github.com/ionic-team/ionic/issues/19423)
* **item:** add helper text, error text, counter, shape, and fill mode ([#23354](https://github.com/ionic-team/ionic/issues/23354)) ([faefe97](https://github.com/ionic-team/ionic/commit/faefe97da6a9d5beff1183d10efd0df9c4e3ebd7)), closes [#19619](https://github.com/ionic-team/ionic/issues/19619)
* **modal:** modals can now be used inline ([#23341](https://github.com/ionic-team/ionic/issues/23341)) ([3be1c3d](https://github.com/ionic-team/ionic/commit/3be1c3dcd73e6039a89b19b409e63877cda37f6e)), closes [#20117](https://github.com/ionic-team/ionic/issues/20117) [#20263](https://github.com/ionic-team/ionic/issues/20263)
* **popover:** add desktop support ([#23258](https://github.com/ionic-team/ionic/issues/23258)) ([a67a0fa](https://github.com/ionic-team/ionic/commit/a67a0fabb8249685bbe93ed862839e2b2e76cd5a)), closes [#21599](https://github.com/ionic-team/ionic/issues/21599)
* **popover:** popover can now be used inline ([#23231](https://github.com/ionic-team/ionic/issues/23231)) ([308fa1c](https://github.com/ionic-team/ionic/commit/308fa1c0dd054cfc2ea54d2edc99e7a4b549f6f0))
* **slides:** add IonicSwiper modules, deprecate ion-slides, and add link to migration ([#23447](https://github.com/ionic-team/ionic/issues/23447)) ([623c84a](https://github.com/ionic-team/ionic/commit/623c84ab082668a996c654e18ffc9768f68b85dd))
* **spinner:** add lines-sharp, lines-sharp-small, update styles for ios ([#22397](https://github.com/ionic-team/ionic/issues/22397)) ([2a5b272](https://github.com/ionic-team/ionic/commit/2a5b272a329bbad1ca07705f84f0fd06e3ef32ad))
* **vue:** add custom elements bundle ([#23458](https://github.com/ionic-team/ionic/issues/23458)) ([dc48a9f](https://github.com/ionic-team/ionic/commit/dc48a9f1a2dff8a2d644112bbe1df8b0b6811848))

Be on the lookout for additional features and bug fixes in future beta releases of Framework v6!

### BREAKING CHANGES

> We recommend updating to the latest version of 5.x before trying out version 6 in order to see deprecation warnings related to your app [in the developer console](https://javascript.info/devtools).

* **all:** Browser, JS Framework, and mobile platform minimum required versions have been updated.
* **angular:** The `Config.set()` method has been removed. See https://ionicframework.com/docs/angular/config for examples on how to set config globally, per-component, and per-platform.
* **datetime:** The `ion-datetime` component has been revamped to use a new calendar style. As a result, some APIs have been removed. See https://github.com/ionic-team/ionic-framework/blob/master/BREAKING.md for more details.
* **header:** The last toolbar in the header with a collapsible large title no longer has a border.
* **ios:** The tab bar and toolbar default background colors have been updated to better reflect the latest iOS styles.
* **popover:** Converted `ion-popover` to use the Shadow DOM.
* **searchbar:** The `showClearButton` property on `ion-searchbar` now defaults to `'always'`.
* **toast:** The `--white-space` CSS Variable now defaults to `normal`.
* **vue:** - Dropped support for prefixed overlay events in favor of non prefixed events (I.e. `@onDidDismiss` becomes `@didDismiss`).
* **vue:** Support for child routes nested inside of tabs has been removed to better conform to Vue Router's best practices. Additional routes should be written as sibling routes with the parent tab as the path prefix.

Please see the [BREAKING.md](./BREAKING.md#version-6x) file for a complete list of breaking changes in Framework v6.



## [5.6.10](https://github.com/ionic-team/ionic/compare/v5.6.9...v5.6.10) (2021-06-22)


### Bug Fixes

* **button:** buttons using fill and color properties now account for hover and focused opacity variables ([#23442](https://github.com/ionic-team/ionic/issues/23442)) ([68c0e71](https://github.com/ionic-team/ionic/commit/68c0e7136d3f8aad8a195a0371104f7dd5fa7060)), closes [#23441](https://github.com/ionic-team/ionic/issues/23441)
* **item:** using multiple items with inputs no longer results in console warnings ([#23429](https://github.com/ionic-team/ionic/issues/23429)) ([e27b5b6](https://github.com/ionic-team/ionic/commit/e27b5b6ae360c44d8521ac7191817cbbe0367c05)), closes [#23427](https://github.com/ionic-team/ionic/issues/23427)
* **vue:** IonTabs can now accept IonRouterOutlet, deprecated default router outlet in tabs ([#23477](https://github.com/ionic-team/ionic/issues/23477)) ([a2a4cff](https://github.com/ionic-team/ionic/commit/a2a4cff3d0d67868f384e1e9eec7cc738e260a27)), closes [#23321](https://github.com/ionic-team/ionic/issues/23321)



## [5.6.9](https://github.com/ionic-team/ionic/compare/v5.6.8...v5.6.9) (2021-06-08)


### Bug Fixes

* **modal:** swipe to close modal is no longer swipeable on footer ([#23401](https://github.com/ionic-team/ionic/issues/23401)) ([ae96563](https://github.com/ionic-team/ionic/commit/ae96563fb3c4612cb8585292b389ee746f5759f7)), closes [#23398](https://github.com/ionic-team/ionic/issues/23398)
* **title:** inherit padding for iOS title in a toolbar ([#23343](https://github.com/ionic-team/ionic/issues/23343)) ([82cfa55](https://github.com/ionic-team/ionic/commit/82cfa5565347704b0e9f7dac792ed2aa6dd30505)), closes [#23072](https://github.com/ionic-team/ionic/issues/23072)
* **vue:** improve v-model integration for Vue 3.1.0+ ([#23420](https://github.com/ionic-team/ionic/issues/23420)) ([f008628](https://github.com/ionic-team/ionic/commit/f0086288512bd7f7d1929d79bfd8bf702efc732e))
* **vue:** prevent error from being thrown when testing on certain jest runners ([#23421](https://github.com/ionic-team/ionic/issues/23421)) ([60bedb5](https://github.com/ionic-team/ionic/commit/60bedb5599b286bffccfc54c4861a269d9b8df73)), closes [#23397](https://github.com/ionic-team/ionic/issues/23397)



## [5.6.8](https://github.com/ionic-team/ionic/compare/v5.6.7...v5.6.8) (2021-05-27)


### Bug Fixes

* **action-sheet:** subheader no longer overlaps action sheet buttons ([#23318](https://github.com/ionic-team/ionic/issues/23318)) ([d473a53](https://github.com/ionic-team/ionic/commit/d473a5385108ef5f39d7c9a2b2924e89fec631de)), closes [#23316](https://github.com/ionic-team/ionic/issues/23316)
* **all:** reflect color property as an attribute for vue ([#23345](https://github.com/ionic-team/ionic/issues/23345)) ([dc430af](https://github.com/ionic-team/ionic/commit/dc430af906c608f948c8d404ad73ae0e0ac36076)), closes [#23323](https://github.com/ionic-team/ionic/issues/23323)
* **range:** knob can now have an accessible name ([#23338](https://github.com/ionic-team/ionic/issues/23338)) ([881dcff](https://github.com/ionic-team/ionic/commit/881dcff40b8bdcb07b27d4ee812ce4ee64b6ea9a)), closes [#23295](https://github.com/ionic-team/ionic/issues/23295)
* **react:** remove @ionic/core dependency in @ionic/react-router to resolve yarn install warning ([#23351](https://github.com/ionic-team/ionic/issues/23351)) ([36bfa33](https://github.com/ionic-team/ionic/commit/36bfa3350354e09be6c62f4e4bee0c553c5981a3)), closes [#23346](https://github.com/ionic-team/ionic/issues/23346)
* **react:** support history@5 in preparation for react router 6 ([#23297](https://github.com/ionic-team/ionic/issues/23297)) ([4da5216](https://github.com/ionic-team/ionic/commit/4da5216b4f65f3d893cc81ebee77261835218f7f)), closes [#23294](https://github.com/ionic-team/ionic/issues/23294)
* **router:** guards are now triggered on initial navigation ([#23123](https://github.com/ionic-team/ionic/issues/23123)) ([56f6f56](https://github.com/ionic-team/ionic/commit/56f6f56c6665f40ea6bf41be463cd416883359f7)), closes [#22936](https://github.com/ionic-team/ionic/issues/22936)
* **router:** redirects now account for query string ([#23337](https://github.com/ionic-team/ionic/issues/23337)) ([08a9f3a](https://github.com/ionic-team/ionic/commit/08a9f3ac94685c5782dd2fa6b56bf3448729a768)), closes [#23136](https://github.com/ionic-team/ionic/issues/23136)
* **skeleton-text:** animation no longer jumps on large skeleton text elements ([#22697](https://github.com/ionic-team/ionic/issues/22697)) ([1a36922](https://github.com/ionic-team/ionic/commit/1a36922f41f2890c778feedbad9c5b74a72a3907)), closes [#22694](https://github.com/ionic-team/ionic/issues/22694)
* **slides:** resolve prototype pollution in swiper v5 ([#23344](https://github.com/ionic-team/ionic/issues/23344)) ([a708c41](https://github.com/ionic-team/ionic/commit/a708c412625cba475ec7863468dcc2146b8feb7a)), closes [#23342](https://github.com/ionic-team/ionic/issues/23342)
* **title:** large title scale animation is now correct in rtl mode ([#23372](https://github.com/ionic-team/ionic/issues/23372)) ([3d474ec](https://github.com/ionic-team/ionic/commit/3d474ec67ff4192fa3d08e370e20fecbee99a6aa)), closes [#23371](https://github.com/ionic-team/ionic/issues/23371)



## [5.6.7](https://github.com/ionic-team/ionic/compare/v5.6.6...v5.6.7) (2021-05-13)


### Bug Fixes

* **angular:** warnings are no longer generated when running tests with ng test ([#23292](https://github.com/ionic-team/ionic/issues/23292)) ([9cb6c80](https://github.com/ionic-team/ionic/commit/9cb6c80b3db4273e9c003a62a3065427995cb353)), closes [#19926](https://github.com/ionic-team/ionic/issues/19926)
* **overlays:** screen readers no longer read content behind overlays ([#23284](https://github.com/ionic-team/ionic/issues/23284)) ([a9b12a5](https://github.com/ionic-team/ionic/commit/a9b12a5aa4c150a1f8a80a826dda0df350bc0092)), closes [#22714](https://github.com/ionic-team/ionic/issues/22714)
* **refresher:** refresher now only activates when pulling down on MD ([#23283](https://github.com/ionic-team/ionic/issues/23283)) ([1e1596f](https://github.com/ionic-team/ionic/commit/1e1596f471e440085bf2d90e473f0cb0c0dcf6e2)), closes [#23245](https://github.com/ionic-team/ionic/issues/23245)
* **vue:** use correct history mode when doing ssr to avoid errors ([#23255](https://github.com/ionic-team/ionic/issues/23255)) ([2e00dab](https://github.com/ionic-team/ionic/commit/2e00dab95d3fefeab92c19cedb046ae2bb10879c)), closes [#23254](https://github.com/ionic-team/ionic/issues/23254)



## [5.6.6](https://github.com/ionic-team/ionic/compare/v5.6.5...v5.6.6) (2021-04-29)


### Bug Fixes

* **angular:** back button goes back to proper tab on angular 11.2.10 ([#23238](https://github.com/ionic-team/ionic/issues/23238)) ([e436439](https://github.com/ionic-team/ionic/commit/e436439e10c895b203ca4dc889cf307ffb9524b4)), closes [#23230](https://github.com/ionic-team/ionic/issues/23230)
* **react:** remove hardware back button event listener when NavManager is unmounted ([#23224](https://github.com/ionic-team/ionic/issues/23224)) ([c501da7](https://github.com/ionic-team/ionic/commit/c501da73be879db0fea818c507bae4386a47d42e)), closes [#23170](https://github.com/ionic-team/ionic/issues/23170)
* **slides:** undefined error is no longer thrown after destroying and quickly re-creating ion-slides ([#23239](https://github.com/ionic-team/ionic/issues/23239)) ([2ccaabb](https://github.com/ionic-team/ionic/commit/2ccaabb5b4d67ec4b1318e3ccb3edc1bd853ab3e)), closes [#22289](https://github.com/ionic-team/ionic/issues/22289)
* **vue:** components inside of ion-nav are now unmounted properly ([#23240](https://github.com/ionic-team/ionic/issues/23240)) ([f2f41e2](https://github.com/ionic-team/ionic/commit/f2f41e2af45ba9a36064d33e0b5c1b59da6b74ab)), closes [#23233](https://github.com/ionic-team/ionic/issues/23233)
* **vue:** overlay events can now be listened for without the "on" prefix, deprecated "on" prefix event listeners ([#23227](https://github.com/ionic-team/ionic/issues/23227)) ([dab927d](https://github.com/ionic-team/ionic/commit/dab927d2901658f4040c1d1aa6c777497d8714c8))



## [5.6.5](https://github.com/ionic-team/ionic/compare/v5.6.4...v5.6.5) (2021-04-22)


### Bug Fixes

* **content:** only render a main element when content is being used in primary view ([#23160](https://github.com/ionic-team/ionic/issues/23160)) ([2d07d82](https://github.com/ionic-team/ionic/commit/2d07d8216af908b181c5e7e438e79a049bb6d8c2))
* **datetime, input, textarea:** only add aria-labelledby if there is an adjacent label ([#23211](https://github.com/ionic-team/ionic/issues/23211)) ([a31fb55](https://github.com/ionic-team/ionic/commit/a31fb55bac1ef03e014f3d7f6c22c24eff20feb5))
* **radio-group:** pressing spacebar correctly unselects radio with allow-empty-selection ([#23194](https://github.com/ionic-team/ionic/issues/23194)) ([7139b3f](https://github.com/ionic-team/ionic/commit/7139b3f39e8eeef07ff7c595940fc5dafe062956)), closes [#22734](https://github.com/ionic-team/ionic/issues/22734)
* **react:** callback refs now work correctly with ionic components ([#23152](https://github.com/ionic-team/ionic/issues/23152)) ([0dd189e](https://github.com/ionic-team/ionic/commit/0dd189e2c05012659894a4c15cd3a9d407fe0a63)), closes [#23153](https://github.com/ionic-team/ionic/issues/23153)
* **segment, segment-button:** use tablist and tab roles ([#23145](https://github.com/ionic-team/ionic/issues/23145)) ([91ac340](https://github.com/ionic-team/ionic/commit/91ac340ae7e8928f7b0972a093dd9dd7fa727671))
* **vue:** dynamic tabs are now correctly recognized ([#23212](https://github.com/ionic-team/ionic/issues/23212)) ([004885b](https://github.com/ionic-team/ionic/commit/004885bfd4446487e6386876c868532a2795347f)), closes [#22847](https://github.com/ionic-team/ionic/issues/22847)
* **vue:** update props when navigating to new parameterized route ([#23189](https://github.com/ionic-team/ionic/issues/23189)) ([35c8802](https://github.com/ionic-team/ionic/commit/35c8802c22c1f4bf213a01e1c28398ad62d1b7ac))



## [5.6.4](https://github.com/ionic-team/ionic/compare/v5.6.3...v5.6.4) (2021-04-08)


### Bug Fixes

* **angular:** swiping back quickly no longer causes app to get stuck ([#23125](https://github.com/ionic-team/ionic/issues/23125)) ([28c52fd](https://github.com/ionic-team/ionic/commit/28c52fd4e3df3d96b4ec83075a322e110e938a1a)), closes [#15154](https://github.com/ionic-team/ionic/issues/15154)
* **input:** inherit aria-label to input ([#23159](https://github.com/ionic-team/ionic/issues/23159)) ([61f094d](https://github.com/ionic-team/ionic/commit/61f094d30665c9afec428028883a5d9a085892d8))
* **react:** overlays now correctly unmount any child components after dismissing ([#23149](https://github.com/ionic-team/ionic/issues/23149)) ([dee6eb3](https://github.com/ionic-team/ionic/commit/dee6eb30df370047bbc872b00ab6d801dd11fa81)), closes [#23140](https://github.com/ionic-team/ionic/issues/23140)
* **react, vue:** correct view now chosen when going back inside tabs ([#23154](https://github.com/ionic-team/ionic/issues/23154)) ([7203190](https://github.com/ionic-team/ionic/commit/72031902347dc279045e2e099f69852a23dd8436)), closes [#23087](https://github.com/ionic-team/ionic/issues/23087) [#23101](https://github.com/ionic-team/ionic/issues/23101)
* **toggle:** prevent click event from firing twice ([#23146](https://github.com/ionic-team/ionic/issues/23146)) ([42e6c90](https://github.com/ionic-team/ionic/commit/42e6c90c4632423386b165dddc4b94a55c075e2e)), closes [#23041](https://github.com/ionic-team/ionic/issues/23041)
* **vue:** account for event name changes in vue 3.0.6+ for overlay components ([#23100](https://github.com/ionic-team/ionic/issues/23100)) ([27318cf](https://github.com/ionic-team/ionic/commit/27318cf58563c4b38d0b7045fb61451f45954a8f))
* **vue:** components now integrate properly with vee-validate ([#23114](https://github.com/ionic-team/ionic/issues/23114)) ([ba51daf](https://github.com/ionic-team/ionic/commit/ba51daf17c4438aea6826882f82a04ebf8d6a5d8)), closes [#22886](https://github.com/ionic-team/ionic/issues/22886)



## [5.6.3](https://github.com/ionic-team/ionic/compare/v5.6.2...v5.6.3) (2021-03-23)


### Bug Fixes

* **all:** update tslib to resolve export errors ([#23092](https://github.com/ionic-team/ionic-framework/pull/23092)) ([0cdd326](https://github.com/ionic-team/ionic-framework/commit/0cdd326a4a02729a306bccfcadca7370475eae32)), closes [#23090](https://github.com/ionic-team/ionic-framework/issues/23090)
* **react:** correctly show ion-back-button when going back ([#23069](https://github.com/ionic-team/ionic/issues/23069)) ([1c93b75](https://github.com/ionic-team/ionic/commit/1c93b75e397961e374620eb43bee3d6bb4389836)), closes [#22692](https://github.com/ionic-team/ionic/issues/22692)



## [5.6.2](https://github.com/ionic-team/ionic/compare/v5.6.1...v5.6.2) (2021-03-22)


### Bug Fixes

* **item:** detail icon now respects rtl mode ([#23081](https://github.com/ionic-team/ionic/issues/23081)) ([b04fb6e](https://github.com/ionic-team/ionic/commit/b04fb6e849bc9d6283271aaadc2b8aaae1f3961d)), closes [#23078](https://github.com/ionic-team/ionic/issues/23078)



## [5.6.1](https://github.com/ionic-team/ionic/compare/v5.6.0...v5.6.1) (2021-03-17)


### Bug Fixes

* **custom-elements:** overlays now present correctly when using custom elements build ([#23039](https://github.com/ionic-team/ionic/issues/23039)) ([e4bf052](https://github.com/ionic-team/ionic/commit/e4bf052794af9aac07f887013b9250d2a045eba3)), closes [#23029](https://github.com/ionic-team/ionic/issues/23029)
* **item:** detail icon is no longer announced by screen readers ([#23055](https://github.com/ionic-team/ionic/issues/23055)) ([c877061](https://github.com/ionic-team/ionic/commit/c877061a328c6ab6fa7248b9880d0205c6c4f6c1)), closes [#23054](https://github.com/ionic-team/ionic/issues/23054)
* **label:** properly float labels for non-input items ([#23060](https://github.com/ionic-team/ionic/issues/23060)) ([c8a3999](https://github.com/ionic-team/ionic/commit/c8a3999da109b1719777f2acb791ab5388d371ea))
* **react:** only pass tab event props from IonTabs to IonTabBar if defined ([#23024](https://github.com/ionic-team/ionic/issues/23024)) ([f94e618](https://github.com/ionic-team/ionic/commit/f94e618a7b307b143eb39c061dc9e6b80e11f862)), closes [#23023](https://github.com/ionic-team/ionic/issues/23023)
* **refresher:** progressEnd no longer errors when pulling quickly in MD native refresher ([#23056](https://github.com/ionic-team/ionic/issues/23056)) ([67617fb](https://github.com/ionic-team/ionic/commit/67617fbc0f7ec825f1fa4c6e7e2da70e3fcd2d66))
* **virtual-scroll:** allow null in items property ([#23047](https://github.com/ionic-team/ionic/issues/23047)) ([2a253a1](https://github.com/ionic-team/ionic/commit/2a253a1d334ca2c6a478a5bc426e3115268a29af))
* **vue:** passing params as props are correctly updated when switching pages ([#23049](https://github.com/ionic-team/ionic/issues/23049)) ([2f54bc1](https://github.com/ionic-team/ionic/commit/2f54bc14699656e6905452a4233d982f83d0001f)), closes [#23043](https://github.com/ionic-team/ionic/issues/23043)


# [5.6.0 Argon](https://github.com/ionic-team/ionic/compare/v5.5.4...v5.6.0) (2021-03-04)


### Bug Fixes

* **all:** improve support for ids with special characters when getting label element ([#22680](https://github.com/ionic-team/ionic/issues/22680)) ([19d63f6](https://github.com/ionic-team/ionic/commit/19d63f62431ef9d8279f1726dd63fac2f0d4b46b)), closes [#22678](https://github.com/ionic-team/ionic/issues/22678)
* **header:** collapsed toolbar is no longer incorrectly shown when using ion-refresher ([#22937](https://github.com/ionic-team/ionic/issues/22937)) ([5300dcc](https://github.com/ionic-team/ionic/commit/5300dcc693caf51a726f8c346cfc9a44474fd3d1)), closes [#22829](https://github.com/ionic-team/ionic/issues/22829)
* **label:** only show placeholder with floating label when focused ([#22958](https://github.com/ionic-team/ionic/issues/22958)) ([9282aa6](https://github.com/ionic-team/ionic/commit/9282aa68715c088e9c8fcd915e78fb7ae91f551f)), closes [#17571](https://github.com/ionic-team/ionic/issues/17571)
* **progress-bar:** use correct theme colors in dark mode ([#22965](https://github.com/ionic-team/ionic/issues/22965)) ([b6b2714](https://github.com/ionic-team/ionic/commit/b6b2714d70f71255315510c5e49708944875db72)), closes [#20098](https://github.com/ionic-team/ionic/issues/20098)
* **radio-group:** pressing space no longer jumps screen to bottom of page ([#22892](https://github.com/ionic-team/ionic/issues/22892)) ([3a0465e](https://github.com/ionic-team/ionic/commit/3a0465e7d6f9e3cb01336a8bdbd7001e4ec34559)), closes [#22716](https://github.com/ionic-team/ionic/issues/22716)
* **react:** IonRouterOutlet now respects animated={false} prop ([#22905](https://github.com/ionic-team/ionic/issues/22905)) ([da1b7a0](https://github.com/ionic-team/ionic/commit/da1b7a0e7a9a5e6a9120dc4d5459c97d8bca5390)), closes [#22903](https://github.com/ionic-team/ionic/issues/22903)
* **react:** onIonTabsWillChange and onIonTabsDidChange event handlers are now properly bound to IonTabs ([#22233](https://github.com/ionic-team/ionic/issues/22233)) ([b064fde](https://github.com/ionic-team/ionic/commit/b064fdebef14018b77242b791914d5bb10863d39))
* **react, vue:** navigating using ion-back-button now selects correct page ([#22974](https://github.com/ionic-team/ionic/issues/22974)) ([cd8ffd8](https://github.com/ionic-team/ionic/commit/cd8ffd82a03ee69ef4cbd7922544bfc39680def9)), closes [#22830](https://github.com/ionic-team/ionic/issues/22830)
* **react, vue:** tab buttons no longer throw an error if href is undefined ([#22998](https://github.com/ionic-team/ionic/issues/22998)) ([943e3f6](https://github.com/ionic-team/ionic/commit/943e3f6ae37ecc56f21168f057dde77a05e4e144)), closes [#22997](https://github.com/ionic-team/ionic/issues/22997)
* **refresher:** add correct dark mode styles ([#22639](https://github.com/ionic-team/ionic/issues/22639)) ([c05476b](https://github.com/ionic-team/ionic/commit/c05476b88e3e6884b4c490461c9c67dee3dca83d)), closes [#22637](https://github.com/ionic-team/ionic/issues/22637)
* **vue:** correctly remove active state from tab button when navigating away from tab ([#23000](https://github.com/ionic-team/ionic/issues/23000)) ([a2763af](https://github.com/ionic-team/ionic/commit/a2763afe8e1fe1dc0decdbcb757a03bc5038045e)), closes [#22597](https://github.com/ionic-team/ionic/issues/22597)
* **vue:** prevent race conditions when opening overlays ([#22883](https://github.com/ionic-team/ionic/issues/22883)) ([68a9b80](https://github.com/ionic-team/ionic/commit/68a9b800532f9c0b308a3b74ed18a7068a942301)), closes [#22880](https://github.com/ionic-team/ionic/issues/22880)


### Features

* **custom-elements:** add experimental custom elements build  ([#22863](https://github.com/ionic-team/ionic/issues/22863)) ([0de75af](https://github.com/ionic-team/ionic/commit/0de75afbefc521c1d76adcd587f77ba19c285a95))
* **progress-bar:** add parts for more design customization ([#22938](https://github.com/ionic-team/ionic/issues/22938)) ([e256d3f](https://github.com/ionic-team/ionic/commit/e256d3f09fd6f231c4d9e1d0f0927612a591466b)), closes [#20062](https://github.com/ionic-team/ionic/issues/20062) [#21820](https://github.com/ionic-team/ionic/issues/21820)
* **react:** add react hooks to control overlay components ([#22484](https://github.com/ionic-team/ionic/issues/22484)) ([b83e009](https://github.com/ionic-team/ionic/commit/b83e00934e794a936c9d3d23d7f94bbe89cedcd5))
* **searchbar:** add showClearIcon property ([#22759](https://github.com/ionic-team/ionic/issues/22759)) ([215eb5d](https://github.com/ionic-team/ionic/commit/215eb5d4efbb9ade942dba1687469caf61da21e7)), closes [#22738](https://github.com/ionic-team/ionic/issues/22738)
* **vue:** add composition API ionic lifecycle hooks ([#22970](https://github.com/ionic-team/ionic/issues/22970)) ([dd1c8db](https://github.com/ionic-team/ionic/commit/dd1c8dbf3b20fbd423f70c96846d9c366d90e7c5)), closes [#22769](https://github.com/ionic-team/ionic/issues/22769)



## [5.5.5](https://github.com/ionic-team/ionic/compare/v5.5.4...v5.5.5) (2021-02-26)


### Bug Fixes

* **vue:** account for event name changes in vue 3.0.6+ ([#22980](https://github.com/ionic-team/ionic/issues/22980)) ([7dd2e6d](https://github.com/ionic-team/ionic/commit/7dd2e6d287b47cca758e1d4a71928dd3dc9ac24d)), closes [#22977](https://github.com/ionic-team/ionic/issues/22977)



## [5.5.4](https://github.com/ionic-team/ionic/compare/v5.5.3...v5.5.4) (2021-02-04)


### Bug Fixes

* **angular:** update ngAdd schematic ([#22858](https://github.com/ionic-team/ionic/issues/22858)) ([487349f](https://github.com/ionic-team/ionic/commit/487349f02a41344db2478735d27bf79f2a1c99b3))
* **app:** keyboard no longer hides when using contenteditable ([#22857](https://github.com/ionic-team/ionic/issues/22857)) ([b6b2d34](https://github.com/ionic-team/ionic/commit/b6b2d34fd446feb06cf0143946a014d19231a78e)), closes [#22856](https://github.com/ionic-team/ionic/issues/22856)
* **ios**: scroll assist no longer prevents first click event from firing ([#22845](https://github.com/ionic-team/ionic/issues/22845)) ([f7d4c21](https://github.com/ionic-team/ionic/commit/f7d4c21b64e27f9b655bc1ab2522d6357dc6010f)), closes [#21871](https://github.com/ionic-team/ionic/issues/21871)
* **select:** class on component now indicates when select is open ([#22846](https://github.com/ionic-team/ionic/issues/22846)) ([1a5accc](https://github.com/ionic-team/ionic/commit/1a5accc5f707f84063469c0bd3e5e153489f1e5d)), closes [#22801](https://github.com/ionic-team/ionic/issues/22801)
* **vue:** ionChange events now propagate correctly ([#22872](https://github.com/ionic-team/ionic/issues/22872)) ([ff0f1da](https://github.com/ionic-team/ionic/commit/ff0f1da9f11915b48c4258af7c48c4513785f3fc)), closes [#22870](https://github.com/ionic-team/ionic/issues/22870)



## [5.5.3](https://github.com/ionic-team/ionic/compare/v5.5.2...v5.5.3) (2021-01-28)


### Bug Fixes

* **react:** do not unmount overlay inner component until overlay is dismissed ([#22813](https://github.com/ionic-team/ionic/issues/22813)) ([ab1fc8f](https://github.com/ionic-team/ionic/commit/ab1fc8f2311fd252146942c7a947ebc96efd054f)), closes [#22761](https://github.com/ionic-team/ionic/issues/22761)
* **react:** adding dynamic class to ion-page no longer hides component ([#22666](https://github.com/ionic-team/ionic/issues/22666)) ([a01bdb8](https://github.com/ionic-team/ionic/commit/a01bdb8c8dfee760721eeb35a8b556954f3b5b13)), closes [#22631](https://github.com/ionic-team/ionic/issues/22631)
* **react:** improve view matching logic ([#22569](https://github.com/ionic-team/ionic/issues/22569)) ([f891f66](https://github.com/ionic-team/ionic/commit/f891f667082d2deb5f1b5f0f27af46e46ed1ca0f))
* **react, vue:** do not show back button when replacing to root page ([#22750](https://github.com/ionic-team/ionic/issues/22750)) ([9e9a372](https://github.com/ionic-team/ionic/commit/9e9a3724979e95f3df1a340be21d16d8664a013c)), closes [#22528](https://github.com/ionic-team/ionic/issues/22528)
* **refresher:** correctly detect spinner when using native refresher ([#22800](https://github.com/ionic-team/ionic/issues/22800)) ([e2d8e5c](https://github.com/ionic-team/ionic/commit/e2d8e5c4dcf893ddd8aaa556c1dd8fcaf52411c9)), closes [#22706](https://github.com/ionic-team/ionic/issues/22706)
* **title:** only add large title transition when using collapsible header ([#22762](https://github.com/ionic-team/ionic/issues/22762)) ([348c50b](https://github.com/ionic-team/ionic/commit/348c50b7ea5d4c74498c5d26e40c1c4fe923ee55)), closes [#22760](https://github.com/ionic-team/ionic/issues/22760)
* **vue:** all ionic vue components can now use router link ([#22743](https://github.com/ionic-team/ionic/issues/22743)) ([3d6ac13](https://github.com/ionic-team/ionic/commit/3d6ac1382e23663a3d010fd253d3c6017d3923e4))
* **vue:** correctly determine leaving view when transitioning to a new instance of a previous page ([#22655](https://github.com/ionic-team/ionic/issues/22655)) ([e3a05bf](https://github.com/ionic-team/ionic/commit/e3a05bfeb55d8eaa38aa08a37859aa4df6ffa2d4)), closes [#22654](https://github.com/ionic-team/ionic/issues/22654) [#22658](https://github.com/ionic-team/ionic/issues/22658)
* **vue:** ensure v-model value is properly synced before ionChange event ([#22749](https://github.com/ionic-team/ionic/issues/22749)) ([e1d6627](https://github.com/ionic-team/ionic/commit/e1d6627bf0ef1f47f980db1573c6b2a3d16d7677)), closes [#22610](https://github.com/ionic-team/ionic/issues/22610)
* **vue:** improve path matching with tabs, deprecated adding additional pages as children of tabs without a router outlet ([#22807](https://github.com/ionic-team/ionic/issues/22807)) ([2a3ce9a](https://github.com/ionic-team/ionic/commit/2a3ce9a74e85111a2f1f470b9d8bfe2cda793ca5)), closes [#22519](https://github.com/ionic-team/ionic/issues/22519)
* **vue:** improve v-model binding sync between vue wrappers and web components ([#22745](https://github.com/ionic-team/ionic/issues/22745)) ([64719f4](https://github.com/ionic-team/ionic/commit/64719f49f979c0296a01827d3c02599a48ba93a6)), closes [#22731](https://github.com/ionic-team/ionic/issues/22731)
* **vue:** output commonjs format for node environments ([#22766](https://github.com/ionic-team/ionic/issues/22766)) ([7ecae2e](https://github.com/ionic-team/ionic/commit/7ecae2e4cb5d0eebc6041a8a7a5acc156132c2e1))
* **vue:** tab bar is now correctly hidden when keyboard is open ([#22687](https://github.com/ionic-team/ionic/issues/22687)) ([5c27dd8](https://github.com/ionic-team/ionic/commit/5c27dd8032d32ebb57c31e1f6c112dc513344b93))



## [5.5.2](https://github.com/ionic-team/ionic/compare/v5.5.1...v5.5.2) (2020-12-09)


### Bug Fixes

* **android:** setting hardwareBackButton: false in config now disables default webview behavior ([#22555](https://github.com/ionic-team/ionic/issues/22555)) ([dc9faa6](https://github.com/ionic-team/ionic/commit/dc9faa6a0fbebb64c83c107c79cfd486cc0c096a)), closes [#18237](https://github.com/ionic-team/ionic/issues/18237)
* **button:** allow aria-label to be inherited on inner button ([#22632](https://github.com/ionic-team/ionic/issues/22632)) ([818e387](https://github.com/ionic-team/ionic/commit/818e387fe81ac7026fb374d8865116dadd433c87)), closes [#22629](https://github.com/ionic-team/ionic/issues/22629)
* **react:** hardware back button now navigates correctly ([36939e1](https://github.com/ionic-team/ionic/commit/36939e10ae0b8ac9a9275ee06d8e0d345de7c64f))
* **react:** setting a ref now allows other props to be passed in ([31f45cd](https://github.com/ionic-team/ionic/commit/31f45cdcc953b08749d9db08321fa5ec6cbe2532)), closes [#22609](https://github.com/ionic-team/ionic/issues/22609)
* **refresher:** clean up old css if calling refresh method before native refresher is setup ([#22640](https://github.com/ionic-team/ionic/issues/22640)) ([8d5ed47](https://github.com/ionic-team/ionic/commit/8d5ed47a282f92a60a2c4126a673cc2a5733067e)), closes [#22636](https://github.com/ionic-team/ionic/issues/22636)
* **refresher:** refresher correctly detects native refresher when shown asynchronously ([#22623](https://github.com/ionic-team/ionic/issues/22623)) ([5ed73cd](https://github.com/ionic-team/ionic/commit/5ed73cdf4d63eeee25ef28d9676fcaa4f8e07b47)), closes [#22616](https://github.com/ionic-team/ionic/issues/22616)
* **vue:** adding non tab button elements inside ion-tab-bar no longer causes errors ([#22643](https://github.com/ionic-team/ionic/issues/22643)) ([61cf0c5](https://github.com/ionic-team/ionic/commit/61cf0c534e45ce09410be6bfb50bdc27b657d1bc)), closes [#22642](https://github.com/ionic-team/ionic/issues/22642)
* **vue:** correctly handle navigation failures ([#22621](https://github.com/ionic-team/ionic/issues/22621)) ([216f51b](https://github.com/ionic-team/ionic/commit/216f51b12a8c4ae7b410f47ce3d350ea513b68a1)), closes [#22591](https://github.com/ionic-team/ionic/issues/22591)
* **vue:** correctly remove old view when replacing route ([#22566](https://github.com/ionic-team/ionic/issues/22566)) ([4f4f31b](https://github.com/ionic-team/ionic/commit/4f4f31b65e48294c3130ff24ae00b1a2aa1f9d31)), closes [#22492](https://github.com/ionic-team/ionic/issues/22492)
* **vue:** pass in correct route to props function ([#22605](https://github.com/ionic-team/ionic/issues/22605)) ([01afdc4](https://github.com/ionic-team/ionic/commit/01afdc42e5b1598d4d15cb51761bbb3eb5d13893)), closes [#22602](https://github.com/ionic-team/ionic/issues/22602)
* **vue:** query strings are now correctly handled when navigating back ([#22615](https://github.com/ionic-team/ionic/issues/22615)) ([a94e2a8](https://github.com/ionic-team/ionic/commit/a94e2a87fb759e7b7daed2d0304c1199dbc7afd1)), closes [#22517](https://github.com/ionic-team/ionic/issues/22517)
* **vue:** swipe back gesture is properly disabled when swipeBackEnabled config is false ([#22568](https://github.com/ionic-team/ionic/issues/22568)) ([9d04c12](https://github.com/ionic-team/ionic/commit/9d04c127e817676983940b034a4c7efc92fdfbc6)), closes [#22567](https://github.com/ionic-team/ionic/issues/22567)

### For Ionic Vue Developers

Vue Router 4 has been released! Be sure to update from the release candidate to the latest stable version of Vue Router.

For more information on the changes in Vue Router 4, see https://github.com/vuejs/vue-router-next/releases/tag/v4.0.0.

```
npm install vue-router@4
```




## [5.5.1](https://github.com/ionic-team/ionic/compare/v5.5.0...v5.5.1) (2020-11-25)


### Bug Fixes

* **checkbox:** click handler now fires properly  ([#22573](https://github.com/ionic-team/ionic/issues/22573)) ([0786835](https://github.com/ionic-team/ionic/commit/07868354aaf88deebf7472a5bf0f34d7c823de17)), closes [#22557](https://github.com/ionic-team/ionic/issues/22557)
* **radio:** properly announce radios on screen readers and resolve axe errors ([#22507](https://github.com/ionic-team/ionic/issues/22507)) ([afcc46e](https://github.com/ionic-team/ionic/commit/afcc46e1cc4d7f6e9d1a50f8b367da4b1d0c3143))
* **react:** eliminate use of deprecated `findDOMNode`, resolves [#20972](https://github.com/ionic-team/ionic/issues/20972) ([5275332](https://github.com/ionic-team/ionic/commit/5275332e43694f3ee8738a1726c0d202b16c3052))
* **router:** navigation guards now fire when navigating to a page with params ([#22521](https://github.com/ionic-team/ionic/issues/22521)) ([1956f98](https://github.com/ionic-team/ionic/commit/1956f9896883dc4687488e5418e50ce0f6cbe6c9)), closes [#22516](https://github.com/ionic-team/ionic/issues/22516)
* **select:** fix a11y issues with axe and screen readers ([#22494](https://github.com/ionic-team/ionic/issues/22494)) ([04b874e](https://github.com/ionic-team/ionic/commit/04b874e32a65588ca79eda9399ab7e9d86a3cb77)), closes [#21552](https://github.com/ionic-team/ionic/issues/21552) [#21548](https://github.com/ionic-team/ionic/issues/21548)
* **select:** improvements for announcing placeholder and value on screenreaders ([#22556](https://github.com/ionic-team/ionic/issues/22556)) ([ea52db6](https://github.com/ionic-team/ionic/commit/ea52db66f05a185fed6b2e849734a7ffa1c6c6ea))
* **vue:** onBeforeRouteLeave and onBeforeRouteUpdate hooks now fire properly ([#22542](https://github.com/ionic-team/ionic/issues/22542)) ([8002114](https://github.com/ionic-team/ionic/commit/8002114e720361e60d7a7fe2d15ab88b49a72e1b)), closes [#22540](https://github.com/ionic-team/ionic/issues/22540)
* **vue:** tabs now correctly fire lifecycle events ([#22479](https://github.com/ionic-team/ionic/issues/22479)) ([cdc2fb6](https://github.com/ionic-team/ionic/commit/cdc2fb652fe5aa149eaa751a77fb506ac1f64195)), closes [#22466](https://github.com/ionic-team/ionic/issues/22466)
* **vue:** unit testing a routerLink-capable component no longer warns of missing router dependency ([#22532](https://github.com/ionic-team/ionic/issues/22532)) ([4e23aad](https://github.com/ionic-team/ionic/commit/4e23aad3d911188e4a2706545463a81332c00ce9)), closes [#22506](https://github.com/ionic-team/ionic/issues/22506)

### For Ionic Vue Developers

When updating to Ionic Vue v5.5.1 make sure you are on the latest version of `vue-router@next` to take advantage of the bug fixes in this release:

```
npm install vue-router@next
```



# [5.5.0 Chlorine](https://github.com/ionic-team/ionic/compare/v5.4.4...v5.5.0) (2020-11-18)


### Bug Fixes

* **backdrop:** nvda no longer incorrectly announces backdrop ([#22481](https://github.com/ionic-team/ionic/issues/22481)) ([2d878fc](https://github.com/ionic-team/ionic/commit/2d878fc4f6c7a710dbfb722e188e3e402e1672f9)), closes [#22102](https://github.com/ionic-team/ionic/issues/22102)
* **checkbox:** use a native input to fix a11y issues with axe and screen readers ([#22402](https://github.com/ionic-team/ionic/issues/22402)) ([7214a84](https://github.com/ionic-team/ionic/commit/7214a8401b709e1353155304cf6e9f97b2b4d294)), closes [#21644](https://github.com/ionic-team/ionic/issues/21644) [#20517](https://github.com/ionic-team/ionic/issues/20517) [#17796](https://github.com/ionic-team/ionic/issues/17796)
* **input:** title attribute is now automatically inherited ([#22493](https://github.com/ionic-team/ionic/issues/22493)) ([abad12f](https://github.com/ionic-team/ionic/commit/abad12fbdb1378066282fe8e9b7761747951b685)), closes [#22055](https://github.com/ionic-team/ionic/issues/22055)
* **refresher:** ios native refresher now works in side menu ([#22449](https://github.com/ionic-team/ionic/issues/22449)) ([a4a6453](https://github.com/ionic-team/ionic/commit/a4a64530ff083b83187b293dfdacb0fa45ad9f51))
* **refresher:** md native refresher now works in side menu ([#22446](https://github.com/ionic-team/ionic/issues/22446)) ([6b817f2](https://github.com/ionic-team/ionic/commit/6b817f26b08d01d8367d16308db775b6192e7628)), closes [#20832](https://github.com/ionic-team/ionic/issues/20832)
* **toggle:** use a native input to fix a11y issues with axe and screen readers ([#22477](https://github.com/ionic-team/ionic/issues/22477)) ([813611a](https://github.com/ionic-team/ionic/commit/813611a61b664c9827760ccaa889d0e2fcae7d94)), closes [#22011](https://github.com/ionic-team/ionic/issues/22011) [#21552](https://github.com/ionic-team/ionic/issues/21552)
* **vue:** correctly pass route props to components ([#22476](https://github.com/ionic-team/ionic/issues/22476)) ([0956f8b](https://github.com/ionic-team/ionic/commit/0956f8bc5588836996c8c74f98166c347414a312)), closes [#22472](https://github.com/ionic-team/ionic/issues/22472)
* **vue:** tab bar now works with slot="top" ([#22461](https://github.com/ionic-team/ionic/issues/22461)) ([e17c822](https://github.com/ionic-team/ionic/commit/e17c822bfbc2a876226738b77a4c95c02e0b5953)), closes [#22456](https://github.com/ionic-team/ionic/issues/22456)


### Features

* **chip:** add disabled property ([#20658](https://github.com/ionic-team/ionic/issues/20658)) ([0a0cbd8](https://github.com/ionic-team/ionic/commit/0a0cbd8f2a505ad2b3d8afb60cb1e940ced52e0d)), closes [#19510](https://github.com/ionic-team/ionic/issues/19510)
* **segment:** add swipeGesture property to allow for disabling of the swipe gesture ([#22087](https://github.com/ionic-team/ionic/issues/22087)) ([65bc995](https://github.com/ionic-team/ionic/commit/65bc99577c44cce653dafd9937c4d8f9c45fff61)), closes [#22048](https://github.com/ionic-team/ionic/issues/22048)
* **vue:** composition api lifecycle methods ([#22241](https://github.com/ionic-team/ionic/issues/22241)) ([f5b0299](https://github.com/ionic-team/ionic/commit/f5b0299729c2c639e432612e62fb7eaa189ca969))
* **vue:** vetur support ([#22403](https://github.com/ionic-team/ionic/issues/22403)) ([e76f79d](https://github.com/ionic-team/ionic/commit/e76f79d0548c97edd193808f5e0a19889cffae5b))
* **vue:** web-types support ([#22428](https://github.com/ionic-team/ionic/issues/22428)) ([639314a](https://github.com/ionic-team/ionic/commit/639314ab218b65a9a2de6040417b0e1b363e47ef)), closes [#19522](https://github.com/ionic-team/ionic/issues/19522)


### Performance Improvements

* **ios:** move content to stacking context while preserving position: fixed behavior ([#22489](https://github.com/ionic-team/ionic/issues/22489)) ([d77a9d5](https://github.com/ionic-team/ionic/commit/d77a9d57ec02c69df43ec2a286eea674a85cae36)), closes [#22473](https://github.com/ionic-team/ionic/issues/22473)



## [5.4.4](https://github.com/ionic-team/ionic/compare/v5.4.3...v5.4.4) (2020-11-12)


### Bug Fixes

* **build:** add missing es5 output ([228d349](https://github.com/ionic-team/ionic/commit/228d349c6e29b62cbfee5d5502883682cfa5032f))



## [5.4.3](https://github.com/ionic-team/ionic/compare/v5.4.2...v5.4.3) (2020-11-06)


### Bug Fixes

* **all** add missing vendor prefixes to css ([0989ea5](https://github.com/ionic-team/ionic/commit/0989ea5ac897f528e8fce5434861ca080b9b4a56))



## [5.4.2](https://github.com/ionic-team/ionic/compare/v5.4.1...v5.4.2) (2020-11-05)


### Bug Fixes

* **alert:** correctly position alert when keyboard is open ([#22425](https://github.com/ionic-team/ionic/issues/22425)) ([9752cd6](https://github.com/ionic-team/ionic/commit/9752cd6371bc4a720e45871161e389e4a9ad8e8f))
* **ios:** contenteditable elements are now selectable on iOS ([#22404](https://github.com/ionic-team/ionic/issues/22404)) ([023fb18](https://github.com/ionic-team/ionic/commit/023fb1841259a61b361066ca369aeffd488efa3f)), closes [#18368](https://github.com/ionic-team/ionic/issues/18368)
* **item:** only add click event listener to items with inputs ([#22352](https://github.com/ionic-team/ionic/issues/22352)) ([9659ad6](https://github.com/ionic-team/ionic/commit/9659ad63349d5123ca2bd2548a43e37d5ee817e7)), closes [#22011](https://github.com/ionic-team/ionic/issues/22011)
* **range:** gesture is now properly re-created on connectedCallback ([#22407](https://github.com/ionic-team/ionic/issues/22407)) ([2fea36f](https://github.com/ionic-team/ionic/commit/2fea36fc98f772443a6560a9491f2f0e574366d1)), closes [#22335](https://github.com/ionic-team/ionic/issues/22335)
* **refresher:** work properly in modal by waiting for content to be ready ([#22390](https://github.com/ionic-team/ionic/issues/22390)) ([91d0414](https://github.com/ionic-team/ionic/commit/91d041485cb3565fa81fea24c1811e48108f277a)), closes [#22256](https://github.com/ionic-team/ionic/issues/22256)
* **segment-button:** color property is now reactive if previously undefined ([#22405](https://github.com/ionic-team/ionic/issues/22405)) ([04161c9](https://github.com/ionic-team/ionic/commit/04161c9512ed8e965c93698d7f5501a21485052f)), closes [#20831](https://github.com/ionic-team/ionic/issues/20831)
* **vue:** correctly switch tabs after going back ([#22309](https://github.com/ionic-team/ionic/issues/22309)) ([daf6a92](https://github.com/ionic-team/ionic/commit/daf6a92127d36c20f3445f83bd7bd3e739bb1b27)), closes [#22307](https://github.com/ionic-team/ionic/issues/22307)
* **vue:** ensure view is updated correctly when replacing a route outside of a nav guard ([#22429](https://github.com/ionic-team/ionic/issues/22429)) ([5a4d0c0](https://github.com/ionic-team/ionic/commit/5a4d0c0217ce93f98364bdd4d8d163679f82a6b3)), closes [#22412](https://github.com/ionic-team/ionic/issues/22412)


### Performance Improvements

* **ios:** move content to stacking context to improve scrolling performance on iOS devices ([#22180](https://github.com/ionic-team/ionic/issues/22180)) ([9f44966](https://github.com/ionic-team/ionic/commit/9f44966d8572a27d8296b38ae4f3e689c76c2e44))



## [5.4.1](https://github.com/ionic-team/ionic/compare/v5.4.0...v5.4.1) (2020-10-22)


### Bug Fixes

* **select:** properly align label with select in item in MD mode ([#22330](https://github.com/ionic-team/ionic/issues/22330)) ([1a2e532](https://github.com/ionic-team/ionic/commit/1a2e5322fb7ac0dd6bd3d0705b8e32f9d3649bfc)), closes [#19887](https://github.com/ionic-team/ionic/issues/19887)
* **vue:** going back with query params now goes to correct view ([#22350](https://github.com/ionic-team/ionic/issues/22350)) ([561a4ac](https://github.com/ionic-team/ionic/commit/561a4ac535432873860c3d0a4ac60481929d9089)), closes [#22324](https://github.com/ionic-team/ionic/issues/22324)
* **vue:** improve compatibility with route guards ([#22371](https://github.com/ionic-team/ionic/issues/22371)) ([31f9bc8](https://github.com/ionic-team/ionic/commit/31f9bc81d6d0fa81f9abe20172bb606651a2d75d)), closes [#22344](https://github.com/ionic-team/ionic/issues/22344)
* **vue:** improve handling of parameterized urls ([#22360](https://github.com/ionic-team/ionic/issues/22360)) ([6fad0fe](https://github.com/ionic-team/ionic/commit/6fad0fe42814cde1126e6df264b99c069849c87a)), closes [#22359](https://github.com/ionic-team/ionic/issues/22359)
* **vue:** lifecycle events are now fired in component context ([#22348](https://github.com/ionic-team/ionic/issues/22348)) ([bcef804](https://github.com/ionic-team/ionic/commit/bcef804deac4dea27def475460aff4cdf0d7d2fc)), closes [#22338](https://github.com/ionic-team/ionic/issues/22338)



# [5.4.0 Sulfur](https://github.com/ionic-team/ionic/compare/v5.3.0...v5.4.0) (2020-10-15)

> This is the first stable release of Ionic Vue.

Enjoy the Vue! :tada:

### New to Ionic Vue?

Check out our [Quickstart Guide](https://ionicframework.com/docs/vue/quickstart) to get up and running. Then be sure to check out our [Building Your First App Guide](https://ionicframework.com/docs/vue/your-first-app) to learn how build a cross platform Ionic Vue application from start to finish!



# [5.4.0-rc.3](https://github.com/ionic-team/ionic/compare/v5.4.0-rc.2...v5.4.0-rc.3) (2020-10-14)

> This version is dedicated to our upcoming Ionic Vue release.

### Bug Fixes

* **vue:** ion-page component is now properly shown with HMR ([#22319](https://github.com/ionic-team/ionic/issues/22319)) ([c5ab562](https://github.com/ionic-team/ionic/commit/c5ab562eaa098717407e6b3e8139abd2112246a2))

### Upgrade Steps

```
npm install @ionic/vue@5.4.0-rc.3 @ionic/vue-router@5.4.0-rc.3 --save-exact
```

### New to Ionic Vue?

Check out our [Quickstart Guide](https://ionicframework.com/docs/vue/quickstart) to get up and running. Then be sure to check out our [Building Your First App Guide](https://ionicframework.com/docs/vue/your-first-app) to learn how build a cross platform Ionic Vue application from start to finish!



# [5.4.0-rc.2](https://github.com/ionic-team/ionic/compare/v5.4.0-rc.1...v5.4.0-rc.2) (2020-10-13)

> This version is dedicated to our upcoming Ionic Vue release.

### Bug Fixes

* **vue:** do not hide page content when using ion-page in non-routing contexts  ([#22302](https://github.com/ionic-team/ionic/issues/22302)) ([fff82d0](https://github.com/ionic-team/ionic/commit/fff82d0bdcd850e7c70947b39d554e88c4cdfd1e)), closes [#22300](https://github.com/ionic-team/ionic/issues/22300)
* **vue:** going back from tabs page to a non-tabs page now selects correct page ([#22275](https://github.com/ionic-team/ionic/issues/22275)) ([b06ae16](https://github.com/ionic-team/ionic/commit/b06ae165912cbab811fe4a3c35b4e2b3fe0b425b)), closes [#22258](https://github.com/ionic-team/ionic/issues/22258)
* **vue:** improve swipe to go back reliability ([#22288](https://github.com/ionic-team/ionic/issues/22288)) ([c74fd41](https://github.com/ionic-team/ionic/commit/c74fd4147b57e6b11c22dffdf6355568a763f30a)), closes [#22237](https://github.com/ionic-team/ionic/issues/22237)
* **vue:** modal, popover, and nav are now created within application context ([#22282](https://github.com/ionic-team/ionic/issues/22282)) ([6026c65](https://github.com/ionic-team/ionic/commit/6026c65b1ae80af0f8604e7a3bcb220153267955)), closes [#22079](https://github.com/ionic-team/ionic/issues/22079)
* **vue:** pages now render in correct outlet when using multiple nested outlets ([#22301](https://github.com/ionic-team/ionic/issues/22301)) ([52f655c](https://github.com/ionic-team/ionic/commit/52f655c9d40988cac36f88c88f24195b3f64c431)), closes [#22286](https://github.com/ionic-team/ionic/issues/22286)

### Upgrade Steps

```
npm install @ionic/vue@5.4.0-rc.2 @ionic/vue-router@5.4.0-rc.2 --save-exact
```

### New to Ionic Vue?

Check out our [Quickstart Guide](https://ionicframework.com/docs/vue/quickstart) to get up and running. Then be sure to check out our [Building Your First App Guide](https://ionicframework.com/docs/vue/your-first-app) to learn how build a cross platform Ionic Vue application from start to finish!



# [5.4.0-rc.1](https://github.com/ionic-team/ionic/compare/v5.3.5...v5.4.0-rc.1) (2020-10-08)

> This version is dedicated to our upcoming Ionic Vue release.

### Bug Fixes

* **vue:** correctly handle query params ([#22253](https://github.com/ionic-team/ionic/issues/22253)) ([6849dd3](https://github.com/ionic-team/ionic/commit/6849dd3483fb90aac1ff19834390a652c59a74de)), closes [#22229](https://github.com/ionic-team/ionic/issues/22229)
* **vue:** correctly show ion-back-button when going back ([#22260](https://github.com/ionic-team/ionic/issues/22260)) ([39d2530](https://github.com/ionic-team/ionic/commit/39d2530427b1cd86975fc95ab2c8da9f4b0b27b3)), closes [#22217](https://github.com/ionic-team/ionic/issues/22217)
* **vue:** hide layout shift on ion-page components ([#22254](https://github.com/ionic-team/ionic/issues/22254)) ([2bad1bb](https://github.com/ionic-team/ionic/commit/2bad1bb82e0fa3fe9e3db54403565d210f636120)), closes [#22052](https://github.com/ionic-team/ionic/issues/22052)
* **vue:** ion-tab-bar no longer throws undefined error when re-creating tabs ([#22261](https://github.com/ionic-team/ionic/issues/22261)) ([d746561](https://github.com/ionic-team/ionic/commit/d746561ea29e61db2cfb55d2765b5548fd8b5a78)), closes [#22255](https://github.com/ionic-team/ionic/issues/22255)

### Upgrade Steps

```
npm install @ionic/vue@5.4.0-rc.1 @ionic/vue-router@5.4.0-rc.1 --save-exact
```

### New to Ionic Vue?

Check out our [Quickstart Guide](https://ionicframework.com/docs/vue/quickstart) to get up and running. Then be sure to check out our [Building Your First App Guide](https://ionicframework.com/docs/vue/your-first-app) to learn how build a cross platform Ionic Vue application from start to finish!



## [5.3.5](https://github.com/ionic-team/ionic/compare/v5.3.4...v5.3.5) (2020-10-07)


### Bug Fixes

* **button:** allow any element type to use the "icon-only" slot ([#22168](https://github.com/ionic-team/ionic/issues/22168)) ([c454c84](https://github.com/ionic-team/ionic/commit/c454c84ef46322143467600334a0263d4e7df6cb))
* **datetime:** do not set ampm when the column doesn't exist ([#22220](https://github.com/ionic-team/ionic/issues/22220)) ([18fb885](https://github.com/ionic-team/ionic/commit/18fb8855e0c45fe65843b33811812c51c74de90f)), closes [#22149](https://github.com/ionic-team/ionic/issues/22149)
* **datetime:** remove the automatic switching from am to pm ([#22207](https://github.com/ionic-team/ionic/issues/22207)) ([f81d18c](https://github.com/ionic-team/ionic/commit/f81d18c6f9f1bce056afda1cac4cf6d6ace0a7ca)), closes [#18924](https://github.com/ionic-team/ionic/issues/18924) [#22171](https://github.com/ionic-team/ionic/issues/22171) [#22199](https://github.com/ionic-team/ionic/issues/22199)
* **item:** properly align datetime and select with fixed or no labels ([#22221](https://github.com/ionic-team/ionic/issues/22221)) ([f42c688](https://github.com/ionic-team/ionic/commit/f42c688f4630e3dc5d10b947e7f2bee9d5967d8c)), closes [#18773](https://github.com/ionic-team/ionic/issues/18773) [#18761](https://github.com/ionic-team/ionic/issues/18761) [#18779](https://github.com/ionic-team/ionic/issues/18779)
* **label:** keep color when focused on a floating or stacked label ([#18576](https://github.com/ionic-team/ionic/issues/18576)) ([992580a](https://github.com/ionic-team/ionic/commit/992580a3830321bdf9591681ebe38e823205389d)), closes [#18531](https://github.com/ionic-team/ionic/issues/18531)
* **select:** do not close popover or set value when switching with arrow keys ([#22210](https://github.com/ionic-team/ionic/issues/22210)) ([1878c8e](https://github.com/ionic-team/ionic/commit/1878c8e7e01c02f06bdc5f1562af0d45531539cf)), closes [#22179](https://github.com/ionic-team/ionic/issues/22179)



## [5.3.4](https://github.com/ionic-team/ionic/compare/v5.3.3...v5.3.4) (2020-09-25)


### Bug Fixes

* **alert:** follow accessibility guidelines outlined by wai-aria ([#22159](https://github.com/ionic-team/ionic/issues/22159)) ([e9b2cc8](https://github.com/ionic-team/ionic/commit/e9b2cc8453f5e1c45d44397df738f60ea5b32efd)), closes [#21744](https://github.com/ionic-team/ionic/issues/21744)
* **overlays:** return focus to presenting element after dismissal ([#22167](https://github.com/ionic-team/ionic/issues/22167)) ([cc45ad8](https://github.com/ionic-team/ionic/commit/cc45ad815c002c5d890f2e105c546b4c3b3a58c0)), closes [#21768](https://github.com/ionic-team/ionic/issues/21768)
* **picker-column:** add cancelable check to avoid intervention error in chrome ([#22140](https://github.com/ionic-team/ionic/issues/22140)) ([a24a041](https://github.com/ionic-team/ionic/commit/a24a041064fd9ce6ca161d3522083d50e585e9dd)), closes [#22137](https://github.com/ionic-team/ionic/issues/22137)
* **radio:** follow accessibility guidelines outlined by wai-aria ([#22113](https://github.com/ionic-team/ionic/issues/22113)) ([ea0e049](https://github.com/ionic-team/ionic/commit/ea0e0499e24865faad3d11f50f7037645f6cdcc8)), closes [#21743](https://github.com/ionic-team/ionic/issues/21743)
* **reorder:** allow click event propagation when reorder group is disabled ([#21947](https://github.com/ionic-team/ionic/issues/21947)) ([baafe08](https://github.com/ionic-team/ionic/commit/baafe08927b7b858170496605781e6fa682e0147)), closes [#21017](https://github.com/ionic-team/ionic/issues/21017)
* **segment:** do not allow text selection on desktop ([#22158](https://github.com/ionic-team/ionic/issues/22158)) ([1526bdf](https://github.com/ionic-team/ionic/commit/1526bdfb492c1fa8d71f8a1af8cd97abd9e62642))


### Performance Improvements

* **segment:** improve scrolling performance on ios when using segment ([#22110](https://github.com/ionic-team/ionic/issues/22110)) ([68afc49](https://github.com/ionic-team/ionic/commit/68afc49e9ed27acffb0b765b7be6b03e8574850d)), closes [#22095](https://github.com/ionic-team/ionic/issues/22095)



## [5.3.3](https://github.com/ionic-team/ionic/compare/v5.3.2...v5.3.3) (2020-09-17)


### Bug Fixes

* **datetime:** do not reset to am when changing hour and pm is set ([#21997](https://github.com/ionic-team/ionic/issues/21997)) ([8b85fe0](https://github.com/ionic-team/ionic/commit/8b85fe0d9eea39adfdcf790bf00d8ef91d5edbe7)), closes [#19175](https://github.com/ionic-team/ionic/issues/19175) [#19260](https://github.com/ionic-team/ionic/issues/19260) [#20026](https://github.com/ionic-team/ionic/issues/20026) [#16630](https://github.com/ionic-team/ionic/issues/16630)
* **input:** only focus the first input / textarea when clicking on the parent item ([#22049](https://github.com/ionic-team/ionic/issues/22049)) ([99f2532](https://github.com/ionic-team/ionic/commit/99f2532ee174da79e2b6a462cfa124673edc1170)), closes [#22037](https://github.com/ionic-team/ionic/issues/22037) [#22032](https://github.com/ionic-team/ionic/issues/22032)
* **react:** Keep a hold of previous routes when doing a redirect, closes [#22053](https://github.com/ionic-team/ionic/issues/22053) ([74af3cb](https://github.com/ionic-team/ionic/commit/74af3cb50b089a6bd60d515158e03b18b86455b8))
* **react:** redirect routes should unmount leaving component, fixes [#22022](https://github.com/ionic-team/ionic/issues/22022) ([#22029](https://github.com/ionic-team/ionic/issues/22029)) ([b11e06c](https://github.com/ionic-team/ionic/commit/b11e06cec1d3c28bab9f29185fe2c3a2975b092f))
* **textarea:** do not generate duplicate IDs between ion-input and ion-textarea ([#22074](https://github.com/ionic-team/ionic/issues/22074)) ([c72c7ff](https://github.com/ionic-team/ionic/commit/c72c7ffa983af8885dd93f9adfcb3f2af232d2d9)), closes [#21542](https://github.com/ionic-team/ionic/issues/21542)



## [5.3.2](https://github.com/ionic-team/ionic/compare/v5.3.1...v5.3.2) (2020-08-27)


### Bug Fixes

* **input:** improve reliability of scroll assist when accessory bar is enabled ([#21936](https://github.com/ionic-team/ionic/issues/21936)) ([22477fb](https://github.com/ionic-team/ionic/commit/22477fb9bf7c0637aa5c8d0aab34c8ccc521b0b9)), closes [#21912](https://github.com/ionic-team/ionic/issues/21912)
* **input:** properly focus the input when clicking the item padding in WebKit ([#21930](https://github.com/ionic-team/ionic/issues/21930)) ([e4964ff](https://github.com/ionic-team/ionic/commit/e4964ff77b317c92b201cf7c265787b55bdde4d4)), closes [#21509](https://github.com/ionic-team/ionic/issues/21509)
* **input:** remain focused in the input after pressing the clear button ([#21985](https://github.com/ionic-team/ionic/issues/21985)) ([6878fb9](https://github.com/ionic-team/ionic/commit/6878fb9eb99c17908f5630019efaa762b5b006e0)), closes [#21549](https://github.com/ionic-team/ionic/issues/21549)
* **label:** use translateY so input caret shows up due to webkit issue ([#21949](https://github.com/ionic-team/ionic/issues/21949)) ([00eac33](https://github.com/ionic-team/ionic/commit/00eac33053f49dbebf22ef95fddcb66570ed117a)), closes [#21943](https://github.com/ionic-team/ionic/issues/21943)
* **overlays:** prevent focus from being stolen when presenting another overlay from within a modal ([#21856](https://github.com/ionic-team/ionic/issues/21856)) ([5c177d7](https://github.com/ionic-team/ionic/commit/5c177d756f7755e766d5b619d49825c4799aee47)), closes [#21840](https://github.com/ionic-team/ionic/issues/21840)
* **range:** properly display stacked labels in an item with a range ([#21944](https://github.com/ionic-team/ionic/issues/21944)) ([9f4b01e](https://github.com/ionic-team/ionic/commit/9f4b01e17fd2f5e742d32bc9e080b6b394c43d37)), closes [#21625](https://github.com/ionic-team/ionic/issues/21625)
* **react:** export correct animation types ([#21950](https://github.com/ionic-team/ionic/issues/21950)) ([36e4bf7](https://github.com/ionic-team/ionic/commit/36e4bf7dd76e396f910d28445566b5503cc84c8c))
* **react:** removed exporting of ionRenderToString to decrease bundle size, closes [#21917](https://github.com/ionic-team/ionic/issues/21917) ([#21928](https://github.com/ionic-team/ionic/issues/21928)) ([434befe](https://github.com/ionic-team/ionic/commit/434befea5f31aa599ee5b1b7edf29238912c23d9))
* **react:** setting active tab properly on mount, closes [#21830](https://github.com/ionic-team/ionic/issues/21830) ([#21833](https://github.com/ionic-team/ionic/issues/21833)) ([f58424f](https://github.com/ionic-team/ionic/commit/f58424f62596b9eb82bebb8e07c211e1725c025a))
* **react:** fix tab currentHref when changing tabs, closes [#21834](https://github.com/ionic-team/ionic/issues/21834) ([#21835](https://github.com/ionic-team/ionic/issues/21835)) ([74468ab](https://github.com/ionic-team/ionic/commit/74468ab7972b174ba85bf239306c27080f253a4a))



## [5.3.1](https://github.com/ionic-team/ionic/compare/v5.3.0...v5.3.1) (2020-07-27)


### Bug Fixes

* **react:** properly extend HTMLElement for tabs ([bfddb17](https://github.com/ionic-team/ionic/commit/bfddb170659224d0f826762744dfe44a85813d36)), closes [#21803](https://github.com/ionic-team/ionic/issues/21803)



# [5.3.0 Phosphorus](https://github.com/ionic-team/ionic/compare/v5.2.3...v5.3.0) (2020-07-23)


### Bug Fixes

* **angular:** per-page animations now work with swipe to go back ([#21706](https://github.com/ionic-team/ionic/issues/21706)) ([2664587](https://github.com/ionic-team/ionic/commit/2664587749e45100a04f70796733de162b26cdf7)), closes [#21692](https://github.com/ionic-team/ionic/issues/21692)
* **datetime:** remove unneeded combobox role ([#21708](https://github.com/ionic-team/ionic/issues/21708)) ([f00ad8a](https://github.com/ionic-team/ionic/commit/f00ad8a8357ccd7fe85631dad0c841f2d4c72487))
* **input:** clear button can now be tabbed to ([#21633](https://github.com/ionic-team/ionic/issues/21633)) ([1dcd9de](https://github.com/ionic-team/ionic/commit/1dcd9de50ae16bfa102e98120a022de5b0287baa))
* **ios:** improve scroll assist reliability on password inputs ([#21703](https://github.com/ionic-team/ionic/issues/21703)) ([3cbf9e7](https://github.com/ionic-team/ionic/commit/3cbf9e7c4c225d6b02237d8ea8f16fb924ba360e)), closes [#21688](https://github.com/ionic-team/ionic/issues/21688)
* **keyboard:** keyboard events now consistently fire on android ([#21741](https://github.com/ionic-team/ionic/issues/21741)) ([020f3cc](https://github.com/ionic-team/ionic/commit/020f3cc56cb6dac23dd8766a3802422500b510e2)), closes [#21734](https://github.com/ionic-team/ionic/issues/21734)
* **nav:** insertPages method correctly inserts multiple pages with props ([#21725](https://github.com/ionic-team/ionic/issues/21725)) ([eb592b8](https://github.com/ionic-team/ionic/commit/eb592b8917b8a7412d8c346f41b47d3b79002b95)), closes [#21724](https://github.com/ionic-team/ionic/issues/21724)
* **overlays:** trap focus inside overlay components except toast ([#21716](https://github.com/ionic-team/ionic/issues/21716)) ([fff4aec](https://github.com/ionic-team/ionic/commit/fff4aec6cfbd48566594a05f4af57dd0578977a8)), closes [#21647](https://github.com/ionic-team/ionic/issues/21647)
* **segment-button:** allow min-width to be overridden ([#21722](https://github.com/ionic-team/ionic/issues/21722)) ([88f1828](https://github.com/ionic-team/ionic/commit/88f1828bd8f6b9a1c1f3dcb220d93067bed7f404)), closes [#21105](https://github.com/ionic-team/ionic/issues/21105)
* **title:** allow overriding of large title transform-origin ([#21770](https://github.com/ionic-team/ionic/issues/21770)) ([dbe6853](https://github.com/ionic-team/ionic/commit/dbe6853884bd76c3d8e229cd58e1571d9b3a7249)), closes [#21761](https://github.com/ionic-team/ionic/issues/21761)
* **virtual-scroll:** properly calculate top offset when nested ([#21581](https://github.com/ionic-team/ionic/issues/21581)) ([d297ecb](https://github.com/ionic-team/ionic/commit/d297ecb87ad3e1c8f0988f0571a475081ce368f8))


### Features

* **card:** expose global card css variables ([#21756](https://github.com/ionic-team/ionic/issues/21756)) ([096eef4](https://github.com/ionic-team/ionic/commit/096eef4a79c2d05c37eb224466c6d7d512d2be20)), closes [#21694](https://github.com/ionic-team/ionic/issues/21694)
* **input:** accept datetime-local, month, and week type values ([#21758](https://github.com/ionic-team/ionic/issues/21758)) ([fa93dff](https://github.com/ionic-team/ionic/commit/fa93dffdb4f350e8db8acc7f06b06761974eea8e)), closes [#21757](https://github.com/ionic-team/ionic/issues/21757)
* **input, textarea:** expose native events for ionBlur and ionFocus ([#21777](https://github.com/ionic-team/ionic/issues/21777)) ([a625c83](https://github.com/ionic-team/ionic/commit/a625c837a60abc07ad71c696196a89f1a25a4c27)), closes [#17363](https://github.com/ionic-team/ionic/issues/17363)
* **react:** add custom history to IonReactRouter ([#21775](https://github.com/ionic-team/ionic/issues/21775)) ([d4a5fbd](https://github.com/ionic-team/ionic/commit/d4a5fbd955e8ecccba8b77491943d81fdf5a5ef4)), closes [#20297](https://github.com/ionic-team/ionic/issues/20297)
* **react:** add new react router ([#21693](https://github.com/ionic-team/ionic/issues/21693)) ([c171ccb](https://github.com/ionic-team/ionic/commit/c171ccbd37c1ee4b4934758a3a759170ff357cb2))
* **router:** add navigation hooks ([#21709](https://github.com/ionic-team/ionic/issues/21709)) ([77464ef](https://github.com/ionic-team/ionic/commit/77464ef21aaaa5afa7a02e5417f3ec295b240601))
* **segment-button, toast:** expose additional shadow parts ([#21532](https://github.com/ionic-team/ionic/issues/21532)) ([a5e4669](https://github.com/ionic-team/ionic/commit/a5e4669c4bcbcb2cdd605ed17c35e42438bd5596))
* **select:** add optional generic typings ([#21514](https://github.com/ionic-team/ionic/issues/21514)) ([7c2d0c9](https://github.com/ionic-team/ionic/commit/7c2d0c981ab91930478c4b76220ce4ec4ed4e471))



## [5.2.3](https://github.com/ionic-team/ionic/compare/v5.2.2...v5.2.3) (2020-07-01)


### Bug Fixes

* **angular:** expose createAnimation in addition to AnimationController ([#21616](https://github.com/ionic-team/ionic/issues/21616)) ([a5b3750](https://github.com/ionic-team/ionic/commit/a5b3750ee2a7c005f80f8453b03c67dd1a5622ca)), closes [#21615](https://github.com/ionic-team/ionic/issues/21615)
* **select:** change role to listbox ([#21609](https://github.com/ionic-team/ionic/issues/21609)) ([8c79e2c](https://github.com/ionic-team/ionic/commit/8c79e2c5b58ad562967f2d559c6b548e57536936))
* **slides:** enable keyboard integration ([#21608](https://github.com/ionic-team/ionic/issues/21608)) ([26674f1](https://github.com/ionic-team/ionic/commit/26674f1dfa8c9a28f5525f1b16070e8ec494c232)), closes [#21554](https://github.com/ionic-team/ionic/issues/21554)
* **textarea:** add aria-labelledby to native textarea ([#21606](https://github.com/ionic-team/ionic/issues/21606)) ([88f23b1](https://github.com/ionic-team/ionic/commit/88f23b1626eb400336f2f52a3e0d34ac3c161e64)), closes [#21600](https://github.com/ionic-team/ionic/issues/21600)



## [5.2.2](https://github.com/ionic-team/ionic/compare/v5.2.1...v5.2.2) (2020-06-17)


### Bug Fixes

* **action-sheet, alert:** resolve double click issue when running in iOS mode on chrome ([#21506](https://github.com/ionic-team/ionic/issues/21506)) ([bcccc21](https://github.com/ionic-team/ionic/commit/bcccc217b8833a284a1781e287db5e46043b3548)), closes [#21503](https://github.com/ionic-team/ionic/issues/21503)
* **angular:** fix issue where navAnimation was being incorrectly overridden ([#21508](https://github.com/ionic-team/ionic/issues/21508)) ([e968bd0](https://github.com/ionic-team/ionic/commit/e968bd029a4fb37b4001d96a490c6091a948785a)), closes [#21495](https://github.com/ionic-team/ionic/issues/21495)
* **input:** add aria-label to clear button ([#21538](https://github.com/ionic-team/ionic/issues/21538)) ([d8b377f](https://github.com/ionic-team/ionic/commit/d8b377ffeb88eaae23b33eadeae5c8e54e1bc77c)), closes [#21537](https://github.com/ionic-team/ionic/issues/21537)
* **ios:** respect toolbar opacity when doing nav transition ([#21512](https://github.com/ionic-team/ionic/issues/21512)) ([24cfdc3](https://github.com/ionic-team/ionic/commit/24cfdc308f63b7a55969ac58806eafd67116b017))
* **segment:** ensure checked classes get set after not having a value ([#21547](https://github.com/ionic-team/ionic/issues/21547)) ([17308f2](https://github.com/ionic-team/ionic/commit/17308f247f8750029ece39548c9f457e15326189)), closes [#21546](https://github.com/ionic-team/ionic/issues/21546)


## [5.2.1](https://github.com/ionic-team/ionic/compare/v5.2.0...v5.2.1) (2020-06-11)


### Bug Fixes

* **angular:** resolve error when not using ngModel on components ([4083e32](https://github.com/ionic-team/ionic/commit/4083e32e103db71f6db86ed1ecd398fda407c28b))



# [5.2.0 Silicon](https://github.com/ionic-team/ionic/compare/v5.1.1...v5.2.0) (2020-06-10)


### Bug Fixes

* **action-sheet, toast:** allow button handler to return `Promise<void>` ([#21259](https://github.com/ionic-team/ionic/issues/21259)) ([7703da2](https://github.com/ionic-team/ionic/commit/7703da28f8181b02390b97a7d4d02df99b2ad34c))
* **angular:** patch FormControl methods to properly sync Ionic form classes ([#21429](https://github.com/ionic-team/ionic/issues/21429)) ([e95b481](https://github.com/ionic-team/ionic/commit/e95b481a53191582bca635f322ad07eadbd62d64))
* **datetime:** ensure year-only values are not affected by timezone when parsing ([#21309](https://github.com/ionic-team/ionic/issues/21309)) ([3937101](https://github.com/ionic-team/ionic/commit/3937101e5c2b181a6b7926eb8386c22b0f887716))
* **header:** large title transition now works on older versions of iOS ([#21339](https://github.com/ionic-team/ionic/issues/21339)) ([2dac12c](https://github.com/ionic-team/ionic/commit/2dac12c577e0c7a5310857389dbda2b2b3dfadd1))
* **img:** use setTimeout fallback on older versions of chrome  ([#21358](https://github.com/ionic-team/ionic/issues/21358)) ([0bf9449](https://github.com/ionic-team/ionic/commit/0bf9449ee1f9b2498e35f61511cb3e018814c6ca))
* **ios:** add haptic drag gesture for action sheet and alert components ([#21060](https://github.com/ionic-team/ionic/issues/21060)) ([33be1f0](https://github.com/ionic-team/ionic/commit/33be1f061ebbe27ee22e357c394f112af42ec360))
* **item:** inherit align-items from parent item ([#19278](https://github.com/ionic-team/ionic/issues/19278)) ([882f8fe](https://github.com/ionic-team/ionic/commit/882f8fef07dfb6ebda17ca09046d1af281075098)), closes [#18703](https://github.com/ionic-team/ionic/issues/18703)
* **item:** input-wrapper now inherits overflow ([#21282](https://github.com/ionic-team/ionic/issues/21282)) ([29d208d](https://github.com/ionic-team/ionic/commit/29d208de88f340e216e22badb6366bba4eda8bfb))
* **menu-button:** screen readers now properly announce menu button ([#21324](https://github.com/ionic-team/ionic/issues/21324)) ([eaf4fb6](https://github.com/ionic-team/ionic/commit/eaf4fb6b2a6d68f5c3d8d49ef41b4885f096070d))
* **modal:** card style modal no longer gets stuck when swiping quickly ([#21224](https://github.com/ionic-team/ionic/issues/21224)) ([448dfa0](https://github.com/ionic-team/ionic/commit/448dfa0a6955008ce4dc73354f5b8319ae1a1cc2))
* **modal:** set card-style modal height using the --height css variable ([#21453](https://github.com/ionic-team/ionic/issues/21453)) ([a4f0bdb](https://github.com/ionic-team/ionic/commit/a4f0bdb4c3ceeeaf902d520e9aa72e04a6ec2302))
* **reorder-group:** revert item to original position when passing false to complete ([#21396](https://github.com/ionic-team/ionic/issues/21396)) ([5f2001c](https://github.com/ionic-team/ionic/commit/5f2001c43c0846ec8973cbb8eb5662976ba7e31a)), closes [#19128](https://github.com/ionic-team/ionic/issues/19128)
* **router:** use correct nav transition when going back ([#21301](https://github.com/ionic-team/ionic/issues/21301)) ([c8db0d5](https://github.com/ionic-team/ionic/commit/c8db0d5eeba6f10d1492e95e6df6b4d871d43400))
* **scroll-assist:** improve scroll detection accuracy ([#21416](https://github.com/ionic-team/ionic/issues/21416)) ([137c49d](https://github.com/ionic-team/ionic/commit/137c49d70be45e1b0ee73d41fed6e9d69a2caa32))
* **slides:** update Swiper dependency to resolve error when doing SSR ([#21350](https://github.com/ionic-team/ionic/issues/21350)) ([3290604](https://github.com/ionic-team/ionic/commit/32906048a491961ec7340ba2e085807ea8a9c118))
* **textarea:** native textarea inherits max/min width and height ([#21333](https://github.com/ionic-team/ionic/issues/21333)) ([2377480](https://github.com/ionic-team/ionic/commit/237748049c7644ae8a7a74101ece5cfd7a160470))


### Features

* **alert:** add destructive role to alert buttons ([#21269](https://github.com/ionic-team/ionic/issues/21269)) ([e53f024](https://github.com/ionic-team/ionic/commit/e53f0241e2bf91461c55097fde271ae85ca644ea))
* **alert:** add support for custom input attributes ([#21365](https://github.com/ionic-team/ionic/issues/21365)) ([1ed8169](https://github.com/ionic-team/ionic/commit/1ed81693f225b6801a0897ef1a8314999c122484))
* **all:** add all autocomplete values to input and searchbar ([#21297](https://github.com/ionic-team/ionic/issues/21297)) ([4fd7c0c](https://github.com/ionic-team/ionic/commit/4fd7c0cc5a6c97100fa380e4ff1be0bb84c7006b))
* **all:** add optional generic typings for overlay component methods ([#21393](https://github.com/ionic-team/ionic/issues/21393)) ([5bf83b8](https://github.com/ionic-team/ionic/commit/5bf83b80d7d2749719dd1a280ae8e205fbc4b2a9))
* **all:** add shadow parts to missing components ([#21436](https://github.com/ionic-team/ionic/issues/21436)) ([17375d2](https://github.com/ionic-team/ionic/commit/17375d232500b47ef1cacd7c028c38990d307984))
* **all:** add support for configuring animations on a per-page basis  ([#21433](https://github.com/ionic-team/ionic/issues/21433)) ([f34d375](https://github.com/ionic-team/ionic/commit/f34d3752e3462c9d81487fc86af5ec185cc3d1e3))
* **angular:** expose activatedView ([#21302](https://github.com/ionic-team/ionic/issues/21302)) ([829a0d9](https://github.com/ionic-team/ionic/commit/829a0d9be5a20c5fc96b5c5f18fedc4eb5e5b9ec))
* **angular:** expose getPlatforms and isPlatform ([#21308](https://github.com/ionic-team/ionic/issues/21308)) ([4af54a2](https://github.com/ionic-team/ionic/commit/4af54a2fea5d9cef843b1ebce849fb4a5c206f0b))
* **angular:** add strongly typed Ionic lifecycle hooks ([#18044](https://github.com/ionic-team/ionic/issues/18044)) ([53fc8e3](https://github.com/ionic-team/ionic/commit/53fc8e37c89cea793d0e00246d52805166730108)), closes [#18043](https://github.com/ionic-team/ionic/issues/18043)
* **fab-button:** add close icon font size css variable ([#19628](https://github.com/ionic-team/ionic/issues/19628)) ([df408f9](https://github.com/ionic-team/ionic/commit/df408f91f1aef903adaa5e635fef9bc7542e8739))
* **fab-button:** add closeIcon property ([#19626](https://github.com/ionic-team/ionic/issues/19626)) ([698e526](https://github.com/ionic-team/ionic/commit/698e526b9f882e98efc4bf160999182c645b772c))
* **select-option:** pass class from the option to the interface for individual styling  ([#21304](https://github.com/ionic-team/ionic/issues/21304)) ([5285824](https://github.com/ionic-team/ionic/commit/5285824da5258ea638420fc60c50e0a19952f89c))



## [5.1.1](https://github.com/ionic-team/ionic/compare/v5.1.0...v5.1.1) (2020-05-13)


### Bug Fixes

* **all:** improve scroll assist reliability for below the fold inputs ([#21206](https://github.com/ionic-team/ionic/issues/21206)) ([7166a29](https://github.com/ionic-team/ionic/commit/7166a290cc1dd728e5bab2f7e39b8d41954e3808))
* **all:** overlay components no longer display outline when focused ([#21226](https://github.com/ionic-team/ionic/issues/21226)) ([bb62023](https://github.com/ionic-team/ionic/commit/bb62023a0cdc5a64e956766c7d1704797fc8c9ae))
* **display:** remove 1px gap between mutually exclusive breakpoints ([#21276](https://github.com/ionic-team/ionic/issues/21276)) ([703ef5c](https://github.com/ionic-team/ionic/commit/703ef5c99284f1e2b8d63c3af411c945dc756e20)), closes [#20993](https://github.com/ionic-team/ionic/issues/20993) [#20743](https://github.com/ionic-team/ionic/issues/20743)
* **header:** do not error on collapsible header on devices that do not support IntersectionObserve ([#21222](https://github.com/ionic-team/ionic/issues/21222)) ([0c13f25](https://github.com/ionic-team/ionic/commit/0c13f25bbb4d4674e76cd19b098900f698e7146e))
* **input:** check for tabindex and pass it properly to native input ([#21170](https://github.com/ionic-team/ionic/issues/21170)) ([dd4cb70](https://github.com/ionic-team/ionic/commit/dd4cb706ffeebc2069645ea03f0e7a96d6b14d43)), closes [#17515](https://github.com/ionic-team/ionic/issues/17515)
* **ios:** position page transition shadow properly under footer ([#21095](https://github.com/ionic-team/ionic/issues/21095)) ([50678c0](https://github.com/ionic-team/ionic/commit/50678c03c9829a87408633dabd77b21da1650a84))
* **md:** do not hide page when swipe gesture is cancelled ([#21247](https://github.com/ionic-team/ionic/issues/21247)) ([f334e83](https://github.com/ionic-team/ionic/commit/f334e83a43f855ac1e36eaf73954df6ee27a03af))
* **overlays:** respect keyboardClose property when opening overlays ([#21240](https://github.com/ionic-team/ionic/issues/21240)) ([9d0dcbb](https://github.com/ionic-team/ionic/commit/9d0dcbbd31fc34ad8952eacb9864ad1b31636113))
* **picker:** haptics now work properly ([#21268](https://github.com/ionic-team/ionic/issues/21268)) ([8e11ecc](https://github.com/ionic-team/ionic/commit/8e11ecc136c61e925e76c0e48ab21611e09b5898))
* **refresher:** correctly select shadow root on older browsers ([#21237](https://github.com/ionic-team/ionic/issues/21237)) ([f23f1cb](https://github.com/ionic-team/ionic/commit/f23f1cb37eef02307c357fbb48c0db729974cdc4))
* **refresher:** refresher completes even after switching to a new tab ([#21236](https://github.com/ionic-team/ionic/issues/21236)) ([1e6f923](https://github.com/ionic-team/ionic/commit/1e6f92377aaf0804cfd0ddb9b06da7b4c9dc355f))
* **segment-button:** screen readers now announce selected state properly ([#21273](https://github.com/ionic-team/ionic/issues/21273)) ([85cc35e](https://github.com/ionic-team/ionic/commit/85cc35ee9163a38c48c6df466a3c036906437804))
* **toggle:** screen readers now announce toggle properly ([#21168](https://github.com/ionic-team/ionic/issues/21168)) ([1fbdb22](https://github.com/ionic-team/ionic/commit/1fbdb2255e4ff7fccf22d9ccc12b7f9bb4c3a064))



# [5.1.0 Aluminum](https://github.com/ionic-team/ionic/compare/v5.0.7...v5.1.0) (2020-04-30)


### Bug Fixes

* **action-sheet:** show correct cancel button background on dark mode ([#21084](https://github.com/ionic-team/ionic/issues/21084)) ([e442324](https://github.com/ionic-team/ionic/commit/e4423247537cbcda174305ab9fdde4a57c50a88e)), closes [#21082](https://github.com/ionic-team/ionic/issues/21082)
* **all:** correctly default gestures to use a passive listener ([#21038](https://github.com/ionic-team/ionic/issues/21038)) ([dea9248](https://github.com/ionic-team/ionic/commit/dea9248763737164e17678119c775cdfc0e53ccd))
* **angular:** do not navigate to the same tab if already active ([#21085](https://github.com/ionic-team/ionic/issues/21085)) ([15203de](https://github.com/ionic-team/ionic/commit/15203de08bf97f27e33f35994444c2c4843b3a44)), closes [#21074](https://github.com/ionic-team/ionic/issues/21074) [#19943](https://github.com/ionic-team/ionic/issues/19943)
* **back-button:** announce back button text correctly by screen readers ([#21053](https://github.com/ionic-team/ionic/issues/21053)) ([14c226c](https://github.com/ionic-team/ionic/commit/14c226ce75958da14b66821028d6f3a6852d695c)), closes [#21043](https://github.com/ionic-team/ionic/issues/21043)
* **datetime:** locale inputs are now reactive ([#20826](https://github.com/ionic-team/ionic/issues/20826)) ([a75e8f3](https://github.com/ionic-team/ionic/commit/a75e8f34d608c167f8d429ddbf39e94173204a61)), closes [#20367](https://github.com/ionic-team/ionic/issues/20367)
* **ios:** account for nested tabs with page transition ([#20955](https://github.com/ionic-team/ionic/issues/20955)) ([e23dec5](https://github.com/ionic-team/ionic/commit/e23dec5eb9fbb58eedffabefca8d7d643f49f7b9)), closes [#20948](https://github.com/ionic-team/ionic/issues/20948)
* **ios:** properly animate content when navigating from a tabbed page ([#20918](https://github.com/ionic-team/ionic/issues/20918)) ([8a02b28](https://github.com/ionic-team/ionic/commit/8a02b28efeca81c25176ff52508b4005441e8314)), closes [#20912](https://github.com/ionic-team/ionic/issues/20912)
* **loading:** correctly announce spinner by screen readers ([#21116](https://github.com/ionic-team/ionic/issues/21116)) ([63d8f62](https://github.com/ionic-team/ionic/commit/63d8f6239cc39e6a111108bd1a2557c297a256ae)), closes [#21107](https://github.com/ionic-team/ionic/issues/21107)
* **md:** do not display blank screen when using MD page transition and swipe gesture ([#21058](https://github.com/ionic-team/ionic/issues/21058)) ([4973807](https://github.com/ionic-team/ionic/commit/497380743df4461688455bc8b8440d2f3cc7c247)), closes [#21056](https://github.com/ionic-team/ionic/issues/220800)
* **modal:** properly inherit border radius for modals on Safari ([#20887](https://github.com/ionic-team/ionic/issues/20887)) ([bd64509](https://github.com/ionic-team/ionic/commit/bd64509bae9dd4c960134d986ce8150dc1a9d3b4)), closes [#20878](https://github.com/ionic-team/ionic/issues/20878)
* **modal:** swipeToClose property is now reactive ([#21073](https://github.com/ionic-team/ionic/issues/21073)) ([4bd9134](https://github.com/ionic-team/ionic/commit/4bd91344730bd26c66a8d838436d94045dc21f78)), closes [#21072](https://github.com/ionic-team/ionic/issues/21072)
* **overlays:** focus overlay when presented ([#20997](https://github.com/ionic-team/ionic/issues/20997)) ([fc2be8d](https://github.com/ionic-team/ionic/commit/fc2be8d08bbb495df911783f808d7ca511942172)), closes [#19882](https://github.com/ionic-team/ionic/issues/19882) [#17126](https://github.com/ionic-team/ionic/issues/17126)
* **overlays:** prevent accidental clicks when dismissing overlays ([#21093](https://github.com/ionic-team/ionic/issues/21093)) ([671802f](https://github.com/ionic-team/ionic/commit/671802f9a2050d9942e9dfb2db9f9c58bdc58620)), closes [#21092](https://github.com/ionic-team/ionic/issues/21092)
* **react:** IonTabBar properly extends IonicReactProps ([#21009](https://github.com/ionic-team/ionic/issues/21009)) ([102a842](https://github.com/ionic-team/ionic/commit/102a842bd2a967c04a3cf42ed4e0811929bd4d99)), closes [#21006](https://github.com/ionic-team/ionic/issues/21006)
* **refresher:** properly check for Haptics plugin on web ([#21156](https://github.com/ionic-team/ionic/issues/21156)) ([c53b136](https://github.com/ionic-team/ionic/commit/c53b136dbe7ed7fc0fc298593f8b677a66c77910)), closes [#21148](https://github.com/ionic-team/ionic/issues/21148)
* **refresher:** properly calculate content dimensions in native ion-refresher ([#21157](https://github.com/ionic-team/ionic/issues/21157)) ([83dcc71](https://github.com/ionic-team/ionic/commit/83dcc7168a48bc5b05583fb7c01b5eff9d1a67f8))
* **router:** account for query string when pushing page ([#21071](https://github.com/ionic-team/ionic/issues/21071)) ([eab3373](https://github.com/ionic-team/ionic/commit/eab33732133bd43ca6788bba6e93a9b545ee058a))
* **searchbar:** correctly announce the cancel button text by screen readers ([#21049](https://github.com/ionic-team/ionic/issues/21049)) ([15a603b](https://github.com/ionic-team/ionic/commit/15a603b39797dee6baf7e33d58907f98ced7e86d)), closes [#21013](https://github.com/ionic-team/ionic/issues/21013)
* **select:** account for MutationObserver when performing SSR ([#21068](https://github.com/ionic-team/ionic/issues/21068)) ([66e8e64](https://github.com/ionic-team/ionic/commit/66e8e6404d87a2767e71b13bed19706b29ad1b9c)), closes [#21063](https://github.com/ionic-team/ionic/issues/21063)
* **slides:** slides no longer break with Angular Ivy enabled ([#20899](https://github.com/ionic-team/ionic/issues/20899)) ([3123a31](https://github.com/ionic-team/ionic/commit/3123a318b6755dbf8fde8476f81c37e6ffa9b70e)), closes [#20356](https://github.com/ionic-team/ionic/issues/20356)
* **split-pane:** properly show border in rtl mode ([#20995](https://github.com/ionic-team/ionic/issues/20995)) ([7a21708](https://github.com/ionic-team/ionic/commit/7a21708d24bab6a388e1b55c88337e3d0f7922eb)), closes [#20994](https://github.com/ionic-team/ionic/issues/20994)
* **textarea:** height is set correctly when using autoGrow in modals ([#20971](https://github.com/ionic-team/ionic/issues/20971)) ([32ee040](https://github.com/ionic-team/ionic/commit/32ee040e3f0d7012790f190856097d0c6fa0eaa2)), closes [#18993](https://github.com/ionic-team/ionic/issues/18993)

### Features

* **all:** add ability to continue processing hardware back button events ([#20613](https://github.com/ionic-team/ionic/issues/20613)) ([3821c04](https://github.com/ionic-team/ionic/commit/3821c0463ae9a02e67c835a221c4ea01fab306d1)), closes [#17824](https://github.com/ionic-team/ionic/issues/17824)
* **all:** add ability to eject from Ionic sanitizer ([#20457](https://github.com/ionic-team/ionic/issues/20457)) ([fa9ddc9](https://github.com/ionic-team/ionic/commit/fa9ddc91bc9fefc2bb247cfe7511384f77335476)), closes [#18277](https://github.com/ionic-team/ionic/issues/18277)
* **angular:** support multi-app for ng-add schematic ([#20768](https://github.com/ionic-team/ionic/issues/20768)) ([39e6c8f](https://github.com/ionic-team/ionic/commit/39e6c8f55b514b0c7330dd3a790c859bb3410404))
* **animation:** add option to clean up old animation stylesheets ([#20940](https://github.com/ionic-team/ionic/issues/20940)) ([5b98405](https://github.com/ionic-team/ionic/commit/5b9840508faf6a2c985726be889c1f2fca0e0733)), closes [#20610](https://github.com/ionic-team/ionic/issues/20610)
* **app:** add keyboard open and close events (ionKeyboardDidShow and ionKeyboardDidHide) ([#18478](https://github.com/ionic-team/ionic/issues/18478)) ([ae5f1dd](https://github.com/ionic-team/ionic/commit/ae5f1ddff0c0799167a154abbb418b2ad3434d47))
* **back-button:** add backButtonDefaultHref property to Ionic Config ([#20491](https://github.com/ionic-team/ionic/issues/20491)) ([1b11ff7](https://github.com/ionic-team/ionic/commit/1b11ff7fb92b75f5c869c79d5e0d5dfd8889597f)), closes [#19305](https://github.com/ionic-team/ionic/issues/19305)
* **checkbox:** add parts support for container, mark ([#20950](https://github.com/ionic-team/ionic/issues/20950)) ([d4b9151](https://github.com/ionic-team/ionic/commit/d4b9151396aed6d7a29d8f40d6e607bf6258b4ef))
* **content:** add parts support for background, scroll ([#20929](https://github.com/ionic-team/ionic/issues/20929)) ([578ab93](https://github.com/ionic-team/ionic/commit/578ab93d297f101ac899b6b6b099445ac679c71f))
* **datetime:** add parts support for placeholder, text ([#20930](https://github.com/ionic-team/ionic/issues/20930)) ([76ca475](https://github.com/ionic-team/ionic/commit/76ca475734e13404886bdf70117c0c39bbd7ce70))
* **gesture:** add option to run inside NgZone for Angular apps ([#20685](https://github.com/ionic-team/ionic/issues/20685)) ([429edb0](https://github.com/ionic-team/ionic/commit/429edb053bf2a5e778665770c373e31fc7d3bfd2)), closes [#20529](https://github.com/ionic-team/ionic/issues/20529)
* **gesture:** add support for blurring active inputs on gesture start ([#20638](https://github.com/ionic-team/ionic/issues/20638)) ([32ecdd6](https://github.com/ionic-team/ionic/commit/32ecdd67536f07f9d95e331e44661afb2cf7b470)), closes [#20588](https://github.com/ionic-team/ionic/issues/20588)
* **img:** add parts support for image ([#20943](https://github.com/ionic-team/ionic/issues/20943)) ([63c75ed](https://github.com/ionic-team/ionic/commit/63c75edd21387f28387c8a8529ba638317a9d9b8))
* **input:** add support for enterkeyhint ([#21035](https://github.com/ionic-team/ionic/issues/21035)) ([3efaf43](https://github.com/ionic-team/ionic/commit/3efaf4382175d40902968cabb7edd672ffc7cc2b)), closes [#21034](https://github.com/ionic-team/ionic/issues/21034)
* **item:** add parts support for detail-icon ([#20979](https://github.com/ionic-team/ionic/issues/20979)) ([6414496](https://github.com/ionic-team/ionic/commit/64144960b06e056a99aa3d352486a495b6bb43ed))
* **menu:** add parts support for backdrop, container ([#20978](https://github.com/ionic-team/ionic/issues/20978)) ([50bc212](https://github.com/ionic-team/ionic/commit/50bc212d0b30919c136d6be60a9d458ec7d50dde))
* **radio:** add parts support for container, mark ([#20952](https://github.com/ionic-team/ionic/issues/20952)) ([228ca2b](https://github.com/ionic-team/ionic/commit/228ca2b093215aba91fe925b301049471ffaa169))
* **range:** add parts support for bar, bar-active, knob, pin, tick, tick-active ([#20961](https://github.com/ionic-team/ionic/issues/20961)) ([619f67a](https://github.com/ionic-team/ionic/commit/619f67a00baa387d0f2bf3f6219e21bc87c03313))
* **react:** expose selectTab method and activeTab, closes [#19935](https://github.com/ionic-team/ionic/issues/19935) ([#21171](https://github.com/ionic-team/ionic/issues/21171)) ([43f9d24](https://github.com/ionic-team/ionic/commit/43f9d24824e4c1b679b350b3db05a6830d98fc0a))
* **reorder:** add parts support for icon ([#20960](https://github.com/ionic-team/ionic/issues/20960)) ([ba20209](https://github.com/ionic-team/ionic/commit/ba20209604666048619ae5f4358be0e65ef36e4f))
* **searchbar:** add border-radius css variable ([#20662](https://github.com/ionic-team/ionic/issues/20662)) ([acaa1d9](https://github.com/ionic-team/ionic/commit/acaa1d9ef7e4037913159c0d32829183ddc1860b)), closes [#17426](https://github.com/ionic-team/ionic/issues/17426) [#18247](https://github.com/ionic-team/ionic/issues/18247)
* **searchbar:** add support for enterkeyhint ([#21036](https://github.com/ionic-team/ionic/issues/21036)) ([e90683a](https://github.com/ionic-team/ionic/commit/e90683a713cb45d1e1283dd41343ea6b672a9e3a)), closes [#21034](https://github.com/ionic-team/ionic/issues/21034)
* **select:** add parts support for placeholder, icon, text ([#21108](https://github.com/ionic-team/ionic/issues/21108)) ([30a1c89](https://github.com/ionic-team/ionic/commit/30a1c896883e971ab87ef7d5d8790e9a60632fc2))
* **slides:** update to swiper 5 ([#20917](https://github.com/ionic-team/ionic/issues/20917)) ([4e28445](https://github.com/ionic-team/ionic/commit/4e28445ecb029f8d225acf9313209e5f61114dc4)), closes [#20033](https://github.com/ionic-team/ionic/issues/20033)
* **textarea:** add support for inputmode and enterkeyhint ([#21106](https://github.com/ionic-team/ionic/issues/21106)) ([1622d9b](https://github.com/ionic-team/ionic/commit/1622d9bb3c7f2aeed7dc823620204737619a5b0d))
* **toast:** add white-space variable for toast message ([#20729](https://github.com/ionic-team/ionic/issues/20729)) ([e5e02d4](https://github.com/ionic-team/ionic/commit/e5e02d4f88abbcc7dbc626db6d5adf4292d8e776)), closes [#20727](https://github.com/ionic-team/ionic/issues/20727)
* **toggle:** add parts support for handle, track ([#20962](https://github.com/ionic-team/ionic/issues/20962)) ([d2b772f](https://github.com/ionic-team/ionic/commit/d2b772f19fde71bcec72300cb4cf8234321b35bc))
* **toggle:** improve customization with css vars and auto-adjust handle width and height ([#21050](https://github.com/ionic-team/ionic/issues/21050)) ([04ace4c](https://github.com/ionic-team/ionic/commit/04ace4c98346fde5bad343224657f049beb3e868)), closes [#19868](https://github.com/ionic-team/ionic/issues/19868) [#20474](https://github.com/ionic-team/ionic/issues/20474)


### Performance Improvements

* **all:** improve scroll assist responsiveness ([#20987](https://github.com/ionic-team/ionic/issues/20987)) ([6f13b8c](https://github.com/ionic-team/ionic/commit/6f13b8c7922f638cac4eb3b111ff9643e6995491)), closes [#20922](https://github.com/ionic-team/ionic/issues/20922)




## [5.0.7](https://github.com/ionic-team/ionic/compare/v5.0.6...v5.0.7) (2020-03-26)


### Bug Fixes

* **modal:** properly target card modal for iPadOS styles ([#20884](https://github.com/ionic-team/ionic/issues/20884)) ([5816cf5](https://github.com/ionic-team/ionic/commit/5816cf52a779acc4613c2d2da28b97c511360cc2))



## [5.0.6](https://github.com/ionic-team/ionic/compare/v5.0.5...v5.0.6) (2020-03-25)


### Bug Fixes


* **all** only warn invalid mode if used on an ionic component ([#20828](https://github.com/ionic-team/ionic/issues/20828)) ([6ed1c51](https://github.com/ionic-team/ionic/commit/6ed1c51321d781ff92efbf623790af91cb16a5af)), closes [#20055](https://github.com/ionic-team/ionic/issues/20055)
* **all** properly scroll to input with scroll assist ([#20742](https://github.com/ionic-team/ionic/issues/20742)) ([e24060e](https://github.com/ionic-team/ionic/commit/e24060ecd9d803ece4bbb9c6beae23e761d7fb5e)), closes [#19589](https://github.com/ionic-team/ionic/issues/19589)
* **angular:** export Animation and Gesture related types ([#20766](https://github.com/ionic-team/ionic/issues/20766)) ([2ece194](https://github.com/ionic-team/ionic/commit/2ece194a085742b919cc68f643b1b365f7d85594))
* **angular:** respect animation property for ion-router-outlet ([#20767](https://github.com/ionic-team/ionic/issues/20767)) ([f2dbe1f](https://github.com/ionic-team/ionic/commit/f2dbe1ff3be44e6697b791de392a9ef46dbf27e8)), closes [#20764](https://github.com/ionic-team/ionic/issues/20764)
* **content:** apply --offset-top and --offset-bottom values correctly ([#20790](https://github.com/ionic-team/ionic/issues/20790)) ([2707289](https://github.com/ionic-team/ionic/commit/2707289b36883ae495f86cfb2f2b6c84e090551b)), closes [#20735](https://github.com/ionic-team/ionic/issues/20735)
* **content:** set overscroll-behavior based on the scroll direction ([#20011](https://github.com/ionic-team/ionic/issues/20011)) ([a3fc77b](https://github.com/ionic-team/ionic/commit/a3fc77be91ead6edc3f07c6127879753a063bd18)), closes [#20010](https://github.com/ionic-team/ionic/issues/20010)
* **item-divider:** update design to match native iOS ([#20854](https://github.com/ionic-team/ionic/issues/20854)) ([d91e22d](https://github.com/ionic-team/ionic/commit/d91e22d820f170ecfdfad835ca56701ad70e6f3d))
* **item-sliding:** account for swipe to go back gesture when opening item-options ([#20777](https://github.com/ionic-team/ionic/issues/20777)) ([f23ac44](https://github.com/ionic-team/ionic/commit/f23ac44c9a6646129762bb861cae6145690ca5a1)), closes [#20773](https://github.com/ionic-team/ionic/issues/20773)
* **list:** show bottom border on last item in a list followed by a list ([#20798](https://github.com/ionic-team/ionic/issues/20798)) ([7bc5191](https://github.com/ionic-team/ionic/commit/7bc51911f6c538be8b91d1e569675b19832cb000))
* **modal:** backdrop and box shadows no longer stack when opening multiple modals ([#20801](https://github.com/ionic-team/ionic/issues/20801)) ([253cd96](https://github.com/ionic-team/ionic/commit/253cd96164914a803f6bb42ff95ca74880c940d0)), closes [#20800](https://github.com/ionic-team/ionic/issues/20800)
* **modal:** backdrop is no longer tappable on card-style modal on smaller screens ([#20802](https://github.com/ionic-team/ionic/issues/20802)) ([12932dd](https://github.com/ionic-team/ionic/commit/12932dd20212bec7d780650166c70819d125f75a)), closes [#20783](https://github.com/ionic-team/ionic/issues/20783)
* **modal:** properly apply border radius on card-style modal ([#20852](https://github.com/ionic-team/ionic/issues/20852)) ([dff3816](https://github.com/ionic-team/ionic/commit/dff3816c049a1c051f94d3176c8b903a69603912)), closes [#20851](https://github.com/ionic-team/ionic/issues/20851)
* **modal:** properly remove safe area padding on card-modal ([#20853](https://github.com/ionic-team/ionic/issues/20853)) ([71f1182](https://github.com/ionic-team/ionic/commit/71f118201b0918f60c1a078d55afd10b39f17e86)), closes [#20799](https://github.com/ionic-team/ionic/issues/20799)
* **modal:** respect card-style modal spec for iPadOS ([#20750](https://github.com/ionic-team/ionic/issues/20750)) ([75bae40](https://github.com/ionic-team/ionic/commit/75bae403e917b20645675343734440ee95d31634)), closes [#20700](https://github.com/ionic-team/ionic/issues/20700)
* **react:** expose correct type for CreateAnimation ([#20775](https://github.com/ionic-team/ionic/issues/20775)) ([0897c3f](https://github.com/ionic-team/ionic/commit/0897c3f9c2591442b3f80d28a25ec4471da3c9d7)), closes [#20771](https://github.com/ionic-team/ionic/issues/20771)
* **refresher:** properly dismiss refresher when completed synchronously ([#20815](https://github.com/ionic-team/ionic/issues/20815)) ([b1a87c8](https://github.com/ionic-team/ionic/commit/b1a87c88923201fd0b31bf55d81b97acc09ddf1c)), closes [#20803](https://github.com/ionic-team/ionic/issues/20803)
* **segment:** automatically expand width for scrollable segment buttons ([#20763](https://github.com/ionic-team/ionic/issues/20763)) ([cdfd50b](https://github.com/ionic-team/ionic/commit/cdfd50b554d1d8f89c3d9948c7613ce75ede1e52)), closes [#20566](https://github.com/ionic-team/ionic/issues/20566)
* **segment:** scrollable segments only show scrollbar if they overflow ([#20760](https://github.com/ionic-team/ionic/issues/20760)) ([ab146c9](https://github.com/ionic-team/ionic/commit/ab146c96ec5cbc962eed629c30b2c5c446f3098d)), closes [#20758](https://github.com/ionic-team/ionic/issues/20758)
* **slides:** check that mutation observer is defined for ssr ([#20791](https://github.com/ionic-team/ionic/issues/20791)) ([2d5d251](https://github.com/ionic-team/ionic/commit/2d5d2515be86496a280d93847185ab332e5d47a2))
* **textarea:** properly adjust auto-grow textarea in scrolled content ([#19776](https://github.com/ionic-team/ionic/issues/19776)) ([8bd5bac](https://github.com/ionic-team/ionic/commit/8bd5bace73670dfe351b3734b51cbf3aa87517dc)), closes [#19193](https://github.com/ionic-team/ionic/issues/19193)
* **title:** improve reliability of large title ios nav transition ([#20861](https://github.com/ionic-team/ionic/issues/20861)) ([3bd6b5d](https://github.com/ionic-team/ionic/commit/3bd6b5def2877f6a918c587de25a10ccc82f88f1))
* **title:** large title now inherits global color styling during nav transition ([#20862](https://github.com/ionic-team/ionic/issues/20862)) ([321140f](https://github.com/ionic-team/ionic/commit/321140ff736b46d2631a9e87a7b070009c5e1b2c))



## [5.0.5](https://github.com/ionic-team/ionic/compare/v5.0.4...v5.0.5) (2020-03-11)


### Bug Fixes

* **button:** allow overflow to be overridden by the CSS variable ([#20738](https://github.com/ionic-team/ionic/issues/20738)) ([7ecde36](https://github.com/ionic-team/ionic/commit/7ecde36f9d31327a45f7b5023ed533edbb9cc709)), closes [#20726](https://github.com/ionic-team/ionic/issues/20726)
* **datetime:** account for max property when hour, minute, or second is set to 0 ([#20665](https://github.com/ionic-team/ionic/issues/20665)) ([2177461](https://github.com/ionic-team/ionic/commit/21774612d8d70ab7eda3eab0e6e9ac039b5c87d8)), closes [#20652](https://github.com/ionic-team/ionic/issues/20652)
* **header:** collapsable header should default to using content background ([#20736](https://github.com/ionic-team/ionic/issues/20736)) ([f6c3ba7](https://github.com/ionic-team/ionic/commit/f6c3ba7e5af2af9e32f75306cde7704509e82263)), closes [#20691](https://github.com/ionic-team/ionic/issues/20691)
* **header:** resolve undefined error on collapsible header when navigating quickly ([#20728](https://github.com/ionic-team/ionic/issues/20728)) ([87a2721](https://github.com/ionic-team/ionic/commit/87a27216d011f1d02ac0fc0aeb3ae0400ecfbd8c)), closes [#20725](https://github.com/ionic-team/ionic/issues/20725)
* **ios:** large title animation now works properly in a modal ([#20703](https://github.com/ionic-team/ionic/issues/20703)) ([ec4878a](https://github.com/ionic-team/ionic/commit/ec4878ac085d8ff92cb8b2ea0852523f174ab01b)), closes [#20696](https://github.com/ionic-team/ionic/issues/20696)
* **item:** apply proper margin left for slotted icon in RTL ([#20684](https://github.com/ionic-team/ionic/issues/20684)) ([d53595e](https://github.com/ionic-team/ionic/commit/d53595eb1629e0d60f7e832414e84c544e184346)), closes [#20653](https://github.com/ionic-team/ionic/issues/20653)
* **label:** text overflow for slotted headings ([#20690](https://github.com/ionic-team/ionic/issues/20690)) ([4d34ce6](https://github.com/ionic-team/ionic/commit/4d34ce6a31eaa19859699646cc614f5be6239e10)), closes [#17087](https://github.com/ionic-team/ionic/issues/17087)
* **modal:** leave animation transitions modal completely out of viewport on ipad ([#20702](https://github.com/ionic-team/ionic/issues/20702)) ([22d5256](https://github.com/ionic-team/ionic/commit/22d52568100d8096ee36e3a61a19614f0d63d45f)), closes [#20697](https://github.com/ionic-team/ionic/issues/20697)
* **angular** exclude components from ssr ([#20674](https://github.com/ionic-team/ionic/issues/20674)) ([f64b142](https://github.com/ionic-team/ionic/commit/f64b1420aead39b9056dc25cfdbcf95bc4f6f621))
* **modal:** swipeable modal now works in firefox ([#20714](https://github.com/ionic-team/ionic/issues/20714)) ([7d260b9](https://github.com/ionic-team/ionic/commit/7d260b96a73958709fa93a4fe58f816a445471ee)), closes [#20706](https://github.com/ionic-team/ionic/issues/20706)
* **overlays:** prevent accidental dismiss of overlays when tapping screen twice ([#20683](https://github.com/ionic-team/ionic/issues/20683)) ([b6c2a77](https://github.com/ionic-team/ionic/commit/b6c2a77deb1c09eb1fd414f7737794e208ab5081)), closes [#20608](https://github.com/ionic-team/ionic/issues/20608)
* **segment:** allow routerLink to work on segment buttons ([#20682](https://github.com/ionic-team/ionic/issues/20682)) ([314dbb1](https://github.com/ionic-team/ionic/commit/314dbb1a4d970327fcbb2f3fbdec0627c626fe4d)), closes [#20678](https://github.com/ionic-team/ionic/issues/20678)
* **segment:** iOS mode segment now works on older Android devices ([#20673](https://github.com/ionic-team/ionic/issues/20673)) ([44993b7](https://github.com/ionic-team/ionic/commit/44993b7987031b6618409675fdbb1f15ec4ea343)), closes [#20648](https://github.com/ionic-team/ionic/issues/20648)



## [5.0.4](https://github.com/ionic-team/ionic/compare/v5.0.3...v5.0.4) (2020-02-27)


### Bug Fixes

* **animation:** reset all temporary flags when interrupting an animation ([#20627](https://github.com/ionic-team/ionic/issues/20627)) ([0e0e401](https://github.com/ionic-team/ionic/commit/0e0e401d86dabaa1dc804656e4d384154d6fdd05)), closes [#20602](https://github.com/ionic-team/ionic/issues/20602)
* **buttons:** use proper button colors based on CSS variables when inside of a toolbar ([#20633](https://github.com/ionic-team/ionic/issues/20633)) ([c1d7bf2](https://github.com/ionic-team/ionic/commit/c1d7bf229d10d0a12f90b6d2730d6d8ac78b48cd))



## [5.0.3](https://github.com/ionic-team/ionic/compare/v5.0.2...v5.0.3) (2020-02-26)


### Bug Fixes

* **menu:** allow ssr to work properly with hardware back button updates ([#20629](https://github.com/ionic-team/ionic/issues/20629)) ([fe8d74d](https://github.com/ionic-team/ionic/commit/fe8d74d08cb919ed1c685262f0aed4a544c3a7e1))



## [5.0.2](https://github.com/ionic-team/ionic/compare/v5.0.1...v5.0.2) (2020-02-26)


### Bug Fixes

* **ios:** large title transition works properly in tabbed applications ([#20555](https://github.com/ionic-team/ionic/issues/20555)) ([7187541](https://github.com/ionic-team/ionic/commit/71875417f207d26bd7115655f239251460a1e3d8)), closes [#20482](https://github.com/ionic-team/ionic/issues/20482)
* **menu:** hardware back button now dismisses side menu if open in Cordova/Capacitor app ([#20558](https://github.com/ionic-team/ionic/issues/20558)) ([6b2a929](https://github.com/ionic-team/ionic/commit/6b2a929cd7e70b16383cb3336b399a1aee2d6101)), closes [#20559](https://github.com/ionic-team/ionic/issues/20559)
* **modal:** allow swipe to close animation to be overridden ([#20585](https://github.com/ionic-team/ionic/issues/20585)) ([8d3ce8d](https://github.com/ionic-team/ionic/commit/8d3ce8d29c9abd89ce47c882e0d7b2ac0f861966)), closes [#20577](https://github.com/ionic-team/ionic/issues/20577)
* **modal:** card style modal now adds appropriate contrast ([#20604](https://github.com/ionic-team/ionic/issues/20604)) ([b5310ef](https://github.com/ionic-team/ionic/commit/b5310effe3f9b47459f22221da1853a55dbb0279))
* **modal:** allow swipeable modal background to be overridden ([#20584](https://github.com/ionic-team/ionic/issues/20584)) ([ad6fac8](https://github.com/ionic-team/ionic/commit/ad6fac83cb7c4acb377b4b1620ab1a3f852bc6d3)), closes [#20572](https://github.com/ionic-team/ionic/issues/20572)
* **modal:** swipeable modal styles only apply to ios ([#20571](https://github.com/ionic-team/ionic/issues/20571)) ([3a2d828](https://github.com/ionic-team/ionic/commit/3a2d82814b22a3987a5abfe4412d83a93a97b6b7)), closes [#20569](https://github.com/ionic-team/ionic/issues/20569)
* **refresher:** ensure that translate is cleaned up to avoid stacking context ([#20621](https://github.com/ionic-team/ionic/issues/20621)) ([e3e5c69](https://github.com/ionic-team/ionic/commit/e3e5c69681f376cbc4b1305f719fc6895b21a9b7)), closes [#17949](https://github.com/ionic-team/ionic/issues/17949)
* **segment:** segment functions properly on older versions of Android ([#20554](https://github.com/ionic-team/ionic/issues/20554)) ([0224bed](https://github.com/ionic-team/ionic/commit/0224bed0c9f91bcb54bb4b3064df56928cf5ed8a)), closes [#20466](https://github.com/ionic-team/ionic/issues/20466)
* **select:** properly align text, add icon-inner and placeholder part ([#20605](https://github.com/ionic-team/ionic/issues/20605)) ([926ac3f](https://github.com/ionic-team/ionic/commit/926ac3fb47228be19146ccdfab92a05cf6677ff4))
* **slides:** set height to 100% for vertical slides ([#20603](https://github.com/ionic-team/ionic/issues/20603)) ([20af652](https://github.com/ionic-team/ionic/commit/20af652a1be5e1aff2836422489642c8baed6939)), closes [#17341](https://github.com/ionic-team/ionic/issues/17341)



## [5.0.1](https://github.com/ionic-team/ionic/compare/v5.0.0...v5.0.1) (2020-02-19)


### Bug Fixes

* **button:** reduce font size of icon only button in toolbar on iOS ([#20547](https://github.com/ionic-team/ionic/issues/20547)) ([59fa340](https://github.com/ionic-team/ionic/commit/59fa340650840b2abf86bd643350da7064ee9ead))
* **card:** inherit background in inner button ([#20461](https://github.com/ionic-team/ionic/issues/20461)) ([c16de96](https://github.com/ionic-team/ionic/commit/c16de9663329993698c10e4251dbb0b75167701f)), closes [#20458](https://github.com/ionic-team/ionic/issues/20458)
* **fab:** add close icon to internal icons for react ([#20490](https://github.com/ionic-team/ionic/issues/20490)) ([c4fb314](https://github.com/ionic-team/ionic/commit/c4fb31403eb4704bcf04e6c32bfa46422f08bf4f)), closes [#20489](https://github.com/ionic-team/ionic/issues/20489)
* **fab:** show close icon on hover, focused, activated ([#20497](https://github.com/ionic-team/ionic/issues/20497)) ([e42c85d](https://github.com/ionic-team/ionic/commit/e42c85d64161b7fac7147325cb6c2ceff990042b))
* **input:** do not clear input if "Enter" key pressed ([#20462](https://github.com/ionic-team/ionic/issues/20462)) ([89bf08b](https://github.com/ionic-team/ionic/commit/89bf08b6276f2a25d66fc0e74ba3303f923af652)), closes [#20442](https://github.com/ionic-team/ionic/issues/20442)
* **ios:** clamp out of bounds values for swipe to go back ([#20540](https://github.com/ionic-team/ionic/issues/20540)) ([dd32a5e](https://github.com/ionic-team/ionic/commit/dd32a5e2788a11a5c2be0d1840f5775c7307c57f)), closes [#20505](https://github.com/ionic-team/ionic/issues/20505)
* **menu:** swipe gesture should not open menu when a modal is displayed ([#20546](https://github.com/ionic-team/ionic/issues/20546)) ([3252c2f](https://github.com/ionic-team/ionic/commit/3252c2f8dc46e0853a7f626baa6023a01ac21a25)), closes [#20467](https://github.com/ionic-team/ionic/issues/20467)
* **modal:** presenting multiple card-style modals now adds border radius properly ([#20476](https://github.com/ionic-team/ionic/issues/20476)) ([abf594a](https://github.com/ionic-team/ionic/commit/abf594aa611562a76e3baecfa38456d41a1410f3)), closes [#20475](https://github.com/ionic-team/ionic/issues/20475)
* **modal:** prevent card style modal styles from being overridden ([#20470](https://github.com/ionic-team/ionic/issues/20470)) ([86ab77a](https://github.com/ionic-team/ionic/commit/86ab77a6e2cb124510c244110fc78a4bc0654cd1)), closes [#20469](https://github.com/ionic-team/ionic/issues/20469)
* **react:** do a better job matching up route to sync ([#20446](https://github.com/ionic-team/ionic/issues/20446)) ([c0aadd6](https://github.com/ionic-team/ionic/commit/c0aadd60077e5ba379959d93006e3a9c1418263c)), closes [#20363](https://github.com/ionic-team/ionic/issues/20363)
* **react:** do not remove pages when navigating between tabs ([#20431](https://github.com/ionic-team/ionic/issues/20431)) ([b6fbe98](https://github.com/ionic-team/ionic/commit/b6fbe98812fbab5ef9e0723802605c0711581dd2)), closes [#20398](https://github.com/ionic-team/ionic/issues/20398)
* **react:** icons with MD set should work in browser ([#20463](https://github.com/ionic-team/ionic/issues/20463)) ([82670fe](https://github.com/ionic-team/ionic/commit/82670fe4d0592451cbc243b3008beb3f8f483c30))
* **react:** update paths of tab buttons when href changes in ion buttons ([#20480](https://github.com/ionic-team/ionic/issues/20480)) ([45d03ba](https://github.com/ionic-team/ionic/commit/45d03baf981d0e10eb1fe689908532adef2ba31d)), closes [#20321](https://github.com/ionic-team/ionic/issues/20321)
* **searchbar:** properly align placeholder ([#20460](https://github.com/ionic-team/ionic/issues/20460)) ([4d6e15a](https://github.com/ionic-team/ionic/commit/4d6e15ab18fc894c3826b89362163256adc227f4)), closes [#20456](https://github.com/ionic-team/ionic/issues/20456)
* **segment:** border radius applies to indicator on ios ([#20541](https://github.com/ionic-team/ionic/issues/20541)) ([9b5854d](https://github.com/ionic-team/ionic/commit/9b5854d79712356f8a3772442c0cc412db09d5e0)), closes [#20539](https://github.com/ionic-team/ionic/issues/20539)
* **segment:** do not show ripple effect if disabled via config ([#20542](https://github.com/ionic-team/ionic/issues/20542)) ([7a461c5](https://github.com/ionic-team/ionic/commit/7a461c59c5d9a23de0bcdd53397f452d17251fd6)), closes [#20533](https://github.com/ionic-team/ionic/issues/20533)
* **segment:** inner div no longer interferes with click events ([#20522](https://github.com/ionic-team/ionic/issues/20522)) ([06b828b](https://github.com/ionic-team/ionic/commit/06b828b4ffb12b076b0805274f53fa158ee65c5a)), closes [#20381](https://github.com/ionic-team/ionic/issues/20381)
* **segment:** only emit ionChange when user releases pointer from screen ([#20495](https://github.com/ionic-team/ionic/issues/20495)) ([4d50064](https://github.com/ionic-team/ionic/commit/4d5006476479bc376d3bb4edad6db0b3ce806ef7)), closes [#20500](https://github.com/ionic-team/ionic/issues/20500) [#20257](https://github.com/ionic-team/ionic/issues/20257)
* **tab-bar:** update ios icon and label design to match native ([#20548](https://github.com/ionic-team/ionic/issues/20548)) ([34f8576](https://github.com/ionic-team/ionic/commit/34f8576b959d41896502e4f7b0c4240156e001eb))



# [5.0.0 Magnesium](https://github.com/ionic-team/ionic/compare/v4.11.10...v5.0.0) (2020-02-11)

Enjoy! :fire:

> We recommend updating to version `4.11.10` before updating to this version in order to see deprecation warnings related to your app [in the developer console](https://javascript.info/devtools).

Run the following commands based on your project type:

```
# for an angular app
npm i @ionic/angular@latest --save

# for a react app
npm i @ionic/react@latest --save
npm i @ionic/react-router@latest --save
npm i ionicons@latest --save

# for a stencil / vanilla JS app
npm i @ionic/core@latest --save
```

Then take a look at the [Breaking Changes](./BREAKING.md) file for API changes.


# [5.0.0-rc.5](https://github.com/ionic-team/ionic/compare/v5.0.0-rc.4...v5.0.0-rc.5) (2020-02-11)


### Bug Fixes

* **angular:** correct path for angular projects ([#20436](https://github.com/ionic-team/ionic/issues/20436)) ([fd9c7a9](https://github.com/ionic-team/ionic/commit/fd9c7a9601e7f21b74c76be1f8bb305bf008915c)), closes [#20435](https://github.com/ionic-team/ionic/issues/20435)



# [5.0.0-rc.4](https://github.com/ionic-team/ionic/compare/v5.0.0-rc.3...v5.0.0-rc.4) (2020-02-10)


### Bug Fixes

* **content:** only emit scroll events if enabled ([#20401](https://github.com/ionic-team/ionic/issues/20401)) ([fd1b44a](https://github.com/ionic-team/ionic/commit/fd1b44a40b741088e099f6538dd14caa0dc5540c))
* **header:** backdrop filter no longer distorts content with collapsible header ([#20388](https://github.com/ionic-team/ionic/issues/20388)) ([11d3945](https://github.com/ionic-team/ionic/commit/11d39457d56c091e9c41c180391d27464ae748b5)), closes [#20385](https://github.com/ionic-team/ionic/issues/20385)
* **item:** remove unneeded box-shadow CSS variable ([#20412](https://github.com/ionic-team/ionic/issues/20412)) ([a6764c4](https://github.com/ionic-team/ionic/commit/a6764c4724e1e7eed19a1902b563aeb61bfde38e)), closes [#20392](https://github.com/ionic-team/ionic/issues/20392)
* **label:** remove subpixel font-size to prevent visual glitches ([#20415](https://github.com/ionic-team/ionic/issues/20415)) ([3d6f287](https://github.com/ionic-team/ionic/commit/3d6f287d87bfaa0d81a34182baf38192e08fb3c1)), closes [#20407](https://github.com/ionic-team/ionic/issues/20407)
* **segment:** add activated class directly to segment button ([#20400](https://github.com/ionic-team/ionic/issues/20400)) ([e8886e9](https://github.com/ionic-team/ionic/commit/e8886e98f188044227bf5757892341cb598fdd27))



# [5.0.0-rc.3](https://github.com/ionic-team/ionic/compare/v5.0.0-rc.2...v5.0.0-rc.3) (2020-02-05)


### Bug Fixes

* **refresher:** ensure gesture does not interfere with item-sliding ([#20380](https://github.com/ionic-team/ionic/issues/20380)) ([8983c70](https://github.com/ionic-team/ionic/commit/8983c7006e54743873cd45ae1acdfa974d74547a)), closes [#20379](https://github.com/ionic-team/ionic/issues/20379)
* **refresher:** translate background content when refreshing ([#20378](https://github.com/ionic-team/ionic/issues/20378)) ([cf70916](https://github.com/ionic-team/ionic/commit/cf7091625ecb46c3f9882ae9eff5c946523fab75)), closes [#20377](https://github.com/ionic-team/ionic/issues/20377)
* **segment:** allow background to be set on iOS segment in a toolbar ([#20350](https://github.com/ionic-team/ionic/issues/20350)) ([0f31624](https://github.com/ionic-team/ionic/commit/0f31624104d195367df197eda9b8d6c5bda4cf75))
* **toolbar:** properly apply safe area and border ([#20375](https://github.com/ionic-team/ionic/issues/20375)) ([4971499](https://github.com/ionic-team/ionic/commit/4971499026fcee70a32cc9480302bb14a1bebcb7)), closes [#20354](https://github.com/ionic-team/ionic/issues/20354)



# [5.0.0-rc.2](https://github.com/ionic-team/ionic/compare/v5.0.0-rc.1...v5.0.0-rc.2) (2020-01-30)


### Bug Fixes

* **header:** fix race condition in collapsible header ([#20334](https://github.com/ionic-team/ionic/issues/20334)) ([215d55f](https://github.com/ionic-team/ionic/commit/215d55f1ebeb93988b513c5869faae14d1d51919))
* **ios:** translucent toolbar blur no longer obscures entering page toolbar content ([#20314](https://github.com/ionic-team/ionic/issues/20314)) ([e580b88](https://github.com/ionic-team/ionic/commit/e580b884770a086ee5d8acf61588ea50181786e6)), closes [#19158](https://github.com/ionic-team/ionic/issues/19158)
* **radio:** do not clear radio group value from radio ([#20343](https://github.com/ionic-team/ionic/issues/20343)) ([ff78e6e](https://github.com/ionic-team/ionic/commit/ff78e6e8ca8ae4dc2a6d401b377dd3977c48824a)), closes [#20323](https://github.com/ionic-team/ionic/issues/20323)
* **radio:** set default radio value if undefined ([#20329](https://github.com/ionic-team/ionic/issues/20329)) ([eb57723](https://github.com/ionic-team/ionic/commit/eb57723785ce5b05585bf48bf9c8ae1b62235ba2))
* **refresher:** add correct fallbacks for native refreshers ([#20333](https://github.com/ionic-team/ionic/issues/20333)) ([fd55427](https://github.com/ionic-team/ionic/commit/fd55427991e94488d86971aaa10acb13d7fa1c23))
* **refresher:** resolve undefined issues when updating component ([#20322](https://github.com/ionic-team/ionic/issues/20322)) ([59d8687](https://github.com/ionic-team/ionic/commit/59d86873a2ab913358b084bb05180ba176893a8f)), closes [#20320](https://github.com/ionic-team/ionic/issues/20320)



# [5.0.0-rc.1](https://github.com/ionic-team/ionic/compare/v4.11.10...v5.0.0-rc.1) (2020-01-27)


### Bug Fixes

* **components:** use proper colors for button states and add back input highlight ([#20278](https://github.com/ionic-team/ionic/issues/20278)) ([628db18](https://github.com/ionic-team/ionic/commit/628db18a97293731ecfee8e4d2f0d8c1cf672c96)), closes [#20276](https://github.com/ionic-team/ionic/issues/20276)
* **components:** inherit text indent in all components with text inherit ([#20300](https://github.com/ionic-team/ionic/issues/20300)) ([767b005](https://github.com/ionic-team/ionic/commit/767b005eacf00b640973bfb381de4dcedf083399)), closes [#17786](https://github.com/ionic-team/ionic/issues/17786)
* **content:** resolve height inheritance issues ([#20309](https://github.com/ionic-team/ionic/issues/20309)) ([09bef71](https://github.com/ionic-team/ionic/commit/09bef71ccd5a261233180bc19023bc562b905764)), closes [#20305](https://github.com/ionic-team/ionic/issues/20305)
* **picker:** include showBackdrop in interface ([#20301](https://github.com/ionic-team/ionic/issues/20301)) ([33186ba](https://github.com/ionic-team/ionic/commit/33186ba716de77edc92ae8e7d307f90fff8b8ed1)), closes [#18893](https://github.com/ionic-team/ionic/issues/18893)
* **react:** export proper types of animations and gestures ([#20311](https://github.com/ionic-team/ionic/issues/20311)) ([0034088](https://github.com/ionic-team/ionic/commit/00340885fb031d3dbc7c458fddeed9d28a2deda4))
* **refresher:** update animation for dashed property values ([#20310](https://github.com/ionic-team/ionic/issues/20310)) ([44211c1](https://github.com/ionic-team/ionic/commit/44211c11ee929b9966d5e67e99fb6a495380432c))
* **toast:** inherit color in cancel button for a toast with color ([#20299](https://github.com/ionic-team/ionic/issues/20299)) ([7b44ae2](https://github.com/ionic-team/ionic/commit/7b44ae2a400bb0c0616012e9c42bfc67edbfc793)), closes [#20139](https://github.com/ionic-team/ionic/issues/20139)



## [4.11.10](https://github.com/ionic-team/ionic/compare/v4.11.9...v4.11.10) (2020-01-24)


### Bug Fixes

* **input:** revert previous type change ([db1fd1d](https://github.com/ionic-team/ionic/commit/db1fd1d72a8a0ade824ad2309d1adb2953731f37))


# [5.0.0-rc.0](https://github.com/ionic-team/ionic/compare/v5.0.0-beta.6...v5.0.0-rc.0) (2020-01-23)

Release Candidate is here! :tada:


# [5.0.0-beta.6](https://github.com/ionic-team/ionic/compare/v4.11.9...v5.0.0-beta.6) (2020-01-23)

### Bug Fixes

* **animation:** add property conversions for CSS Animations ([#20252](https://github.com/ionic-team/ionic/issues/20252)), fixes [#20251](https://github.com/ionic-team/ionic/issues/20251) ([32a7401](https://github.com/ionic-team/ionic/commit/32a7401576a9c91fdee66d2cede06b6a16884d35))
* **content:** set min-height to allow for sticky headers ([#20265](https://github.com/ionic-team/ionic/issues/20252)), fixes [#20258](https://github.com/ionic-team/ionic/issues/20258) ([e613f63](https://github.com/ionic-team/ionic/commit/e613f63590f3d6a4fa4f3a361811224394ba0be2))
* **modal:** card-style modal now opens at full width on larger devices ([#20256](https://github.com/ionic-team/ionic/issues/20256)), fixes [#20255](https://github.com/ionic-team/ionic/issues/20255) ([443cbd9](https://github.com/ionic-team/ionic/commit/443cbd9eb273767d8405b6a05ffabee037e9f3b7))
* **segment:** clicking disabled button no longer adds ripple to active button ([#20254](https://github.com/ionic-team/ionic/issues/20254)), fixes [#20253](https://github.com/ionic-team/ionic/issues/20253) ([f896821](https://github.com/ionic-team/ionic/commit/f8968217533ff60948047510064d2f15d01c249c))


### Features

* **components:** improve button states and add new css properties ([#19440](https://github.com/ionic-team/ionic/issues/19440)) ([9415929](https://github.com/ionic-team/ionic/commit/94159291b27ddf1a859c8f3f87a0d6e54a8b5f13)), closes [#20213](https://github.com/ionic-team/ionic/issues/20213) [#19965](https://github.com/ionic-team/ionic/issues/19965)
* **react:** add Ionic Animations wrapper (experimental) ([#20273](https://github.com/ionic-team/ionic/issues/20273)) ([b59d764](https://github.com/ionic-team/ionic/commit/b59d7647fd6f9a645a4ec0fe9aca526ea5eda4e0))
* **segment-button:** add --indicator-height property to segment button ([#19653](https://github.com/ionic-team/ionic/issues/19653)) ([d76a503](https://github.com/ionic-team/ionic/commit/d76a5031c4c96b5fdf691a56ed61d3dcc4e4dafb))


### BREAKING CHANGES

> We recommend updating to the latest version of 4.x before trying out version 5 in order to see deprecation warnings related to your app [in the developer console](https://javascript.info/devtools).

*Activated Class*

The `activated` class that is automatically added to buttons on press has been renamed to `ion-activated`. This will be more consistent with our `ion-focused` class we add and also will reduce conflicts with users' CSS.

*CSS Variables*

The `--background-hover`, `--background-focused` and `--background-activated` CSS variables on components that render native buttons will now have an opacity automatically set. If you are setting any of these like the following:

```
--background-hover: rgba(44, 44, 44, 0.08);
```

You will likely not see a hover state anymore. It should be updated to only set the desired color:

```
--background-hover: rgba(44, 44, 44);
```

If the opacity desired is something other than what the spec asks for, use:

```
--background-hover: rgba(44, 44, 44);
--background-hover-opacity: 1;
```



## [4.11.9](https://github.com/ionic-team/ionic/compare/v4.11.8...v4.11.9) (2020-01-23)

### Bug Fixes

* **core:** updating type of input value to accept numbers, fixes [#20173](https://github.com/ionic-team/ionic/issues/20173) ([#20267](https://github.com/ionic-team/ionic/issues/20267)) ([7080205](https://github.com/ionic-team/ionic/commit/708020551f9c51ca3b32d7b49bf4572db3dda12e))
* **react:** adding missing overlay component events, fixes [#19923](https://github.com/ionic-team/ionic/issues/19923) ([#20266](https://github.com/ionic-team/ionic/issues/20266)) ([ec6a8dd](https://github.com/ionic-team/ionic/commit/ec6a8dd86f3854edba367f79a6ebac7d60eed839))
* **react:** Don't render overlay children if isOpen is false, fixes [#20225](https://github.com/ionic-team/ionic/issues/20225) ([#20226](https://github.com/ionic-team/ionic/issues/20226)) ([aff9612](https://github.com/ionic-team/ionic/commit/aff9612d1197dca48eab6eff9d749032c380cf82))
* **react:** re attach props on update, fixes 20192 ([#20228](https://github.com/ionic-team/ionic/issues/20228)) ([9e35ebe](https://github.com/ionic-team/ionic/commit/9e35ebed4a1590ef2521f5f8c393bdd9dea32a04))
* **react:** remove leaving view when routerdirection is back, fixes [#20124](https://github.com/ionic-team/ionic/issues/20124) ([#20268](https://github.com/ionic-team/ionic/issues/20268)) ([63d4e87](https://github.com/ionic-team/ionic/commit/63d4e877fb18c90d70c4cbd5f66ffccb8ee6489c))
* **react:** support routes without a path for notfound routes, fixes [#20259](https://github.com/ionic-team/ionic/issues/20259) ([#20261](https://github.com/ionic-team/ionic/issues/20261)) ([2f8c13b](https://github.com/ionic-team/ionic/commit/2f8c13b6960f9bcfb941c36fa6e1742b96f80ba9))
* **react:** update icon types to be a string as well, fixes [#20229](https://github.com/ionic-team/ionic/issues/20229) ([#20230](https://github.com/ionic-team/ionic/issues/20230)) ([1411d8a](https://github.com/ionic-team/ionic/commit/1411d8a173bfefd7db5241218fd5641b7e9da823))


# [5.0.0-beta.5](https://github.com/ionic-team/ionic/compare/v4.11.8...v5.0.0-beta.5) (2020-01-17)


### Bug Fixes

* **action-sheet:** allow scrollable action sheet with many options ([#20145](https://github.com/ionic-team/ionic/issues/20145)) ([53fad97](https://github.com/ionic-team/ionic/commit/53fad978c5a57efe34671db6cbede49c4a5af866)), closes [#17311](https://github.com/ionic-team/ionic/issues/17311)
* **card:** remove top padding of content in iOS if under header ([#20223](https://github.com/ionic-team/ionic/issues/20223)) ([9232f16](https://github.com/ionic-team/ionic/commit/9232f16eea8163c1ac0797abd9b6e92da44bacb1))
* **content:** scroll-content div now takes up full height of container ([#20194](https://github.com/ionic-team/ionic/issues/20194)) ([9d63b41](https://github.com/ionic-team/ionic/commit/9d63b41a5296688524c64f828f92090d73d6b556)), closes [#20185](https://github.com/ionic-team/ionic/issues/20185)
* **header:** header opacity properly resets on collapsible titles ([#20202](https://github.com/ionic-team/ionic/issues/20202)) ([8e11f79](https://github.com/ionic-team/ionic/commit/8e11f79fcca94a9c50ccc7e18e0fe44ef9764b1d))
* **modal:** prevent double dismiss via gesture and backdrop tap on card-style modal ([#20203](https://github.com/ionic-team/ionic/issues/20203)) ([5b0400d](https://github.com/ionic-team/ionic/commit/5b0400d5afec308861408967a5f61c9b93af0004))
* **picker:** pick correct option at low velocities ([#19660](https://github.com/ionic-team/ionic/issues/19660)) ([39d1262](https://github.com/ionic-team/ionic/commit/39d12629dbc12e4a86037b09350ec1c49ed6e2e4)), closes [#19659](https://github.com/ionic-team/ionic/issues/19659)
* **react:** updating icon type and add caret to internal icons ([#20216](https://github.com/ionic-team/ionic/issues/20216)) ([dc78f98](https://github.com/ionic-team/ionic/commit/dc78f981531960791a425b3b1b81d45d5065a263))
* **ssr:** add reflect content-id attribute to applicable properties ([#20169](https://github.com/ionic-team/ionic/issues/20169)) ([3aa47e6](https://github.com/ionic-team/ionic/commit/3aa47e6e2f18c3a07f2c0560a0946571e8e6815d))


### Code Refactoring

* removed checked/selected properties in favor of setting value on parent ([#19449](https://github.com/ionic-team/ionic/issues/19449)) ([a5229d9](https://github.com/ionic-team/ionic/commit/a5229d90ca2a608e8bf4db0c8f71c86d481dd649))


### Features

* **datetime:** add custom timezone display property ([#19519](https://github.com/ionic-team/ionic/issues/19519)) ([7b032c5](https://github.com/ionic-team/ionic/commit/7b032c5e9b396fcfb0b0e313aff1bebcbc43305e)), closes [#19401](https://github.com/ionic-team/ionic/issues/19401)
* **segment:** update design for iOS and MD spec ([#19036](https://github.com/ionic-team/ionic/issues/19036)) ([dc66ce4](https://github.com/ionic-team/ionic/commit/dc66ce48e1f210ca57cecae5c89e5dc3b7e95de5)), closes [#18663](https://github.com/ionic-team/ionic/issues/18663)
* **toast:** expose shadow parts ([#20146](https://github.com/ionic-team/ionic/issues/20146)) ([3b4988a](https://github.com/ionic-team/ionic/commit/3b4988aa60dc6d31e1bc3367cb8f5e8d85710ac6))


### BREAKING CHANGES

> We recommend updating to the latest version of 4.x before trying out version 5 in order to see deprecation warnings related to your app [in the developer console](https://javascript.info/devtools).

* The following components have been updated to remove the checked or selected properties:

- Radio
- Segment Button
- Select

Developers should set the value property on the respective parent components in order to managed checked/selected status. See the [Breaking Changes](./BREAKING.md) document for updated usage examples.


* Controller components have been removed. Developers should user their respective imports instead. This only affects vanilla JS applications.

Before:
```html
<ion-modal-controller></ion-modal-controller>
```

After:
```javascript
import { modalController } from '@ionic/core';
```

## [4.11.8](https://github.com/ionic-team/ionic/compare/v4.11.7...v4.11.8) (2020-01-13)

* **react:** add missing react memory router ([8a5aba2](https://github.com/ionic-team/ionic/commit/8a5aba206865ce2af7f8bb85f4e7cd8dec37831d))
* **react:** fixing type of icon in ToastOptions, ActionSheetOptions, fixes [#20100](https://github.com/ionic-team/ionic/issues/20100) ([857bab6](https://github.com/ionic-team/ionic/commit/857bab66419a851c6d189cd1456cd67c1c2d934c))
* **react:** supporting ios and md props on icons ([#20170](https://github.com/ionic-team/ionic/issues/20170)) ([676cc19](https://github.com/ionic-team/ionic/commit/676cc19b89cd6374346aaac9cc3292872c7148fa))


# [5.0.0-beta.4](https://github.com/ionic-team/ionic/compare/v5.0.0-beta.3...v5.0.0-beta.4) (2020-01-06)


### Features

* **refresher:** add MD native refresher ([#20096](https://github.com/ionic-team/ionic/issues/20096)) ([5b81bdf](https://github.com/ionic-team/ionic/commit/5b81bdfcf18ed182bde14bbea4957b49ea886322)), closes [#17316](https://github.com/ionic-team/ionic/issues/17316)



# [5.0.0-beta.3](https://github.com/ionic-team/ionic/compare/v4.11.7...v5.0.0-beta.3) (2020-01-03)


### Bug Fixes

* **animation:** support css animation on older devices ([#20020](https://github.com/ionic-team/ionic/issues/20020)) ([49c394c](https://github.com/ionic-team/ionic/commit/49c394c3d335795fd100f54a5b29db009d413dff)), closes [#20017](https://github.com/ionic-team/ionic/issues/20017)
* **icons:** fix the ellipsis fill in ionicons ([#20137](https://github.com/ionic-team/ionic/issues/20137)) ([9318d24](https://github.com/ionic-team/ionic/commit/9318d2418ec144bbce4a3b7ead33cf099d6ec25b))
* **modal:** account for safe area on devices with a notch ([#20072](https://github.com/ionic-team/ionic/issues/20072)) ([1cabb53](https://github.com/ionic-team/ionic/commit/1cabb5365097d0675447a36223583824a58a140c))
* **react:** fire lifecycle events on initial render, fixes [#20071](https://github.com/ionic-team/ionic/issues/20071) ([2dcf3ee](https://github.com/ionic-team/ionic/commit/2dcf3ee7b570be73be35c52f03ccfa09baf5d830))


### Code Refactoring

* **searchbar:** set inputmode default to undefined ([#20080](https://github.com/ionic-team/ionic/issues/20080)) ([6612604](https://github.com/ionic-team/ionic/commit/6612604733ac1b3e46546625f24ef6efa5be1538)), closes [#20074](https://github.com/ionic-team/ionic/issues/20074)


### Features

* **angular:** angular 9 support ([#19515](https://github.com/ionic-team/ionic/issues/19515)) ([2344d0b](https://github.com/ionic-team/ionic/commit/2344d0b272105e368c00ef611f28909215162f7c))
* **checkbox:** add --checkmark-width variable ([#19933](https://github.com/ionic-team/ionic/issues/19933)) ([c32a7bc](https://github.com/ionic-team/ionic/commit/c32a7bcd202993056923857a5d9eed14f5be8580)), closes [#16803](https://github.com/ionic-team/ionic/issues/16803)
* **radio:** add --border-radius and --inner-border-radius variables ([#20140](https://github.com/ionic-team/ionic/issues/20140)) ([a01c102](https://github.com/ionic-team/ionic/commit/a01c10267e18a48f30af2f552c556d31dad582e9))
* **refresher:** add iOS native refresher ([#20037](https://github.com/ionic-team/ionic/issues/20037)) ([04e7c03](https://github.com/ionic-team/ionic/commit/04e7c031326ec551531af291ef1a03878d168378)), closes [#18664](https://github.com/ionic-team/ionic/issues/18664)
* **toggle:** add --border-radius and --handle-border-radius variables ([#20141](https://github.com/ionic-team/ionic/issues/20141)) ([02a46a1](https://github.com/ionic-team/ionic/commit/02a46a1007dde820cb158d34d4e3f243c07251dc))


### BREAKING CHANGES

> We recommend updating to the latest version of 4.x before trying out version 5 in order to see deprecation warnings related to your app [in the developer console](https://javascript.info/devtools).

* **searchbar:** The `inputmode` property for `ion-searchbar` now defaults to `undefined`. To get the old behavior, set the `inputmode` property to `"search"`.




## [4.11.7](https://github.com/ionic-team/ionic/compare/v4.11.6...v4.11.7) (2019-12-12)


### Bug Fixes

* **react:** fire lifecycle events on initial render, fixes [#20071](https://github.com/ionic-team/ionic/issues/20071) ([9ea75eb](https://github.com/ionic-team/ionic/commit/9ea75ebec7b1367fc0e319fe61c1f42516357e10))

# [5.0.0-beta.2](https://github.com/ionic-team/ionic/compare/v5.0.0-beta.1...v5.0.0-beta.2) (2019-12-11)


### Bug Fixes

* **animation:** convert hyphenated properties to camel case when using Web Animations ([#20059](https://github.com/ionic-team/ionic/issues/20059)) ([56f67bd](https://github.com/ionic-team/ionic/commit/56f67bd9a5c8c81768e310560b2605e44bf7a9f0)), closes [#20058](https://github.com/ionic-team/ionic/issues/20058)
* **animation:** properly update Web Animation object ([#19964](https://github.com/ionic-team/ionic/issues/19964)) ([e766194](https://github.com/ionic-team/ionic/commit/e76619478c3c49469fcc22e264cc831d498abf8d))
* **picker:** pass selected value to handler on dismiss ([#20042](https://github.com/ionic-team/ionic/issues/20042)) ([6e0b9c4](https://github.com/ionic-team/ionic/commit/6e0b9c45489889266620ee2ca38c33fdf8ce3f3b)), closes [#20036](https://github.com/ionic-team/ionic/issues/20036)
* **tabs:** preserve route navigation extras when changing tabs ([#18493](https://github.com/ionic-team/ionic/issues/18493)) ([4c8f32f](https://github.com/ionic-team/ionic/commit/4c8f32fae99db4022aa9dc75187e2f161e8e678e)), closes [#18717](https://github.com/ionic-team/ionic/issues/18717)
* **title:** add correct safe area to large title nav transition ([#20029](https://github.com/ionic-team/ionic/issues/20029)) ([300d543](https://github.com/ionic-team/ionic/commit/300d54356df925bb94f22b6805e48c88d1e56a26)), closes [#20028](https://github.com/ionic-team/ionic/issues/20028)



### Features

* **modal:** add card-style presentation with swipe to close gesture ([#19428](https://github.com/ionic-team/ionic/issues/19428)) ([b3b3312](https://github.com/ionic-team/ionic/commit/b3b33127115bb966980a1288a0005dfb09306881)), closes [#18660](https://github.com/ionic-team/ionic/issues/18660)


## [4.11.6](https://github.com/ionic-team/ionic/compare/v4.11.5...v4.11.6) (2019-12-11)

### Bug Fixes

* **react:** don't show back button when not appropriate ([684293d](https://github.com/ionic-team/ionic/commit/684293ddbf1ad4edce590d56f7ff66fcd6c817a5))
* **react:** first render performance improvements ([1c7d1e5](https://github.com/ionic-team/ionic/commit/1c7d1e5cf1ad7e53ebbee2566e8fa89f567f7fb5))
* **react:** fix refs for controllers, overlays, ionpage, and ionrouteroutlet, fixes [#19924](https://github.com/ionic-team/ionic/issues/19924) ([#20012](https://github.com/ionic-team/ionic/issues/20012)) ([eef55bb](https://github.com/ionic-team/ionic/commit/eef55bb0072a9e54b1fd7d1c8c69e7fd43b2a5c5))
* **react:** support for 'root' router direction, fixes [#19982](https://github.com/ionic-team/ionic/issues/19982) ([#20052](https://github.com/ionic-team/ionic/issues/20052)) ([e116712](https://github.com/ionic-team/ionic/commit/e1167122758b23221935e897bcd65839b75c59aa))
* **react:** support navigating to same page and route updates in IonRouterOutlet, fixes [#19891](https://github.com/ionic-team/ionic/issues/19891), [#19892](https://github.com/ionic-team/ionic/issues/19892), [#19986](https://github.com/ionic-team/ionic/issues/19986) ([f9bf8db](https://github.com/ionic-team/ionic/commit/f9bf8dbe6f952ee53b6b213a4c0d043d25f49b93))

### Upgrade Note

If you run into a "Property 'translate' is missing in type" error building after updating to 4.11.6, update your React Typings library to the latest:

npm i @types/react@latest @types/react-dom@latest

# [5.0.0-beta.1](https://github.com/ionic-team/ionic/compare/v5.0.0-beta.0...v5.0.0-beta.1) (2019-11-20)


### Bug Fixes

* **animation:** track correctly when updating CSS Animation ([#19813](https://github.com/ionic-team/ionic/issues/19813)) ([7bd4412](https://github.com/ionic-team/ionic/commit/7bd44128895b9fa4992142c0cc30cf75092cb794))
* **card:** update background to use the same as item ([#19602](https://github.com/ionic-team/ionic/issues/19602)) ([1a8b7a4](https://github.com/ionic-team/ionic/commit/1a8b7a4559860b3efa4778a78c905e30f18587bf))
* **content:** set fixed content to position absolute ([#19867](https://github.com/ionic-team/ionic/issues/19867)) ([fce3e24](https://github.com/ionic-team/ionic/commit/fce3e24600be6f04b285cda62fe2f21c49d809e2)), closes [#17754](https://github.com/ionic-team/ionic/issues/17754)
* **gesture:** release gesture when disabling ([#19855](https://github.com/ionic-team/ionic/issues/19855)) ([21484f1](https://github.com/ionic-team/ionic/commit/21484f1f3a9ebe46096c979fe3f2035892a53a62)), closes [#19848](https://github.com/ionic-team/ionic/issues/19848)
* **header:** avoid flicker on collapsible header load ([#19682](https://github.com/ionic-team/ionic/issues/19682)) ([0a7aae2](https://github.com/ionic-team/ionic/commit/0a7aae28a7eb0270cdcd100933c01850403b66db))
* **header:** avoid flicker when collapsing ([#19850](https://github.com/ionic-team/ionic/issues/19850)) ([a3666dd](https://github.com/ionic-team/ionic/commit/a3666ddf0ccc44c696121a8d6107015dbe7aeabb)), closes [#19839](https://github.com/ionic-team/ionic/issues/19839)
* **header:** support collapsible header with multiple toolbars ([#19909](https://github.com/ionic-team/ionic/issues/19909)) ([fc4bb2d](https://github.com/ionic-team/ionic/commit/fc4bb2db5c5715841347135bdfa1bf66718d647d))
* **header:** translucent toolbars now work with collapsible header ([#19774](https://github.com/ionic-team/ionic/issues/19774)) ([b642b53](https://github.com/ionic-team/ionic/commit/b642b532e8846042f1317dc936191d0934b23945)), closes [#19773](https://github.com/ionic-team/ionic/issues/19773)
* **title:** only animate large title if back button is in start slot ([#19846](https://github.com/ionic-team/ionic/issues/19846)) ([cace1b3](https://github.com/ionic-team/ionic/commit/cace1b357e5acd54d49f2b662ecee5de90add708)), closes [#19840](https://github.com/ionic-team/ionic/issues/19840)
* **nav-params:** set generic type on navigation parameters get() ([#19195](https://github.com/ionic-team/ionic/issues/19195)) ([504051d](https://github.com/ionic-team/ionic/commit/504051d709c8afe08d588747866d2ee924baf804))
* **picker:** pass data and role to dismiss ([#19787](https://github.com/ionic-team/ionic/issues/19787)) ([7988720](https://github.com/ionic-team/ionic/commit/7988720b1cf46a651d9c140f0fe95726d3feb48c)), closes [#18454](https://github.com/ionic-team/ionic/issues/18454)
* **searchbar:** use back button config value for cancel icon ([#19353](https://github.com/ionic-team/ionic/issues/19353)) ([3d6f3b9](https://github.com/ionic-team/ionic/commit/ed6f3b9f3f42ef85f3f2d083fa7fe37a69b491c8))
* **textarea:** remove padding from textarea placeholder ([#19694](https://github.com/ionic-team/ionic/issues/19694)) ([f63d37a](https://github.com/ionic-team/ionic/commit/f63d37a4c506801a19b9bf6e5ef05d415d680b0c)), closes [#19616](https://github.com/ionic-team/ionic/issues/19616)
* **toast:** call button handler on cancel ([#19793](https://github.com/ionic-team/ionic/issues/19793)) ([420aa66](https://github.com/ionic-team/ionic/commit/420aa6639214e7d2e7b7413e699ace3d7fd35e40)), closes [#19791](https://github.com/ionic-team/ionic/issues/19791)



### Features

* **animation:** animation identifiers ([#19771](https://github.com/ionic-team/ionic/issues/19771)) ([7d41715](https://github.com/ionic-team/ionic/commit/7d417154c5f1ba89e0a30084807ff7e164dd6eba)), closes [#19550](https://github.com/ionic-team/ionic/issues/19550)
* **animation:** cubic-bezier easing conversion utility (experimental) ([#19788](https://github.com/ionic-team/ionic/issues/19788)) ([96a5e60](https://github.com/ionic-team/ionic/commit/96a5e600e563489d93a26d5956d210f246f6fea5)), closes [#19789](https://github.com/ionic-team/ionic/issues/19789)
* **alert:** add support for textarea inputs ([#16851](https://github.com/ionic-team/ionic/issues/16851)) ([b28cf02](https://github.com/ionic-team/ionic/commit/b28cf02ef3979c844c498a8e30ee977937984828)), closes [#14153](https://github.com/ionic-team/ionic/issues/14153)
* **angular:** expose Ionic Animations via AnimationController ([#19745](https://github.com/ionic-team/ionic/issues/19745)) ([67a7e23](https://github.com/ionic-team/ionic/commit/67a7e232b9058620653feec5ed99e0ebf22b6620))
* **angular:** expose Ionic Gestures via GestureController ([#19864](https://github.com/ionic-team/ionic/issues/19864)) ([48a7662](https://github.com/ionic-team/ionic/commit/48a766246d08170c709345bba235275eef0bd020))
* **searchbar:** add --box-shadow variable to style searchbar input ([#19838](https://github.com/ionic-team/ionic/issues/19838)) ([1ab7066](https://github.com/ionic-team/ionic/commit/1ab7066aa085bc0185a6dd3d162439f7f82415fa))
* **select:** add --placeholder-opacity and --placeholder-color, expose shadow parts ([#19893](https://github.com/ionic-team/ionic/issues/19893)) ([bef0f53](https://github.com/ionic-team/ionic/commit/bef0f53d0dcb15c58221c2dec8c4c274d3b5c77e)), closes [#17446](https://github.com/ionic-team/ionic/issues/17446)
* **split-pane:** convert to shadow component, add width, max-width, and min-width vars ([#19754](https://github.com/ionic-team/ionic/issues/19754)) ([d80f455](https://github.com/ionic-team/ionic/commit/d80f45516d5dca62b77db1773206ef274d42f3ef)), closes [#17088](https://github.com/ionic-team/ionic/issues/17088)



### Breaking Changes

> We recommend updating to the latest version of 4.x before trying out version 5 in order to see deprecation warnings related to your app [in the developer console](https://javascript.info/devtools).

* **back-button:** convert back button to shadow ([#19411](https://github.com/ionic-team/ionic/pull/19411)) ([0d40d3f](https://github.com/ionic-team/ionic/commit/0d40d3f3b72aac7932ac71e6573d8bbb65a01515))
* **ionicons:** update to Ionicons v5. See https://ionicons.com for more information. ([#19670](https://github.com/ionic-team/ionic/pull/19670)) ([69e10de](https://github.com/ionic-team/ionic/commit/69e10de718dcba4d43e82bd37aeacd2585dd9a79))
* **list-header:** redesign list header to match latest iOS spec ([#19915](https://github.com/ionic-team/ionic/issues/19915)) ([5bbb95f](https://github.com/ionic-team/ionic/commit/5bbb95fae1e371021d6a0edc17fbb021a598b285))
* **split-pane:** convert split-pane to shadow ([#19754](https://github.com/ionic-team/ionic/issues/19754)) ([d80f455](https://github.com/ionic-team/ionic/commit/d80f45516d5dca62b77db1773206ef274d42f3ef))


## [4.11.5](https://github.com/ionic-team/ionic/compare/v4.11.0...v4.11.5) (2019-11-14)


### Bug Fixes

* **react:** improved lifecycle hooks to deal with stale closures, fixes [#19873](https://github.com/ionic-team/ionic/issues/19873) ([#19874](https://github.com/ionic-team/ionic/issues/19874)) ([5ff786a](https://github.com/ionic-team/ionic/commit/5ff786a23d5aa32281bbf5daaa7f8156de39caca))


## [4.11.4](https://github.com/ionic-team/ionic/compare/v4.11.1...v4.11.4) (2019-11-07)


### Bug Fixes

* **react:** check for component unmount, fixes [#19859](https://github.com/ionic-team/ionic/issues/19859) ([7356c40](https://github.com/ionic-team/ionic/commit/7356c401742ce2b3241d6ab05fce0fa65d2f1f8a))
* **react:** adding multiple subscriptions to lifecycle events, fixes [#19792](https://github.com/ionic-team/ionic/issues/19792) ([#19858](https://github.com/ionic-team/ionic/issues/19858)) ([0a3014d](https://github.com/ionic-team/ionic/commit/0a3014d35e2102570fd3d8c5ada29eb01aab18e9))
* **react:** add check to warn if no ionpage is found, fixes [#19832](https://github.com/ionic-team/ionic/issues/19832) ([#19857](https://github.com/ionic-team/ionic/issues/19857)) ([628e766](https://github.com/ionic-team/ionic/commit/628e76668ea72baebdb02b9dcfe24c0da837fb08))
* **react:** expand the location stack to better support back button, fixes [#19748](https://github.com/ionic-team/ionic/issues/19748) ([#19856](https://github.com/ionic-team/ionic/issues/19856)) ([d89508b](https://github.com/ionic-team/ionic/commit/d89508b1b58481d518b89362a8792d05f3f451c9))
* **react:** adding hardware back button support, fixes(19819) ([#19851](https://github.com/ionic-team/ionic/issues/19851)) ([fd9745d](https://github.com/ionic-team/ionic/commit/fd9745ddcddded76d64220838aef0f599bf4352f))
* **react:** adding swipe back functionality and routerOutlet ready improvements, fixes [#19818](https://github.com/ionic-team/ionic/issues/19818) ([#19849](https://github.com/ionic-team/ionic/issues/19849)) ([bcc40c8](https://github.com/ionic-team/ionic/commit/bcc40c8d59b723bbdb1dfd318bfb2219eb8df3cf))
* **react:** create a new overlay each time component is presented, fixes [#19841](https://github.com/ionic-team/ionic/issues/19841), [#19823](https://github.com/ionic-team/ionic/issues/19823) ([#19842](https://github.com/ionic-team/ionic/issues/19842)) ([9fad416](https://github.com/ionic-team/ionic/commit/9fad4161be4859969e14d4d33169ef022052d6bf))


## [4.11.3](https://github.com/ionic-team/ionic/compare/v4.11.1...v4.11.3) (2019-10-30)


### Bug Fixes

* **react:** adding change events to iontabs, fixes [#19665](https://github.com/ionic-team/ionic/issues/19665) ([#19711](https://github.com/ionic-team/ionic/issues/19711)) ([b7baf24](https://github.com/ionic-team/ionic/commit/b7baf24e5053a379156e6c3d82c2b5d3afa999f1))
* **react:** adding HashRouter to available ion routers, fixes [#19621](https://github.com/ionic-team/ionic/issues/19621) ([#19683](https://github.com/ionic-team/ionic/issues/19683)) ([fcdbb3c](https://github.com/ionic-team/ionic/commit/fcdbb3ce98747d3b37107904ca110daad95e48bc))
* **react:** checking if node is actually an element before treating it like one, fixes [#19769](https://github.com/ionic-team/ionic/issues/19769) ([#19783](https://github.com/ionic-team/ionic/issues/19783)) ([9d0caf6](https://github.com/ionic-team/ionic/commit/9d0caf6de070145c4af618847b27e24c49027b8e))
* **react:** checking isOpen again after async call before opening overlay, fixes [#19755](https://github.com/ionic-team/ionic/issues/19755) ([f70e71a](https://github.com/ionic-team/ionic/commit/f70e71a3d461cdab65626a5a7e1b6f4d03b852b1))
* **react:** don't remove current view, provide a better method to determine showGoBack fixes [#19731](https://github.com/ionic-team/ionic/issues/19731) and [#19732](https://github.com/ionic-team/ionic/issues/19732) ([31c754d](https://github.com/ionic-team/ionic/commit/31c754dab7ada494ff5f0026d5cf3f7f65198eff))
* **react:** removing pages from DOM on nav, fixes [#19701](https://github.com/ionic-team/ionic/issues/19701) ([#19712](https://github.com/ionic-team/ionic/issues/19712)) ([ee21d3a](https://github.com/ionic-team/ionic/commit/ee21d3ae43d8c6b076387a58bca655a56c920bcd))
* **react:** unmount leaving view when using browser back button, fixes [#19749](https://github.com/ionic-team/ionic/issues/19749) ([#19781](https://github.com/ionic-team/ionic/issues/19781)) ([2dc5540](https://github.com/ionic-team/ionic/commit/2dc554091056612f1bcd2751d6eeb41cae488751))



## [4.11.2](https://github.com/ionic-team/ionic/compare/v4.11.0...v4.11.2) (2019-10-21)


### Bug Fixes

* **animations:** ensure all elements are cleaned up when calling .destroy() ([#19654](https://github.com/ionic-team/ionic/issues/19654)) ([d97e167](https://github.com/ionic-team/ionic/commit/d97e167))
* **header:** collapsible header works in tabs ([#19658](https://github.com/ionic-team/ionic/issues/19658)) ([4853909](https://github.com/ionic-team/ionic/commit/4853909)), closes [#19640](https://github.com/ionic-team/ionic/issues/19640)
* **ios:** hide leaving view after nav transition to avoid flicker ([#19691](https://github.com/ionic-team/ionic/issues/19691)) ([70e0562](https://github.com/ionic-team/ionic/commit/70e0562)), closes [#19674](https://github.com/ionic-team/ionic/issues/19674)
* **menu:** clamp out of bounds swipe value ([#19684](https://github.com/ionic-team/ionic/issues/19684)) ([1535e95](https://github.com/ionic-team/ionic/commit/1535e95)), closes [#18927](https://github.com/ionic-team/ionic/issues/18927)
* **react:** add IonPicker as controller component, fixes [#19620](https://github.com/ionic-team/ionic/issues/19620) ([#19643](https://github.com/ionic-team/ionic/issues/19643)) ([ed98d9e](https://github.com/ionic-team/ionic/commit/ed98d9e))
* **react:** adding change events to IonTabs, fixes [#19665](https://github.com/ionic-team/ionic/issues/19665) ([#19711](https://github.com/ionic-team/ionic/issues/19711)) ([b7baf24](https://github.com/ionic-team/ionic/commit/b7baf24))
* **react:** adding HashRouter to available ion routers, fixes [#19621](https://github.com/ionic-team/ionic/issues/19621) ([#19683](https://github.com/ionic-team/ionic/issues/19683)) ([fcdbb3c](https://github.com/ionic-team/ionic/commit/fcdbb3c))
* **react:** pages no longer hidden when navigating between tabs, fixes [#19646](https://github.com/ionic-team/ionic/issues/19646) ([#19647](https://github.com/ionic-team/ionic/issues/19647)) ([8776556](https://github.com/ionic-team/ionic/commit/8776556))
* **react:** ensure views are removed from DOM after navigating back, fixes [#19701](https://github.com/ionic-team/ionic/issues/19701) ([#19712](https://github.com/ionic-team/ionic/issues/19712)) ([ee21d3a](https://github.com/ionic-team/ionic/commit/ee21d3a))



# [5.0.0-beta.0](https://github.com/ionic-team/ionic/compare/v4.11.1...v5.0.0-beta.0) (2019-10-15)


### Bug Fixes

* **animations:** ensure all elements are cleaned up when calling .destroy() ([#19654](https://github.com/ionic-team/ionic/issues/19654)) ([2f88237](https://github.com/ionic-team/ionic/commit/2f882373bf08ce6ff7ec2ffb36b73e94c20881ca))
* **content:** set overscroll only on iOS ([#19470](https://github.com/ionic-team/ionic/issues/19470)) ([63c2008](https://github.com/ionic-team/ionic/commit/63c2008a86de19847677fda7b9fedce73ed7669f)), closes [#19465](https://github.com/ionic-team/ionic/issues/19465)
* **css:** update responsive display media queries ([#18601](https://github.com/ionic-team/ionic/issues/18601)) ([5d6e077](https://github.com/ionic-team/ionic/commit/5d6e077067c269d1589e7432e5074af6fc64b2fb)), closes [#18600](https://github.com/ionic-team/ionic/issues/18600)
* **grid:** remove padding on children columns when grid has ion-no-padding ([#19592](https://github.com/ionic-team/ionic/issues/19592)) ([17119f5](https://github.com/ionic-team/ionic/commit/17119f59cf525b90b966e99117137512dbd397b4)), closes [#17459](https://github.com/ionic-team/ionic/issues/17459)
* **searchbar:** update alignment of chips and other elements in toolbar ([#19596](https://github.com/ionic-team/ionic/issues/19596)) ([637f26b](https://github.com/ionic-team/ionic/commit/637f26b3642a266b6ef3b9d3d71b7327a5d3cc37)), closes [#19495](https://github.com/ionic-team/ionic/issues/19495) [#19502](https://github.com/ionic-team/ionic/issues/19502)
* **toast:** inherit height in container to center align content ([#19409](https://github.com/ionic-team/ionic/issues/19409)) ([250718a](https://github.com/ionic-team/ionic/commit/250718a40f159fbd99f96d54c11e9a6aea080f04))


### Features

* **components:** cascade mode from parent to child components ([#19369](https://github.com/ionic-team/ionic/issues/19369)) ([3dd5f05](https://github.com/ionic-team/ionic/commit/3dd5f057604dcae7b017accdd37f4f3518a1f113)), closes [#18285](https://github.com/ionic-team/ionic/issues/18285)
* **menu:** default to overlay for ios menu ([#19063](https://github.com/ionic-team/ionic/issues/19063)) ([dbf6a44](https://github.com/ionic-team/ionic/commit/dbf6a448ff3539fda2f182e00fa21435fcd60493)), closes [#18662](https://github.com/ionic-team/ionic/issues/18662)
* **overlays:** add global backdrop opacity variable for animations ([#19533](https://github.com/ionic-team/ionic/issues/19533)) ([bd22926](https://github.com/ionic-team/ionic/commit/bd22926c4995b2d953a08aac7125241929f78f9e)), closes [#16446](https://github.com/ionic-team/ionic/issues/16446)


### Performance Improvements

* **animations:** do not create setTimeout if infinite iterations ([#19632](https://github.com/ionic-team/ionic/issues/19632)) ([0d699fb](https://github.com/ionic-team/ionic/commit/0d699fb2e40b1481d8a63457dce3c58fa45976a3)), closes [#19627](https://github.com/ionic-team/ionic/issues/19627)
* **animations:** wrap loops in requestAnimationFrame call ([#19630](https://github.com/ionic-team/ionic/issues/19630)) ([589e67e](https://github.com/ionic-team/ionic/commit/589e67e4af3c2c5e42984f82cbd83d0246029535)), closes [#19629](https://github.com/ionic-team/ionic/issues/19629)


### Breaking Changes

> We recommend updating to the latest version of 4.x before trying out version 5 in order to see deprecation warnings related to your app [in the developer console](https://javascript.info/devtools).

* **all:** mode is now cascaded from parent to child component. If this is not desired set a different mode on the child component. ([#19369](https://github.com/ionic-team/ionic/issues/19369)) ([55462d7](https://github.com/ionic-team/ionic/commit/55462d7a0935f57b6855f9bd1bf788bfcf532bc3))
* **anchor:** remove `ion-anchor`, use `ion-router-link` instead. ([#18935](https://github.com/ionic-team/ionic/issues/18935)) ([e7cd197](https://github.com/ionic-team/ionic/commit/e7cd197af79cdf87f04bc769e0367c7e93c0aa0b))
* **card:** convert card to shadow. ([#19395](https://github.com/ionic-team/ionic/issues/19395)) ([08bb60d](https://github.com/ionic-team/ionic/commit/08bb60dcbba3140bb2da64bb74217af8a36a266d))
* **css:** responsive display media queries in the display CSS file have been updated. Instead of using the maximum value of that breakpoint (for `.ion-hide-{breakpoint}-down` classes) the maximum of the media query will be the minimum of that breakpoint. ([#18601](https://github.com/ionic-team/ionic/issues/18601)) ([40a8bff](https://github.com/ionic-team/ionic/commit/40a8bffcd54882300906243781abc12776c61ca6))
* **css:** remove all CSS utility attributes. Use CSS classes instead. See the documentation for the correct class names: https://ionicframework.com/docs/layout/css-utilities ([#18956](https://github.com/ionic-team/ionic/issues/18956)) ([04862df](https://github.com/ionic-team/ionic/commit/04862df7e1029a4e6c188536cb573ddfd57e9c85))

  BEFORE:

  ```html
  <ion-header text-center></ion-header>
  <ion-content padding></ion-content>
  <ion-label text-wrap></ion-label>
  <ion-item wrap></ion-item>
  ```

  AFTER:

  ```html
  <ion-header class="ion-text-center"></ion-header>
  <ion-content class="ion-padding"></ion-content>
  <ion-label class="ion-text-wrap"></ion-label>
  <ion-item class="ion-wrap"></ion-item>
  ```
* **events:** remove the Events service. ([#19600](https://github.com/ionic-team/ionic/issues/19600)) ([8d4a721](https://github.com/ionic-team/ionic/commit/8d4a721c6675c13d1f84c455bb222af60be34312))
  - Use "Observables" for a similar pub/sub architecture: https://angular.io/guide/observables
  - Use "Redux" for advanced state management: https://ngrx.io
* **header/footer:** remove `no-border` attribute from header/footer, use `ion-no-border` class instead. ([#18954](https://github.com/ionic-team/ionic/issues/18954)) ([d9f6119](https://github.com/ionic-team/ionic/commit/d9f61197ffc62af10243a6719cc08200fd57ff8b))
* **menu:** iOS menu now defaults to overlay, set `type` to `"reveal"` to get the old behavior. ([#19063](https://github.com/ionic-team/ionic/issues/19063)) ([ccb54a1](https://github.com/ionic-team/ionic/commit/ccb54a1255ca2a303c27e5a0cf68f4e3fb86a2fb))
* **menu-controller:** remove `swipeEnable()`, use `swipeGesture()` instead. ([#19526](https://github.com/ionic-team/ionic/issues/19526)) ([30bd8fd](https://github.com/ionic-team/ionic/commit/30bd8fd739974926f0eaadddc33c50b546be4887))
* **nav:** remove `ion-nav-pop`, `ion-nav-push` and `ion-nav-set-root`. Use `ion-nav-link` with `routerDirection` instead. ([#19240](https://github.com/ionic-team/ionic/issues/19240)) ([e334d73](https://github.com/ionic-team/ionic/commit/e334d73e544efddf7335c4ce9a5382f8a34d013e))
* **searchbar:** remove boolean values from `showCancelButton`, use string values: `"always"`, `"focus"`, `"never"`. ([#18953](https://github.com/ionic-team/ionic/issues/18953)) ([508e186](https://github.com/ionic-team/ionic/commit/508e1868ad672ded49ddababd7a506ff1721534d))

  BEFORE:

  ```html
  <ion-searchbar show-cancel-button>
  <ion-searchbar show-cancel-button="true">
  <ion-searchbar show-cancel-button="false">
  ```

  AFTER:

  ```html
  <ion-searchbar show-cancel-button="focus">
  <ion-searchbar show-cancel-button="focus">
  <ion-searchbar show-cancel-button="never">
  ```
* **scss:** remove `scss` files from `dist/`, use CSS variables to theme instead. ([#19292](https://github.com/ionic-team/ionic/issues/19292)) ([6450aff](https://github.com/ionic-team/ionic/commit/6450aff080c561c60c140000b89ff340edeeaeca))
* **skeleton-text:** remove `width` property. Use CSS instead. ([#18936](https://github.com/ionic-team/ionic/issues/18936)) ([7c3db79](https://github.com/ionic-team/ionic/commit/7c3db79c23dac599aa8131753b33b1ed3487d776))
* **split-pane:** remove `main` attribute. Use `contentId` instead. ([#19511](https://github.com/ionic-team/ionic/issues/19511)) ([02d7841](https://github.com/ionic-team/ionic/commit/02d784140ce0fc75718781454e8dd8a2f621ee0d))

  BEFORE:

  ```html
  <ion-split-pane>
    ...
    <div main>...</div>
  </ion-split-pane>
  ```

  AFTER:

  ```html
  <ion-split-pane content-id="main-content">
    ...
    <div id="main-content">...</div>
  </ion-split-pane>
  ```
* **theming:** ionic default colors have been updated. ([#19279](https://github.com/ionic-team/ionic/issues/19279)) ([7f4cf08](https://github.com/ionic-team/ionic/commit/7f4cf08d996f90ae90064a351f8e373ce7a16799))
* **toast:** remove `showCloseButton` and `closeButtonText`, add a button using the `buttons` property with `role: 'cancel'` instead. ([#18957](https://github.com/ionic-team/ionic/issues/18957)) ([ad7f112](https://github.com/ionic-team/ionic/commit/ad7f112e1eb04e41e697936454e63977d1bde34b))



## [4.11.1](https://github.com/ionic-team/ionic/compare/v4.11.0...v4.11.1) (2019-10-14)


### Bug Fixes

* **build:** properly update peer dependencies ([#19639](https://github.com/ionic-team/ionic/issues/19639)) ([b552daa](https://github.com/ionic-team/ionic/commit/b552daa))
* **react:** add IonPicker as controller component, fixes [#19620](https://github.com/ionic-team/ionic/issues/19620) ([#19643](https://github.com/ionic-team/ionic/issues/19643)) ([ed98d9e](https://github.com/ionic-team/ionic/commit/ed98d9e))
* **react:** handle tab back nav better, fixes [#19646](https://github.com/ionic-team/ionic/issues/19646) ([#19647](https://github.com/ionic-team/ionic/issues/19647)) ([8776556](https://github.com/ionic-team/ionic/commit/8776556))
* **react:** moving tslint and friends to devDependencies ([#19624](https://github.com/ionic-team/ionic/issues/19624)) ([7f4b77d](https://github.com/ionic-team/ionic/commit/7f4b77d))



# [4.11.0 Sodium](https://github.com/ionic-team/ionic/compare/v4.10.3...v4.11.0) (2019-10-09)

Ionic React! Enjoy! 🧂 🌊 🐼

## [4.10.3](https://github.com/ionic-team/ionic/compare/v4.10.2...v4.10.3) (2019-10-09)


### Bug Fixes

* **content:** set overscroll only on iOS ([#19470](https://github.com/ionic-team/ionic/issues/19470)) ([63c2008](https://github.com/ionic-team/ionic/commit/63c2008a86de19847677fda7b9fedce73ed7669f)), closes [#19465](https://github.com/ionic-team/ionic/issues/19465)
* **searchbar:** update alignment of chips and other elements in toolbar ([#19596](https://github.com/ionic-team/ionic/issues/19596)) ([637f26b](https://github.com/ionic-team/ionic/commit/637f26b3642a266b6ef3b9d3d71b7327a5d3cc37)), closes [#19495](https://github.com/ionic-team/ionic/issues/19495) [#19502](https://github.com/ionic-team/ionic/issues/19502)



## [4.10.2](https://github.com/ionic-team/ionic/compare/v4.10.1...v4.10.2) (2019-10-08)


### Bug Fixes

* **overlay:** ensure lifecycle events fire properly ([#19579](https://github.com/ionic-team/ionic/issues/19579)) ([a7b9642](https://github.com/ionic-team/ionic/commit/a7b9642)), closes [#19576](https://github.com/ionic-team/ionic/issues/19576)



## [4.10.1](https://github.com/ionic-team/ionic/compare/v4.10.0...v4.10.1) (2019-10-07)


### Bug Fixes

* **animation:** animation timer fallback now accounts for iterations ([#19527](https://github.com/ionic-team/ionic/issues/19527)) ([9f5ed23](https://github.com/ionic-team/ionic/commit/9f5ed23))
* **css:** update deprecations to remove wrap ([#19535](https://github.com/ionic-team/ionic/issues/19535)) ([bfb704e](https://github.com/ionic-team/ionic/commit/bfb704e)), closes [#19499](https://github.com/ionic-team/ionic/issues/19499)
* **header:** fix collapsing iOS header when using with split pane ([#19480](https://github.com/ionic-team/ionic/issues/19480)) ([dea1c26](https://github.com/ionic-team/ionic/commit/dea1c26)), closes [#19541](https://github.com/ionic-team/ionic/issues/19541)
* **list:** add bottom border for first item in inset list ([#19525](https://github.com/ionic-team/ionic/issues/19525)) ([71b8853](https://github.com/ionic-team/ionic/commit/71b8853)), closes [#19507](https://github.com/ionic-team/ionic/issues/19507)
* **md:** fix flicker when navigating back in MD mode on certain Android devices ([#19553](https://github.com/ionic-team/ionic/issues/19553)) ([19ee21a](https://github.com/ionic-team/ionic/commit/19ee21a)), closes [#19491](https://github.com/ionic-team/ionic/issues/19491)
* **searchbar:** update padding and button alignment ([#19532](https://github.com/ionic-team/ionic/issues/19532)) ([77658e6](https://github.com/ionic-team/ionic/commit/77658e6)), closes [#19502](https://github.com/ionic-team/ionic/issues/19502)



# [4.10.0 Neon](https://github.com/ionic-team/ionic/compare/v4.9.1...v4.10.0) (2019-09-27)


### Bug Fixes

* **angular:** add warning if initialized more than once ([#19393](https://github.com/ionic-team/ionic/issues/19393)) ([e98769e](https://github.com/ionic-team/ionic/commit/e98769e))
* **animation:** set property defaults to avoid inconsistencies ([#19321](https://github.com/ionic-team/ionic/issues/19321)) ([1cbb52c](https://github.com/ionic-team/ionic/commit/1cbb52c))
* **animation:** fallback to CSS Animations on older versions of Chrome ([#19288](https://github.com/ionic-team/ionic/issues/19288)) ([2d39c07](https://github.com/ionic-team/ionic/commit/2d39c07)), closes [#19272](https://github.com/ionic-team/ionic/issues/19272)
* **animation:** animations of duration 0 now run in Safari ([#19287](https://github.com/ionic-team/ionic/issues/19287)) ([4e544f1](https://github.com/ionic-team/ionic/commit/4e544f1)), closes [#19285](https://github.com/ionic-team/ionic/issues/19285)
* **components:** fix crash in IE11 when using classList add() or remove() ([#19460](https://github.com/ionic-team/ionic/issues/19460)) ([b4d92c6](https://github.com/ionic-team/ionic/commit/b4d92c6))
* **components:** improve CSS Variable support in IE11 ([#19473](https://github.com/ionic-team/ionic/issues/19473)) ([44ad074](https://github.com/ionic-team/ionic/commit/44ad074))
* **content:** remove pointer-events from iOS transition shadow ([#19471](https://github.com/ionic-team/ionic/issues/19471)) ([8a52c7d](https://github.com/ionic-team/ionic/commit/8a52c7d)), closes [#19466](https://github.com/ionic-team/ionic/issues/19466)
* **menu:** menus show proper drop shadows ([#19454](https://github.com/ionic-team/ionic/issues/19454)) ([eab0865](https://github.com/ionic-team/ionic/commit/eab0865)), closes [#19387](https://github.com/ionic-team/ionic/issues/19387)
* **radio-group:** get radios before caching value to avoid infinite loop ([#19448](https://github.com/ionic-team/ionic/issues/19448)) ([cf223e4](https://github.com/ionic-team/ionic/commit/cf223e4)), closes [#19277](https://github.com/ionic-team/ionic/issues/19277)
* **react:** update events to use proper types ([c79e74b](https://github.com/ionic-team/ionic/commit/c79e74b))
* **router-outlet:** hide leaving view after transition finishes ([#19335](https://github.com/ionic-team/ionic/issues/19335)) ([bfa17d1](https://github.com/ionic-team/ionic/commit/bfa17d1))


### Features

* **config:** expose getMode() and deprecate Config.set() ([#19104](https://github.com/ionic-team/ionic/issues/19104)) ([0f05ea4](https://github.com/ionic-team/ionic/commit/0f05ea4))
* **docs:** add VSCode docs support ([#19309](https://github.com/ionic-team/ionic/issues/19309)) ([a3f345c](https://github.com/ionic-team/ionic/commit/a3f345c))
* **title:** add support for small title ([#19215](https://github.com/ionic-team/ionic/issues/19215)) ([e27962d](https://github.com/ionic-team/ionic/commit/e27962d)), closes [#18898](https://github.com/ionic-team/ionic/issues/18898)
* **title:** add support for large title (experimental) ([#19268](https://github.com/ionic-team/ionic/issues/19268)) ([923312e](https://github.com/ionic-team/ionic/commit/923312e)), closes [#16885](https://github.com/ionic-team/ionic/issues/16885)


### Performance Improvements

* **animation:** avoid ngzone with requestAnimationFrame ([#19457](https://github.com/ionic-team/ionic/issues/19457)) ([8ca97ce](https://github.com/ionic-team/ionic/commit/8ca97ce))



## [4.9.1](https://github.com/ionic-team/ionic/compare/v4.9.0...v4.9.1) (2019-09-16)


### Bug Fixes

* **platform:** properly detect iPads running iPadOS ([#19258](https://github.com/ionic-team/ionic/issues/19258)) ([4a90096](https://github.com/ionic-team/ionic/commit/4a90096))



# [4.9.0 Fluorine](https://github.com/ionic-team/ionic/compare/v4.8.1...v4.9.0) (2019-09-04)


### Bug Fixes

* **all:** allow elements to be reused once removed from the DOM ([#18963](https://github.com/ionic-team/ionic/pull/18963)) ([48a2763](https://github.com/ionic-team/ionic/commit/48a2763)), closes [#18843](https://github.com/ionic-team/ionic/issues/18843) [#17344](https://github.com/ionic-team/ionic/issues/17344) [#16453](https://github.com/ionic-team/ionic/issues/16453) [#15879](https://github.com/ionic-team/ionic/issues/15879) [#15788](https://github.com/ionic-team/ionic/issues/15788) [#15484](https://github.com/ionic-team/ionic/issues/15484) [#17890](https://github.com/ionic-team/ionic/issues/17890) [#16364](https://github.com/ionic-team/ionic/issues/16364)
* **animation:** add correct `onFinish` interface parameters ([#19199](https://github.com/ionic-team/ionic/issues/19199)) ([a81653b](https://github.com/ionic-team/ionic/commit/a81653b))
* **animation:** improve Web Animation feature detection accuracy ([#19212](https://github.com/ionic-team/ionic/issues/19212)) ([6eca5b0](https://github.com/ionic-team/ionic/commit/6eca5b0)), closes [#19205](https://github.com/ionic-team/ionic/issues/19205)
* **animation:** properly clean up elements when using `destroy` ([#19210](https://github.com/ionic-team/ionic/issues/19210)) ([93f2064](https://github.com/ionic-team/ionic/commit/93f2064))
* **segment:** do not emit ionChange until didLoad ([#19218](https://github.com/ionic-team/ionic/issues/19218)) ([9751f14](https://github.com/ionic-team/ionic/commit/9751f14)), closes [#19204](https://github.com/ionic-team/ionic/issues/19204)

### Features

* **nav-link:** add `nav-link` and deprecate `nav-push`, `nav-pop`, and `nav-set-root` ([#18909](https://github.com/ionic-team/ionic/issues/18909)) ([c3044f5](https://github.com/ionic-team/ionic/commit/c3044f5))
* **slides:** expose full Swiper API ([#19137](https://github.com/ionic-team/ionic/issues/19137)) ([e1fa461](https://github.com/ionic-team/ionic/commit/e1fa461))



## [4.8.1](https://github.com/ionic-team/ionic/compare/v4.8.0...v4.8.1) (2019-08-27)


### Bug Fixes

* **animation:** enable backwards compatibility for overlay animations ([#19160](https://github.com/ionic-team/ionic/issues/19160)) ([fb70980](https://github.com/ionic-team/ionic/commit/fb70980))
* **gesture:** account for negative step values with Web Animations ([#19196](https://github.com/ionic-team/ionic/issues/19196)) ([b3c7436](https://github.com/ionic-team/ionic/commit/b3c7436))
* **ios:** clear opacity on toolbar background after iOS transition ([#19169](https://github.com/ionic-team/ionic/issues/19169)) ([fa958a5](https://github.com/ionic-team/ionic/commit/fa958a5))
* **md:** set fill mode on MD transition to `both` ([#19161](https://github.com/ionic-team/ionic/issues/19161)) ([0e8ab49](https://github.com/ionic-team/ionic/commit/0e8ab49))



# [4.8.0 Oxygen](https://github.com/ionic-team/ionic/compare/v4.7.4...v4.8.0) (2019-08-21)


### Bug Fixes

* **alert:** apply styling to disabled items ([#18545](https://github.com/ionic-team/ionic/issues/18545)) ([67ed89d](https://github.com/ionic-team/ionic/commit/67ed89d))
* **platform:** properly detect Electron platform ([#19044](https://github.com/ionic-team/ionic/issues/19044)) ([e8cdda0](https://github.com/ionic-team/ionic/commit/e8cdda0)), closes [#19043](https://github.com/ionic-team/ionic/issues/19043)
* **toggle:** change background to use CSS variable ([#19012](https://github.com/ionic-team/ionic/issues/19012)) ([94e525c](https://github.com/ionic-team/ionic/commit/94e525c)), closes [#18940](https://github.com/ionic-team/ionic/issues/18940)
* **transition:** enable iOS transition shadow by default ([#19051](https://github.com/ionic-team/ionic/issues/19051)) ([a5d3c6b](https://github.com/ionic-team/ionic/commit/a5d3c6b))


### Features

* **animation:** add animation utility (experimental) ([#18918](https://github.com/ionic-team/ionic/issues/18918)) ([30ca46a](https://github.com/ionic-team/ionic/commit/30ca46a))
* **gesture:** add gesture utility (experimental) ([#18918](https://github.com/ionic-team/ionic/issues/18918)) ([30ca46a](https://github.com/ionic-team/ionic/commit/30ca46a))
* **searchbar:** add `inputmode` property ([#18980](https://github.com/ionic-team/ionic/issues/18980)) ([1187dc2](https://github.com/ionic-team/ionic/commit/1187dc2))
* **spinner:** add circular spinner for MD default ([#19052](https://github.com/ionic-team/ionic/issues/19052)) ([e33cf85](https://github.com/ionic-team/ionic/commit/e33cf85))



## [4.7.4](https://github.com/ionic-team/ionic/compare/v4.7.3...v4.7.4) (2019-08-07)


### Bug Fixes

* **core:** remove extra semicolons being rendered ([#19033](https://github.com/ionic-team/ionic/issues/19033)) ([39f0768](https://github.com/ionic-team/ionic/commit/39f0768))



## [4.7.3](https://github.com/ionic-team/ionic/compare/v4.7.2...v4.7.3) (2019-08-07)

* **core:** fix an issue with production builds of `@ionic/core`



## [4.7.2](https://github.com/ionic-team/ionic/compare/v4.7.1...v4.7.2) (2019-08-07)


### Bug Fixes

* **angular:** hardware back button subscribeWithPriority triggers change detection ([#18962](https://github.com/ionic-team/ionic/issues/18962)) ([3a22105](https://github.com/ionic-team/ionic/commit/3a22105)), closes [#18959](https://github.com/ionic-team/ionic/issues/18959)
* **angular:** nested inputs no longer conflict with each other ([#18976](https://github.com/ionic-team/ionic/issues/18976)) ([6bbdb80](https://github.com/ionic-team/ionic/commit/6bbdb80)), closes [#18248](https://github.com/ionic-team/ionic/issues/18248)
* **range:** ion-range value now submitted with form ([#19008](https://github.com/ionic-team/ionic/issues/19008)) ([8f7853c](https://github.com/ionic-team/ionic/commit/8f7853c))
* **reorder:** only move item if reorder happens ([#19007](https://github.com/ionic-team/ionic/issues/19007)) ([d237e80](https://github.com/ionic-team/ionic/commit/d237e80))
* **router:** partial swipe to go back gesture no longer breaks view([#18977](https://github.com/ionic-team/ionic/issues/18977)) ([713ea8a](https://github.com/ionic-team/ionic/commit/713ea8a)), closes [#18462](https://github.com/ionic-team/ionic/issues/18462)
* **toast:** allow loading ion-icon from asset path ([#18969](https://github.com/ionic-team/ionic/issues/18969)) ([23f327e](https://github.com/ionic-team/ionic/commit/23f327e))
* **vue:** rename swipeEnable to swipeGesture ([#17346](https://github.com/ionic-team/ionic/issues/17346)) ([c2348f7](https://github.com/ionic-team/ionic/commit/c2348f7)), closes [#16002](https://github.com/ionic-team/ionic/issues/16002)



## [4.7.1](https://github.com/ionic-team/ionic/compare/v4.7.0...v4.7.1) (2019-07-26)


### Bug Fixes

* **angular:** ensure change detection fires properly ([#18896](https://github.com/ionic-team/ionic/issues/18896)) ([962783b](https://github.com/ionic-team/ionic/commit/962783b)), closes [#18894](https://github.com/ionic-team/ionic/issues/18894)



# [4.7.0 Nitrogen](https://github.com/ionic-team/ionic/compare/v4.6.2...v4.7.0) (2019-07-24)


### Angular 8 Support

With this version comes support for Angular 8! Follow the below steps to update.

1. Update `@ionic/angular` and `@ionic/angular-toolkit` to the latest releases:

    ```shell
    $ npm install @ionic/angular@4.7.0
    $ npm install @ionic/angular-toolkit@2.0.0 -D
    ```

2. Update `@angular/core` and `@angular/cli`:

    ```shell
    $ npx ng update @angular/core @angular/cli
    ```

3. Update `@angular-devkit` dependencies:

    ```shell
    $ npm i @angular-devkit/architect@latest @angular-devkit/build-angular@latest @angular-devkit/core@latest @angular-devkit/schematics@latest
    ```

View our [Angular 8 Update Guide](https://docs.google.com/document/d/1QOpQeDifPSg6F9WycDLcbQnpqjN96ew-Ap0_CB7CcCQ/edit?usp=sharing) for tips on potential issues!

### Bug Fixes

* **angular:** copy input form classes to parent ion-item ([#18820](https://github.com/ionic-team/ionic/issues/18820)) ([53179c4](https://github.com/ionic-team/ionic/commit/53179c4)), closes [#18800](https://github.com/ionic-team/ionic/issues/18800)
* **angular:** add the swipeGesture method for enabling or disabling the ability to swipe open a menu ([#18806](https://github.com/ionic-team/ionic/issues/18806)) ([fbfc076](https://github.com/ionic-team/ionic/commit/fbfc076)), closes [#16002](https://github.com/ionic-team/ionic/issues/16002)
* **angular:** webview "pause", "resume", and "resize" events now trigger change detection ([#18853](https://github.com/ionic-team/ionic/issues/18853)) ([544e550](https://github.com/ionic-team/ionic/commit/544e550)), closes [#18831](https://github.com/ionic-team/ionic/issues/18831)
* **core:** apply translucent if backdrop-filter is supported ([#18832](https://github.com/ionic-team/ionic/issues/18832)) ([6b5a59d](https://github.com/ionic-team/ionic/commit/6b5a59d)), closes [ionic-team/ionic-docs#666](https://github.com/ionic-team/ionic-docs/issues/666)
* **datetime:** allow AM/PM to be changed ([#18684](https://github.com/ionic-team/ionic/issues/18684)) ([b7761fe](https://github.com/ionic-team/ionic/commit/b7761fe)), closes [#18585](https://github.com/ionic-team/ionic/issues/18585)
* **datetime:** properly apply disabled classes when updating columns ([#18875](https://github.com/ionic-team/ionic/issues/18875)) ([7ba718c](https://github.com/ionic-team/ionic/commit/7ba718c)), closes [#18793](https://github.com/ionic-team/ionic/issues/18793)
* **hardware-back-button:** hardware back button no longer erroneously restarts app ([#18794](https://github.com/ionic-team/ionic/issues/18794)) ([978cc39](https://github.com/ionic-team/ionic/commit/978cc39)), closes [#18792](https://github.com/ionic-team/ionic/issues/18792)
* **ripple-effect:** ensure ripple is removed from components after pointer release ([#18854](https://github.com/ionic-team/ionic/issues/18854)) ([71137a2](https://github.com/ionic-team/ionic/commit/71137a2)), closes [#18836](https://github.com/ionic-team/ionic/issues/18836)
* **searchbar:** add aria and role for improved accessibility ([#18797](https://github.com/ionic-team/ionic/issues/18797)) ([798103b](https://github.com/ionic-team/ionic/commit/798103b)), closes [#18796](https://github.com/ionic-team/ionic/issues/18796)
* **ssr:** avoid window reference ([#18865](https://github.com/ionic-team/ionic/issues/18865)) ([23ce6fa](https://github.com/ionic-team/ionic/commit/23ce6fa))
* **ssr:** check for client runtime method ([#18866](https://github.com/ionic-team/ionic/issues/18866)) ([c52b3b4](https://github.com/ionic-team/ionic/commit/c52b3b4))
* **textarea:** autogrow now resets textarea back to original number of rows when text is cleared ([#18822](https://github.com/ionic-team/ionic/issues/18822)) ([26e6d6f](https://github.com/ionic-team/ionic/commit/26e6d6f)), closes [#18744](https://github.com/ionic-team/ionic/issues/18744)
* **theming:** update components to use the proper colors for dark themes ([#18735](https://github.com/ionic-team/ionic/issues/18735)) ([045bc59](https://github.com/ionic-team/ionic/commit/045bc59)), closes [#18713](https://github.com/ionic-team/ionic/issues/18713)
* **virtual-scroll:** card rendering is no longer distorted ([#18877](https://github.com/ionic-team/ionic/issues/18877)) ([3ef6ecf](https://github.com/ionic-team/ionic/commit/3ef6ecf)), closes [#18870](https://github.com/ionic-team/ionic/issues/18870)
* **virtual-scroll:** element dimensions are recalculated on resize ([#18878](https://github.com/ionic-team/ionic/issues/18878)) ([c91819c](https://github.com/ionic-team/ionic/commit/c91819c))


### Features

* **core:** add support for Stackblitz ([#18846](https://github.com/ionic-team/ionic/issues/18846)) ([fb18f3b](https://github.com/ionic-team/ionic/commit/fb18f3b))
* **ssr:** add @ionic/core/hydrate app ([#18867](https://github.com/ionic-team/ionic/issues/18867)) ([815fa2e](https://github.com/ionic-team/ionic/commit/815fa2e))
* **navigation:** add experimental shadow to iOS page transitions ([#18695](https://github.com/ionic-team/ionic/issues/18695)) ([9b075ef](https://github.com/ionic-team/ionic/commit/9b075ef)), closes [#18661](https://github.com/ionic-team/ionic/issues/18661)
* **virtual-scroll:** adds headerHeight and footerHeight to help prevent flickering ([#18851](https://github.com/ionic-team/ionic/issues/18851)) ([0089111](https://github.com/ionic-team/ionic/commit/0089111)), closes [#17540](https://github.com/ionic-team/ionic/issues/17540)


### Performance

* **angular:** attach entering view before first change detection and detach leaving page ([#18821](https://github.com/ionic-team/ionic/issues/18821)) ([97fec92](https://github.com/ionic-team/ionic/commit/97fec92))


## [4.6.2](https://github.com/ionic-team/ionic/compare/v4.6.1...v4.6.2) (2019-07-10)


### Bug Fixes

* **menu-button:** hide menu button when auto hide or split pane ([#18702](https://github.com/ionic-team/ionic/issues/18702)) ([24840d4](https://github.com/ionic-team/ionic/commit/24840d4)), closes [#18666](https://github.com/ionic-team/ionic/issues/18666)
* **menu-button:** move font-size to host for easier customization ([#18699](https://github.com/ionic-team/ionic/issues/18699)) ([876ab41](https://github.com/ionic-team/ionic/commit/876ab41)), closes [#18667](https://github.com/ionic-team/ionic/issues/18667)
* **overlays:** fallback to step color if overlay background variable is unset ([#18709](https://github.com/ionic-team/ionic/issues/18709)) ([f16b118](https://github.com/ionic-team/ionic/commit/f16b118)), closes [#18658](https://github.com/ionic-team/ionic/issues/18658)
* **virtual-scroll:**  remove runOutsideAngular error ([#18752](https://github.com/ionic-team/ionic/issues/18752)) ([8beeff2](https://github.com/ionic-team/ionic/commit/8beeff2)), closes [#18746](https://github.com/ionic-team/ionic/issues/18746)
* **vue:** update imports for types and ionicons ([f56fea6](https://github.com/ionic-team/ionic/commit/f56fea6)), closes [#18701](https://github.com/ionic-team/ionic/issues/18701)


### Performance Improvements

* **all:** minify better by using arrow functions ([#18730](https://github.com/ionic-team/ionic/issues/18730)) ([03c1d19](https://github.com/ionic-team/ionic/commit/03c1d19))



## [4.6.1](https://github.com/ionic-team/ionic/compare/v4.6.0...v4.6.1) (2019-07-09)


### Bug Fixes

* **app:** add hydrated to hide white screen with multiple ionic dependencies ([#18649](https://github.com/ionic-team/ionic/issues/18649))
* **datetime:** datetime no longer reports having a value if none is set ([#18541](https://github.com/ionic-team/ionic/issues/18541)) ([92e0f98](https://github.com/ionic-team/ionic/commit/92e0f98)), closes [#17979](https://github.com/ionic-team/ionic/issues/17979) [#18540](https://github.com/ionic-team/ionic/issues/18540)
* **fab-button:** set opacity on disabled fab button ([#18685](https://github.com/ionic-team/ionic/issues/18685)) ([6042b39](https://github.com/ionic-team/ionic/commit/6042b39)), closes [#18682](https://github.com/ionic-team/ionic/issues/18682)
* **icon:** load icons properly with baseHref ([#18650](https://github.com/ionic-team/ionic/issues/18650)), ([#18637](https://github.com/ionic-team/ionic/issues/18637))
* **icon:** bind icon name properly ([#18707](https://github.com/ionic-team/ionic/issues/18707))
* **infinite-scroll:** fix scroll listener ([0d58101](https://github.com/ionic-team/ionic/commit/0d58101))
* **item:** do not disable entire item if there are multiple inputs ([#18696](https://github.com/ionic-team/ionic/issues/18696)) ([dfa2b13](https://github.com/ionic-team/ionic/commit/dfa2b13)), closes [#18655](https://github.com/ionic-team/ionic/issues/18655) [#18670](https://github.com/ionic-team/ionic/issues/18670)
* **router-link:** add missing target prop ([#18659](https://github.com/ionic-team/ionic/issues/18659)) ([1f51ab2](https://github.com/ionic-team/ionic/commit/1f51ab2)), closes [#18655](https://github.com/ionic-team/ionic/issues/18655)
* **router-outlet:** fix swipe to go back ([b69fb69](https://github.com/ionic-team/ionic/commit/b69fb69))
* **scss:** copy all scss files ([36a58df](https://github.com/ionic-team/ionic/commit/36a58df))
* **searchbar:** proper styling after navigating ([#18642](https://github.com/ionic-team/ionic/issues/18642))
* **slides:** use correct order for pushing slides dynamically ([#18633](https://github.com/ionic-team/ionic/issues/18633))
* **tabs:** select proper tab by default and do not emit tab change if selectedTab is undefined ([03c834c](https://github.com/ionic-team/ionic/commit/03c834c))
* **overlay:** make create opts optional ([44c88ad](https://github.com/ionic-team/ionic/commit/44c88ad))


### Performance Improvements

* **angular:** skip zone ([e059fc8](https://github.com/ionic-team/ionic/commit/e059fc8))



# [4.6.0 Carbon](https://github.com/ionic-team/ionic/compare/v4.5.0...v4.6.0) (2019-06-26)


### Bug Fixes

* **button:** default opacity for disabled clear buttons ([#18560](https://github.com/ionic-team/ionic/issues/18560)) ([f48dc3d](https://github.com/ionic-team/ionic/commit/f48dc3d)), closes [#18555](https://github.com/ionic-team/ionic/issues/18555)
* **button:** update solid buttons to use tint and shade colors ([#18537](https://github.com/ionic-team/ionic/issues/18537)) ([26ecf2b](https://github.com/ionic-team/ionic/commit/26ecf2b))
* **menu:** change ARIA role from complementary to navigation ([#18330](https://github.com/ionic-team/ionic/issues/18330)) ([9e4346b](https://github.com/ionic-team/ionic/commit/9e4346b)), closes [#18318](https://github.com/ionic-team/ionic/issues/18318)
* **segment:** apply hover properly for segment with color ([#18549](https://github.com/ionic-team/ionic/issues/18549)) ([78e477b](https://github.com/ionic-team/ionic/commit/78e477b))
* **segment:** default ripple to currentColor ([#18547](https://github.com/ionic-team/ionic/issues/18547)) ([832306c](https://github.com/ionic-team/ionic/commit/832306c))


### Features

* **components:** add missing button/a props to components that render them ([#17883](https://github.com/ionic-team/ionic/issues/17883)) ([eca4121](https://github.com/ionic-team/ionic/commit/eca4121)), closes [#16848](https://github.com/ionic-team/ionic/issues/16848) [#16889](https://github.com/ionic-team/ionic/issues/16889)
* **fab-button:** add hover state using tint colors ([#18536](https://github.com/ionic-team/ionic/issues/18536)) ([ad00679](https://github.com/ionic-team/ionic/commit/ad00679)), closes [#17624](https://github.com/ionic-team/ionic/issues/17624)
* **item:** add hover and focused states ([#18606](https://github.com/ionic-team/ionic/issues/18606)) ([8a88dd2](https://github.com/ionic-team/ionic/commit/8a88dd2)), closes [#18279](https://github.com/ionic-team/ionic/issues/18279) [#17624](https://github.com/ionic-team/ionic/issues/17624)
* **router-link:** add router-link and deprecate anchor ([#18620](https://github.com/ionic-team/ionic/issues/18620)) ([d4c7b03](https://github.com/ionic-team/ionic/commit/d4c7b03))


### Enhancements

* **stencil:** update to Stencil One to improve app performance 🎉🎊 ([b40f7d3](https://github.com/ionic-team/ionic/commit/b40f7d3))



# [4.5.0 Boron](https://github.com/ionic-team/ionic/compare/v4.4.2...v4.5.0) (2019-06-12)


### Bug Fixes

* **angular:** ensure all NavigationExtras values are preserved when navigating ([#18468](https://github.com/ionic-team/ionic/issues/18468)) ([7610787](https://github.com/ionic-team/ionic/commit/7610787)), closes [#18469](https://github.com/ionic-team/ionic/issues/18469)
* **button:** set opacity on the host element for disabled button ([#18509](https://github.com/ionic-team/ionic/issues/18509)) ([320719b](https://github.com/ionic-team/ionic/commit/320719b)), closes [#16965](https://github.com/ionic-team/ionic/issues/16965)
* **button:** use correct border-radius on menu and back button ([#18501](https://github.com/ionic-team/ionic/issues/18501)) ([055e125](https://github.com/ionic-team/ionic/commit/055e125)), closes [#17624](https://github.com/ionic-team/ionic/issues/17624)
* **button:** use correct size on a dynamic button in an item ([#18395](https://github.com/ionic-team/ionic/issues/18395)) ([a3e23fc](https://github.com/ionic-team/ionic/commit/a3e23fc)), closes [#18085](https://github.com/ionic-team/ionic/issues/18085)
* **card:** remove white space from bottom of card ([#18328](https://github.com/ionic-team/ionic/issues/18328)) ([d53e7aa](https://github.com/ionic-team/ionic/commit/d53e7aa))
* **content:** prevent ion-searchbar from receiving padding adjustment when keyboard is open ([#18008](https://github.com/ionic-team/ionic/issues/18008)) ([b2290a6](https://github.com/ionic-team/ionic/commit/b2290a6)), closes [#18007](https://github.com/ionic-team/ionic/issues/18007)
* **datetime:** recalculate time columns on change ([#18380](https://github.com/ionic-team/ionic/issues/18380)) ([292b24a](https://github.com/ionic-team/ionic/commit/292b24a))
* **item:** start align the content under stacked and floating labels ([#18379](https://github.com/ionic-team/ionic/issues/18379)) ([f0af707](https://github.com/ionic-team/ionic/commit/f0af707)), closes [#16375](https://github.com/ionic-team/ionic/issues/16375)
* **item:** inherit overflow to allow better customization ([#18502](https://github.com/ionic-team/ionic/issues/18502)) ([8d2a47e](https://github.com/ionic-team/ionic/commit/8d2a47e)), closes [#17670](https://github.com/ionic-team/ionic/issues/17670)
* **item:** use a step color if the activated background is not set ([#18450](https://github.com/ionic-team/ionic/issues/18450)) ([1899c13](https://github.com/ionic-team/ionic/commit/1899c13)), closes [#18449](https://github.com/ionic-team/ionic/issues/18449)
* **item-sliding:** use the correct gesture direction and side for rtl ([#18366](https://github.com/ionic-team/ionic/issues/18366)) ([4545100](https://github.com/ionic-team/ionic/commit/4545100)), closes [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **label:** include the ion-text-wrap class styles for larger font ([#18374](https://github.com/ionic-team/ionic/issues/18374)) ([4bba540](https://github.com/ionic-team/ionic/commit/4bba540))
* **platform:** prevent error with Platform.is on Android 4.4 ([#18387](https://github.com/ionic-team/ionic/issues/18387)) ([54bdb36](https://github.com/ionic-team/ionic/commit/54bdb36))
* **react:** ensure element exists in controller before dismissing it ([0fd3e5d](https://github.com/ionic-team/ionic/commit/0fd3e5d))
* **slides:** resolve issue where double tap to zoom was enabled by default ([10de1da](https://github.com/ionic-team/ionic/commit/10de1da)), closes [#18035](https://github.com/ionic-team/ionic/issues/18035)
* **tabs:** allow selection on enter and spacebar press ([#18381](https://github.com/ionic-team/ionic/issues/18381)) ([11cde99](https://github.com/ionic-team/ionic/commit/11cde99)), closes [#18363](https://github.com/ionic-team/ionic/issues/18363)
* **textarea:** inherit white-space for better customization ([#18508](https://github.com/ionic-team/ionic/issues/18508)) ([a583902](https://github.com/ionic-team/ionic/commit/a583902)), closes [#18495](https://github.com/ionic-team/ionic/issues/18495)
* **virtual-scroll:** do not crash with an empty cell list ([#17799](https://github.com/ionic-team/ionic/issues/17799)) ([20c146e](https://github.com/ionic-team/ionic/commit/20c146e))


### Features

* **back-button:** add variables and support for focused and hover states ([#18451](https://github.com/ionic-team/ionic/issues/18451)) ([58672fb](https://github.com/ionic-team/ionic/commit/58672fb)), closes [#18465](https://github.com/ionic-team/ionic/issues/18465)
* **button:** add variables for customizing hover state ([#18499](https://github.com/ionic-team/ionic/issues/18499)) ([5c5934b](https://github.com/ionic-team/ionic/commit/5c5934b)), closes [#17974](https://github.com/ionic-team/ionic/issues/17974)
* **item-divider:** add inner padding CSS variables ([#18490](https://github.com/ionic-team/ionic/issues/18490)) ([35c143a](https://github.com/ionic-team/ionic/commit/35c143a)), closes [#18484](https://github.com/ionic-team/ionic/issues/18484)
* **menu-button:** add variables for hover and focused states ([#18434](https://github.com/ionic-team/ionic/issues/18434)) ([5ba0aa9](https://github.com/ionic-team/ionic/commit/5ba0aa9)), closes [#18279](https://github.com/ionic-team/ionic/issues/18279)
* **searchbar:** add cancel button options ([b959e0b](https://github.com/ionic-team/ionic/commit/b959e0b))
* **toast:** allow html content ([#18423](https://github.com/ionic-team/ionic/issues/18423)) ([c8104a2](https://github.com/ionic-team/ionic/commit/c8104a2))



## [4.4.2](https://github.com/ionic-team/ionic/compare/v4.4.1...v4.4.2) (2019-05-22)


### Bug Fixes

* **angular:** account for query params and fragments within a string when navigating ([#18356](https://github.com/ionic-team/ionic/issues/18356)) ([b79f68a](https://github.com/ionic-team/ionic/commit/b79f68a))



## [4.4.1](https://github.com/ionic-team/ionic/compare/v4.4.0...v4.4.1) (2019-05-22)


### Bug Fixes

* **angular:** ensure active page is not removed from change detection ([#18299](https://github.com/ionic-team/ionic/issues/18299)) ([b8d4961](https://github.com/ionic-team/ionic/commit/b8d4961)), closes [#18293](https://github.com/ionic-team/ionic/issues/18293)
* **angular:** preserve queryParams and fragment when going back ([#18298](https://github.com/ionic-team/ionic/issues/18298)) ([bdd5109](https://github.com/ionic-team/ionic/commit/bdd5109)), closes [#16744](https://github.com/ionic-team/ionic/issues/16744)
* **buttons:** use theme/color toolbar colors for buttons ([#18191](https://github.com/ionic-team/ionic/issues/18191)) ([0511989](https://github.com/ionic-team/ionic/commit/0511989)), closes [#18184](https://github.com/ionic-team/ionic/issues/18184) [#17840](https://github.com/ionic-team/ionic/issues/17840)
* **datetime:** update label direction in RTL ([#18340](https://github.com/ionic-team/ionic/issues/18340)) ([17345ef](https://github.com/ionic-team/ionic/commit/17345ef))
* **fab:** position fab buttons properly in RTL ([#18325](https://github.com/ionic-team/ionic/issues/18325)) ([845def8](https://github.com/ionic-team/ionic/commit/845def8)), references [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **icon:** remove stroke and move fill to host element ([#18241](https://github.com/ionic-team/ionic/issues/18241)) ([394cf8d](https://github.com/ionic-team/ionic/commit/394cf8d)), closes [#16483](https://github.com/ionic-team/ionic/issues/16483)
* **input:** keep entire input in view when scrolling with keyboard open ([#18253](https://github.com/ionic-team/ionic/issues/18253)) ([3cad778](https://github.com/ionic-team/ionic/commit/3cad778)), closes [#17457](https://github.com/ionic-team/ionic/issues/17457)
* **label:** position floating/stacked labels properly in RTL ([#18315](https://github.com/ionic-team/ionic/issues/18315)) ([00a27dc](https://github.com/ionic-team/ionic/commit/00a27dc)), references [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **loading:** allow html content ([#18242](https://github.com/ionic-team/ionic/issues/18242)) ([a6cb5f2](https://github.com/ionic-team/ionic/commit/a6cb5f2)), closes [#18135](https://github.com/ionic-team/ionic/issues/18135)
* **overlay:** hide scrollbars on non-scrollable content ([#16767](https://github.com/ionic-team/ionic/issues/16767)) ([875d563](https://github.com/ionic-team/ionic/commit/875d563)), closes [#14178](https://github.com/ionic-team/ionic/issues/14178)
* **picker:** update the column positions in RTL ([#18339](https://github.com/ionic-team/ionic/issues/18339)) ([788a56c](https://github.com/ionic-team/ionic/commit/788a56c)), closes [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **range:** update border-radius on range pin for RTL ([#18321](https://github.com/ionic-team/ionic/issues/18321)) ([4855351](https://github.com/ionic-team/ionic/commit/4855351)), closes [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **searchbar:** position buttons properly in RTL ([#18325](https://github.com/ionic-team/ionic/issues/18325)) ([845def8](https://github.com/ionic-team/ionic/commit/845def8)), references [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **segment:** update segment border for RTL ([#18326](https://github.com/ionic-team/ionic/issues/18326)) ([805b225](https://github.com/ionic-team/ionic/commit/805b225)), closes [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **slides:** allow clicks to propagate to buttons ([#16728](https://github.com/ionic-team/ionic/issues/16728)) ([a8f9dfe](https://github.com/ionic-team/ionic/commit/a8f9dfe))
* **tab-button:** apply background-focused when tabbing into tab button ([#17502](https://github.com/ionic-team/ionic/issues/17502)) ([d788a8e](https://github.com/ionic-team/ionic/commit/d788a8e)), closes [#17042](https://github.com/ionic-team/ionic/issues/17042)
* **tabs:** position badge properly in RTL (only in Chrome) ([#18325](https://github.com/ionic-team/ionic/issues/18325)) ([845def8](https://github.com/ionic-team/ionic/commit/845def8)), references [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **tabs:** select the tab called by the select method after initialization ([#18300](https://github.com/ionic-team/ionic/issues/18300)) ([da38647](https://github.com/ionic-team/ionic/commit/da38647)), closes [#17957](https://github.com/ionic-team/ionic/issues/17957)
* **toggle:** position toggle icon properly in RTL ([#18325](https://github.com/ionic-team/ionic/issues/18325)) ([845def8](https://github.com/ionic-team/ionic/commit/845def8)), references [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **toolbar:** update md toolbar button spacing and padding to match spec ([#17537](https://github.com/ionic-team/ionic/issues/17537)) ([fa87e35](https://github.com/ionic-team/ionic/commit/fa87e35)), closes [#16950](https://github.com/ionic-team/ionic/issues/16950) [#14444](https://github.com/ionic-team/ionic/issues/14444)



# [4.4.0 Beryllium](https://github.com/ionic-team/ionic/compare/v4.3.1...v4.4.0) (2019-05-08)


### Bug Fixes

* **button:** apply round property to button sizes in iOS ([#18125](https://github.com/ionic-team/ionic/issues/18125)) ([ae0eccc](https://github.com/ionic-team/ionic/commit/ae0eccc)), closes [#18108](https://github.com/ionic-team/ionic/issues/18108)
* **datetime:** default to current date when value is null ([#18105](https://github.com/ionic-team/ionic/issues/18105)) ([ca233b5](https://github.com/ionic-team/ionic/commit/ca233b5)), closes [#18099](https://github.com/ionic-team/ionic/issues/18099)
* **input:** clear on edit from inside native input ([#17115](https://github.com/ionic-team/ionic/issues/17115)) ([85093d6](https://github.com/ionic-team/ionic/commit/85093d6)), closes [#17055](https://github.com/ionic-team/ionic/issues/17055)
* **item:** use the global activated background for md ripple color ([#16752](https://github.com/ionic-team/ionic/issues/16752)) ([95945c0](https://github.com/ionic-team/ionic/commit/95945c0)), closes [#16585](https://github.com/ionic-team/ionic/issues/16585)
* **label:** use primary color on focus for md input labels ([#18183](https://github.com/ionic-team/ionic/issues/18183)) ([ddb8ef8](https://github.com/ionic-team/ionic/commit/ddb8ef8)), closes [#15602](https://github.com/ionic-team/ionic/issues/15602)
* **menu** add prefixed transform for side menu animation ([#18128](https://github.com/ionic-team/ionic/issues/18128)) ([2457a23](https://github.com/ionic-team/ionic/commit/2457a23)), closes [#17729](https://github.com/ionic-team/ionic/issues/17729)
* **reorder-group:** remove required parameter for the complete method ([#18084](https://github.com/ionic-team/ionic/issues/18084)) ([bd96491](https://github.com/ionic-team/ionic/commit/bd96491)), closes [#16302](https://github.com/ionic-team/ionic/issues/16302)
* **segment:** decrease icon size on ios and stretch segment buttons to fill height ([#17751](https://github.com/ionic-team/ionic/issues/17751)) ([0fa645b](https://github.com/ionic-team/ionic/commit/0fa645b)), closes [#17069](https://github.com/ionic-team/ionic/issues/17069)
* **textarea:** reposition textarea when keyboard appears ([#18098](https://github.com/ionic-team/ionic/issues/18098)) ([3cdab10](https://github.com/ionic-team/ionic/commit/3cdab10)), closes [#17847](https://github.com/ionic-team/ionic/issues/17847)
* **toast:** allow button-color CSS variable to be overridden ([#18133](https://github.com/ionic-team/ionic/issues/18133)) ([0c83fd3](https://github.com/ionic-team/ionic/commit/0c83fd3)), closes [#18127](https://github.com/ionic-team/ionic/issues/18127)


### Features

* **card:** add button functionality ([#17997](https://github.com/ionic-team/ionic/issues/17997)) ([669ec0d](https://github.com/ionic-team/ionic/commit/669ec0d)), closes [#17773](https://github.com/ionic-team/ionic/issues/17773)
* **img:** add ionImgWillLoad event and emit ionImgDidLoad when image is loaded ([#18159](https://github.com/ionic-team/ionic/issues/18159)) ([38ffb98](https://github.com/ionic-team/ionic/commit/38ffb98)), closes [#17652](https://github.com/ionic-team/ionic/issues/17652) [#18161](https://github.com/ionic-team/ionic/issues/18161)
* **item-sliding:** add open method ([#17964](https://github.com/ionic-team/ionic/issues/17964)) ([f912206](https://github.com/ionic-team/ionic/commit/f912206)), closes [#17899](https://github.com/ionic-team/ionic/issues/17899)
* **menu-button:** add css variables for padding ([#18188](https://github.com/ionic-team/ionic/issues/18188)) ([ef98977](https://github.com/ionic-team/ionic/commit/ef98977)), closes [#18187](https://github.com/ionic-team/ionic/issues/18187)
* **refresher:** add pullFactor property to control speed ([#16697](https://github.com/ionic-team/ionic/issues/16697)) ([9030dcc](https://github.com/ionic-team/ionic/commit/9030dcc)), closes [#15425](https://github.com/ionic-team/ionic/issues/15425)
* **searchbar:** add disabled property ([#17935](https://github.com/ionic-team/ionic/issues/17935)) ([a5b9066](https://github.com/ionic-team/ionic/commit/a5b9066)), closes [#17921](https://github.com/ionic-team/ionic/issues/17921)
* **textarea:** add option to expand textarea as value changes ([#16916](https://github.com/ionic-team/ionic/issues/16916)) ([cc8678a](https://github.com/ionic-team/ionic/commit/cc8678a))



## [4.3.1](https://github.com/ionic-team/ionic/compare/v4.3.0...v4.3.1) (2019-04-26)


### Bug Fixes

* **angular:** support replaceUrl with angular <7.2 ([#18106](https://github.com/ionic-team/ionic/issues/18106)) ([eb3cbe4](https://github.com/ionic-team/ionic/commit/eb3cbe4))
* **security:** sanitize components using innerHTML ([#18146](https://github.com/ionic-team/ionic/issues/18146)) ([b839e6f](https://github.com/ionic-team/ionic/commit/b839e6f))



# [4.3.0 Lithium](https://github.com/ionic-team/ionic/compare/v4.2.0...v4.3.0) (2019-04-17)


### Bug Fixes

* **action-sheet:** default buttons to empty array ([9e63947](https://github.com/ionic-team/ionic/commit/9e63947))
* **angular:** back button correctly goes back to proper tab ([#18005](https://github.com/ionic-team/ionic/issues/18005)) ([52e5a8d](https://github.com/ionic-team/ionic/commit/52e5a8d)), closes [#17278](https://github.com/ionic-team/ionic/issues/17278) [#15216](https://github.com/ionic-team/ionic/issues/15216)
* **components:** add mode classes to components for use in shadow elements ([#17838](https://github.com/ionic-team/ionic/issues/17838)) ([e5c8c10](https://github.com/ionic-team/ionic/commit/e5c8c10)), closes [#17608](https://github.com/ionic-team/ionic/issues/17608)
* **datetime:** date strings no longer revert to previous day ([#18018](https://github.com/ionic-team/ionic/issues/18018)) ([cc60b60](https://github.com/ionic-team/ionic/commit/cc60b60)), closes [#17977](https://github.com/ionic-team/ionic/issues/17977)
* **input:** prevent input from losing focus when tapping clear button ([#18004](https://github.com/ionic-team/ionic/issues/18004)) ([29bb4fc](https://github.com/ionic-team/ionic/commit/29bb4fc)), closes [#18002](https://github.com/ionic-team/ionic/issues/18002)
* **item:** use the correct input highlight for an inset line item ([#18052](https://github.com/ionic-team/ionic/issues/18052)) ([72be80c](https://github.com/ionic-team/ionic/commit/72be80c)), closes [#18051](https://github.com/ionic-team/ionic/issues/18051)
* **item-sliding:** hide closed side options while dragging side options open ([#17986](https://github.com/ionic-team/ionic/issues/17986)) ([f13722c](https://github.com/ionic-team/ionic/commit/f13722c)), closes [#17822](https://github.com/ionic-team/ionic/issues/17822)
* **slides:** allow zoom to work ([18b347b](https://github.com/ionic-team/ionic/commit/18b347b)), closes [#17981](https://github.com/ionic-team/ionic/issues/17981)
* **slides:** expose interface to provide custom animations ([#17959](https://github.com/ionic-team/ionic/issues/17959)) ([4474974](https://github.com/ionic-team/ionic/commit/4474974)), closes [#16616](https://github.com/ionic-team/ionic/issues/16616)
* **textarea:** float label when a value is changed async ([#18024](https://github.com/ionic-team/ionic/issues/18024)) ([494991e](https://github.com/ionic-team/ionic/commit/494991e)), closes [#17555](https://github.com/ionic-team/ionic/issues/17555) [#17559](https://github.com/ionic-team/ionic/issues/17559)
* **textarea:** update label alignment for inputs and textareas ([#18042](https://github.com/ionic-team/ionic/issues/18042)) ([38ae362](https://github.com/ionic-team/ionic/commit/38ae362)), closes [#16187](https://github.com/ionic-team/ionic/issues/16187)
* **vue:** use direction type from core ([#17901](https://github.com/ionic-team/ionic/issues/17901)) ([fa13173](https://github.com/ionic-team/ionic/commit/fa13173))


### Features

* **toast:** add header and additional custom toast buttons ([#17147](https://github.com/ionic-team/ionic/issues/17147)) ([6e1a8f1](https://github.com/ionic-team/ionic/commit/6e1a8f1)), closes [#16791](https://github.com/ionic-team/ionic/issues/16791) [#16237](https://github.com/ionic-team/ionic/issues/16237) [#17611](https://github.com/ionic-team/ionic/issues/17611)
* **toast:** add variables to change position start/end of toast ([#17961](https://github.com/ionic-team/ionic/issues/17961)) ([07e739a](https://github.com/ionic-team/ionic/commit/07e739a)), closes [#17854](https://github.com/ionic-team/ionic/issues/17854)



# [4.2.0 Helium](https://github.com/ionic-team/ionic/compare/v4.1.2...v4.2.0) (2019-04-03)


### Bug Fixes

* **angular:** properly check for replaceUrl in routing ([#17879](https://github.com/ionic-team/ionic/issues/17879)) ([f2c8db9](https://github.com/ionic-team/ionic/commit/f2c8db9)), closes [#15181](https://github.com/ionic-team/ionic/issues/15181)
* **angular:** return proper types in the overlay.getTop method ([#17802](https://github.com/ionic-team/ionic/issues/17802)) ([439b10e](https://github.com/ionic-team/ionic/commit/439b10e))
* **angular:** support relative router links ([d9a7c63](https://github.com/ionic-team/ionic/commit/d9a7c63)), closes [#17888](https://github.com/ionic-team/ionic/issues/17888) [#16534](https://github.com/ionic-team/ionic/issues/16534) [#16736](https://github.com/ionic-team/ionic/issues/16736) [#16954](https://github.com/ionic-team/ionic/issues/16954)
* **angular:** update ng-add schematic ([9443bfe](https://github.com/ionic-team/ionic/commit/9443bfe))
* **css:** resolve spinner and checkbox issues on older chrome versions ([#17896](https://github.com/ionic-team/ionic/issues/17896)) ([dbb39cd](https://github.com/ionic-team/ionic/commit/dbb39cd)), closes [#17524](https://github.com/ionic-team/ionic/issues/17524) [#17501](https://github.com/ionic-team/ionic/issues/17501)
* **datetime:** default to local date when no date given ([#17706](https://github.com/ionic-team/ionic/issues/17706)) ([bab56e8](https://github.com/ionic-team/ionic/commit/bab56e8))
* **datetime:** recalculate day column when month or year is changed ([#17815](https://github.com/ionic-team/ionic/issues/17815)) ([9273f97](https://github.com/ionic-team/ionic/commit/9273f97)), closes [#14233](https://github.com/ionic-team/ionic/issues/14233) [#14732](https://github.com/ionic-team/ionic/issues/14732) [#15452](https://github.com/ionic-team/ionic/issues/15452) [#15794](https://github.com/ionic-team/ionic/issues/15794) [#17633](https://github.com/ionic-team/ionic/issues/16733) [#17060](https://github.com/ionic-team/ionic/issues/17060) [#17510](https://github.com/ionic-team/ionic/issues/17510) [#17521](https://github.com/ionic-team/ionic/issues/17521)
* **item-option:** add styling and behaviour for disabled item-option ([#17909](https://github.com/ionic-team/ionic/issues/17909)) ([346ecb2](https://github.com/ionic-team/ionic/commit/346ecb2)), closes [#17905](https://github.com/ionic-team/ionic/issues/17905)
* **progress-bar:** flip rtl using the existing reversed property ([#17464](https://github.com/ionic-team/ionic/issues/17464)) ([fccaaf8](https://github.com/ionic-team/ionic/commit/fccaaf8)), closes [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **react:** ensure tabs are resilient to optional tabs ([#17862](https://github.com/ionic-team/ionic/issues/17862)) ([c29f5a6](https://github.com/ionic-team/ionic/commit/c29f5a6))
* **reorder-group:** add ability to reorder items inside shadow ([#17747](https://github.com/ionic-team/ionic/issues/17747)) ([352797e](https://github.com/ionic-team/ionic/commit/352797e)), closes [#17746](https://github.com/ionic-team/ionic/issues/17746)
* **select:** update overlay options when added asynchronously ([#17860](https://github.com/ionic-team/ionic/issues/17860)) ([1ecfcd1](https://github.com/ionic-team/ionic/commit/1ecfcd1)), closes [#15716](https://github.com/ionic-team/ionic/issues/15716) [#17851](https://github.com/ionic-team/ionic/issues/17851)
* **virtual-scroll:** use correct item top calculation with header or footer function ([#15948](https://github.com/ionic-team/ionic/issues/15948)) ([#17345](https://github.com/ionic-team/ionic/issues/17345)) ([a8a48a4](https://github.com/ionic-team/ionic/commit/a8a48a4)), closes [#17298](https://github.com/ionic-team/ionic/issues/17298)
* **vue:** back button event handling ([#17877](https://github.com/ionic-team/ionic/issues/17877)) ([dceec07](https://github.com/ionic-team/ionic/commit/dceec07))
* **vue:** update popover to use correct controller ([#17865](https://github.com/ionic-team/ionic/issues/17865)) ([0cb7db0](https://github.com/ionic-team/ionic/commit/0cb7db0))


### Features

* **img:** add ionError event ([#17134](https://github.com/ionic-team/ionic/issues/17134)) ([04f931f](https://github.com/ionic-team/ionic/commit/04f931f)), closes [#16947](https://github.com/ionic-team/ionic/issues/16947)
* **range:** add ticks attribute ([#17718](https://github.com/ionic-team/ionic/issues/17718)) ([016fa16](https://github.com/ionic-team/ionic/commit/016fa16)), closes [#17717](https://github.com/ionic-team/ionic/issues/17717)
* **vue:** support for ion-tabs ([#17678](https://github.com/ionic-team/ionic/issues/17678)) ([ee71675](https://github.com/ionic-team/ionic/commit/ee71675))
* **vue:** support ion-vue-router ([#17821](https://github.com/ionic-team/ionic/issues/17821)) ([71e5994](https://github.com/ionic-team/ionic/commit/71e5994))



## [4.1.2](https://github.com/ionic-team/ionic/compare/v4.1.1...v4.1.2) (2019-03-20)


### Bug Fixes

* **chip:** use transparent outline on color chips ([#17719](https://github.com/ionic-team/ionic/issues/17719)) ([f6783db](https://github.com/ionic-team/ionic/commit/f6783db))
* **datetime:** default to local date ([#17706](https://github.com/ionic-team/ionic/issues/17706)) ([bab56e8](https://github.com/ionic-team/ionic/commit/bab56e8))
* **input:** use max-height for input for consistency across browsers ([#17394](https://github.com/ionic-team/ionic/issues/17394)) ([67a9137](https://github.com/ionic-team/ionic/commit/67a9137))
* **item:** add missing ripple color CSS property ([#17814](https://github.com/ionic-team/ionic/issues/17814)) ([807820f](https://github.com/ionic-team/ionic/commit/807820f)), closes [#17523](https://github.com/ionic-team/ionic/issues/17523)
* **item-option:** add styling for slots other than icon-only ([#17711](https://github.com/ionic-team/ionic/issues/17711)) ([14f758c](https://github.com/ionic-team/ionic/commit/14f758c)), closes [#17737](https://github.com/ionic-team/ionic/issues/17737) [#17402](https://github.com/ionic-team/ionic/issues/17402)
* **platform:** account for larger tablets ([#17630](https://github.com/ionic-team/ionic/issues/17630)) ([29dbd07](https://github.com/ionic-team/ionic/commit/29dbd07))
* **popover:** update animation origin in RTL/MD ([#17645](https://github.com/ionic-team/ionic/issues/17645)) ([617453b](https://github.com/ionic-team/ionic/commit/617453b)), closes [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **spinner:** fix default spinner logic for relevant components ([#17660](https://github.com/ionic-team/ionic/issues/17660)) ([9c48fa7](https://github.com/ionic-team/ionic/commit/9c48fa7)), closes [#17659](https://github.com/ionic-team/ionic/issues/17659)
* **toggle:** do not use the contrast color for toggle inner color ([#17798](https://github.com/ionic-team/ionic/issues/17798)) ([2225941](https://github.com/ionic-team/ionic/commit/2225941)), closes [#17536](https://github.com/ionic-team/ionic/issues/17536)
* **transition:** animate all toolbars in iOS page transitions ([#17224](https://github.com/ionic-team/ionic/issues/17224)) ([7d01207](https://github.com/ionic-team/ionic/commit/7d01207))



## [4.1.1](https://github.com/ionic-team/ionic/compare/v4.1.0...v4.1.1) (2019-03-07)


### Bug Fixes

* **display:** update to correct css classes ([cabbeb2](https://github.com/ionic-team/ionic/commit/cabbeb2))



# [4.1.0 Hydrogen](https://github.com/ionic-team/ionic/compare/v4.0.2...v4.1.0) (2019-03-06)


### Bug Fixes

* **angular:** fix adding [@ionic](https://github.com/ionic)/angular when using ng add ([#17597](https://github.com/ionic-team/ionic/issues/17597)) ([484d92c](https://github.com/ionic-team/ionic/commit/484d92c)), closes [#17596](https://github.com/ionic-team/ionic/issues/17596)
* **animation:** fix header flicker on ios ([#17422](https://github.com/ionic-team/ionic/issues/17422)) ([ad20bd6](https://github.com/ionic-team/ionic/commit/ad20bd6))
* **css:** add the missing css classes to flex and float utils ([#17570](https://github.com/ionic-team/ionic/issues/17570)) ([c49276c](https://github.com/ionic-team/ionic/commit/c49276c)), closes [#17569](https://github.com/ionic-team/ionic/issues/17569)
* **fab:** disabled fab button no longer opens fab list ([#17620](https://github.com/ionic-team/ionic/issues/17620)) ([c475dab](https://github.com/ionic-team/ionic/commit/c475dab))
* **img:** remove space under img ([#17582](https://github.com/ionic-team/ionic/issues/17582)) ([621c79b](https://github.com/ionic-team/ionic/commit/621c79b))
* **item:** slotted ion-icon receives custom color ([#17585](https://github.com/ionic-team/ionic/issues/17585)) ([14dd871](https://github.com/ionic-team/ionic/commit/14dd871))
* **item-sliding:** no longer close all open items when deleting an item ([#17579](https://github.com/ionic-team/ionic/issues/17579)) ([3de7795](https://github.com/ionic-team/ionic/commit/3de7795))
* **loading:** add backdropDismiss to the interface ([#17668](https://github.com/ionic-team/ionic/issues/17668)) ([28fd75e](https://github.com/ionic-team/ionic/commit/28fd75e)), closes [#17369](https://github.com/ionic-team/ionic/issues/17369)
* **popover:** update placement per md spec ([#17429](https://github.com/ionic-team/ionic/issues/17429)) ([a99d179](https://github.com/ionic-team/ionic/commit/a99d179))
* **range:** clamp values that are out of bounds ([#17623](https://github.com/ionic-team/ionic/issues/17623)) ([5a197ca](https://github.com/ionic-team/ionic/commit/5a197ca))
* **refresher:** check for cancelable before preventing default ([#17351](https://github.com/ionic-team/ionic/issues/17351)) ([f205b10](https://github.com/ionic-team/ionic/commit/f205b10)), closes [#15256](https://github.com/ionic-team/ionic/issues/15256)
* **reorder:** allow sliding items to be reordered ([#17568](https://github.com/ionic-team/ionic/issues/17568)) ([3b331b5](https://github.com/ionic-team/ionic/commit/3b331b5))
* **ssr:** fix angular global window and document references ([f44c17e](https://github.com/ionic-team/ionic/commit/f44c17e))
* **ssr:** fix global window and document references ([#17590](https://github.com/ionic-team/ionic/issues/17590)) ([4646f53](https://github.com/ionic-team/ionic/commit/4646f53))
* **vue:** correct passing of props and data to components ([#17188](https://github.com/ionic-team/ionic/issues/17188)) ([2ce4940](https://github.com/ionic-team/ionic/commit/2ce4940))


### Features

* **checkbox:** implement indeterminate state ([#16951](https://github.com/ionic-team/ionic/issues/16951)) ([c641ae1](https://github.com/ionic-team/ionic/commit/c641ae1)), closes [#16943](https://github.com/ionic-team/ionic/issues/16943)
* **css:** add CSS display utilities ([#17359](https://github.com/ionic-team/ionic/issues/17359)) ([6bea9d3](https://github.com/ionic-team/ionic/commit/6bea9d3)), closes [#10904](https://github.com/ionic-team/ionic/issues/10904)
* **select:** add compareWith property ([#17358](https://github.com/ionic-team/ionic/issues/17358)) ([69ecebb](https://github.com/ionic-team/ionic/commit/69ecebb))
* **skeleton-text:** adds animated prop and support for CSS styling ([#17612](https://github.com/ionic-team/ionic/issues/17612)) ([d66b12b](https://github.com/ionic-team/ionic/commit/d66b12b)), closes [ionic-team/ionic-docs#407](https://github.com/ionic-team/ionic-docs/issues/407)



## [4.0.2](https://github.com/ionic-team/ionic/compare/v4.0.1...v4.0.2) (2019-02-20)


### Bug Fixes

* **button:** show proper shade for activated button on ios ([#17508](https://github.com/ionic-team/ionic/issues/17508)) ([3a9b679](https://github.com/ionic-team/ionic/commit/3a9b679)), closes [#17436](https://github.com/ionic-team/ionic/issues/17436)
* **config:** update types for scrollPadding, inputBlurring and hideCaretOnScroll to boolean ([#17302](https://github.com/ionic-team/ionic/issues/17302)) ([39fbc32](https://github.com/ionic-team/ionic/commit/39fbc32))
* **datetime:** default to current date when no value given ([#17443](https://github.com/ionic-team/ionic/issues/17443)) ([644f9f4](https://github.com/ionic-team/ionic/commit/644f9f4))
* **item-sliding:** Sliding no longer breaks after removing an item ([#17492](https://github.com/ionic-team/ionic/issues/17492)) ([e27bb2e](https://github.com/ionic-team/ionic/commit/e27bb2e))
* **range:** implement RTL (from PR 17157) ([#17384](https://github.com/ionic-team/ionic/issues/17384)) ([4f203bc](https://github.com/ionic-team/ionic/commit/4f203bc)), closes [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **searchbar:** allow setting of toolbar color and searchbar color ([#17474](https://github.com/ionic-team/ionic/issues/17474)) ([ba4e117](https://github.com/ionic-team/ionic/commit/ba4e117))
* **select:** Account for when options are not loaded immediately ([#17405](https://github.com/ionic-team/ionic/issues/17405)) ([f9f1775](https://github.com/ionic-team/ionic/commit/f9f1775))
* **tab-bar:** add translucent tab-bar styles back ([#17376](https://github.com/ionic-team/ionic/issues/17376)) ([374bd77](https://github.com/ionic-team/ionic/commit/374bd77))



## [4.0.1](https://github.com/ionic-team/ionic/compare/v4.0.0...v4.0.1) (2019-02-06)


### Bug Fixes

* **build:** modify rollup.config.js to work with Windows ([#17231](https://github.com/ionic-team/ionic/issues/17231)) ([d26d43d](https://github.com/ionic-team/ionic/commit/d26d43d))
* **grid:** add flex to ion-grid to allow it to properly render in an ion-item ([#17258](https://github.com/ionic-team/ionic/issues/17258)) ([40c6955](https://github.com/ionic-team/ionic/commit/40c6955)), closes [#17075](https://github.com/ionic-team/ionic/issues/17075)
* **menu:** fix content shadow when revealed in iOS ([#17383](https://github.com/ionic-team/ionic/issues/17383)) ([fc43faa](https://github.com/ionic-team/ionic/commit/fc43faa))
* **platform:** add additional check for safari PWA ([a584f6e](https://github.com/ionic-team/ionic/commit/a584f6e))
* **platform:** add mobileweb platform back ([cf2b2b3](https://github.com/ionic-team/ionic/commit/cf2b2b3))
* **popover:** apply fixed position to keep backdrop in viewport ([#17352](https://github.com/ionic-team/ionic/issues/17352)) ([ee3b04a](https://github.com/ionic-team/ionic/commit/ee3b04a)), closes [#17337](https://github.com/ionic-team/ionic/issues/17337)
* **popover:** originate animation from right in RTL/MD ([#17381](https://github.com/ionic-team/ionic/issues/17381)) ([bc3aa21](https://github.com/ionic-team/ionic/commit/bc3aa21))
* **range:** chrome bug with will-change ([74ce34f](https://github.com/ionic-team/ionic/commit/74ce34f))
* **react:** duplicate events being fired in ionic/react ([#17321](https://github.com/ionic-team/ionic/issues/17321)) ([a415001](https://github.com/ionic-team/ionic/commit/a415001))
* **reorder:** capture click event ([#17244](https://github.com/ionic-team/ionic/issues/17244)) ([986e67b](https://github.com/ionic-team/ionic/commit/986e67b)), closes [#17241](https://github.com/ionic-team/ionic/issues/17241)
* **searchbar:** hide search icon when focused with cancel button ([#17260](https://github.com/ionic-team/ionic/issues/17260)) ([c87867c](https://github.com/ionic-team/ionic/commit/c87867c)), closes [#17252](https://github.com/ionic-team/ionic/issues/17252)


# [4.0.0 Neutronium](https://github.com/ionic-team/ionic/compare/v4.0.0-rc.3...v4.0.0) (2019-01-23)

Enjoy! 🎈

# [4.0.0-rc.3](https://github.com/ionic-team/ionic/compare/v4.0.0-rc.2...v4.0.0-rc.3) (2019-01-22)


### Bug Fixes

* **alert:** update styles for rtl ([#17129](https://github.com/ionic-team/ionic/issues/17129)) ([ceae5d2](https://github.com/ionic-team/ionic/commit/ceae5d2)), closes [#16295](https://github.com/ionic-team/ionic/issues/16295) [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **angular:** apply validation classes properly ([2b4d7b7](https://github.com/ionic-team/ionic/commit/2b4d7b7)), closes [#17171](https://github.com/ionic-team/ionic/issues/17171) [#16052](https://github.com/ionic-team/ionic/issues/16052) [#15572](https://github.com/ionic-team/ionic/issues/15572) [#16452](https://github.com/ionic-team/ionic/issues/16452) [#17063](https://github.com/ionic-team/ionic/issues/17063)
* **angular:** navigateRoot + animated ([#17164](https://github.com/ionic-team/ionic/issues/17164)) ([a6559a4](https://github.com/ionic-team/ionic/commit/a6559a4)), closes [#17144](https://github.com/ionic-team/ionic/issues/17144)
* **angular:** race condition when fast navigation ([#17197](https://github.com/ionic-team/ionic/issues/17197)) ([a945b03](https://github.com/ionic-team/ionic/commit/a945b03)), closes [#17194](https://github.com/ionic-team/ionic/issues/17194) [#16449](https://github.com/ionic-team/ionic/issues/16449) [#15413](https://github.com/ionic-team/ionic/issues/15413)
* **button:** avoid using attribute selectors for disabled ([#17198](https://github.com/ionic-team/ionic/issues/17198)) ([3defbf3](https://github.com/ionic-team/ionic/commit/3defbf3))
* **content:** tap-click deadlock ([#17170](https://github.com/ionic-team/ionic/issues/17170)) ([5cb7f68](https://github.com/ionic-team/ionic/commit/5cb7f68)), closes [#17138](https://github.com/ionic-team/ionic/issues/17138) [#16863](https://github.com/ionic-team/ionic/issues/16863) [#16191](https://github.com/ionic-team/ionic/issues/16191) [#16911](https://github.com/ionic-team/ionic/issues/16911)
* **fab:** remove layout contain from content ([#17048](https://github.com/ionic-team/ionic/issues/17048)) ([0cf1894](https://github.com/ionic-team/ionic/commit/0cf1894)), closes [#16780](https://github.com/ionic-team/ionic/issues/16780)
* **gesture:** destroy gesture handler when it's done ([#17184](https://github.com/ionic-team/ionic/issues/17184)) ([59bd823](https://github.com/ionic-team/ionic/commit/59bd823)), closes [#16433](https://github.com/ionic-team/ionic/issues/16433) [#16974](https://github.com/ionic-team/ionic/issues/16974)
* **icon:** update ionicons to flip for rtl ([#17196](https://github.com/ionic-team/ionic/issues/17196)) ([d3b6e60](https://github.com/ionic-team/ionic/commit/d3b6e60)), closes [#17012](https://github.com/ionic-team/ionic/issues/17012)
* **item:** fix margins on slotted content (avatar, thumbnail) ([#17065](https://github.com/ionic-team/ionic/issues/17065)) ([3612651](https://github.com/ionic-team/ionic/commit/3612651)), closes [#16997](https://github.com/ionic-team/ionic/issues/16997)
* **searchbar:** keep search icon shown when searchbar has focus ([#17154](https://github.com/ionic-team/ionic/issues/17154)) ([c917bb4](https://github.com/ionic-team/ionic/commit/c917bb4))
* **select:** pass click event to popover interface ([#17146](https://github.com/ionic-team/ionic/issues/17146)) ([3ff9faf](https://github.com/ionic-team/ionic/commit/3ff9faf)), closes [#17142](https://github.com/ionic-team/ionic/issues/17142)
* **textarea:** new-line in firefox ([#17176](https://github.com/ionic-team/ionic/issues/17176)) ([e7538f3](https://github.com/ionic-team/ionic/commit/e7538f3)), closes [#17155](https://github.com/ionic-team/ionic/issues/17155)


### Features

* **angular:** add global pop() ([#17182](https://github.com/ionic-team/ionic/issues/17182)) ([766c79d](https://github.com/ionic-team/ionic/commit/766c79d)), closes [#16340](https://github.com/ionic-team/ionic/issues/16340)
* **datetime:** add readonly prop ([#17139](https://github.com/ionic-team/ionic/issues/17139)) ([d513e8a](https://github.com/ionic-team/ionic/commit/d513e8a))
* **input:** add getInputElement() ([#17183](https://github.com/ionic-team/ionic/issues/17183)) ([a90084c](https://github.com/ionic-team/ionic/commit/a90084c)), closes [#17174](https://github.com/ionic-team/ionic/issues/17174)
* **react:** complete controller integrations and navigation ([#16849](https://github.com/ionic-team/ionic/issues/16849)) ([f46cd50](https://github.com/ionic-team/ionic/commit/f46cd50))
* **slides:** expose updateAutoHeight ([#17208](https://github.com/ionic-team/ionic/issues/17208)) ([835aea9](https://github.com/ionic-team/ionic/commit/835aea9)), closes [#15079](https://github.com/ionic-team/ionic/issues/15079)


### BREAKING CHANGES

- `NavController.goBack()` renamed to `NavController.back()`


# [4.0.0-rc.2](https://github.com/ionic-team/ionic/compare/v4.0.0-rc.1...v4.0.0-rc.2) (2019-01-16)


### Bug Fixes

* **action-sheet:** remove the height shift on press and update iOS design ([#16862](https://github.com/ionic-team/ionic/issues/16862)) ([82457d8](https://github.com/ionic-team/ionic/commit/82457d8)), closes [#16715](https://github.com/ionic-team/ionic/issues/16715) [#16790](https://github.com/ionic-team/ionic/issues/16790)
* **angular:** fix slides ([#17085](https://github.com/ionic-team/ionic/issues/17085)) ([8357e5c](https://github.com/ionic-team/ionic/commit/8357e5c))
* **angular:** hide some internal methods ([#17121](https://github.com/ionic-team/ionic/issues/17121)) ([4d5dcd4](https://github.com/ionic-team/ionic/commit/4d5dcd4))
* **angular:** NavController methods return a promise ([#17106](https://github.com/ionic-team/ionic/issues/17106)) ([3aaf87a](https://github.com/ionic-team/ionic/commit/3aaf87a)), closes [#17103](https://github.com/ionic-team/ionic/issues/17103)
* **angular:** ViewChild() fix ([#17037](https://github.com/ionic-team/ionic/issues/17037)) ([27a4709](https://github.com/ionic-team/ionic/commit/27a4709)), closes [#17034](https://github.com/ionic-team/ionic/issues/17034)
* **datetime:** do no change order of formatted dates w/ rtl ([#17024](https://github.com/ionic-team/ionic/issues/17024)) ([169da37](https://github.com/ionic-team/ionic/commit/169da37))
* **fab-button:** add default padding for fab-button ([#17050](https://github.com/ionic-team/ionic/issues/17050)) ([418052f](https://github.com/ionic-team/ionic/commit/418052f))
* **icon:** fix rtl detail icon for ios ([#17016](https://github.com/ionic-team/ionic/issues/17016)) ([b4f3405](https://github.com/ionic-team/ionic/commit/b4f3405)), closes [#14958](https://github.com/ionic-team/ionic/issues/14958)
* **input:** disable shadow-dom for text inputs ([#17043](https://github.com/ionic-team/ionic/issues/17043)) ([63e0501](https://github.com/ionic-team/ionic/commit/63e0501)), closes [#17020](https://github.com/ionic-team/ionic/issues/17020)
* **input:** fix display of ion-input in narrow ion-item in Firefox ([#16978](https://github.com/ionic-team/ionic/issues/16978)) ([1099dc3](https://github.com/ionic-team/ionic/commit/1099dc3))
* **inputs:** fix styles in firefox ([#17066](https://github.com/ionic-team/ionic/issues/17066)) ([0120eee](https://github.com/ionic-team/ionic/commit/0120eee))
* **inputs:** keyboard focus improvements ([#16838](https://github.com/ionic-team/ionic/issues/16838)) ([6364e4e](https://github.com/ionic-team/ionic/commit/6364e4e)), closes [#16815](https://github.com/ionic-team/ionic/issues/16815) [#16872](https://github.com/ionic-team/ionic/issues/16872) [#13978](https://github.com/ionic-team/ionic/issues/13978) [#16610](https://github.com/ionic-team/ionic/issues/16610)
* **item:** no lines on item should take precedence over list lines ([#17049](https://github.com/ionic-team/ionic/issues/17049)) ([d2fa946](https://github.com/ionic-team/ionic/commit/d2fa946)), closes [#16900](https://github.com/ionic-team/ionic/issues/16900)
* **picker:** do not change datetime/picker column order in RTL ([#17018](https://github.com/ionic-team/ionic/issues/17018)) ([1338d71](https://github.com/ionic-team/ionic/commit/1338d71)), closes [#16294](https://github.com/ionic-team/ionic/issues/16294)
* **rtl:** fix rtl back button default ([#17109](https://github.com/ionic-team/ionic/issues/17109)) ([a9a23af](https://github.com/ionic-team/ionic/commit/a9a23af)), closes [#15357](https://github.com/ionic-team/ionic/issues/15357)
* **utils:** remove console log ([#17116](https://github.com/ionic-team/ionic/issues/17116)) ([b0f51d4](https://github.com/ionic-team/ionic/commit/b0f51d4))


### Features

* **angular:** add tabs events ([#17125](https://github.com/ionic-team/ionic/issues/17125)) ([6929bb8](https://github.com/ionic-team/ionic/commit/6929bb8))
* **angular:** expose getSelected() ([#17079](https://github.com/ionic-team/ionic/issues/17079)) ([3c801db](https://github.com/ionic-team/ionic/commit/3c801db)), closes [#17068](https://github.com/ionic-team/ionic/issues/17068)


### Reverts

* **test:** update avatar index.html ([9e80b73](https://github.com/ionic-team/ionic/commit/9e80b73))

### BREAKING CHANGES

#### ionChange removed from ion-tabs

- `(ionChange)` becomes `(ionTabsDidChange)`

#### ion-tabs getSelected() returns a string

Previously the `getSelected()` method of `ion-tabs` returned a reference to the selected
`ion-tab`, now it returns the name of tab as string.



# [4.0.0-rc.1](https://github.com/ionic-team/ionic/compare/v4.0.0-rc.0...v4.0.0-rc.1) (2019-01-09)


### Bug Fixes

* **angular:** update [@angular](https://github.com/angular)/router dependency ([#16998](https://github.com/ionic-team/ionic/issues/16998)) ([76e9e02](https://github.com/ionic-team/ionic/commit/76e9e02))
* **col:** handle RTL offset-*, pull-*, and push-* ([#16702](https://github.com/ionic-team/ionic/issues/16702)) ([6d6472b](https://github.com/ionic-team/ionic/commit/6d6472b))
* **fab:** fab size when href provided ([b3316d4](https://github.com/ionic-team/ionic/commit/b3316d4)), closes [#16833](https://github.com/ionic-team/ionic/issues/16833)
* **menu:** swipe-back has higher priority ([f05c599](https://github.com/ionic-team/ionic/commit/f05c599)), closes [#16864](https://github.com/ionic-team/ionic/issues/16864)
* **overlays:** make them hidden until presented ([#16903](https://github.com/ionic-team/ionic/issues/16903)) ([302be53](https://github.com/ionic-team/ionic/commit/302be53)), closes [#16685](https://github.com/ionic-team/ionic/issues/16685)
* **popover:** position properly in RTL / MD modes ([#16745](https://github.com/ionic-team/ionic/issues/16745)) ([7846019](https://github.com/ionic-team/ionic/commit/7846019))
* **ripple-effect:** never capture click ([#16955](https://github.com/ionic-team/ionic/issues/16955)) ([7ee8aa6](https://github.com/ionic-team/ionic/commit/7ee8aa6)), closes [#16939](https://github.com/ionic-team/ionic/issues/16939)
* **segment:** update indicator and border based on theme ([#16821](https://github.com/ionic-team/ionic/issues/16821)) ([74587db](https://github.com/ionic-team/ionic/commit/74587db)), closes [#16820](https://github.com/ionic-team/ionic/issues/16820)
* **select:** interfaceOptions can customize mode ([#16826](https://github.com/ionic-team/ionic/issues/16826)) ([1227d57](https://github.com/ionic-team/ionic/commit/1227d57)), closes [#16825](https://github.com/ionic-team/ionic/issues/16825)
* **tab-button:** allow standalone tab-button ([#16905](https://github.com/ionic-team/ionic/issues/16905)) ([6ca7645](https://github.com/ionic-team/ionic/commit/6ca7645)), closes [#16845](https://github.com/ionic-team/ionic/issues/16845)
* **tabs:** fix goto root ([#16926](https://github.com/ionic-team/ionic/issues/16926)) ([8ee9205](https://github.com/ionic-team/ionic/commit/8ee9205)), closes [#16917](https://github.com/ionic-team/ionic/issues/16917)


### Features

* **radio-group:** add missing implementation for property allowEmptySelection ([#16880](https://github.com/ionic-team/ionic/issues/16880)) ([09726b0](https://github.com/ionic-team/ionic/commit/09726b0)), closes [#16841](https://github.com/ionic-team/ionic/issues/16841)
* **react:** add missing simple components to react. ([#16836](https://github.com/ionic-team/ionic/issues/16836)) ([696f62c](https://github.com/ionic-team/ionic/commit/696f62c))
* **react:** create initial portal implementation for overlay ctrls ([#16830](https://github.com/ionic-team/ionic/issues/16830)) ([99bdd1f](https://github.com/ionic-team/ionic/commit/99bdd1f))
* **react:** Initial implementations of controller required elements. ([#16817](https://github.com/ionic-team/ionic/issues/16817)) ([e30c5f1](https://github.com/ionic-team/ionic/commit/e30c5f1))


### Performance Improvements

* **angular:** bundle size improvements for angular ([#16966](https://github.com/ionic-team/ionic/issues/16966)) ([44fb45e](https://github.com/ionic-team/ionic/commit/44fb45e))
* **angular:** flat ng modules ([#17007](https://github.com/ionic-team/ionic/issues/17007)) ([0b84e27](https://github.com/ionic-team/ionic/commit/0b84e27)), closes [#17001](https://github.com/ionic-team/ionic/issues/17001)
* **angular:** proxy fast properties ([#16888](https://github.com/ionic-team/ionic/issues/16888)) ([ca9ec3e](https://github.com/ionic-team/ionic/commit/ca9ec3e))


### BREAKING CHANGES

In order to speed up the build and reduce the main bundle size,
we have moved the ionicons outside the webpack build pipeline.

Instead, a new copy task needs to be added to the `angular.json`, specifically to the
the `"assets"` option of the `"build"`.

#### angular.json

```diff
{
  "projects": {
    "app": {
      "architect": {
        "build": {
          "options": {
            "assets": [
              {
                "glob": "**/*",
                "input": "src/assets",
                "output": "assets"
              },
+             {
+               "glob": "**/*.svg",
+               "input": "node_modules/ionicons/dist/ionicons/svg",
+               "output": "./svg"
+             }
```


# [4.0.0-rc.0](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.19...v4.0.0-rc.0) (2018-12-19)


### Bug Fixes

* **action-sheet:** set 100% height to fix scrollable options ([#16789](https://github.com/ionic-team/ionic/issues/16789)) ([e3d7282](https://github.com/ionic-team/ionic/commit/e3d7282))
* **all:** ts 3.2 issues ([f393a82](https://github.com/ionic-team/ionic/commit/f393a82))
* **angular:** Fix cordova browser error when resumed ([#16810](https://github.com/ionic-team/ionic/issues/16810)) ([e735d2c](https://github.com/ionic-team/ionic/commit/e735d2c))
* **angular:** fix sibling router-outlets ([#16774](https://github.com/ionic-team/ionic/issues/16774)) ([35e3848](https://github.com/ionic-team/ionic/commit/35e3848)), closes [#16411](https://github.com/ionic-team/ionic/issues/16411)
* **angular:** router-outlet memory leak ([2c41823](https://github.com/ionic-team/ionic/commit/2c41823)), closes [#16285](https://github.com/ionic-team/ionic/issues/16285)
* **body:** body background matches ion-content ([0699884](https://github.com/ionic-team/ionic/commit/0699884))
* **core:** export ionic lifecycle names ([77640c9](https://github.com/ionic-team/ionic/commit/77640c9)), closes [#16760](https://github.com/ionic-team/ionic/issues/16760)
* **core:** ts lint issue ([#16814](https://github.com/ionic-team/ionic/issues/16814)) ([fb38002](https://github.com/ionic-team/ionic/commit/fb38002))
* **list:** adjust label margin to align with spec for md ([#16751](https://github.com/ionic-team/ionic/issues/16751)) ([60ef98d](https://github.com/ionic-team/ionic/commit/60ef98d)), closes [#16643](https://github.com/ionic-team/ionic/issues/16643)
* **modal:** --box-shadow ([e2ee0b6](https://github.com/ionic-team/ionic/commit/e2ee0b6)), closes [#16798](https://github.com/ionic-team/ionic/issues/16798)
* **progress-bar:** looking nice inside toolbar ([b5efede](https://github.com/ionic-team/ionic/commit/b5efede))
* **pwa:** use 100% of the viewport ([4c4bdf2](https://github.com/ionic-team/ionic/commit/4c4bdf2))
* **tab-bar:** adds selected color if tab bar is using a color ([#16766](https://github.com/ionic-team/ionic/issues/16766)) ([54e5a24](https://github.com/ionic-team/ionic/commit/54e5a24)), closes [#16761](https://github.com/ionic-team/ionic/issues/16761)
* **virtual-scroll:** fixes dynamic changes ([d1cecf1](https://github.com/ionic-team/ionic/commit/d1cecf1))


### Features

* **angular:** expose animationDirection ([#16802](https://github.com/ionic-team/ionic/issues/16802)) ([320eb03](https://github.com/ionic-team/ionic/commit/320eb03))
* **angular:** tabs.select() ([56dd8ae](https://github.com/ionic-team/ionic/commit/56dd8ae)), closes [#16753](https://github.com/ionic-team/ionic/issues/16753)


### Performance Improvements

* **angular:** detach from change detection ([f613b3b](https://github.com/ionic-team/ionic/commit/f613b3b))



# [4.0.0-beta.19](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.18...v4.0.0-beta.19) (2018-12-14)


### Bug Fixes

* **angular:** tab-bar slot=top ([#16727](https://github.com/ionic-team/ionic/issues/16727)) ([d4e4b52](https://github.com/ionic-team/ionic/commit/d4e4b52)), closes [#16722](https://github.com/ionic-team/ionic/issues/16722)
* **angular:** virtual-scroll ([#16729](https://github.com/ionic-team/ionic/issues/16729)) ([f05c7d6](https://github.com/ionic-team/ionic/commit/f05c7d6)), closes [#16725](https://github.com/ionic-team/ionic/issues/16725) [#16432](https://github.com/ionic-team/ionic/issues/16432) [#16023](https://github.com/ionic-team/ionic/issues/16023) [#14591](https://github.com/ionic-team/ionic/issues/14591) [#16050](https://github.com/ionic-team/ionic/issues/16050) [#15587](https://github.com/ionic-team/ionic/issues/15587)
* **datetime:** picker inherits mode ([#16731](https://github.com/ionic-team/ionic/issues/16731)) ([f93e4fd](https://github.com/ionic-team/ionic/commit/f93e4fd)), closes [#16717](https://github.com/ionic-team/ionic/issues/16717)
* **fab-button:** adding size prop instead of [mini] ([#16692](https://github.com/ionic-team/ionic/issues/16692)) ([e8cec60](https://github.com/ionic-team/ionic/commit/e8cec60)), closes [#16680](https://github.com/ionic-team/ionic/issues/16680)
* **fab-button:** get translucent working including with color ([#16750](https://github.com/ionic-team/ionic/issues/16750)) ([c2ada84](https://github.com/ionic-team/ionic/commit/c2ada84)), closes [#16450](https://github.com/ionic-team/ionic/issues/16450)


### Features

* **react:** add initial react code. ([#16748](https://github.com/ionic-team/ionic/issues/16748)) ([33e0ae4](https://github.com/ionic-team/ionic/commit/33e0ae4))

### BREAKING CHANGES

#### Core Components

Removes the `--width` and `--height` variables from the following components, in favor of CSS:

- Button
- FAB Button
- Checkbox
- Removes the `--width`/`--height` and adds a `--size` variable that is set on the width and height, allowing width and height to still be set and border-radius to still use it as a variable
- Radio
- Removes the `--width`/`--height` and `--inner-width`/`--inner-height` variables. Calculates inner values based on parent element size.

#### Overlay Components

The following components have all been converted to shadow (or scoped) and have CSS variables for width/height:

- Action Sheet _(scoped)_
- Alert _(scoped)_
- Loading _(scoped)_
- Menu _(shadow)_
- Modal _(scoped)_
- Picker _(scoped)_
- Popover _(scoped)_
- Toast _(shadow)_

The above components will now have the following CSS variables for consistency among overlays:

| Name |
| ----------------- |
| `--height` |
| `--max-height` |
| `--max-width` |
| `--min-height` |
| `--min-width` |
| `--width` |

If the component does not set the value, it will default to `auto`.

#### Removed CSS Variables

The following CSS properties have been removed:

| Component | Property | Reason |
| ---------------| --------------------| --------------------------------|
| **Button** | `--height` | Use CSS instead |
| **Button** | `--margin-bottom` | Use CSS instead |
| **Button** | `--margin-end` | Use CSS instead |
| **Button** | `--margin-start` | Use CSS instead |
| **Button** | `--margin-top` | Use CSS instead |
| **Button** | `--width` | Use CSS instead |
| **Checkbox** | `--height` | Use CSS or `--size` |
| **Checkbox** | `--width` | Use CSS or `--size` |
| **FAB Button** | `--width` | Use CSS instead |
| **FAB Button** | `--height` | Use CSS instead |
| **FAB Button** | `--margin-bottom` | Use CSS instead |
| **FAB Button** | `--margin-end` | Use CSS instead |
| **FAB Button** | `--margin-start` | Use CSS instead |
| **FAB Button** | `--margin-top` | Use CSS instead |
| **Menu** | `--width-small` | Use a media query and `--width` |
| **Radio** | `--width` | Use CSS instead |
| **Radio** | `--height` | Use CSS instead |
| **Radio** | `--inner-height` | Calculated based on parent |
| **Radio** | `--inner-width` | Calculated based on parent |

#### FAB Button mini

Renamed `[mini]` attribute to `[size=small]` in `ion-fab-button`.

```diff
- <ion-fab-button mini></ion-fab-button>
+ <ion-fab-button size="small"></ion-fab-button>
```

# [4.0.0-beta.18](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.17...v4.0.0-beta.18) (2018-12-13)


### Bug Fixes

* **all:** type issues with TS 3.2 ([aa9d0d4](https://github.com/ionic-team/ionic/commit/aa9d0d4))
* **angular:** disable change detection detach ([68e2619](https://github.com/ionic-team/ionic/commit/68e2619))
* **angular:** lint issue ([a961dca](https://github.com/ionic-team/ionic/commit/a961dca))
* **angular:** only routerLink works with angular router ([63cbc92](https://github.com/ionic-team/ionic/commit/63cbc92))
* **angular:** remove rogue console debug message ([#16530](https://github.com/ionic-team/ionic/issues/16530)) ([9a47fc4](https://github.com/ionic-team/ionic/commit/9a47fc4)), closes [#16529](https://github.com/ionic-team/ionic/issues/16529)
* **angular:** routerLink updates href ([c8d9685](https://github.com/ionic-team/ionic/commit/c8d9685))
* **angular:** swipe to go backs in tabs ([#16710](https://github.com/ionic-team/ionic/issues/16710)) ([2553820](https://github.com/ionic-team/ionic/commit/2553820))
* **angular:** swipeBackEnabled global config ([#16668](https://github.com/ionic-team/ionic/issues/16668)) ([d69427e](https://github.com/ionic-team/ionic/commit/d69427e)), closes [#16624](https://github.com/ionic-team/ionic/issues/16624)
* **angular:** wait for core defined in angular initializer ([#16693](https://github.com/ionic-team/ionic/issues/16693)) ([060794e](https://github.com/ionic-team/ionic/commit/060794e))
* **button:** reduce iOS border radius ([#16575](https://github.com/ionic-team/ionic/issues/16575)) ([b1e56bb](https://github.com/ionic-team/ionic/commit/b1e56bb))
* **button:** relax css containment to "content" ([#16553](https://github.com/ionic-team/ionic/issues/16553)) ([802a3d1](https://github.com/ionic-team/ionic/commit/802a3d1))
* **button/chip:** move hover styles into media query ([#16664](https://github.com/ionic-team/ionic/issues/16664)) ([a2c7b95](https://github.com/ionic-team/ionic/commit/a2c7b95)), closes [#16108](https://github.com/ionic-team/ionic/issues/16108)
* **content:** do not scroll on pan-x ([#16721](https://github.com/ionic-team/ionic/issues/16721)) ([b6aea08](https://github.com/ionic-team/ionic/commit/b6aea08))
* **img:** fire didLoad in safari ([#16571](https://github.com/ionic-team/ionic/issues/16571)) ([2ce986f](https://github.com/ionic-team/ionic/commit/2ce986f)), closes [#16557](https://github.com/ionic-team/ionic/issues/16557)
* **item-divider:** use prop for sticky ([#16691](https://github.com/ionic-team/ionic/issues/16691)) ([a6a1723](https://github.com/ionic-team/ionic/commit/a6a1723))
* **loading:** add backdropDismiss closes [#16527](https://github.com/ionic-team/ionic/issues/16527) ([#16570](https://github.com/ionic-team/ionic/issues/16570)) ([a251b50](https://github.com/ionic-team/ionic/commit/a251b50))
* **react:** add class based APIs ([#16665](https://github.com/ionic-team/ionic/issues/16665)) ([2933f61](https://github.com/ionic-team/ionic/commit/2933f61)), closes [#16583](https://github.com/ionic-team/ionic/issues/16583)
* **refresher:** close animation and hidden on pull down ([#16700](https://github.com/ionic-team/ionic/issues/16700)) ([6b0fc49](https://github.com/ionic-team/ionic/commit/6b0fc49)), closes [#16254](https://github.com/ionic-team/ionic/issues/16254)
* **segment:** set colors in the parent segment and remove the unused color property ([#16590](https://github.com/ionic-team/ionic/issues/16590)) ([8029df3](https://github.com/ionic-team/ionic/commit/8029df3)), closes [#14853](https://github.com/ionic-team/ionic/issues/14853)
* **segment-button:** make layout default to icon-top ([#16573](https://github.com/ionic-team/ionic/issues/16573)) ([841375e](https://github.com/ionic-team/ionic/commit/841375e))
* **select:** selection-option is hidden in edge ([#16607](https://github.com/ionic-team/ionic/issues/16607)) ([6776e65](https://github.com/ionic-team/ionic/commit/6776e65)), closes [#16580](https://github.com/ionic-team/ionic/issues/16580)
* **select-option:** using external style ([8050247](https://github.com/ionic-team/ionic/commit/8050247))
* **tab-bar:** hide on keyboard events ([#16688](https://github.com/ionic-team/ionic/issues/16688)) ([1473805](https://github.com/ionic-team/ionic/commit/1473805)), closes [#16419](https://github.com/ionic-team/ionic/issues/16419)
* **tab-bar:** update tab-bar to set the color/background of tab-button ([#16641](https://github.com/ionic-team/ionic/issues/16641)) ([2f63049](https://github.com/ionic-team/ionic/commit/2f63049)), closes [#14853](https://github.com/ionic-team/ionic/issues/14853)
* **theming:** update ios design for button and card ([#16586](https://github.com/ionic-team/ionic/issues/16586)) ([9c8c650](https://github.com/ionic-team/ionic/commit/9c8c650))
* **toolbar:** style all slotted content in order not only buttons ([#16617](https://github.com/ionic-team/ionic/issues/16617)) ([86fc9a5](https://github.com/ionic-team/ionic/commit/86fc9a5))


### Features

* **all:** vscode HTML autocompletion support ([#16687](https://github.com/ionic-team/ionic/issues/16687)) ([9b83bef](https://github.com/ionic-team/ionic/commit/9b83bef))
* **fab-button:** add css border properties ([#16656](https://github.com/ionic-team/ionic/issues/16656)) ([64557a7](https://github.com/ionic-team/ionic/commit/64557a7)), closes [#16652](https://github.com/ionic-team/ionic/issues/16652)
* **modal:** add css vars ([#16605](https://github.com/ionic-team/ionic/issues/16605)) ([235c685](https://github.com/ionic-team/ionic/commit/235c685))
* **progress-bar:** add progress bar component ([#16559](https://github.com/ionic-team/ionic/issues/16559)) ([9167fb4](https://github.com/ionic-team/ionic/commit/9167fb4)), closes [#16558](https://github.com/ionic-team/ionic/issues/16558)
* **range:** add support for range bar border radius ([#16519](https://github.com/ionic-team/ionic/issues/16519)) ([c036cb0](https://github.com/ionic-team/ionic/commit/c036cb0))
* **theme:** default colors based in step colors ([95c0b1b](https://github.com/ionic-team/ionic/commit/95c0b1b))
* **toast:** add CSS variables for box-shadow and border ([#16679](https://github.com/ionic-team/ionic/issues/16679)) ([1a299b0](https://github.com/ionic-team/ionic/commit/1a299b0))


### BREAKING CHANGES

#### [ANGULAR] Tabs

Tabs got the last bit of changes needed in order to support lazy loading of components. To support this, some changes are required for the router config. Using the tabs starter as an example, here's a diff of the changes:

<detail>

```diff
 import { RouterModule, Routes } from '@angular/router';

 import { TabsPage } from './tabs.page';
-import { Tab1Page } from '../tab1/tab1.page';
-import { Tab2Page } from '../tab2/tab2.page';
-import { Tab3Page } from '../tab3/tab3.page';

 const routes: Routes = [
   {
     path: 'tabs',
     component: TabsPage,
     children: [
-      {
-        path: '',
-        redirectTo: '/tabs/(tab1:tab1)',
-        pathMatch: 'full',
-      },
       {
         path: 'tab1',
-        outlet: 'tab1',
-        component: Tab1Page
+        children: [
+          {
+            path: '',
+            loadChildren: '../tab1/tab1.module#Tab1PageModule'
+          }
+        ]
       },
       {
         path: 'tab2',
-        outlet: 'tab2',
-        component: Tab2Page
+        children: [
+          {
+            path: '',
+            loadChildren: '../tab2/tab2.module#Tab2PageModule'
+          }
+        ]
       },
       {
         path: 'tab3',
-        outlet: 'tab3',
-        component: Tab3Page
+        children: [
+          {
+            path: '',
+            loadChildren: '../tab3/tab3.module#Tab3PageModule'
+          }
+        ]
+      },
+      {
+        path: '',
+        redirectTo: '/tabs/tab1',
+        pathMatch: 'full'
       }
     ]
   },
   {
     path: '',
-    redirectTo: '/tabs/(tab1:tab1)',
+    redirectTo: '/tabs/tab1',
     pathMatch: 'full'
   }
 ];
```

</detail>

And for the tabs markup, we have something close to pre-beta 16 tabs, but still provides a custom tab-bar.


<detail>

```diff
 <ion-tabs>

-  <ion-tab tab="tab1">
-    <ion-router-outlet name="tab1"></ion-router-outlet>
-  </ion-tab>
-  <ion-tab tab="tab2">
-    <ion-router-outlet name="tab2"></ion-router-outlet>
-  </ion-tab>
-  <ion-tab tab="tab3">
-    <ion-router-outlet name="tab3"></ion-router-outlet>
-  </ion-tab>
-
   <ion-tab-bar slot="bottom">
-
-    <ion-tab-button tab="tab1" href="/tabs/(tab1:tab1)">
+    <ion-tab-button tab="tab1">
       <ion-icon name="flash"></ion-icon>
       <ion-label>Tab One</ion-label>
     </ion-tab-button>

-    <ion-tab-button tab="tab2" href="/tabs/(tab2:tab2)">
+    <ion-tab-button tab="tab2">
       <ion-icon name="apps"></ion-icon>
       <ion-label>Tab Two</ion-label>
     </ion-tab-button>

-    <ion-tab-button tab="tab3" href="/tabs/(tab3:tab3)">
+    <ion-tab-button tab="tab3">
       <ion-icon name="send"></ion-icon>
       <ion-label>Tab Three</ion-label>
     </ion-tab-button>
-
   </ion-tab-bar>

 </ion-tabs>
```

</detail>



### [ANGULAR] href does not cause Angular Router to navigate

For consistency sake, the `href` attribute of `ion-button`, `ion-item` and `ion-anchor` no longer
trigger navigation using the Angular’s Router,instead use angular’s `[routerLink]`:

```diff
- <ion-button href="/path/to/page">
+ <ion-button routerLink="/path/to/page">
```

This change will not affect SEO since ionic will still use `href` under the hood.


### [ANGULAR] Prefixed Ion- components

For consistency with other frameworks and the rest of APIs and tooling, the exported
ionic components are prefixed with `Ion`.

```diff
- import { Input } from '@ionic/angular';
+ import { IonInput } from '@ionic/angular';
```

This change might also help to improve autocompletion, and prevent collisions with other libraries.

[More info](https://github.com/ionic-team/ionic/issues/16550)


<a name="4.0.0-beta.17"></a>
# [4.0.0-beta.17](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.16...v4.0.0-beta.17) (2018-11-29)


### Bug Fixes

* **alert:** accepts any value ([#16476](https://github.com/ionic-team/ionic/issues/16476)) ([50b0c6f](https://github.com/ionic-team/ionic/commit/50b0c6f)), closes [#16170](https://github.com/ionic-team/ionic/issues/16170)
* **angular:** accept other url schemas ([e8e7183](https://github.com/ionic-team/ionic/commit/e8e7183))
* **angular:** avoid forEach in classList ([359bdcf](https://github.com/ionic-team/ionic/commit/359bdcf))
* **angular:** cleanup ion-invalid class ([34cd1d1](https://github.com/ionic-team/ionic/commit/34cd1d1)), closes [#16353](https://github.com/ionic-team/ionic/issues/16353)
* **angular:** default value of BooleanValueAccessor should be false ([#16420](https://github.com/ionic-team/ionic/issues/16420)) ([429e083](https://github.com/ionic-team/ionic/commit/429e083))
* **angular:** es6 classes break in ie11 ([#16417](https://github.com/ionic-team/ionic/issues/16417)) ([ce1fcea](https://github.com/ionic-team/ionic/commit/ce1fcea)), closes [#15979](https://github.com/ionic-team/ionic/issues/15979)
* **angular:** fix controlValueAccessor for boolean ([b645bfd](https://github.com/ionic-team/ionic/commit/b645bfd)), closes [#16371](https://github.com/ionic-team/ionic/issues/16371)
* **angular:** fix tabs with useHash ([#16392](https://github.com/ionic-team/ionic/issues/16392)) ([f831186](https://github.com/ionic-team/ionic/commit/f831186)), closes [#16390](https://github.com/ionic-team/ionic/issues/16390)
* **angular:** no animate in browser nav ([276c883](https://github.com/ionic-team/ionic/commit/276c883))
* **angular:** tune routerLink default behaviour ([#16405](https://github.com/ionic-team/ionic/issues/16405)) ([72bc025](https://github.com/ionic-team/ionic/commit/72bc025))
* **item-sliding:** use a white item background instead of transparent ([#16507](https://github.com/ionic-team/ionic/issues/16507)) ([2d33c63](https://github.com/ionic-team/ionic/commit/2d33c63)), closes [#16474](https://github.com/ionic-team/ionic/issues/16474)
* **label:** move default flex and margin to item ([#16461](https://github.com/ionic-team/ionic/issues/16461)) ([723d17b](https://github.com/ionic-team/ionic/commit/723d17b)), closes [#15393](https://github.com/ionic-team/ionic/issues/15393)
* **list:** do not style last child items by default ([#16456](https://github.com/ionic-team/ionic/issues/16456)) ([09d69b9](https://github.com/ionic-team/ionic/commit/09d69b9)), closes [#15185](https://github.com/ionic-team/ionic/issues/15185)
* **menu-controller:** _getInstance() is internal ([723296e](https://github.com/ionic-team/ionic/commit/723296e))
* **mode:** lazy load same component, two different modes ([#16401](https://github.com/ionic-team/ionic/issues/16401)) ([4dd4ccc](https://github.com/ionic-team/ionic/commit/4dd4ccc))
* **radio:** removd hard coded inner-width and inner-height for iOS ([5096503](https://github.com/ionic-team/ionic/commit/5096503))
* **range:** add slot margins ([#16464](https://github.com/ionic-team/ionic/issues/16464)) ([69f63b3](https://github.com/ionic-team/ionic/commit/69f63b3))
* **segment:** height fits content ([#16511](https://github.com/ionic-team/ionic/issues/16511)) ([aa61e81](https://github.com/ionic-team/ionic/commit/aa61e81))
* **tab-bar:** update to match MD design and remove transforms ([#16348](https://github.com/ionic-team/ionic/issues/16348)) ([bc3e192](https://github.com/ionic-team/ionic/commit/bc3e192)), closes [#16231](https://github.com/ionic-team/ionic/issues/16231) [#16231](https://github.com/ionic-team/ionic/issues/16231) [ionic-team/ionic-docs#175](https://github.com/ionic-team/ionic-docs/issues/175) [ionic-team/ionic-docs#163](https://github.com/ionic-team/ionic-docs/issues/163)
* **themes:** update default toolbar and tab background to #fff ([#16454](https://github.com/ionic-team/ionic/issues/16454)) ([12bcb41](https://github.com/ionic-team/ionic/commit/12bcb41)), closes [#16384](https://github.com/ionic-team/ionic/issues/16384)
* **toast:** make longer toasts available with pre-wrap ([#16361](https://github.com/ionic-team/ionic/issues/16361)) ([52cea5a](https://github.com/ionic-team/ionic/commit/52cea5a)), closes [#16360](https://github.com/ionic-team/ionic/issues/16360)
* **toolbar:** match MD button spec ([#16378](https://github.com/ionic-team/ionic/issues/16378)) ([7d7b995](https://github.com/ionic-team/ionic/commit/7d7b995))


### Features

* support ng add ([#15323](https://github.com/ionic-team/ionic/issues/15323)) ([75dd853](https://github.com/ionic-team/ionic/commit/75dd853))
* **ripple-effect:** adds unbounded ripple-effect ([#16399](https://github.com/ionic-team/ionic/issues/16399)) ([2884076](https://github.com/ionic-team/ionic/commit/2884076))
* **ripple-effect:** add option to disable ripple-effect ([#16393](https://github.com/ionic-team/ionic/issues/16393)) ([838f40d](https://github.com/ionic-team/ionic/commit/838f40d)), closes [#16379](https://github.com/ionic-team/ionic/issues/16379)



<a name="4.0.0-beta.16"></a>
# [4.0.0-beta.16](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.15...v4.0.0-beta.16) (2018-11-16)


### BREAKING CHANGES

Segment Button now requires the text to be wrapped in an `ion-label` element for improved styling.

*Old usage:*

 ```html
<ion-segment-button>
  Item One
</ion-segment-button>
 ```
 *New usage:*

 ```html
<ion-segment-button>
  <ion-label>Item One</ion-label>
</ion-segment-button>
 ```

#### Simplifying Chip

Because of updates to the Material Design spec, `ion-chip` no longer requires a chip-specific version of `ion-icon` or `ion-button`. Chips themselves should be interactive and don't require a nested button.

*Old usage:*

```html
<ion-chip>
  <ion-chip-icon name="checkmark"><ion-chip-icon>
</ion-chip>
```

*New usage:*

```html
<ion-chip>
  <ion-icon name="checkmark"></ion-icon>
</ion-chip>
```


### Bug Fixes

* **alert:** use tint for md button active background ([#16278](https://github.com/ionic-team/ionic/issues/16278)) ([0fec722](https://github.com/ionic-team/ionic/commit/0fec722))
* **all:** update types to be required ([#16218](https://github.com/ionic-team/ionic/issues/16218)) ([091625d](https://github.com/ionic-team/ionic/commit/091625d))
* **angular:** add swipe-to-go-back gesture ([108691d](https://github.com/ionic-team/ionic/commit/108691d))
* **angular:** adds tabs stack ([adae8d4](https://github.com/ionic-team/ionic/commit/adae8d4))
* **angular:** disable transition heuristics by default ([d9172b7](https://github.com/ionic-team/ionic/commit/d9172b7))
* **angular:** es6 build ([#16207](https://github.com/ionic-team/ionic/issues/16207)) ([a981116](https://github.com/ionic-team/ionic/commit/a981116)), closes [#15979](https://github.com/ionic-team/ionic/issues/15979)
* **angular:** fix handler outside zone ([b8dae5e](https://github.com/ionic-team/ionic/commit/b8dae5e)), closes [#16338](https://github.com/ionic-team/ionic/issues/16338)
* **backdrop:** update opacity to match MD spec ([#16188](https://github.com/ionic-team/ionic/issues/16188)) ([3c9ed31](https://github.com/ionic-team/ionic/commit/3c9ed31))
* **checkbox:** align vertically ([#16331](https://github.com/ionic-team/ionic/issues/16331)) ([bd3ca42](https://github.com/ionic-team/ionic/commit/bd3ca42))
* **checkbox:** match MD spec ([#16186](https://github.com/ionic-team/ionic/issues/16186)) ([240171a](https://github.com/ionic-team/ionic/commit/240171a))
* **gesture:** release gesture when it's disabled ([c9b4e66](https://github.com/ionic-team/ionic/commit/c9b4e66)), closes [#16335](https://github.com/ionic-team/ionic/issues/16335)
* **input:** remove clear icon in edge ([59bee23](https://github.com/ionic-team/ionic/commit/59bee23))
* **input:** remove red shadow for firefox ([767d299](https://github.com/ionic-team/ionic/commit/767d299)), closes [#16318](https://github.com/ionic-team/ionic/issues/16318)
* **input:** scroll assist works in with shadow-dom ([#16206](https://github.com/ionic-team/ionic/issues/16206)) ([d817cc3](https://github.com/ionic-team/ionic/commit/d817cc3)), closes [#15888](https://github.com/ionic-team/ionic/issues/15888) [#15294](https://github.com/ionic-team/ionic/issues/15294) [#15895](https://github.com/ionic-team/ionic/issues/15895)
* **inputs:** fix aria with shadow-dom ([#16329](https://github.com/ionic-team/ionic/issues/16329)) ([fd79b57](https://github.com/ionic-team/ionic/commit/fd79b57))
* **inputs:** inherit in edge causes problems ([0abf992](https://github.com/ionic-team/ionic/commit/0abf992))
* **item:** update to match Material Design spec ([#16182](https://github.com/ionic-team/ionic/issues/16182)) ([e416c23](https://github.com/ionic-team/ionic/commit/e416c23)), closes [#14799](https://github.com/ionic-team/ionic/issues/14799)
* **label:** placeholder + floating label ([#16111](https://github.com/ionic-team/ionic/issues/16111)) ([a8be529](https://github.com/ionic-team/ionic/commit/a8be529))
* **list-header:** match MD bottom margin, match MD text color ([#16274](https://github.com/ionic-team/ionic/issues/16274)) ([6794447](https://github.com/ionic-team/ionic/commit/6794447))
* **menu:** update box-shadow for MD to match spec ([#16183](https://github.com/ionic-team/ionic/issues/16183)) ([335acf9](https://github.com/ionic-team/ionic/commit/335acf9))
* **range:** increase MD horizontal padding ([#16312](https://github.com/ionic-team/ionic/issues/16312)) ([5d00501](https://github.com/ionic-team/ionic/commit/5d00501))
* **range:** use fully opaque base in color active bar ([#16224](https://github.com/ionic-team/ionic/issues/16224)) ([0757126](https://github.com/ionic-team/ionic/commit/0757126))
* **ripple-effect:** follow MD spec ([#16330](https://github.com/ionic-team/ionic/issues/16330)) ([6d59446](https://github.com/ionic-team/ionic/commit/6d59446))
* **searchbar:** align cancel button to center with search icon position ([#16259](https://github.com/ionic-team/ionic/issues/16259)) ([5957867](https://github.com/ionic-team/ionic/commit/5957867))
* **segment-button:** make layout optional ([e9e33ad](https://github.com/ionic-team/ionic/commit/e9e33ad))
* **tab-button:** layout is mutable ([#16332](https://github.com/ionic-team/ionic/issues/16332)) ([02a266c](https://github.com/ionic-team/ionic/commit/02a266c))
* **tabs:** works with no href ([8e0f1ba](https://github.com/ionic-team/ionic/commit/8e0f1ba))
* **toast:** update toast design to match MD spec ([#16323](https://github.com/ionic-team/ionic/issues/16323)) ([188a635](https://github.com/ionic-team/ionic/commit/188a635)), closes [#16271](https://github.com/ionic-team/ionic/issues/16271)
* **toggle:** match MD toggle track background for off state ([#16277](https://github.com/ionic-team/ionic/issues/16277)) ([8e2a6dd](https://github.com/ionic-team/ionic/commit/8e2a6dd))


### Features

* **segment:** adds global variable for targeting segment in toolbar ([#16344](https://github.com/ionic-team/ionic/issues/16344)) ([10971cc](https://github.com/ionic-team/ionic/commit/10971cc))
* **segment:** adds scrollable and layout props and updates to follow the spec  ([#16273](https://github.com/ionic-team/ionic/issues/16273)) ([256745c](https://github.com/ionic-team/ionic/commit/256745c)), closes [#16232](https://github.com/ionic-team/ionic/issues/16232) [#16081](https://github.com/ionic-team/ionic/issues/16081) [#14853](https://github.com/ionic-team/ionic/issues/14853)


### Performance Improvements

* **angular:** remove duplicated code in value-accessor ([bfbbeca](https://github.com/ionic-team/ionic/commit/bfbbeca))


### Dependencies

If you are using @ionic/angular, please update the version number of any @angular packages in your package.json file to `7.0.3`.

```
"dependencies": {
  "@angular/common": "~7.0.3",
  "@angular/core": "~7.0.3",
  "@angular/forms": "~7.0.3",
  "@angular/http": "~7.0.3",
  "@angular/platform-browser": "~7.0.3",
  "@angular/platform-browser-dynamic": "~7.0.3",
  "@angular/router": "~7.0.3",
  "rxjs": "6.3.3",
```

```
"devDependencies": {
  "@angular-devkit/architect": "~0.10.5",
  "@angular-devkit/build-angular": "~0.10.5",
  "@angular-devkit/core": "~7.0.5",
  "@angular-devkit/schematics": "~7.0.5",
  "@angular/cli": "~7.0.3",
  "@angular/compiler": "~7.0.3",
  "@angular/compiler-cli": "~7.0.3",
  "@angular/language-service": "~7.0.3",
```

<a name="4.0.0-beta.15"></a>
# [4.0.0-beta.15](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.13...v4.0.0-beta.15) (2018-11-01)

# Breaking Changes

## Removed Global CSS Variables

The following global CSS variables have been removed for the reasons listed.

| Variable Name                     | Reason                                          |
| ----------------------------------| ------------------------------------------------|
| `--ion-toolbar-color-inactive`    | Unused                                          |
| `--ion-ripple-background-color`   | Unused / Ripple color is based on component     |
| `--ion-header-size`               | Removed in favor of using CSS for h1-h6         |
| `--ion-header-step`               | Removed in favor of using CSS for h1-h6         |

## Renamed Global CSS Variables

The following global CSS variables have been renamed for the reasons listed.

| Old Variable Name                        | New Variable Name                  | Reason                                                                        |
| -----------------------------------------| -----------------------------------| ------------------------------------------------------------------------------|
| `--ion-toolbar-text-color`               | `--ion-toolbar-color`              | Variable is not limited to text color                                         |
| `--ion-toolbar-color-active`             | `--ion-toolbar-color-activated`    | Consistency with our component variables                                      |
| `--ion-tabbar-text-color`                | `--ion-tab-bar-color`              | Variable is not limited to text color                                         |
| `--ion-tabbar-text-color-active`         | `--ion-tab-bar-color-activated`    | Consistency with our component variables                                      |
| `--ion-tabbar-background-color`          | `--ion-tab-bar-background`         | Applies to the background property                                            |
| `--ion-tabbar-background-color-focused`  | `--ion-tab-bar-background-focused` | Applies to the background property                                            |
| `--ion-item-background-color`            | `--ion-item-background`            | Applies to the background property                                            |
| `--ion-item-background-color-active`     | `--ion-item-background-activated`  | Applies to the background property / Consistency with our component variables |
| `--ion-item-text-color`                  | `--ion-item-color`                 | Variable is not limited to text color                                         |
| `--ion-placeholder-text-color`           | `--ion-placeholder-color`          | Consistency with other variables                                              |

## Rethinking Tabs

One of the most valuable and complex components in Ionic's toolkit is Tabs. Tabs started off as a simple component that would create a tabbed interface to allow users to switch between different views in a way that was consistent with native UX paradigms.

Over time, we started hearing people ask for more features to be added: "Can we have one tab button that is just a button?" "Can I customize how the tab buttons are displayed?" "Can I use a custom icon in the tab?"

Traditionally, these features, and many others, were difficult to accomplish because Tabs was doing a lot of magic behind the scenes to generate the Tab bar and buttons. With this in mind, we thought it was time for a refresh to offer as much flexibility as possible within Tabs.

In order to do this, we had to change how Tabs were written in an app. Prior to Beta 14, Tabs would look like this:

```html
<ion-tabs>
  <ion-tab label="Home" icon="home" href="/tabs/(home:home)">
    <ion-router-outlet name="home"></ion-router-outlet>
  </ion-tab>
  <ion-tab label="About" icon="information-circle" href="/tabs/(about:about)">
    <ion-router-outlet name="about"></ion-router-outlet>
  </ion-tab>
  <ion-tab label="Contact" icon="contacts" href="/tabs/(contact:contact)">
    <ion-router-outlet name="contact"></ion-router-outlet>
  </ion-tab>
</ion-tabs>
```

Here, we have an `ion-tab` element that accepts an icon, a label, and a link to navigate to as properties. This is pretty much how Tabs have worked all the way back to Ionic 1. In Beta 14, we've removed some of the magic from Tabs which allows for more customization:

```html
<ion-tabs>
  <ion-tab-bar>

    <!-- No ion-tab, just a link that looks like a tab -->
    <ion-tab-button href="https://ionicframework.com">
      <!-- <a href="https://ionicframework.com"> -->
      <ion-icon name="globe"></ion-icon>
      <ion-label>Schedule</ion-label>
    </ion-tab-button>

    <!-- No ion-tab, just a button that looks like a tab -->
    <ion-tab-button (click)="openCamera()">
      <ion-icon name="camera"></ion-icon>
      <ion-label>Photo</ion-label>
    </ion-tab-button>

    <!-- Connected to ion-tab, on click will show the ion-tab with id home-view -->
    <ion-tab-button tab="home-view">
      <ion-icon name="home"></ion-icon>
      <ion-label>Home</ion-label>
    </ion-tab-button>
  </ion-tab-bar>

  <ion-tab tab="home-view">
    <ion-content></ion-content>
    <!-- or -->
    <ion-nav></ion-nav>
    <!-- or -->
    <ion-router-outlet></ion-router-outlet>
  </ion-tab>

</ion-tabs>
```

There's a lot going on here, so let's break it down:

1. A single parent `ion-tabs` wraps the entire layout. Same as before.
2. A new element, `ion-tab-bar`, creates the Tab Bar which will contain buttons.
3. A new element, `ion-tab-button`, is used to create each button in the Tab Bar. These could be static links to different routes, buttons with click handlers on them, or link to whole tab views.
4. The `ion-tab` component becomes a separate container that has inline content (`ion-content`), a navigation component (`ion-nav`) or a router outlet (`ion-router-outlet`).

To connect the `ion-tab-button` to the `ion-tab`, the `tab` property must be added to both of these components. For example:

```html
<ion-tabs>
  <ion-tab-bar>
    <ion-tab-button tab="home-view"></ion-tab-button>
  </ion-tab-bar>

  <ion-tab tab="home-view"></ion-tab>
</ion-tabs>
```

Since the `tab` property is the same on the `ion-tab-button` and `ion-tab`, when the Tab Button is tapped, the `home-view` Tab will become active. This takes the magic out of Tabs while making the behavior between the tab buttons and the views much more explicit.

Some other benefits of this refactor include:

- Can now be written as a standalone Tab Bar (with no attached Tab)
- Works with a navigation component or a plain content element
- Works with shadow DOM and allows easy customization of the Tab Bar
- Gives full control over the elements inside of the Tab Bar
- Integrates nicely with other frameworks that have different ways of rendering element nodes

Lastly, this change also fixes some outstanding issues with Tabs, so we're excited to get this out to you all!


### Bug Fixes

* **action-sheet:** update Action Sheet design to match MD spec ([#16135](https://github.com/ionic-team/ionic/issues/16135)) ([068303d](https://github.com/ionic-team/ionic/commit/068303d))
* **alert:** match MD spec ([#16145](https://github.com/ionic-team/ionic/issues/16145)) ([287aec8](https://github.com/ionic-team/ionic/commit/287aec8))
* **alert:** update alert min/max interface ([#15987](https://github.com/ionic-team/ionic/issues/15987)) ([a0c60ff](https://github.com/ionic-team/ionic/commit/a0c60ff)), closes [#15986](https://github.com/ionic-team/ionic/issues/15986)
* **angular:** generate proxies for ion-tabbar ([#15954](https://github.com/ionic-team/ionic/issues/15954)) ([45b46b4](https://github.com/ionic-team/ionic/commit/45b46b4))
* **angular:** make sure angular form control onChange is fired when needed ([#16126](https://github.com/ionic-team/ionic/issues/16126)) ([d5f2e6f](https://github.com/ionic-team/ionic/commit/d5f2e6f))
* **badge:** match MD padding ([#16134](https://github.com/ionic-team/ionic/issues/16134)) ([615c518](https://github.com/ionic-team/ionic/commit/615c518))
* **button:** match MD spec timing, outline, hover ([#16160](https://github.com/ionic-team/ionic/issues/16160)) ([0faa355](https://github.com/ionic-team/ionic/commit/0faa355))
* **button:** match updated MD specs ([#16144](https://github.com/ionic-team/ionic/issues/16144)) ([e9579d5](https://github.com/ionic-team/ionic/commit/e9579d5))
* **card:** adjust styles to match MD ([#16093](https://github.com/ionic-team/ionic/issues/16093)) ([44b0eab](https://github.com/ionic-team/ionic/commit/44b0eab))
* **checkbox:** end position by default ([9da51b3](https://github.com/ionic-team/ionic/commit/9da51b3))
* **cordova:** fix resume event in cordova browser ([#15945](https://github.com/ionic-team/ionic/issues/15945)) ([4318520](https://github.com/ionic-team/ionic/commit/4318520)), closes [#15944](https://github.com/ionic-team/ionic/issues/15944)
* **datetime:** can participate in native <form> ([#16106](https://github.com/ionic-team/ionic/issues/16106)) ([aad7711](https://github.com/ionic-team/ionic/commit/aad7711)), closes [#16075](https://github.com/ionic-team/ionic/issues/16075)
* **datetime:** pickerOptions are all optional ([#16101](https://github.com/ionic-team/ionic/issues/16101)) ([f014181](https://github.com/ionic-team/ionic/commit/f014181)), closes [#16095](https://github.com/ionic-team/ionic/issues/16095)
* **fab-button:** use correct background in list and update the md icon color ([#16092](https://github.com/ionic-team/ionic/issues/16092)) ([9dfc863](https://github.com/ionic-team/ionic/commit/9dfc863)), closes [#16091](https://github.com/ionic-team/ionic/issues/16091)
* **header:** update box shadow to match MD spec ([#16149](https://github.com/ionic-team/ionic/issues/16149)) ([00544e9](https://github.com/ionic-team/ionic/commit/00544e9))
* **infinite-scroll:** disabled resets loading/busy state ([#16107](https://github.com/ionic-team/ionic/issues/16107)) ([33448c6](https://github.com/ionic-team/ionic/commit/33448c6)), closes [#15994](https://github.com/ionic-team/ionic/issues/15994)
* **inputs:** add z-index for all inputs ([92ee4ef](https://github.com/ionic-team/ionic/commit/92ee4ef)), closes [#16157](https://github.com/ionic-team/ionic/issues/16157)
* **inputs:** disabled handling ([#16071](https://github.com/ionic-team/ionic/issues/16071)) ([ef6895a](https://github.com/ionic-team/ionic/commit/ef6895a))
* **label:** do not animate float labels on initial load ([#16036](https://github.com/ionic-team/ionic/issues/16036)) ([e644fc9](https://github.com/ionic-team/ionic/commit/e644fc9))
* **note:** update note font size for MD ([#16088](https://github.com/ionic-team/ionic/issues/16088)) ([6f2b9b0](https://github.com/ionic-team/ionic/commit/6f2b9b0))
* **picker:** delay option animate until after options initialized ([#16037](https://github.com/ionic-team/ionic/issues/16037)) ([a74e565](https://github.com/ionic-team/ionic/commit/a74e565))
* **picker:** fix iOS picker options that shouldn't be showing ([#16055](https://github.com/ionic-team/ionic/issues/16055)) ([02ef52b](https://github.com/ionic-team/ionic/commit/02ef52b))
* **popover:** update border radius to match MD ([#16086](https://github.com/ionic-team/ionic/issues/16086)) ([9c733e9](https://github.com/ionic-team/ionic/commit/9c733e9))
* **popover:** update the box shadow to match MD spec ([#16089](https://github.com/ionic-team/ionic/issues/16089)) ([fdb7da9](https://github.com/ionic-team/ionic/commit/fdb7da9))
* **radio:** match MD sizing ([#16087](https://github.com/ionic-team/ionic/issues/16087)) ([6723248](https://github.com/ionic-team/ionic/commit/6723248))
* **range:** match MD spec ([#16150](https://github.com/ionic-team/ionic/issues/16150)) ([b2f493f](https://github.com/ionic-team/ionic/commit/b2f493f))
* **reorder-group:** event bubbles up ([#16030](https://github.com/ionic-team/ionic/issues/16030)) ([ce80b24](https://github.com/ionic-team/ionic/commit/ce80b24)), closes [#16010](https://github.com/ionic-team/ionic/issues/16010)
* **screenshot:** update screenshot ci ([#15969](https://github.com/ionic-team/ionic/issues/15969)) ([80b5c8c](https://github.com/ionic-team/ionic/commit/80b5c8c))
* **searchbar:** do not animate during initial load ([#16147](https://github.com/ionic-team/ionic/issues/16147)) ([e94b522](https://github.com/ionic-team/ionic/commit/e94b522))
* **tab-bar:** align tab text to the center ([#16130](https://github.com/ionic-team/ionic/issues/16130)) ([67eb7cf](https://github.com/ionic-team/ionic/commit/67eb7cf)), closes [#15273](https://github.com/ionic-team/ionic/issues/15273)
* **tabs:** name prop is not longer used ([6d11cc1](https://github.com/ionic-team/ionic/commit/6d11cc1))
* **theming:** update global css variable naming and default values  ([#16003](https://github.com/ionic-team/ionic/issues/16003)) ([b2021fd](https://github.com/ionic-team/ionic/commit/b2021fd)), closes [#15989](https://github.com/ionic-team/ionic/issues/15989) [#15559](https://github.com/ionic-team/ionic/issues/15559)
* **toggle:** fix box-shadow overflow in toggle ([#15955](https://github.com/ionic-team/ionic/issues/15955)) ([8a4dc74](https://github.com/ionic-team/ionic/commit/8a4dc74)), closes [#14626](https://github.com/ionic-team/ionic/issues/14626)
* **angular:** fix ngModel accessor ([fab8b60](https://github.com/ionic-team/ionic/commit/fab8b60))
* **color:** edge currentColor bug ([#16177](https://github.com/ionic-team/ionic/issues/16177)) ([fce30eb](https://github.com/ionic-team/ionic/commit/fce30eb)), closes [#16168](https://github.com/ionic-team/ionic/issues/16168)
* **searchbar:** fix crash on cancel event ([#16181](https://github.com/ionic-team/ionic/issues/16181)) ([9c79d98](https://github.com/ionic-team/ionic/commit/9c79d98)), closes [#16143](https://github.com/ionic-team/ionic/issues/16143)
* **tab-bar:** safe-bottom area is applied correctly ([#16179](https://github.com/ionic-team/ionic/issues/16179)) ([1532bd2](https://github.com/ionic-team/ionic/commit/1532bd2)), closes [#16175](https://github.com/ionic-team/ionic/issues/16175)
* **tabs:** use slot instead of placement ([72f0a76](https://github.com/ionic-team/ionic/commit/72f0a76))


### Features

* **toast:** add "color" prop ([#16100](https://github.com/ionic-team/ionic/issues/16100)) ([c982856](https://github.com/ionic-team/ionic/commit/c982856)), closes [#16099](https://github.com/ionic-team/ionic/issues/16099)


### Performance Improvements

* **angular:** disable async queue ([#16118](https://github.com/ionic-team/ionic/issues/16118)) ([c2f5803](https://github.com/ionic-team/ionic/commit/c2f5803))



<a name="4.0.0-beta.13"></a>
# [4.0.0-beta.13](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.12...v4.0.0-beta.13) (2018-10-14)


### Bug Fixes

* **all:** avoid using focus() since it conflicts with HTMLElement ([5560dcd](https://github.com/ionic-team/ionic/commit/5560dcd)), closes [#15810](https://github.com/ionic-team/ionic/issues/15810)
* **all:** disable animations in e2e tests ([9d109d6](https://github.com/ionic-team/ionic/commit/9d109d6))
* **all:** docs for all missing props ([a72fced](https://github.com/ionic-team/ionic/commit/a72fced))
* **angular:** add "main" to package.json as workaround for webstorm ([c57a7cc](https://github.com/ionic-team/ionic/commit/c57a7cc))
* **angular:** backButton event uses ionBackButton ([0337c7f](https://github.com/ionic-team/ionic/commit/0337c7f))
* **angular:** only bypass zone in high-rate events ([f63c0f5](https://github.com/ionic-team/ionic/commit/f63c0f5)), closes [#15765](https://github.com/ionic-team/ionic/issues/15765)
* **button:** use class instead of reflect ([e189cc6](https://github.com/ionic-team/ionic/commit/e189cc6)), closes [#15623](https://github.com/ionic-team/ionic/issues/15623)
* **card:** include card-header in current color ([b5e39c8](https://github.com/ionic-team/ionic/commit/b5e39c8))
* **card:** update currentColor to use contrast color ([a9a29f7](https://github.com/ionic-team/ionic/commit/a9a29f7))
* **card-header:** get color property working ([92514b3](https://github.com/ionic-team/ionic/commit/92514b3)), closes [#14723](https://github.com/ionic-team/ionic/issues/14723) [#14853](https://github.com/ionic-team/ionic/issues/14853)
* **col:** fix CSS is undefined error on IE11 ([#15882](https://github.com/ionic-team/ionic/issues/15882)) ([06a3028](https://github.com/ionic-team/ionic/commit/06a3028))
* **content:** iOS should not have scroll in desktop ([8cb1886](https://github.com/ionic-team/ionic/commit/8cb1886)), closes [#15858](https://github.com/ionic-team/ionic/issues/15858)
* **css:** avoid cleancss bug ([f87d4bf](https://github.com/ionic-team/ionic/commit/f87d4bf)), closes [#15807](https://github.com/ionic-team/ionic/issues/15807)
* **css:** remove selection color ([6b0d812](https://github.com/ionic-team/ionic/commit/6b0d812))
* **docs:** Fix commit link on CONTRIBUTING.md ([#15834](https://github.com/ionic-team/ionic/issues/15834)) ([fe0c3b4](https://github.com/ionic-team/ionic/commit/fe0c3b4))
* **fab-button:** add and document css properties ([098bd82](https://github.com/ionic-team/ionic/commit/098bd82)), closes [#14808](https://github.com/ionic-team/ionic/issues/14808)
* **fab-button:** ripple-effect in safari ([844c33a](https://github.com/ionic-team/ionic/commit/844c33a)), closes [#15768](https://github.com/ionic-team/ionic/issues/15768)
* **hide/show:** fix show-when/hide-when ([fd01308](https://github.com/ionic-team/ionic/commit/fd01308)), closes [#15813](https://github.com/ionic-team/ionic/issues/15813)
* **infinite-scroll:** implements position="top" ([b4a73ad](https://github.com/ionic-team/ionic/commit/b4a73ad)), closes [#15481](https://github.com/ionic-team/ionic/issues/15481)
* **input:** add and document custom properties ([23df042](https://github.com/ionic-team/ionic/commit/23df042)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **input:** tabindex or tab in ion-input do not work with clearInput fix ([e916500](https://github.com/ionic-team/ionic/commit/e916500))
* **ion-datetime:** keep the model value consistently an ISO string ([#15907](https://github.com/ionic-team/ionic/issues/15907)) ([b46052b](https://github.com/ionic-team/ionic/commit/b46052b))
* **item:** add input highlight using an absolute div ([#15856](https://github.com/ionic-team/ionic/issues/15856)) ([f885f7d](https://github.com/ionic-team/ionic/commit/f885f7d)), closes [#14036](https://github.com/ionic-team/ionic/issues/14036) [#9639](https://github.com/ionic-team/ionic/issues/9639) [#14952](https://github.com/ionic-team/ionic/issues/14952) [#15690](https://github.com/ionic-team/ionic/issues/15690)
* **item:** detail context based in text color ([e51f1f3](https://github.com/ionic-team/ionic/commit/e51f1f3))
* **label:** add color variable, examples to test and document ([b485eba](https://github.com/ionic-team/ionic/commit/b485eba)), closes [#14853](https://github.com/ionic-team/ionic/issues/14853) [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **list:** don't show inset lines for full line list ([6eae95a](https://github.com/ionic-team/ionic/commit/6eae95a))
* **menu:** menu registers itself before it's ready ([08beee3](https://github.com/ionic-team/ionic/commit/08beee3))
* **menu:** overlays can block menu closing ([11aa241](https://github.com/ionic-team/ionic/commit/11aa241)), closes [#15880](https://github.com/ionic-team/ionic/issues/15880)
* **menu:** wait until all menus are ready ([a5c2cc1](https://github.com/ionic-team/ionic/commit/a5c2cc1)), closes [#15727](https://github.com/ionic-team/ionic/issues/15727)
* **menu-button:** color ([386cf82](https://github.com/ionic-team/ionic/commit/386cf82)), closes [#15546](https://github.com/ionic-team/ionic/issues/15546) [#15545](https://github.com/ionic-team/ionic/issues/15545)
* **menu-button:** Not visible if toolbar has primary color ([#15847](https://github.com/ionic-team/ionic/issues/15847)) ([e2ea08b](https://github.com/ionic-team/ionic/commit/e2ea08b))
* **modal/popover:** lifecycle events ([19c449e](https://github.com/ionic-team/ionic/commit/19c449e)), closes [#15806](https://github.com/ionic-team/ionic/issues/15806)
* **picker:** stop animation when it's closed ([e81af2d](https://github.com/ionic-team/ionic/commit/e81af2d)), closes [#15854](https://github.com/ionic-team/ionic/issues/15854)
* **popover:** showBackdrop hides backdrop ([f00be0d](https://github.com/ionic-team/ionic/commit/f00be0d)), closes [#15878](https://github.com/ionic-team/ionic/issues/15878)
* **reorder-group:** delegate dom reordering ([5f65942](https://github.com/ionic-team/ionic/commit/5f65942)), closes [#15836](https://github.com/ionic-team/ionic/issues/15836)
* **slides:** disable autoplay by default ([db6ddb0](https://github.com/ionic-team/ionic/commit/db6ddb0)), closes [#15766](https://github.com/ionic-team/ionic/issues/15766)
* **tabbar:** css variables assigned to the host ([545db2e](https://github.com/ionic-team/ionic/commit/545db2e))
* **tabs:** badgeColor works again ([3d98587](https://github.com/ionic-team/ionic/commit/3d98587)), closes [#15559](https://github.com/ionic-team/ionic/issues/15559) [#14840](https://github.com/ionic-team/ionic/issues/14840)
* **tabs:** fix async deadlock ([905c7db](https://github.com/ionic-team/ionic/commit/905c7db))
* **title:** allow color to be set for title without attribute ([a9b3064](https://github.com/ionic-team/ionic/commit/a9b3064)), closes [#14853](https://github.com/ionic-team/ionic/issues/14853) [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **toggle:** improve animation motion ([5330574](https://github.com/ionic-team/ionic/commit/5330574))


### Features

* **angular:** observer based api to override hardware back button ([6a5aec8](https://github.com/ionic-team/ionic/commit/6a5aec8)), closes [#15820](https://github.com/ionic-team/ionic/issues/15820)
* **menu:** add new lifeycle events ([64b52b5](https://github.com/ionic-team/ionic/commit/64b52b5))
* **nav:** animation is customizable ([24f3373](https://github.com/ionic-team/ionic/commit/24f3373)), closes [#15851](https://github.com/ionic-team/ionic/issues/15851)
* **overlays:** expose animation customization ([dc976cc](https://github.com/ionic-team/ionic/commit/dc976cc))
* initial vue support ([73cff0c](https://github.com/ionic-team/ionic/commit/73cff0c))


### Performance Improvements

* prevent unnecesary event listener changes ([a999c1f](https://github.com/ionic-team/ionic/commit/a999c1f))



<a name="4.0.0-beta.12"></a>
# [4.0.0-beta.12](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.11...v4.0.0-beta.12) (2018-09-26)


### Bug Fixes

* **action-sheet:** allow async button handler returned value ([3d3e6a4](https://github.com/ionic-team/ionic/commit/3d3e6a4))
* **alert:** check if value is null instead of truthy ([799f0d7](https://github.com/ionic-team/ionic/commit/799f0d7)), closes [#15420](https://github.com/ionic-team/ionic/issues/15420)
* **all:** gesture controller can block scrolling ([633360f](https://github.com/ionic-team/ionic/commit/633360f)), closes [#15725](https://github.com/ionic-team/ionic/issues/15725)
* **all:** lint errors ([f8eafa7](https://github.com/ionic-team/ionic/commit/f8eafa7))
* **all:** safe margins for fab, item-header, tabbar ([62eff0a](https://github.com/ionic-team/ionic/commit/62eff0a))
* **angular:** add event listener on window ([#15628](https://github.com/ionic-team/ionic/issues/15628)) ([7bd33a7](https://github.com/ionic-team/ionic/commit/7bd33a7))
* **angular:** import icons using webpack apis ([b71b36c](https://github.com/ionic-team/ionic/commit/b71b36c))
* **angular:** ionic/core is only a dep ([236d8a4](https://github.com/ionic-team/ionic/commit/236d8a4))
* **angular:** value is updates based in ionChange ([e18f8bf](https://github.com/ionic-team/ionic/commit/e18f8bf)), closes [#15722](https://github.com/ionic-team/ionic/issues/15722)
* **app:** statusTap and hardwareGB can be activated with config ([c048f9f](https://github.com/ionic-team/ionic/commit/c048f9f)), closes [#15617](https://github.com/ionic-team/ionic/issues/15617)
* **back-button:** add and document custom properties ([b3aebb8](https://github.com/ionic-team/ionic/commit/b3aebb8)), closes [#14808](https://github.com/ionic-team/ionic/issues/14808) [#14850](https://github.com/ionic-team/ionic/issues/14850) [#14853](https://github.com/ionic-team/ionic/issues/14853)
* **back-button:** default md color is inhered ([d0867b5](https://github.com/ionic-team/ionic/commit/d0867b5))
* **button:** default button width to auto to avoid inheriting ([bac49ca](https://github.com/ionic-team/ionic/commit/bac49ca)), closes [#15522](https://github.com/ionic-team/ionic/issues/15522)
* **button:** disable :hover on non supported devices ([#15705](https://github.com/ionic-team/ionic/issues/15705)) ([67eb661](https://github.com/ionic-team/ionic/commit/67eb661))
* **button:** disable pointer events in toolbar buttons ([d145cae](https://github.com/ionic-team/ionic/commit/d145cae)), closes [#15623](https://github.com/ionic-team/ionic/issues/15623)
* **buttons:** fix activated, position, animation ([9d6169a](https://github.com/ionic-team/ionic/commit/9d6169a))
* **color:** do not accept empty color ([ede5525](https://github.com/ionic-team/ionic/commit/ede5525)), closes [#15732](https://github.com/ionic-team/ionic/issues/15732)
* **content:** apply background to the inner scroll element ([f68c457](https://github.com/ionic-team/ionic/commit/f68c457)), closes [#15635](https://github.com/ionic-team/ionic/issues/15635)
* **content:** nested content ([5f5ba66](https://github.com/ionic-team/ionic/commit/5f5ba66)), closes [#15680](https://github.com/ionic-team/ionic/issues/15680)
* **datetime:** check for null instead of undefined ([407b147](https://github.com/ionic-team/ionic/commit/407b147)), closes [#15605](https://github.com/ionic-team/ionic/issues/15605)
* **datetime:** convert to shadow and fix broken styles ([fa77017](https://github.com/ionic-team/ionic/commit/fa77017)), closes [#15547](https://github.com/ionic-team/ionic/issues/15547) [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **fab:** do not reset fab activated if it's false ([d619d8d](https://github.com/ionic-team/ionic/commit/d619d8d))
* **gestures:** change itemSliding gesture priority ([48927e6](https://github.com/ionic-team/ionic/commit/48927e6)), closes [#15608](https://github.com/ionic-team/ionic/issues/15608)
* **input:** fix text type for select change event ([694b6a8](https://github.com/ionic-team/ionic/commit/694b6a8))
* **item:** add the multiple inputs class to fix select/datetime in item ([1cd792e](https://github.com/ionic-team/ionic/commit/1cd792e)), closes [#15401](https://github.com/ionic-team/ionic/issues/15401)
* **item-divider:** add and document custom properties ([06cb138](https://github.com/ionic-team/ionic/commit/06cb138)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850) [#14808](https://github.com/ionic-team/ionic/issues/14808)
* **item-option:** add and document custom properties ([2a040e0](https://github.com/ionic-team/ionic/commit/2a040e0)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850) [#14808](https://github.com/ionic-team/ionic/issues/14808) [#14943](https://github.com/ionic-team/ionic/issues/14943)
* **menu:** crash when menu if forcedClosed ([22e15b4](https://github.com/ionic-team/ionic/commit/22e15b4))
* **menu:** opening a menu autocloses any opened ones ([8796f9f](https://github.com/ionic-team/ionic/commit/8796f9f))
* **menu-controller:** expose registerAnimation ([29d00da](https://github.com/ionic-team/ionic/commit/29d00da)), closes [#15701](https://github.com/ionic-team/ionic/issues/15701)
* **overlay:** register backbutton handler only when needed ([#15615](https://github.com/ionic-team/ionic/issues/15615)) ([b2b5d93](https://github.com/ionic-team/ionic/commit/b2b5d93)), closes [#15601](https://github.com/ionic-team/ionic/issues/15601)
* **platform:** using desktop instead of window ([c8de84d](https://github.com/ionic-team/ionic/commit/c8de84d))
* add safe area cutouts ([#15750](https://github.com/ionic-team/ionic/issues/15750)) ([a3c85ae](https://github.com/ionic-team/ionic/commit/a3c85ae))
* **radio:** add css variables to make it customizable ([9ec8e74](https://github.com/ionic-team/ionic/commit/9ec8e74)), closes [#15729](https://github.com/ionic-team/ionic/issues/15729)
* **select:** add position styles to work as standalone ([224b4f8](https://github.com/ionic-team/ionic/commit/224b4f8))
* **select:** placeholder can be reset if value = null ([602f668](https://github.com/ionic-team/ionic/commit/602f668))
* **select:** show placeholder when multiple is empty ([29862e8](https://github.com/ionic-team/ionic/commit/29862e8))
* **select-popover:** add scoped to apply proper styles to list ([fd1b636](https://github.com/ionic-team/ionic/commit/fd1b636))
* **slides:** add back zoom plugin for swiper ([6890ecc](https://github.com/ionic-team/ionic/commit/6890ecc)), closes [#15676](https://github.com/ionic-team/ionic/issues/15676)
* **slides:** fix mutable options ([681981f](https://github.com/ionic-team/ionic/commit/681981f))
* **tap-click:** prevent activated while scrolling ([7f38d37](https://github.com/ionic-team/ionic/commit/7f38d37)), closes [#15752](https://github.com/ionic-team/ionic/issues/15752)
* **toast:** button color is contrast ([f65ec10](https://github.com/ionic-team/ionic/commit/f65ec10)), closes [#15737](https://github.com/ionic-team/ionic/issues/15737)


### Features

* **animation:** ability to disable animations w/ querystring ([734b222](https://github.com/ionic-team/ionic/commit/734b222))
* **app:** adds _forceStatusbarPadding for ionic lab ([0379977](https://github.com/ionic-team/ionic/commit/0379977))
* **ripple:** ability to disable ripple effect w/ querystring ([efca0ae](https://github.com/ionic-team/ionic/commit/efca0ae))
* **screenshot:** update to use stencil e2e screenshot testing ([43b9045](https://github.com/ionic-team/ionic/commit/43b9045))


### Reverts

* **content:** block scrolling in ion-content ([9badb08](https://github.com/ionic-team/ionic/commit/9badb08))



<a name="4.0.0-beta.11"></a>
# [4.0.0-beta.11](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.10...v4.0.0-beta.11) (2018-09-14)


### Bug Fixes

* **slides:** swiper must be a vendor ([3435473](https://github.com/ionic-team/ionic/commit/3435473))



<a name="4.0.0-beta.10"></a>
# [4.0.0-beta.10](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.9...v4.0.0-beta.10) (2018-09-14)


### Bug Fixes

* **animation:** always call onFinish() ([c23c5a4](https://github.com/ionic-team/ionic/commit/c23c5a4))
* **button:** vanilla color is usable ([b8b9b83](https://github.com/ionic-team/ionic/commit/b8b9b83))
* **segment:** unselected color ([b9e42eb](https://github.com/ionic-team/ionic/commit/b9e42eb))
* **slides:** swiper is not required as dependency ([29f324b](https://github.com/ionic-team/ionic/commit/29f324b))



<a name="4.0.0-beta.9"></a>
# [4.0.0-beta.9](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.7...v4.0.0-beta.9) (2018-09-14)


### Bug Fixes

* **anchor:** make it activatable ([6c62e6c](https://github.com/ionic-team/ionic/commit/6c62e6c))
* **angular:** only append the component when the parent element is not the container element ([6d6f70c](https://github.com/ionic-team/ionic/commit/6d6f70c)), closes [#14737](https://github.com/ionic-team/ionic/issues/14737)
* **back-button:** subscribe to body ([37c9be7](https://github.com/ionic-team/ionic/commit/37c9be7))
* **button:** add custom properties and remove --ion-color overrides ([#15463](https://github.com/ionic-team/ionic/issues/15463)) ([3af4361](https://github.com/ionic-team/ionic/commit/3af4361)), closes [#14808](https://github.com/ionic-team/ionic/issues/14808) [#14853](https://github.com/ionic-team/ionic/issues/14853) [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **core:** matchBreakpoint will return true if breakPoint is empty string ([#15498](https://github.com/ionic-team/ionic/issues/15498)) ([b362b0a](https://github.com/ionic-team/ionic/commit/b362b0a)), closes [#15495](https://github.com/ionic-team/ionic/issues/15495)
* **esm:** reorganiza exports ([bb19243](https://github.com/ionic-team/ionic/commit/bb19243))
* **fab-button:** add routerDirection ([2398634](https://github.com/ionic-team/ionic/commit/2398634)), closes [#15551](https://github.com/ionic-team/ionic/issues/15551)
* **input:** value might be null/undefined ([83543b7](https://github.com/ionic-team/ionic/commit/83543b7))
* **item:** update hostContext to use ion-item element ([21d1f2e](https://github.com/ionic-team/ionic/commit/21d1f2e))
* **item-option:** add activated and ripple to button ([78e2a0a](https://github.com/ionic-team/ionic/commit/78e2a0a)), closes [#14943](https://github.com/ionic-team/ionic/issues/14943)
* **item-option:** enable ripple-effect ([428a5da](https://github.com/ionic-team/ionic/commit/428a5da))
* **item-sliding:** make sure options are ready ([7f59f91](https://github.com/ionic-team/ionic/commit/7f59f91))
* **list-header:** add and document custom properties ([5ccc1fd](https://github.com/ionic-team/ionic/commit/5ccc1fd)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850) [#14853](https://github.com/ionic-team/ionic/issues/14853) [#14808](https://github.com/ionic-team/ionic/issues/14808)
* **menu:** ios styles ([281f9a3](https://github.com/ionic-team/ionic/commit/281f9a3))
* **nav:** matches() function ([9420b88](https://github.com/ionic-team/ionic/commit/9420b88))
* **overlay:** animation can be interrupted ([ca58664](https://github.com/ionic-team/ionic/commit/ca58664)), closes [#15506](https://github.com/ionic-team/ionic/issues/15506)
* **overlay:** only register backButton listener once ([75c2d74](https://github.com/ionic-team/ionic/commit/75c2d74))
* **popover:** content sizing, scoped css ([51d4e08](https://github.com/ionic-team/ionic/commit/51d4e08)), closes [#15237](https://github.com/ionic-team/ionic/issues/15237) [#15589](https://github.com/ionic-team/ionic/issues/15589) [#15331](https://github.com/ionic-team/ionic/issues/15331)
* **popover:** remove unneeded code ([b26c017](https://github.com/ionic-team/ionic/commit/b26c017))
* **radio:** add and document custom properties ([0f9a7b4](https://github.com/ionic-team/ionic/commit/0f9a7b4)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **range:** update range ratio when new min/max are passed ([#15512](https://github.com/ionic-team/ionic/issues/15512)) ([f62601f](https://github.com/ionic-team/ionic/commit/f62601f)), closes [#15511](https://github.com/ionic-team/ionic/issues/15511)
* **searchbar:** add and document custom properties ([7f57e02](https://github.com/ionic-team/ionic/commit/7f57e02)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **searchbar:** inherit color from color toolbar ([3042f57](https://github.com/ionic-team/ionic/commit/3042f57))
* **searchbar:** ionCancel event ([20a7599](https://github.com/ionic-team/ionic/commit/20a7599)), closes [#15476](https://github.com/ionic-team/ionic/issues/15476)
* **segment:** fix css var + host-context() ([49ab065](https://github.com/ionic-team/ionic/commit/49ab065))
* **slides:** correct order of parameters ([6442dfc](https://github.com/ionic-team/ionic/commit/6442dfc)), closes [#15407](https://github.com/ionic-team/ionic/issues/15407)
* **slides:** Methods wait for execution until swiper is initialized ([#15576](https://github.com/ionic-team/ionic/issues/15576)) ([ea01900](https://github.com/ionic-team/ionic/commit/ea01900))
* **slides:** Update swiperOptions default to match version 4 of Swiper ([#15578](https://github.com/ionic-team/ionic/issues/15578)) ([db35af2](https://github.com/ionic-team/ionic/commit/db35af2))
* **slides:** Updated lockSwipes methods to match the new swiper.js API ([#15469](https://github.com/ionic-team/ionic/issues/15469)) ([efb99cb](https://github.com/ionic-team/ionic/commit/efb99cb))
* **sliding-item:** swipe event ([127da1a](https://github.com/ionic-team/ionic/commit/127da1a))
* **test:** treeshake check runs last ([b56f136](https://github.com/ionic-team/ionic/commit/b56f136))
* **test:** workaround for nav tests ([a4b1179](https://github.com/ionic-team/ionic/commit/a4b1179))
* **toast:** adds role timeout and cancel ([2f2a255](https://github.com/ionic-team/ionic/commit/2f2a255)), closes [#15477](https://github.com/ionic-team/ionic/issues/15477)
* **toast:** render on top ([ac42180](https://github.com/ionic-team/ionic/commit/ac42180))
* **toggle:** empty hidden input value when not checked ([1f19862](https://github.com/ionic-team/ionic/commit/1f19862))
* handle failure in hardware back button ([6da765b](https://github.com/ionic-team/ionic/commit/6da765b))
* remove argument-less catch() ([ff919de](https://github.com/ionic-team/ionic/commit/ff919de))


### Features

* **angular:** integrate back-button with ng router ([1bcca01](https://github.com/ionic-team/ionic/commit/1bcca01))
* **app:** hardware back button support ([dfac9dc](https://github.com/ionic-team/ionic/commit/dfac9dc))
* **overlays:** close overlay with back-button ([4ccbefa](https://github.com/ionic-team/ionic/commit/4ccbefa))
* **router:** add support for relative paths ([b28aeab](https://github.com/ionic-team/ionic/commit/b28aeab)), closes [#15499](https://github.com/ionic-team/ionic/issues/15499)
* **virtual-scroller:** add <template> support ([d40d0a7](https://github.com/ionic-team/ionic/commit/d40d0a7))


### Performance Improvements

* **router:** prevent initializaing page twice ([3dd9604](https://github.com/ionic-team/ionic/commit/3dd9604))
* **slides:** tree-shake dependency ([9d3a259](https://github.com/ionic-team/ionic/commit/9d3a259))



<a name="4.0.0-beta.8"></a>
# [4.0.0-beta.8](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.7...v4.0.0-beta.8) (2018-09-06)


### Bug Fixes

* **button:** add custom properties and remove --ion-color overrides ([#15463](https://github.com/ionic-team/ionic/issues/15463)) ([3af4361](https://github.com/ionic-team/ionic/commit/3af4361)), closes [#14808](https://github.com/ionic-team/ionic/issues/14808) [#14853](https://github.com/ionic-team/ionic/issues/14853) [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **menu:** ios styles ([281f9a3](https://github.com/ionic-team/ionic/commit/281f9a3))
* **radio:** add and document custom properties ([0f9a7b4](https://github.com/ionic-team/ionic/commit/0f9a7b4)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **searchbar:** inherit color from color toolbar ([3042f57](https://github.com/ionic-team/ionic/commit/3042f57))
* **slides:** correct order of parameters ([6442dfc](https://github.com/ionic-team/ionic/commit/6442dfc)), closes [#15407](https://github.com/ionic-team/ionic/issues/15407)
* **test:** treeshake check runs last ([b56f136](https://github.com/ionic-team/ionic/commit/b56f136))
* **test:** workaround for nav tests ([a4b1179](https://github.com/ionic-team/ionic/commit/a4b1179))
* **toggle:** empty hidden input value when not checked ([1f19862](https://github.com/ionic-team/ionic/commit/1f19862))


### Features

* **angular:** integrate back-button with ng router ([1bcca01](https://github.com/ionic-team/ionic/commit/1bcca01))
* **app:** hardware back button support ([dfac9dc](https://github.com/ionic-team/ionic/commit/dfac9dc))
* **overlays:** close overlay with back-button ([4ccbefa](https://github.com/ionic-team/ionic/commit/4ccbefa))
* **virtual-scroller:** add <template> support ([d40d0a7](https://github.com/ionic-team/ionic/commit/d40d0a7))



<a name="4.0.0-beta.7"></a>
# [4.0.0-beta.7](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.6...v4.0.0-beta.7) (2018-08-30)


### Bug Fixes

* **list:** add closeSlidingItems() ([81fbbb8](https://github.com/ionic-team/ionic/commit/81fbbb8)), closes [#15378](https://github.com/ionic-team/ionic/issues/15378)
* **menu:** await animation check ([f00db59](https://github.com/ionic-team/ionic/commit/f00db59)), closes [#15377](https://github.com/ionic-team/ionic/issues/15377)
* **range:** add and document custom properties ([cf35445](https://github.com/ionic-team/ionic/commit/cf35445)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850) [#14808](https://github.com/ionic-team/ionic/issues/14808)
* **slides:** isEnd() returns a boolean ([771c517](https://github.com/ionic-team/ionic/commit/771c517)), closes [#15376](https://github.com/ionic-team/ionic/issues/15376)



<a name="4.0.0-beta.6"></a>
# [4.0.0-beta.6](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.5...v4.0.0-beta.6) (2018-08-29)

### Breaking Changes

- All methods of all ionic components return a promise.
- `colors.css` has been renamed to `core.css`, the global stylesheet needs to be updated:

#### Stencil

```diff
+ @import "~@ionic/core/css/core.css";
  @import "~@ionic/core/css/normalize.css";
  @import "~@ionic/core/css/structure.css";
  @import "~@ionic/core/css/typography.css";
- @import "~@ionic/core/css/colors.css";

  @import "~@ionic/core/css/padding.css";
  @import "~@ionic/core/css/float-elements.css";
  @import "~@ionic/core/css/text-alignment.css";
  @import "~@ionic/core/css/text-transformation.css";
  @import "~@ionic/core/css/flex-utils.css";
```

#### Angular

```diff
+ @import "~@ionic/angular/css/core.css";
  @import "~@ionic/angular/css/normalize.css";
  @import "~@ionic/angular/css/structure.css";
  @import "~@ionic/angular/css/typography.css";
- @import "~@ionic/angular/css/colors.css";

  @import "~@ionic/angular/css/padding.css";
  @import "~@ionic/angular/css/float-elements.css";
  @import "~@ionic/angular/css/text-alignment.css";
  @import "~@ionic/angular/css/text-transformation.css";
  @import "~@ionic/angular/css/flex-utils.css";
```

### Bug Fixes

* **alert:** header is not mandatory ([1f71f76](https://github.com/ionic-team/ionic/commit/1f71f76))
* **alert:** name is non-null ([2268346](https://github.com/ionic-team/ionic/commit/2268346))
* **alert:** type and name props are optional ([#14815](https://github.com/ionic-team/ionic/issues/14815)) ([99a2925](https://github.com/ionic-team/ionic/commit/99a2925))
* **angular:** NavController signatures ([6fdeb31](https://github.com/ionic-team/ionic/commit/6fdeb31)), closes [#15353](https://github.com/ionic-team/ionic/issues/15353)
* **angular:** overlay not found ([8dfc52f](https://github.com/ionic-team/ionic/commit/8dfc52f)), closes [#15349](https://github.com/ionic-team/ionic/issues/15349)
* **angular:** platform does not crash ([82f9fd4](https://github.com/ionic-team/ionic/commit/82f9fd4)), closes [#15348](https://github.com/ionic-team/ionic/issues/15348)
* **angular:** virtual-scroll ([f9bf5c0](https://github.com/ionic-team/ionic/commit/f9bf5c0)), closes [#15355](https://github.com/ionic-team/ionic/issues/15355)
* **css:** add core.css ([#15220](https://github.com/ionic-team/ionic/issues/15220)) ([096d9a7](https://github.com/ionic-team/ionic/commit/096d9a7)), closes [#15170](https://github.com/ionic-team/ionic/issues/15170)
* **datetime:** fix year to allow current and max year ([f30ae88](https://github.com/ionic-team/ionic/commit/f30ae88)), closes [#14895](https://github.com/ionic-team/ionic/issues/14895)
* **grid:** working check for CSS custom variables in Safari ([#15228](https://github.com/ionic-team/ionic/issues/15228)) ([baefda3](https://github.com/ionic-team/ionic/commit/baefda3))
* **ion-reorder-group:** adds ionItemReorder event  ([7fc170c](https://github.com/ionic-team/ionic/commit/7fc170c)), closes [#14640](https://github.com/ionic-team/ionic/issues/14640)
* **overlay:** overlay is not hidden ([89ba55d](https://github.com/ionic-team/ionic/commit/89ba55d))
* **overlay:** overlays are hidden until presented ([ba428cd](https://github.com/ionic-team/ionic/commit/ba428cd)), closes [#15345](https://github.com/ionic-team/ionic/issues/15345)
* **overlays:** expose mode, id, keyboardClose ([cc960c3](https://github.com/ionic-team/ionic/commit/cc960c3)), closes [#15366](https://github.com/ionic-team/ionic/issues/15366)
* **radio-group:** accept any value ([16452b2](https://github.com/ionic-team/ionic/commit/16452b2)), closes [#15334](https://github.com/ionic-team/ionic/issues/15334)
* **segment:** set --color-checked in md color toolbar ([5d32115](https://github.com/ionic-team/ionic/commit/5d32115)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **toast:** add position middle ([25479e4](https://github.com/ionic-team/ionic/commit/25479e4))



<a name="4.0.0-beta.5"></a>
# [4.0.0-beta.5](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.4...v4.0.0-beta.5) (2018-08-27)

### Bug Fixes

- Ionic/angular compiler error

### Breaking Changes

#### NavController

Changes are required to accommodate some new useful routing APIs and match the ng router ones closely:

```
goForward() -> navigateForward()
goBack() -> navigateBack()
goRoot() -> navigateRoot()
```

#### Dependencies

The following dependencies need to be updated to resolve build errors

- Update Angular to 6.1 or higher
  - [Angular changelog](https://github.com/angular/angular/blob/master/CHANGELOG.md#610-2018-07-25)
- Update Typescript to 2.9.2
  - `"typescript": "~2.9.2"`


<a name="4.0.0-beta.4"></a>
# [4.0.0-beta.4](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.3...v4.0.0-beta.4) (2018-08-27)


### Bug Fixes

* **alert:** remove unneeded warning ([8447f28](https://github.com/ionic-team/ionic/commit/8447f28))
* **all:** add customization of font-style ([c957ea6](https://github.com/ionic-team/ionic/commit/c957ea6))
* **angular:** back navigation and back-button play better ([#15293](https://github.com/ionic-team/ionic/issues/15293)) ([9ddfb1b](https://github.com/ionic-team/ionic/commit/9ddfb1b)), closes [#15290](https://github.com/ionic-team/ionic/issues/15290)
* **angular:** expose router.navigate() ([7aa4f13](https://github.com/ionic-team/ionic/commit/7aa4f13)), closes [#15332](https://github.com/ionic-team/ionic/issues/15332)
* **app:** --ion-safe-area-right typo ([77ca2bd](https://github.com/ionic-team/ionic/commit/77ca2bd))
* **app:** listen statusTap event ([dc82675](https://github.com/ionic-team/ionic/commit/dc82675))
* **app:** statusbarPadding config is a boolean ([b387de4](https://github.com/ionic-team/ionic/commit/b387de4))
* **build:** do not export in component modules ([da2dc7b](https://github.com/ionic-team/ionic/commit/da2dc7b))
* **buttons:** margin between buttons ([359c47f](https://github.com/ionic-team/ionic/commit/359c47f))
* **card:** remove calculated width to work with dynamic margin ([059d365](https://github.com/ionic-team/ionic/commit/059d365)), closes [#15223](https://github.com/ionic-team/ionic/issues/15223)
* **chip:** add and document custom properties ([07e99a1](https://github.com/ionic-team/ionic/commit/07e99a1)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850) [#14853](https://github.com/ionic-team/ionic/issues/14853) [#14808](https://github.com/ionic-team/ionic/issues/14808)
* **config:** scrollAssist boolean definition ([#15203](https://github.com/ionic-team/ionic/issues/15203)) ([2af72fa](https://github.com/ionic-team/ionic/commit/2af72fa))
* **config:** using sessionStorage is not safe ([091b433](https://github.com/ionic-team/ionic/commit/091b433))
* **content:** document and add custom properties ([0372aec](https://github.com/ionic-team/ionic/commit/0372aec)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850) [#14808](https://github.com/ionic-team/ionic/issues/14808) [#14853](https://github.com/ionic-team/ionic/issues/14853)
* **content:** fix scroll events ([962578e](https://github.com/ionic-team/ionic/commit/962578e)), closes [#15244](https://github.com/ionic-team/ionic/issues/15244)
* **content:** scrollToPoint reliability ([e0f1259](https://github.com/ionic-team/ionic/commit/e0f1259)), closes [#15257](https://github.com/ionic-team/ionic/issues/15257)
* **datetime:** allow values to be zero ([#14480](https://github.com/ionic-team/ionic/issues/14480)) ([e0b8e24](https://github.com/ionic-team/ionic/commit/e0b8e24))
* **docs:** add missed menu title in the list ([#15300](https://github.com/ionic-team/ionic/issues/15300)) ([5f3c7cd](https://github.com/ionic-team/ionic/commit/5f3c7cd))
* **docs:** use shape property to get round buttons ([#15321](https://github.com/ionic-team/ionic/issues/15321)) ([d4c812f](https://github.com/ionic-team/ionic/commit/d4c812f))
* **docs:** use shape property to get round buttons ([#15322](https://github.com/ionic-team/ionic/issues/15322)) ([5c6fe45](https://github.com/ionic-team/ionic/commit/5c6fe45))
* **hide-when:** mode is a reserved property ([c446d1b](https://github.com/ionic-team/ionic/commit/c446d1b))
* **img:** add object-fit to the host to avoid skewing the inner img ([2e94227](https://github.com/ionic-team/ionic/commit/2e94227))
* **infinite-scroll:** remove unused method ([926758e](https://github.com/ionic-team/ionic/commit/926758e))
* **input:** clearInput works in device ([ac96705](https://github.com/ionic-team/ionic/commit/ac96705)), closes [#15319](https://github.com/ionic-team/ionic/issues/15319)
* **menu:** do not override --ion-color-base ([a890828](https://github.com/ionic-team/ionic/commit/a890828))
* **modal:** make sure content is ready ([2c8bc04](https://github.com/ionic-team/ionic/commit/2c8bc04)), closes [#14969](https://github.com/ionic-team/ionic/issues/14969)
* **nav:** remove nav-decor once transition finished ([b8a87fb](https://github.com/ionic-team/ionic/commit/b8a87fb)), closes [#15121](https://github.com/ionic-team/ionic/issues/15121)
* **note:** do not overide --ion-color-base ([5f90dbf](https://github.com/ionic-team/ionic/commit/5f90dbf))
* **overlay:** expose "animated" API ([8b768fb](https://github.com/ionic-team/ionic/commit/8b768fb)), closes [#14775](https://github.com/ionic-team/ionic/issues/14775)
* **overlays:** dismiss last overlay ([c1c5102](https://github.com/ionic-team/ionic/commit/c1c5102))
* **overlays:** esc button works closed top overlays ([c567a82](https://github.com/ionic-team/ionic/commit/c567a82)), closes [#14662](https://github.com/ionic-team/ionic/issues/14662)
* **picker:** tune scrolling speed ([bd75bf4](https://github.com/ionic-team/ionic/commit/bd75bf4))
* **platform:** better detect platforms + css API ([3ffa3cd](https://github.com/ionic-team/ionic/commit/3ffa3cd)), closes [#15165](https://github.com/ionic-team/ionic/issues/15165) [#15116](https://github.com/ionic-team/ionic/issues/15116)
* **popover:** make sure content is ready ([8bf60e7](https://github.com/ionic-team/ionic/commit/8bf60e7))
* **popover:** they should not below other overlays ([d83e7f8](https://github.com/ionic-team/ionic/commit/d83e7f8)), closes [#14662](https://github.com/ionic-team/ionic/issues/14662)
* **refresher:** tune threshold ([d129f62](https://github.com/ionic-team/ionic/commit/d129f62)), closes [#15233](https://github.com/ionic-team/ionic/issues/15233)
* **ripple-effect:** add and document custom properties ([37a149c](https://github.com/ionic-team/ionic/commit/37a149c)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **segment:** add and document custom properties ([08c6c97](https://github.com/ionic-team/ionic/commit/08c6c97)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850) [#14808](https://github.com/ionic-team/ionic/issues/14808) [#14854](https://github.com/ionic-team/ionic/issues/14854)
* **select:** add and document custom properties ([88613ff](https://github.com/ionic-team/ionic/commit/88613ff)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **select:** random type in generated.d.ts ([11edc49](https://github.com/ionic-team/ionic/commit/11edc49))
* **select:** support any kind of value ([151c58e](https://github.com/ionic-team/ionic/commit/151c58e)), closes [#15200](https://github.com/ionic-team/ionic/issues/15200)
* **skeleton-text:** add and document custom properties ([b213500](https://github.com/ionic-team/ionic/commit/b213500)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **slides:** document custom properties ([ecf1eb8](https://github.com/ionic-team/ionic/commit/ecf1eb8)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **split-pane:** add and document custom properties ([9104850](https://github.com/ionic-team/ionic/commit/9104850)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **textarea:** remove autocomplete prop ([5989f15](https://github.com/ionic-team/ionic/commit/5989f15))
* **title:** mode is inherited ([94ea0a6](https://github.com/ionic-team/ionic/commit/94ea0a6)), closes [#15187](https://github.com/ionic-team/ionic/issues/15187)
* **toggle:** cursor: pointer in desktop ([86acb8c](https://github.com/ionic-team/ionic/commit/86acb8c))
* **toolbar:** add position relative to host for toolbar background ([ac2db9f](https://github.com/ionic-team/ionic/commit/ac2db9f)), closes [#15193](https://github.com/ionic-team/ionic/issues/15193)
* **transition:** cleanup transition ([70a38ac](https://github.com/ionic-team/ionic/commit/70a38ac)), closes [#15317](https://github.com/ionic-team/ionic/issues/15317)
* **virtual-scroll:** update VS when items change ([3adfb98](https://github.com/ionic-team/ionic/commit/3adfb98))


### Features

* **all:** strong typed ComponentProps ([57d2375](https://github.com/ionic-team/ionic/commit/57d2375))
* **inputs:** add focus() method ([c66a34a](https://github.com/ionic-team/ionic/commit/c66a34a)), closes [#15266](https://github.com/ionic-team/ionic/issues/15266) [#15268](https://github.com/ionic-team/ionic/issues/15268)
* **platform:** add capacitor ([7356ba5](https://github.com/ionic-team/ionic/commit/7356ba5))


### Performance Improvements

* **overlay:** prevent layout thrashing ([ed5c8eb](https://github.com/ionic-team/ionic/commit/ed5c8eb))
* **ripple-effect:** using requestIdleCallback ([ea1c3d4](https://github.com/ionic-team/ionic/commit/ea1c3d4))


<a name="4.0.0-beta.3"></a>
# [4.0.0-beta.3](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.2...v4.0.0-beta.3) (2018-08-16)


### Bug Fixes

* **all:** improve text customization ([6e3e07b](https://github.com/ionic-team/ionic/commit/6e3e07b))
* **all:** safe-area using css variables ([aa23d08](https://github.com/ionic-team/ionic/commit/aa23d08))
* **all:** user-select for desktop ([2d70ee4](https://github.com/ionic-team/ionic/commit/2d70ee4))
* **anchor:** add custom properties and make sure color works properly ([8fef263](https://github.com/ionic-team/ionic/commit/8fef263)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **angular:** add ion-backdrop ([89e8256](https://github.com/ionic-team/ionic/commit/89e8256)), closes [#14971](https://github.com/ionic-team/ionic/issues/14971)
* **angular:** save internal data ([f84bb76](https://github.com/ionic-team/ionic/commit/f84bb76)), closes [#14888](https://github.com/ionic-team/ionic/issues/14888) [#14885](https://github.com/ionic-team/ionic/issues/14885) [#15054](https://github.com/ionic-team/ionic/issues/15054) [#15050](https://github.com/ionic-team/ionic/issues/15050)
* **avatar:** document and add custom properties ([6738ab7](https://github.com/ionic-team/ionic/commit/6738ab7)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **badge:** add custom properties and make sure color works properly ([9beca98](https://github.com/ionic-team/ionic/commit/9beca98)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **card:** add custom CSS properties and remove css overrides on item ([5ed2201](https://github.com/ionic-team/ionic/commit/5ed2201)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850) [#14808](https://github.com/ionic-team/ionic/issues/14808) [#9198](https://github.com/ionic-team/ionic/issues/9198) [#12646](https://github.com/ionic-team/ionic/issues/12646)
* **card-subtitle:** add and document custom CSS properties ([7050039](https://github.com/ionic-team/ionic/commit/7050039)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850) [#14808](https://github.com/ionic-team/ionic/issues/14808)
* **card-title:** add and document custom CSS properties ([1ad9818](https://github.com/ionic-team/ionic/commit/1ad9818)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850) [#14808](https://github.com/ionic-team/ionic/issues/14808)
* **checkbox:** document and add custom CSS properties ([3e3cc6c](https://github.com/ionic-team/ionic/commit/3e3cc6c)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850) [#14808](https://github.com/ionic-team/ionic/issues/14808)
* **config:** add persistance mode ([db0049f](https://github.com/ionic-team/ionic/commit/db0049f)), closes [#15102](https://github.com/ionic-team/ionic/issues/15102)
* **config:** persistConfig ([1e1964d](https://github.com/ionic-team/ionic/commit/1e1964d))
* **content:** overflow-behavior: contain ([6173479](https://github.com/ionic-team/ionic/commit/6173479))
* **content:** scrolling Y ([01323ac](https://github.com/ionic-team/ionic/commit/01323ac))
* **content:** scrollToTop ([695abcf](https://github.com/ionic-team/ionic/commit/695abcf))
* **css:** --ion-item-background > --ion-item-background-color ([#15101](https://github.com/ionic-team/ionic/issues/15101)) ([e3010e1](https://github.com/ionic-team/ionic/commit/e3010e1))
* **datetime:** add open() method ([f032769](https://github.com/ionic-team/ionic/commit/f032769)), closes [#14923](https://github.com/ionic-team/ionic/issues/14923)
* **docs:** replace ion-navbar with ion-toolbar ([#15126](https://github.com/ionic-team/ionic/issues/15126)) ([0219309](https://github.com/ionic-team/ionic/commit/0219309))
* **fab-button:** sets pointer-events none when disabled ([04d33e5](https://github.com/ionic-team/ionic/commit/04d33e5)), closes [#15129](https://github.com/ionic-team/ionic/issues/15129) [#15120](https://github.com/ionic-team/ionic/issues/15120)
* **input:** event interfaces ([2e7d355](https://github.com/ionic-team/ionic/commit/2e7d355))
* **menu:** dismiss when clicking outside ([288eeb5](https://github.com/ionic-team/ionic/commit/288eeb5)), closes [#15096](https://github.com/ionic-team/ionic/issues/15096)
* **picker:** allow 0 as the selectedIndex ([d19061c](https://github.com/ionic-team/ionic/commit/d19061c)), closes [#14563](https://github.com/ionic-team/ionic/issues/14563)
* **range:** adds css var ([3ab835c](https://github.com/ionic-team/ionic/commit/3ab835c)), closes [#15064](https://github.com/ionic-team/ionic/issues/15064)
* **router:** transition race condition ([50ad1e7](https://github.com/ionic-team/ionic/commit/50ad1e7)), closes [#14873](https://github.com/ionic-team/ionic/issues/14873) [#15090](https://github.com/ionic-team/ionic/issues/15090)
* **segment:** center align text ([154b70e](https://github.com/ionic-team/ionic/commit/154b70e))
* **segment-button:** add and document custom properties ([85ffe01](https://github.com/ionic-team/ionic/commit/85ffe01)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **select:** apply proper styles for stacked/floating selects ([42ca99d](https://github.com/ionic-team/ionic/commit/42ca99d)), closes [#15140](https://github.com/ionic-team/ionic/issues/15140) [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **spinner:** add and document custom properties ([da6df2a](https://github.com/ionic-team/ionic/commit/da6df2a)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **split-pane:** disabled prop is dynamic ([149039b](https://github.com/ionic-team/ionic/commit/149039b)), closes [#14959](https://github.com/ionic-team/ionic/issues/14959)
* **tabbar:** fix highlight bar ([39104cb](https://github.com/ionic-team/ionic/commit/39104cb))
* **tabs:** get the tabbar layout working with shadow DOM ([#15113](https://github.com/ionic-team/ionic/issues/15113)) ([575c5eb](https://github.com/ionic-team/ionic/commit/575c5eb)), closes [#14611](https://github.com/ionic-team/ionic/issues/14611)
* **tap-click:** nested buttons get activated first ([03da98e](https://github.com/ionic-team/ionic/commit/03da98e))
* **tap-click:** works inside shadow-dom ([0dc70f7](https://github.com/ionic-team/ionic/commit/0dc70f7)), closes [#15128](https://github.com/ionic-team/ionic/issues/15128)
* **textarea:** add and document custom properties ([5dfcd47](https://github.com/ionic-team/ionic/commit/5dfcd47))
* **textarea:** add ion color classes ([5627811](https://github.com/ionic-team/ionic/commit/5627811))
* **thumbnail:** add and document custom properties ([c88e1ad](https://github.com/ionic-team/ionic/commit/c88e1ad)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **toast:** add and document custom properties ([5f6f6a1](https://github.com/ionic-team/ionic/commit/5f6f6a1)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **toast:** statusbarPadding ([3da1bf4](https://github.com/ionic-team/ionic/commit/3da1bf4))
* **toggle:** add and document custom properties ([773c2c2](https://github.com/ionic-team/ionic/commit/773c2c2)), closes [#14850](https://github.com/ionic-team/ionic/issues/14850)
* **toolbar:** add and document custom properties ([dd114ff](https://github.com/ionic-team/ionic/commit/dd114ff))
* **virtual-scroll:** fix viewportOffset calculation ([b7e741a](https://github.com/ionic-team/ionic/commit/b7e741a)), closes [#14963](https://github.com/ionic-team/ionic/issues/14963)
* **virtual-scroll:** use FunctionalComponent for JSX integration ([b53ce4b](https://github.com/ionic-team/ionic/commit/b53ce4b))


### Features

* **config:** strongly typed config ([0169045](https://github.com/ionic-team/ionic/commit/0169045)), closes [#15097](https://github.com/ionic-team/ionic/issues/15097)
* **select:** add open method ([4047812](https://github.com/ionic-team/ionic/commit/4047812)), closes [#14881](https://github.com/ionic-team/ionic/issues/14881)



<a name="4.0.0-beta.2"></a>
# [4.0.0-beta.2](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.1...v4.0.0-beta.2) (2018-08-08)


### Bug Fixes

* **all:** buttons are type="button" ([2b7007f](https://github.com/ionic-team/ionic/commit/2b7007f))
* **app:** fix statusbarPadding ([2c925b7](https://github.com/ionic-team/ionic/commit/2c925b7)), closes [#15073](https://github.com/ionic-team/ionic/issues/15073)
* **chip:** conforms to ion-icon ([f49fa4a](https://github.com/ionic-team/ionic/commit/f49fa4a)), closes [#15053](https://github.com/ionic-team/ionic/issues/15053)
* **content:** remove scroll-inner ([efd77c9](https://github.com/ionic-team/ionic/commit/efd77c9)), closes [#14985](https://github.com/ionic-team/ionic/issues/14985)
* **datetime:** fix gesture ([e9fd184](https://github.com/ionic-team/ionic/commit/e9fd184))
* **datetime:** ionChange event ([8b35e37](https://github.com/ionic-team/ionic/commit/8b35e37))
* **header:** safe margin when statubarPadding=0 ([b69d01d](https://github.com/ionic-team/ionic/commit/b69d01d))
* **input:** hide clear button ([141b86c](https://github.com/ionic-team/ionic/commit/141b86c)), closes [#15002](https://github.com/ionic-team/ionic/issues/15002)
* **menu:** add width and small-width css variables ([#14997](https://github.com/ionic-team/ionic/issues/14997)) ([69f5cc8](https://github.com/ionic-team/ionic/commit/69f5cc8))
* **menu:** content's box-shadow ([48e2a4e](https://github.com/ionic-team/ionic/commit/48e2a4e))
* **nav:** animation backdrop ([948d083](https://github.com/ionic-team/ionic/commit/948d083))
* **popover:** ion-scroll sizing ([b85d4a0](https://github.com/ionic-team/ionic/commit/b85d4a0)), closes [#14911](https://github.com/ionic-team/ionic/issues/14911)
* **range:** value changes when using keyboard ([27fdc9a](https://github.com/ionic-team/ionic/commit/27fdc9a)), closes [#15065](https://github.com/ionic-team/ionic/issues/15065)
* **searchbar:** color ([14d6270](https://github.com/ionic-team/ionic/commit/14d6270)), closes [#14998](https://github.com/ionic-team/ionic/issues/14998)
* **sliding:** fix core gesture logic + priority configuration ([a77ee2a](https://github.com/ionic-team/ionic/commit/a77ee2a)), closes [#14763](https://github.com/ionic-team/ionic/issues/14763)
* **split-pane:** side=end works properly ([dc50003](https://github.com/ionic-team/ionic/commit/dc50003)), closes [#15013](https://github.com/ionic-team/ionic/issues/15013)
* **tab:** edge prop ([2a4327f](https://github.com/ionic-team/ionic/commit/2a4327f)), closes [#15003](https://github.com/ionic-team/ionic/issues/15003)
* **tap-click:** desktop also needs tap-click ([9f4d873](https://github.com/ionic-team/ionic/commit/9f4d873))


### Features

* **core:** add check for standalone mode ([#15001](https://github.com/ionic-team/ionic/issues/15001)) ([0b4b9fe](https://github.com/ionic-team/ionic/commit/0b4b9fe))
* **item-sliding:** adds disabled prop ([9773e2a](https://github.com/ionic-team/ionic/commit/9773e2a)), closes [#14831](https://github.com/ionic-team/ionic/issues/14831)


### Performance Improvements

* **app:** move app css to global css ([a71f382](https://github.com/ionic-team/ionic/commit/a71f382))
* **menu:** flickering ([8253b04](https://github.com/ionic-team/ionic/commit/8253b04))
* **scroll:** filter velocity using exponential moving window ([419ef7b](https://github.com/ionic-team/ionic/commit/419ef7b))



<a name="4.0.0-beta.1"></a>
# [4.0.0-beta.1](https://github.com/ionic-team/ionic/compare/v4.0.0-beta.0...v4.0.0-beta.1) (2018-08-01)


### Bug Fixes

* **accesibility:** boolean aria-* properties ([4f9cbfe](https://github.com/ionic-team/ionic/commit/4f9cbfe))
* **all:** strong type text fields ([1d001a3](https://github.com/ionic-team/ionic/commit/1d001a3))
* **all:** updated tslint rules to latest ([92e21a8](https://github.com/ionic-team/ionic/commit/92e21a8))
* **angular:** events ([7a0545d](https://github.com/ionic-team/ionic/commit/7a0545d)), closes [#14866](https://github.com/ionic-team/ionic/issues/14866)
* **angular:** ion-router-outlet exposes animated ([266336e](https://github.com/ionic-team/ionic/commit/266336e)), closes [#14913](https://github.com/ionic-team/ionic/issues/14913)
* **angular:** pass proper animated value ([7813acc](https://github.com/ionic-team/ionic/commit/7813acc))
* **app:** statusbarPadding ([fd8f875](https://github.com/ionic-team/ionic/commit/fd8f875))
* **app:** user-select on desktop ([8a1ad1d](https://github.com/ionic-team/ionic/commit/8a1ad1d))
* **button:** do not change border radius if round button in toolbar ([#14941](https://github.com/ionic-team/ionic/issues/14941)) ([ad006dd](https://github.com/ionic-team/ionic/commit/ad006dd)), closes [#7661](https://github.com/ionic-team/ionic/issues/7661)
* **button:** improve text style inherency ([25423a0](https://github.com/ionic-team/ionic/commit/25423a0)), closes [#14927](https://github.com/ionic-team/ionic/issues/14927)
* **button:** submit forms using fake button ([c05d672](https://github.com/ionic-team/ionic/commit/c05d672)), closes [#14890](https://github.com/ionic-team/ionic/issues/14890) [#14786](https://github.com/ionic-team/ionic/issues/14786)
* **color:** make desktop selection beautiful ([0cdb500](https://github.com/ionic-team/ionic/commit/0cdb500))
* **config:** avoid using startWith for IE support ([73a9f14](https://github.com/ionic-team/ionic/commit/73a9f14)), closes [#14922](https://github.com/ionic-team/ionic/issues/14922)
* **content:** bottom padding ([be4eda5](https://github.com/ionic-team/ionic/commit/be4eda5))
* **fab:** add styles for disabled ([520da8d](https://github.com/ionic-team/ionic/commit/520da8d)), closes [#14867](https://github.com/ionic-team/ionic/issues/14867)
* **flex-utils:** add missing flex attributes ([7c12e1b](https://github.com/ionic-team/ionic/commit/7c12e1b))
* **input:** add color support for ion-input ([f676f98](https://github.com/ionic-team/ionic/commit/f676f98)), closes [#14864](https://github.com/ionic-team/ionic/issues/14864)
* **inputs:** better customization for placeholder color ([517104f](https://github.com/ionic-team/ionic/commit/517104f))
* **item:** only use pointer cursor for <button> and <a> ([f19553f](https://github.com/ionic-team/ionic/commit/f19553f))
* **pointer-events:** listening to document ([afb0906](https://github.com/ionic-team/ionic/commit/afb0906))
* **refresher:** default to disabled false, add to breaking changes ([f1826a6](https://github.com/ionic-team/ionic/commit/f1826a6)), closes [#14879](https://github.com/ionic-team/ionic/issues/14879)
* **router-outlet:** fix stack attribute detection ([#14921](https://github.com/ionic-team/ionic/issues/14921)) ([16e992a](https://github.com/ionic-team/ionic/commit/16e992a))
* **searchbar:** fix input bluring ([d65174b](https://github.com/ionic-team/ionic/commit/d65174b)), closes [#14916](https://github.com/ionic-team/ionic/issues/14916)
* **slides:** update events to match swipers ([fc0d4c0](https://github.com/ionic-team/ionic/commit/fc0d4c0)), closes [#14865](https://github.com/ionic-team/ionic/issues/14865)
* **title:** can be used nested ([d1969bd](https://github.com/ionic-team/ionic/commit/d1969bd)), closes [#14905](https://github.com/ionic-team/ionic/issues/14905)
* **title:** support color ([7da0ac4](https://github.com/ionic-team/ionic/commit/7da0ac4))


### Features

* **menu:** configurable using menuType ([a62759c](https://github.com/ionic-team/ionic/commit/a62759c)), closes [#14901](https://github.com/ionic-team/ionic/issues/14901)


### Performance Improvements

* **app:** tap-click is a ES ([b0ac5ba](https://github.com/ionic-team/ionic/commit/b0ac5ba))
* **css:** always emit compressed css ([143f0f0](https://github.com/ionic-team/ionic/commit/143f0f0))
* **gesture:** lazy loaded dynamic ES module ([49cac8b](https://github.com/ionic-team/ionic/commit/49cac8b))
* **icon:** disable icon lazy loading when it's not needed ([7292fc7](https://github.com/ionic-team/ionic/commit/7292fc7))



<a name="4.0.0-beta.0"></a>
# [4.0.0-beta.0](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.14...v4.0.0-beta.0) (2018-07-25)

## Enjoy! :tada:


### Bug Fixes

* **angular:** always dispatch lifecycle events ([5677daa](https://github.com/ionic-team/ionic/commit/5677daa))



<a name="4.0.0-alpha.14"></a>
# [4.0.0-alpha.14](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.13...v4.0.0-alpha.14) (2018-07-25)


### Bug Fixes

* **angular:** hide pages properly ([a44b844](https://github.com/ionic-team/ionic/commit/a44b844))
* **angular:** make pages invisible before they are rendered ([a589816](https://github.com/ionic-team/ionic/commit/a589816))
* **transition:** make sure hidden is removed ([f52dece](https://github.com/ionic-team/ionic/commit/f52dece))



<a name="4.0.0-alpha.13"></a>
# [4.0.0-alpha.13](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.12...v4.0.0-alpha.13) (2018-07-24)


### Bug Fixes

* **css:** revert hidden css ([7d3d98d](https://github.com/ionic-team/ionic/commit/7d3d98d))
* **tab:** prevent infinite loop ([05b258c](https://github.com/ionic-team/ionic/commit/05b258c))
* **toolbar:** remove transparent border on translucent toolbar ([55cb354](https://github.com/ionic-team/ionic/commit/55cb354))



<a name="4.0.0-alpha.12"></a>
# [4.0.0-alpha.12](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.11...v4.0.0-alpha.12) (2018-07-24)


### Bug Fixes

* **all:** accesibility and global styles for hidden nodes ([4b844ef](https://github.com/ionic-team/ionic/commit/4b844ef))
* **checkbox:** get css variable customization working better ([3e7aa4b](https://github.com/ionic-team/ionic/commit/3e7aa4b))
* **content:** set height to make it accessible for children elements ([#14772](https://github.com/ionic-team/ionic/issues/14772)) ([857b42d](https://github.com/ionic-team/ionic/commit/857b42d))
* **grid:** set the flex and width to auto when size is auto ([ba30671](https://github.com/ionic-team/ionic/commit/ba30671)), closes [#14807](https://github.com/ionic-team/ionic/issues/14807)
* **inputs:** inputs work inside <form> ([8324bd1](https://github.com/ionic-team/ionic/commit/8324bd1))
* **label:** style color ([5c0e9e6](https://github.com/ionic-team/ionic/commit/5c0e9e6))
* **list:** hide the last item border when there are no lines ([#14770](https://github.com/ionic-team/ionic/issues/14770)) ([26f7379](https://github.com/ionic-team/ionic/commit/26f7379)), closes [#14769](https://github.com/ionic-team/ionic/issues/14769)
* **margin:** adds css variables ([f6c8f3f](https://github.com/ionic-team/ionic/commit/f6c8f3f)), closes [#14798](https://github.com/ionic-team/ionic/issues/14798) [#14826](https://github.com/ionic-team/ionic/issues/14826)
* **menu-button:** fix sass linting ([d22f04b](https://github.com/ionic-team/ionic/commit/d22f04b))
* **menu-button:** get proper styles when used inside ion-buttons ([811eee7](https://github.com/ionic-team/ionic/commit/811eee7))
* **modal:** use flex to position modal to make it easier to size ([9488a98](https://github.com/ionic-team/ionic/commit/9488a98)), closes [#14392](https://github.com/ionic-team/ionic/issues/14392)
* **overlay:** remove global css vars in overlays for local ones ([38b1e47](https://github.com/ionic-team/ionic/commit/38b1e47))
* **refresher:** find parent ion-content properly ([4eab209](https://github.com/ionic-team/ionic/commit/4eab209)), closes [#14833](https://github.com/ionic-team/ionic/issues/14833)
* **slides:** swiper container should take up 100% height ([1d201ec](https://github.com/ionic-team/ionic/commit/1d201ec)), closes [#14771](https://github.com/ionic-team/ionic/issues/14771)
* **spinner:** color can be customized in non-shadow-dom ([65008e7](https://github.com/ionic-team/ionic/commit/65008e7))
* **spinner:** get paused attribute working and update tests ([3ab1e2d](https://github.com/ionic-team/ionic/commit/3ab1e2d)), closes [#14811](https://github.com/ionic-team/ionic/issues/14811)


### Features

* **button:** overflow is configurable ([ddb1e49](https://github.com/ionic-team/ionic/commit/ddb1e49)), closes [#14839](https://github.com/ionic-team/ionic/issues/14839)
* **menu:** add getWidth() ([cb4acab](https://github.com/ionic-team/ionic/commit/cb4acab)), closes [#14794](https://github.com/ionic-team/ionic/issues/14794)



<a name="4.0.0-alpha.11"></a>
# [4.0.0-alpha.11](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.10...v4.0.0-alpha.11) (2018-07-16)


### Bug Fixes

* **anchor:** add proper styling, support for colors, and basic test ([1dbf5bb](https://github.com/ionic-team/ionic/commit/1dbf5bb)), closes [#14777](https://github.com/ionic-team/ionic/issues/14777)
* **anchor:** inner <a> inherits text styles ([9aedfc6](https://github.com/ionic-team/ionic/commit/9aedfc6))
* **button:** add box-sizing so anchor buttons won't exceed max-width ([9c9f081](https://github.com/ionic-team/ionic/commit/9c9f081)), closes [#14760](https://github.com/ionic-team/ionic/issues/14760)
* **button:** set display type on host ([89d1526](https://github.com/ionic-team/ionic/commit/89d1526))
* **button:** submit form w/ ion-button within shadow dom ([4ed8541](https://github.com/ionic-team/ionic/commit/4ed8541)), closes [#14776](https://github.com/ionic-team/ionic/issues/14776)
* **item:** add cursor pointer back to native item ([43f1fec](https://github.com/ionic-team/ionic/commit/43f1fec)), closes [#14743](https://github.com/ionic-team/ionic/issues/14743)
* **searchbar:** use tag in toolbar context selector ([124b87c](https://github.com/ionic-team/ionic/commit/124b87c))
* **segment:** add styles for in a color toolbar ([d9e4ca7](https://github.com/ionic-team/ionic/commit/d9e4ca7))
* **spinner:** style CSS props ([2798bb0](https://github.com/ionic-team/ionic/commit/2798bb0))
* **tab:** props are reactive ([00c4c77](https://github.com/ionic-team/ionic/commit/00c4c77))
* **tab-button:** add a class to hide the tab when show is false ([eb9ed17](https://github.com/ionic-team/ionic/commit/eb9ed17))
* **tabs:** add the colors to the tabbar as well ([5348e7c](https://github.com/ionic-team/ionic/commit/5348e7c)), closes [#14758](https://github.com/ionic-team/ionic/issues/14758)
* **tabs:** fix the tabs so the color property works on tab button ([8aed3bf](https://github.com/ionic-team/ionic/commit/8aed3bf)), closes [#14758](https://github.com/ionic-team/ionic/issues/14758)
* **virtual-scroll:** read viewport size for every scroll event ([1d3eb3f](https://github.com/ionic-team/ionic/commit/1d3eb3f))



<a name="4.0.0-alpha.10"></a>
# [4.0.0-alpha.10](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.9...v4.0.0-alpha.10) (2018-07-11)


### Bug Fixes

* **angular:** publish css to npm ([748c209](https://github.com/ionic-team/ionic/commit/748c209))
* **item:** pass the correct type property to the button tag ([5f8b02e](https://github.com/ionic-team/ionic/commit/5f8b02e)), closes [#14740](https://github.com/ionic-team/ionic/issues/14740)
* **tabs:** correct alignment for label/icon only tabs ([b46c3e2](https://github.com/ionic-team/ionic/commit/b46c3e2))
* **tabs:** update the tabbar placement value to match the property it applies to ([45583bc](https://github.com/ionic-team/ionic/commit/45583bc))
* **toolbar:** get translucency working with header, footer and toolbar ([f6ab5b6](https://github.com/ionic-team/ionic/commit/f6ab5b6))



<a name="4.0.0-alpha.9"></a>
# [4.0.0-alpha.9](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.8...v4.0.0-alpha.9) (2018-07-10)


### Bug Fixes

* **angular:** esm ([0e68f17](https://github.com/ionic-team/ionic/commit/0e68f17))


<a name="4.0.0-alpha.8"></a>
# [4.0.0-alpha.8](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.7...v4.0.0-alpha.8) (2018-07-09)


### Bug Fixes

* **angular:** avoid TS 2.8 features ([c736bac](https://github.com/ionic-team/ionic/commit/c736bac))
* **angular:** correct subscription to cordova ready event ([#14577](https://github.com/ionic-team/ionic/issues/14577)) ([5967352](https://github.com/ionic-team/ionic/commit/5967352))
* **bundling:** fix EventEmitter import ([8e47101](https://github.com/ionic-team/ionic/commit/8e47101))
* linting ([e629e29](https://github.com/ionic-team/ionic/commit/e629e29))
* **icon:** target element for style and add to breaking ([949d93e](https://github.com/ionic-team/ionic/commit/949d93e))
* **overlay:** make type an any ([15dc651](https://github.com/ionic-team/ionic/commit/15dc651))
* **router:** fix reuse strategy ([bd53bba](https://github.com/ionic-team/ionic/commit/bd53bba))
* **scripts:** update github release notes ([fc078af](https://github.com/ionic-team/ionic/commit/fc078af))
* **tabs:** align tab title and icons to flex-start ([c11d74b](https://github.com/ionic-team/ionic/commit/c11d74b)), closes [#14606](https://github.com/ionic-team/ionic/issues/14606)


### Features

* **all:** custom icons ([e6638e7](https://github.com/ionic-team/ionic/commit/e6638e7))
* **dir:** default to ltr css, rtl overrides w/ [dir=rtl] selectors ([fb4353c](https://github.com/ionic-team/ionic/commit/fb4353c))
* **slides:** update swiper to latest ([8e164d6](https://github.com/ionic-team/ionic/commit/8e164d6))



<a name="4.0.0-alpha.7"></a>
# [4.0.0-alpha.7](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.6...v4.0.0-alpha.7) (2018-05-17)


### Bug Fixes

* **all:** strong typing for color ([618f708](https://github.com/ionic-team/ionic/commit/618f708))
* **angular:** platform logic belongs to core ([af5db2f](https://github.com/ionic-team/ionic/commit/af5db2f))
* **angular:** build script ([a88e1e8](https://github.com/ionic-team/ionic/commit/a88e1e8))
* **angular:** params are assigned to props ([7fa6e43](https://github.com/ionic-team/ionic/commit/7fa6e43))
* **angular:** populated the platforms array ([#14466](https://github.com/ionic-team/ionic/issues/14466)) ([d177087](https://github.com/ionic-team/ionic/commit/d177087))
* **angular:** Required<> is not available ([8aa6965](https://github.com/ionic-team/ionic/commit/8aa6965))
* **angular:** routerLink integration ([ed8ff4f](https://github.com/ionic-team/ionic/commit/ed8ff4f))
* **content:** scrol-inner takes all height ([3da0c98](https://github.com/ionic-team/ionic/commit/3da0c98))
* **nav:** Remove console.log ([#14467](https://github.com/ionic-team/ionic/issues/14467)) ([d93b1d5](https://github.com/ionic-team/ionic/commit/d93b1d5))
* **refresher:** adds threshold ([34ae904](https://github.com/ionic-team/ionic/commit/34ae904))
* **router:** accepts root direction ([ae9d0c7](https://github.com/ionic-team/ionic/commit/ae9d0c7))
* **router:** fix push() public interface ([875b9d0](https://github.com/ionic-team/ionic/commit/875b9d0))


### Features

* **img:** adds lazy load image ([b06c65f](https://github.com/ionic-team/ionic/commit/b06c65f))



<a name="4.0.0-alpha.6"></a>
# [4.0.0-alpha.6](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.5...v4.0.0-alpha.6) (2018-05-10)


### Bug Fixes

* **angular:** aot ([714f4a6](https://github.com/ionic-team/ionic/commit/714f4a6))



<a name="4.0.0-alpha.5"></a>
# [4.0.0-alpha.5](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.4...v4.0.0-alpha.5) (2018-05-10)


### Bug Fixes

* **alert:** onDidDismiss() is called ([7b33039](https://github.com/ionic-team/ionic/commit/7b33039))
* **all:** snapshot tests ([cc7ab4e](https://github.com/ionic-team/ionic/commit/cc7ab4e))
* **angular:** exports ([50021cd](https://github.com/ionic-team/ionic/commit/50021cd))
* **angular:** routerLink uses <a> ([526c9a8](https://github.com/ionic-team/ionic/commit/526c9a8))
* **angular:** setup config provider correctly ([82fbe31](https://github.com/ionic-team/ionic/commit/82fbe31))
* **angular:** unexport some es2017 js ([f7bcb68](https://github.com/ionic-team/ionic/commit/f7bcb68))
* **app:** fix the statusbar-padding to match new structure ([6c2d539](https://github.com/ionic-team/ionic/commit/6c2d539))
* **back-button:** fix position ([e00da6d](https://github.com/ionic-team/ionic/commit/e00da6d))
* **capacitor:** detect capacitor native ([23d86eb](https://github.com/ionic-team/ionic/commit/23d86eb))
* **hover:** remove ion-app .enable-hover css ([a939fa2](https://github.com/ionic-team/ionic/commit/a939fa2))
* **inputs:** interactive css to rule all them ([1bd5467](https://github.com/ionic-team/ionic/commit/1bd5467))
* **refresher:** move gesture target to content ([df2faa4](https://github.com/ionic-team/ionic/commit/df2faa4))
* **router:** change events when URL changes ([ece86ee](https://github.com/ionic-team/ionic/commit/ece86ee))
* **router:** dynamic redirects ([ba551fd](https://github.com/ionic-team/ionic/commit/ba551fd))
* **router:** route information is stateless ([0f8477d](https://github.com/ionic-team/ionic/commit/0f8477d))
* **snapshot:** using md mode ([e352d1b](https://github.com/ionic-team/ionic/commit/e352d1b))
* **theming:** update contrast colors ([ae1028d](https://github.com/ionic-team/ionic/commit/ae1028d))
* **virtual-scroll:** JSX can render headers and footers ([012127d](https://github.com/ionic-team/ionic/commit/012127d))
* **virtual-scroll:** linting ([df8a4f7](https://github.com/ionic-team/ionic/commit/df8a4f7))


### Performance Improvements

* **all:** dynamic import ([bb809b6](https://github.com/ionic-team/ionic/commit/bb809b6))



<a name="4.0.0-alpha.4"></a>
# [4.0.0-alpha.4](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.3...v4.0.0-alpha.4) (2018-04-30)


### Bug Fixes

* **angular:** compare router params length ([b3a9c7f](https://github.com/ionic-team/ionic/commit/b3a9c7f))
* **angular:** Config provider ([329a348](https://github.com/ionic-team/ionic/commit/329a348))
* **angular:** platform.ready() returns type ([c0ec02e](https://github.com/ionic-team/ionic/commit/c0ec02e))
* **angular:** update proxies ([da0bfc7](https://github.com/ionic-team/ionic/commit/da0bfc7))
* **config:** add object.entries polyfil ([c917a3c](https://github.com/ionic-team/ionic/commit/c917a3c))
* **config:** add setupConfig util ([0c1476e](https://github.com/ionic-team/ionic/commit/0c1476e))
* **lint:** import order ([8b1452c](https://github.com/ionic-team/ionic/commit/8b1452c))
* **nav:** rename animate to animated ([98a3519](https://github.com/ionic-team/ionic/commit/98a3519))
* **prerender:** router compatible with prerender ([9c7b0ca](https://github.com/ionic-team/ionic/commit/9c7b0ca))
* **router:** error when it can't initialize property ([e56b2ee](https://github.com/ionic-team/ionic/commit/e56b2ee))
* **router:** initial load waits until outlet attaches ([c905ba4](https://github.com/ionic-team/ionic/commit/c905ba4))
* **router:** root prop ([89d5a35](https://github.com/ionic-team/ionic/commit/89d5a35))
* **router:** writeURL() for non root base ([af4bcb8](https://github.com/ionic-team/ionic/commit/af4bcb8))
* **scripts:** github release ([545d3c2](https://github.com/ionic-team/ionic/commit/545d3c2))
* **segment:** checked can be changed dynamically ([78454b4](https://github.com/ionic-team/ionic/commit/78454b4))
* **select:** cssClass + strong typed ([826e02b](https://github.com/ionic-team/ionic/commit/826e02b))
* **toast:** only use constant and env if supported ([#14399](https://github.com/ionic-team/ionic/issues/14399)) ([9bee0f0](https://github.com/ionic-team/ionic/commit/9bee0f0))
* **validate:** fix type errors ([3328314](https://github.com/ionic-team/ionic/commit/3328314))


### Features

* **router:** add willChange event ([d613411](https://github.com/ionic-team/ionic/commit/d613411))



<a name="4.0.0-alpha.3"></a>
# [4.0.0-alpha.3](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.2...v4.0.0-alpha.3) (2018-04-23)


### Bug Fixes

* **all:** strong typed events ([d5129df](https://github.com/ionic-team/ionic/commit/d5129df))
* **angular:** adds missing events ([c929dad](https://github.com/ionic-team/ionic/commit/c929dad))
* **angular:** Config provider ([c87f0c5](https://github.com/ionic-team/ionic/commit/c87f0c5))
* **angular:** platform ready() ([2b3c14b](https://github.com/ionic-team/ionic/commit/2b3c14b))
* **overlay:** cssClasses applied to overlay ([43d7538](https://github.com/ionic-team/ionic/commit/43d7538))
* **prerender:** local references to window/document ([78bd146](https://github.com/ionic-team/ionic/commit/78bd146))
* **virtual-scroll:** queue.write ([c1cbbc5](https://github.com/ionic-team/ionic/commit/c1cbbc5))


### Features

* **angular:** animation is explicit ([099b3ed](https://github.com/ionic-team/ionic/commit/099b3ed))


### Performance Improvements

* **platform:** remove from critical path ([86a6cde](https://github.com/ionic-team/ionic/commit/86a6cde))



<a name="4.0.0-alpha.2"></a>
# [4.0.0-alpha.2](https://github.com/ionic-team/ionic/compare/v4.0.0-alpha.1...v4.0.0-alpha.2) (2018-04-13)


### Bug Fixes

* **angular:** add NavParams ([22ebbce](https://github.com/ionic-team/ionic/commit/22ebbce))
* **angular:** change detection in deep ViewContainers ([850d7fc](https://github.com/ionic-team/ionic/commit/850d7fc))
* **angular:** emit es5 code ([02c1e83](https://github.com/ionic-team/ionic/commit/02c1e83))
* **angular:** icon proxy ([db5313e](https://github.com/ionic-team/ionic/commit/db5313e))
* **angular:** router-outlet uses stack by default ([5c91101](https://github.com/ionic-team/ionic/commit/5c91101))
* **angular:** using es2017 types ([12a27bc](https://github.com/ionic-team/ionic/commit/12a27bc))
* **angular:** viewContainer in overlays ([8ad3df9](https://github.com/ionic-team/ionic/commit/8ad3df9))
* **back-button:** get the back button color working ([5f4250b](https://github.com/ionic-team/ionic/commit/5f4250b))
* **fab:** fix fab activation ([a203534](https://github.com/ionic-team/ionic/commit/a203534))
* **label:** inline position by default ([fde878b](https://github.com/ionic-team/ionic/commit/fde878b))
* **label:** using prop for position ([b1ee4b8](https://github.com/ionic-team/ionic/commit/b1ee4b8)), closes [#14288](https://github.com/ionic-team/ionic/issues/14288)
* **mode:** set mode css class on ion-app ([fcb08e1](https://github.com/ionic-team/ionic/commit/fcb08e1))
* **props:** update stencil ([ea24ad6](https://github.com/ionic-team/ionic/commit/ea24ad6))
* **react:** FrameworkDelegate matches API ([e40a6b0](https://github.com/ionic-team/ionic/commit/e40a6b0))
* **toast:** account for safe-area on ios ([d984214](https://github.com/ionic-team/ionic/commit/d984214))


### Features

* **angular:** adds DomController ([6a31f39](https://github.com/ionic-team/ionic/commit/6a31f39)), closes [#14286](https://github.com/ionic-team/ionic/issues/14286)
* **angular:** push/setRoot/pop ([4d23cba](https://github.com/ionic-team/ionic/commit/4d23cba))
* **DomController:** add DomController provider using stencil queue ([bceece7](https://github.com/ionic-team/ionic/commit/bceece7))
* **queue:** use stencil's queue controller for dom read/writes ([d623b3b](https://github.com/ionic-team/ionic/commit/d623b3b))
* **router:** dont reuse the component if the params are different ([5899b03](https://github.com/ionic-team/ionic/commit/5899b03))
* **routerDirection:** refactors goBack ([54d7a12](https://github.com/ionic-team/ionic/commit/54d7a12))



<a name="4.0.0-alpha.1"></a>
# [4.0.0-alpha.1](https://github.com/ionic-team/ionic/compare/v0.2.2...v4.0.0-alpha.1) (2018-04-06)


### Bug Fixes

* **angular:** change detection ([79ba639](https://github.com/ionic-team/ionic/commit/79ba639))
* **angular:** proxy methods ([5153da4](https://github.com/ionic-team/ionic/commit/5153da4))
* **angular:** proxy outputs ([64a9497](https://github.com/ionic-team/ionic/commit/64a9497))
* **menu:** prerender ([a3cd5db](https://github.com/ionic-team/ionic/commit/a3cd5db))
* **split-pane:** prerender ([c6e962c](https://github.com/ionic-team/ionic/commit/c6e962c))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/ionic-team/ionic/compare/v0.2.1...v0.2.2) (2018-04-05)


### Bug Fixes

* **back-button:** fix menu and back button alignment ([#14268](https://github.com/ionic-team/ionic/issues/14268)) ([57fbf6c](https://github.com/ionic-team/ionic/commit/57fbf6c))
* **ripple-effect:** animation ([25c852c](https://github.com/ionic-team/ionic/commit/25c852c))
* **sass:** add missing alert css properties ([#14269](https://github.com/ionic-team/ionic/issues/14269)) ([3471dd6](https://github.com/ionic-team/ionic/commit/3471dd6)), closes [#14258](https://github.com/ionic-team/ionic/issues/14258)
* **script:** release script pushes tags ([d23108a](https://github.com/ionic-team/ionic/commit/d23108a))
* **scripts:** improve script ([2215c6a](https://github.com/ionic-team/ionic/commit/2215c6a))
* **select:** pass header and subHeader to interfaces ([2195895](https://github.com/ionic-team/ionic/commit/2195895))
* **select:** wrap the text for the message in a popover ([0a0959b](https://github.com/ionic-team/ionic/commit/0a0959b))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/ionic-team/ionic/compare/v0.2.0...v0.2.1) (2018-04-04)


### Bug Fixes

* **angular:** back button prevents default ([4db687e](https://github.com/ionic-team/ionic/commit/4db687e))
* **angular:** back-button ([1f78390](https://github.com/ionic-team/ionic/commit/1f78390))
* **angular:** back-button does not push view ([bb46b5f](https://github.com/ionic-team/ionic/commit/bb46b5f))
* **angular:** tabs flickering ([7e97006](https://github.com/ionic-team/ionic/commit/7e97006))
* **app:** hide elements ([11cb42f](https://github.com/ionic-team/ionic/commit/11cb42f))
* **scripts:** update dep version ([974b949](https://github.com/ionic-team/ionic/commit/974b949))


### Features

* **angular:** href integration ([09e6b7e](https://github.com/ionic-team/ionic/commit/09e6b7e))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/ionic-team/ionic/compare/v0.1.6...v0.2.0) (2018-04-02)


### Bug Fixes

* **angular:** URL based tabs ([14fedb9](https://github.com/ionic-team/ionic/commit/14fedb9))



<a name="0.1.6"></a>
## [0.1.6](https://github.com/ionic-team/ionic/compare/v0.1.5...v0.1.6) (2018-04-02)


### Bug Fixes

* **angular:** lifecycles ([062641d](https://github.com/ionic-team/ionic/commit/062641d))
* **angular:** modal and popover ([acd411d](https://github.com/ionic-team/ionic/commit/acd411d))
* **angular:** module exports ([cece447](https://github.com/ionic-team/ionic/commit/cece447))
* **angular:** proxies ([2308239](https://github.com/ionic-team/ionic/commit/2308239))
* **angular:** tabs angular tests ([ff1ed88](https://github.com/ionic-team/ionic/commit/ff1ed88))
* **router-outlet:** enteringEl !== leavingEl ([0d44253](https://github.com/ionic-team/ionic/commit/0d44253))
* **router-outlet:** mutable prop ([ff06dab](https://github.com/ionic-team/ionic/commit/ff06dab))



<a name="0.1.5"></a>
## [0.1.5](https://github.com/ionic-team/ionic/compare/v0.1.4...v0.1.5) (2018-03-29)


### Bug Fixes

* **all:** absolute positioning ([4fcddad](https://github.com/ionic-team/ionic/commit/4fcddad))
* **angular:** goback navigation ([7b9a00e](https://github.com/ionic-team/ionic/commit/7b9a00e))
* **angular:** ion-back-button ([9c789ce](https://github.com/ionic-team/ionic/commit/9c789ce))
* **angular:** stack based navigation ([726938f](https://github.com/ionic-team/ionic/commit/726938f))
* **avatar:** adjust wide images to fill instead of squish ([b0f8ca5](https://github.com/ionic-team/ionic/commit/b0f8ca5))
* **back-button:** empty text is a valid value ([eb0ff2f](https://github.com/ionic-team/ionic/commit/eb0ff2f))
* **back-button:** ios style ([2b8e489](https://github.com/ionic-team/ionic/commit/2b8e489))
* **button:** dynamic bar-button ([d0c5f53](https://github.com/ionic-team/ionic/commit/d0c5f53))
* **checkbox:** update ios checkbox to be closer to native ([b29fce1](https://github.com/ionic-team/ionic/commit/b29fce1))
* **components:** add font-smoothing to mixing components ([9caeec7](https://github.com/ionic-team/ionic/commit/9caeec7))
* **covers:** absolute positioning ([ce09978](https://github.com/ionic-team/ionic/commit/ce09978))
* **item-option:** remove outline on active/focus ([eae6869](https://github.com/ionic-team/ionic/commit/eae6869)), closes [#14191](https://github.com/ionic-team/ionic/issues/14191)
* **label:** add missing text-wrap styles for ios ([a9bd76a](https://github.com/ionic-team/ionic/commit/a9bd76a)), closes [#13157](https://github.com/ionic-team/ionic/issues/13157)
* **menu:** default menu mode ([c31bcde](https://github.com/ionic-team/ionic/commit/c31bcde))
* **nav:** animated opts ([57a5d49](https://github.com/ionic-team/ionic/commit/57a5d49))
* **nav:** no animation ([4fdfddb](https://github.com/ionic-team/ionic/commit/4fdfddb))
* **nav:** transition name ([011a374](https://github.com/ionic-team/ionic/commit/011a374))
* **picker:** do not scroll ([1c06bfe](https://github.com/ionic-team/ionic/commit/1c06bfe))
* **ripple-effect:** tapclick is required in ionic ([d57122c](https://github.com/ionic-team/ionic/commit/d57122c))
* **router:** change detection for componentProps ([a718f7e](https://github.com/ionic-team/ionic/commit/a718f7e))
* **router:** explicit goback should not push ([7a26162](https://github.com/ionic-team/ionic/commit/7a26162))
* **router:** fixes navChanged() ([dddaee1](https://github.com/ionic-team/ionic/commit/dddaee1))
* **router:** ion-nav ([113af9e](https://github.com/ionic-team/ionic/commit/113af9e))
* **router:** loging ([ffaec16](https://github.com/ionic-team/ionic/commit/ffaec16))
* **router:** route change detection ([9e9f2a2](https://github.com/ionic-team/ionic/commit/9e9f2a2))
* **router:** wait RAF ([b26a563](https://github.com/ionic-team/ionic/commit/b26a563))
* **slides:** unload slides correctly ([59c6891](https://github.com/ionic-team/ionic/commit/59c6891))
* **thumbnail:** adjust wide images to fill instead of squish ([54558c9](https://github.com/ionic-team/ionic/commit/54558c9))
* **toast:** dismiss timeout ([44f343d](https://github.com/ionic-team/ionic/commit/44f343d))
* **toolbar:** unused private ([c9d2a0d](https://github.com/ionic-team/ionic/commit/c9d2a0d))
* **transition:** nav ios transition ([095f9c8](https://github.com/ionic-team/ionic/commit/095f9c8))


### Features

* **button:** goback attribute ([00fc460](https://github.com/ionic-team/ionic/commit/00fc460))
* **config:** add set to config ([69a6f8d](https://github.com/ionic-team/ionic/commit/69a6f8d))
* **content:** scrollEnabled ([5c2678f](https://github.com/ionic-team/ionic/commit/5c2678f))
* **menu-controller:** expose registerAnimation ([153f8ca](https://github.com/ionic-team/ionic/commit/153f8ca))
* **nav:** goBack directive ([862e571](https://github.com/ionic-team/ionic/commit/862e571))
* **nav-controller:** goback best guess ([46bbd0f](https://github.com/ionic-team/ionic/commit/46bbd0f))
* **ripple:** css variable color ([77fc792](https://github.com/ionic-team/ionic/commit/77fc792))
* **tab:** framework support ([48d1bd4](https://github.com/ionic-team/ionic/commit/48d1bd4))


### Performance Improvements

* **app:** platform is not needed ([e681836](https://github.com/ionic-team/ionic/commit/e681836))


### Reverts

* **toolbar:** revert to use old button attributes ([574c346](https://github.com/ionic-team/ionic/commit/574c346)), closes [#14172](https://github.com/ionic-team/ionic/issues/14172)



<a name="0.1.4"></a>
## [0.1.4](https://github.com/ionic-team/ionic/compare/v0.1.4-9...v0.1.4) (2018-03-21)


### Bug Fixes

* **action-sheet:** update padding on title to match native ([f0a40fa](https://github.com/ionic-team/ionic/commit/f0a40fa))
* **alert:** update colors for alert text and input borders ([605ec93](https://github.com/ionic-team/ionic/commit/605ec93)), closes [#14196](https://github.com/ionic-team/ionic/issues/14196)
* **alert:** update md alert to closer match spec ([7d53e49](https://github.com/ionic-team/ionic/commit/7d53e49))
* **all:** ts strict (part 4) ([4693229](https://github.com/ionic-team/ionic/commit/4693229))
* **angular:** router-outlet animation ([943e2f7](https://github.com/ionic-team/ionic/commit/943e2f7))
* **chip:** use lighter background color ([08553f1](https://github.com/ionic-team/ionic/commit/08553f1)), closes [#14196](https://github.com/ionic-team/ionic/issues/14196)
* **picker:** does not scroll ([b49a45d](https://github.com/ionic-team/ionic/commit/b49a45d))
* **router:** reusing checks params ([371fc19](https://github.com/ionic-team/ionic/commit/371fc19))
* **router-outlet:** css and change logic ([6e683c5](https://github.com/ionic-team/ionic/commit/6e683c5))


### Features

* **fab:** add box shadow and transition for ios ([d26074a](https://github.com/ionic-team/ionic/commit/d26074a))
* **ion-router-outlet:** adds router-outlet ([c03afab](https://github.com/ionic-team/ionic/commit/c03afab))



<a name="0.1.4-9"></a>
## [0.1.4-9](https://github.com/ionic-team/ionic/compare/v0.1.4-8...v0.1.4-9) (2018-03-20)


### Bug Fixes

* **all:** ts strict (part 3) ([06ad60e](https://github.com/ionic-team/ionic/commit/06ad60e))
* **angular:** ion-nav no routing ([9094c66](https://github.com/ionic-team/ionic/commit/9094c66))
* **angular:** removeViewFromDom ([41f54f8](https://github.com/ionic-team/ionic/commit/41f54f8))
* **back-button:** use correct color for ios back button ([b82c382](https://github.com/ionic-team/ionic/commit/b82c382)), closes [#14177](https://github.com/ionic-team/ionic/issues/14177)
* **overlays:** page is removed properly ([9988c75](https://github.com/ionic-team/ionic/commit/9988c75))
* **theming:** update spinner classes to new names ([f578122](https://github.com/ionic-team/ionic/commit/f578122))


### Features

* **angular:** ion-nav ([f39d3ad](https://github.com/ionic-team/ionic/commit/f39d3ad))



<a name="0.1.4-8"></a>
## [0.1.4-8](https://github.com/ionic-team/ionic/compare/v0.1.4-7...v0.1.4-8) (2018-03-19)


### Bug Fixes

* **back-button:** apply the proper color to the back button ([7d2de18](https://github.com/ionic-team/ionic/commit/7d2de18)), closes [#14177](https://github.com/ionic-team/ionic/issues/14177)


### Features

* **nav:** support for rootParams ([50abcf5](https://github.com/ionic-team/ionic/commit/50abcf5))



<a name="0.1.4-7"></a>
## [0.1.4-7](https://github.com/ionic-team/ionic/compare/v0.1.4-6...v0.1.4-7) (2018-03-16)


### Features

* **router:** wildcard redirects ([2bdf4ad](https://github.com/ionic-team/ionic/commit/2bdf4ad))



<a name="0.1.4-6"></a>
## [0.1.4-6](https://github.com/ionic-team/ionic/compare/v0.1.4-5...v0.1.4-6) (2018-03-15)


### Bug Fixes

* **alert:** backdrop calls cancel handler ([de22eca](https://github.com/ionic-team/ionic/commit/de22eca))
* **alert:** set input value ([6e2a9c9](https://github.com/ionic-team/ionic/commit/6e2a9c9))
* **angular:** create angular delegate ([3b5f758](https://github.com/ionic-team/ionic/commit/3b5f758))
* **angular:** fix overlays ([cc4fecc](https://github.com/ionic-team/ionic/commit/cc4fecc))
* **angular:** modal and popover support ([9a0755a](https://github.com/ionic-team/ionic/commit/9a0755a))
* **demos:** fixes angular ([f398b3a](https://github.com/ionic-team/ionic/commit/f398b3a))
* **overlay:** using hostData for zIndex ([64f0866](https://github.com/ionic-team/ionic/commit/64f0866))
* **overlay:** wrong stencil import ([22f6a34](https://github.com/ionic-team/ionic/commit/22f6a34))
* **overlays:** OverlayController interface ([6e2ca85](https://github.com/ionic-team/ionic/commit/6e2ca85))
* **popover:** lifecycles ([b56c2a8](https://github.com/ionic-team/ionic/commit/b56c2a8))
* **router:** ambiguous routes ([b4f46ee](https://github.com/ionic-team/ionic/commit/b4f46ee))
* **router:** fix selection ([207f416](https://github.com/ionic-team/ionic/commit/207f416))
* **router:** rename API to match stencil-router ([e729610](https://github.com/ionic-team/ionic/commit/e729610))
* **router:** retuning string path ([f48d817](https://github.com/ionic-team/ionic/commit/f48d817))
* **toggle:** ios shadow ([7df023a](https://github.com/ionic-team/ionic/commit/7df023a))


### Features

* **ion-router:** dynamic routes ([7c3cba0](https://github.com/ionic-team/ionic/commit/7c3cba0))
* **overlay:** adds lifecycle events ([0b099ce](https://github.com/ionic-team/ionic/commit/0b099ce))
* **overlays:** adds onDidDismiss and onWillDismiss ([7dcf8a5](https://github.com/ionic-team/ionic/commit/7dcf8a5))


### Performance Improvements

* **scss:** optimize multi dir ([#14156](https://github.com/ionic-team/ionic/issues/14156)) ([ba63d01](https://github.com/ionic-team/ionic/commit/ba63d01))



<a name="0.1.4-5"></a>
## [0.1.4-5](https://github.com/ionic-team/ionic/compare/v0.1.4-4...v0.1.4-5) (2018-03-09)


### Bug Fixes

* **item:** button outline ([f671008](https://github.com/ionic-team/ionic/commit/f671008))
* **router:** fix flickering ([f2ac6e3](https://github.com/ionic-team/ionic/commit/f2ac6e3))
* **router:** flickering 2 ([88f2981](https://github.com/ionic-team/ionic/commit/88f2981))
* **router:** tslint ([1ace045](https://github.com/ionic-team/ionic/commit/1ace045))


### Features

* **router:** adds redirectTo ([f5c6333](https://github.com/ionic-team/ionic/commit/f5c6333))



<a name="0.1.4-4"></a>
## [0.1.4-4](https://github.com/ionic-team/ionic/compare/v0.1.4-3...v0.1.4-4) (2018-03-08)


### Bug Fixes

* **back-button:** implements back animation ([64a787a](https://github.com/ionic-team/ionic/commit/64a787a))
* **route:** params is not undefined ([8b6df5a](https://github.com/ionic-team/ionic/commit/8b6df5a))



<a name="0.1.4-3"></a>
## [0.1.4-3](https://github.com/ionic-team/ionic/compare/v0.1.4-2...v0.1.4-3) (2018-03-08)


### Bug Fixes

* **router:** passing params to ion-nav ([d1263a8](https://github.com/ionic-team/ionic/commit/d1263a8))


### Features

* **back-button:** adds defaultHref ([5271f68](https://github.com/ionic-team/ionic/commit/5271f68))
* **nav:** params ([878d7e6](https://github.com/ionic-team/ionic/commit/878d7e6))
* **route:** adds route-link ([4a3030f](https://github.com/ionic-team/ionic/commit/4a3030f))
* **router:** reverse lookup with params ([3ce8a67](https://github.com/ionic-team/ionic/commit/3ce8a67))



<a name="0.1.4-2"></a>
## [0.1.4-2](https://github.com/ionic-team/ionic/compare/v0.1.4-0...v0.1.4-2) (2018-03-07)


### Bug Fixes

* **fab:** add side as a property for fab list ([7387d34](https://github.com/ionic-team/ionic/commit/7387d34))
* **ion-router:** fixes routing algorithm ([c8a27b7](https://github.com/ionic-team/ionic/commit/c8a27b7))
* **item:** href ([540c33b](https://github.com/ionic-team/ionic/commit/540c33b))
* **overlays:** bundling of overlays ([9650bec](https://github.com/ionic-team/ionic/commit/9650bec))
* **router:** invalid url ([c7fe694](https://github.com/ionic-team/ionic/commit/c7fe694))
* **routing:** flickering (part 1) ([7b264f9](https://github.com/ionic-team/ionic/commit/7b264f9))
* **tabs:** do not select when using router ([174d9b5](https://github.com/ionic-team/ionic/commit/174d9b5))


### Features

* **router:** adds parameters ([f29e3f4](https://github.com/ionic-team/ionic/commit/f29e3f4))
* **virtual-scroll:** adds JSX support ([dc8b363](https://github.com/ionic-team/ionic/commit/dc8b363))



<a name="0.1.4-1"></a>
## [0.1.4-1](https://github.com/ionic-team/ionic/compare/v0.1.4-0...v0.1.4-1) (2018-03-07)


### Bug Fixes

* **ion-router:** fixes routing algorithm ([c8a27b7](https://github.com/ionic-team/ionic/commit/c8a27b7))
* **overlays:** bundling of overlays ([9650bec](https://github.com/ionic-team/ionic/commit/9650bec))
* **routing:** flickering (part 1) ([7b264f9](https://github.com/ionic-team/ionic/commit/7b264f9))
* **tabs:** do not select when using router ([174d9b5](https://github.com/ionic-team/ionic/commit/174d9b5))


### Features

* **virtual-scroll:** adds JSX support ([dc8b363](https://github.com/ionic-team/ionic/commit/dc8b363))



<a name="0.1.4-0"></a>
## [0.1.4-0](https://github.com/ionic-team/ionic/compare/v0.1.3...v0.1.4-0) (2018-03-06)

### Refactor

- Refactored navigation system

### Bug Fixes

* **testing:** do not throw error for missing Ionic global ([aa91d11](https://github.com/ionic-team/ionic/commit/aa91d11))
* **zone:** forgot to remove console.logs ([4ec3e48](https://github.com/ionic-team/ionic/commit/4ec3e48))



<a name="0.1.3"></a>
## [0.1.3](https://github.com/ionic-team/ionic/compare/v0.1.2...v0.1.3) (2018-03-03)

### Performance Improvements

* Updates to latest stencil, that includes the zone bypassing abilities.

### Bug Fixes

* **ts:** ts strict fixes ([8ff02c7](https://github.com/ionic-team/ionic/commit/8ff02c7))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/ionic-team/ionic/compare/v0.1.1...v0.1.2) (2018-03-03)


### Performance Improvements

* **events:** bypass ngzone ([7366c38](https://github.com/ionic-team/ionic/commit/7366c38))
* **scroll:** watchdog + simplification ([33a6274](https://github.com/ionic-team/ionic/commit/33a6274))


### Bug Fixes

* **scroll:** clearInterval just to be safe ([6da9882](https://github.com/ionic-team/ionic/commit/6da9882))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/ionic-team/ionic/commit/291e85e61128b2f3101d9cea6b42d4cf751dc481) (2018-03-01)


### Bug Fixes

* **button:** pass the property type instead of hardcoding button ([10e481a](https://github.com/ionic-team/ionic/commit/10e481a))



<a name="0.1.0"></a>

## [0.1.0](https://github.com/ionic-team/ionic/commit/43a8c4c7a719169336a84964fc1c737562d764a6) (2018-03-01)
