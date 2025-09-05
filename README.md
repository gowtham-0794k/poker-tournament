# poker-tournament

https://www.google.com/search?q=create+apk+from+ionic+angular+app+in+windows&rlz=1C1GCEB_enIN1151IN1152&oq=create+apk+from+ionic+angular+app+in+windows&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yDQgCEAAYhgMYgAQYigUyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBwgFEAAY7wUyBwgGEAAY7wUyBwgHEAAY7wUyCggIEAAYgAQYogTSAQkxMTY0MmowajSoAgCwAgE&sourceid=chrome&ie=UTF-8&safe=active&ssui=on

npx cap add android
ionic build --prod
npx cap sync android
npx cap open android

Generate the APK in Android Studio:
In Android Studio, navigate to Build > Build Bundle(s) / APK(s) > Build APK(s).
Android Studio will compile and build your application.
Once the build is complete, a notification will appear with a link to locate the generated APK file. You will typically find it in your-project/android/app/build/outputs/apk/debug/app-debug.apk (for debug builds) or your-project/android/app/build/outputs/apk/release/app-release.apk (for release builds).

```
poker-tournament-tracker/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   ├── auth.guard.ts
│   │   │   │   └── index.ts
│   │   │   ├── interceptors/
│   │   │   │   ├── http-error.interceptor.ts
│   │   │   │   └── index.ts
│   │   │   ├── services/
│   │   │   │   ├── storage.service.ts
│   │   │   │   ├── platform.service.ts
│   │   │   │   └── index.ts
│   │   │   └── core.module.ts
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   │   ├── header.component.ts
│   │   │   │   │   ├── header.component.html
│   │   │   │   │   ├── header.component.scss
│   │   │   │   │   └── header.component.spec.ts
│   │   │   │   ├── countdown-timer/
│   │   │   │   │   ├── countdown-timer.component.ts
│   │   │   │   │   ├── countdown-timer.component.html
│   │   │   │   │   ├── countdown-timer.component.scss
│   │   │   │   │   └── countdown-timer.component.spec.ts
│   │   │   │   ├── level-display/
│   │   │   │   │   ├── level-display.component.ts
│   │   │   │   │   ├── level-display.component.html
│   │   │   │   │   ├── level-display.component.scss
│   │   │   │   │   └── level-display.component.spec.ts
│   │   │   │   └── index.ts
│   │   │   ├── pipes/
│   │   │   │   ├── time-format.pipe.ts
│   │   │   │   ├── currency-format.pipe.ts
│   │   │   │   └── index.ts
│   │   │   ├── directives/
│   │   │   │   └── index.ts
│   │   │   ├── models/
│   │   │   │   ├── tournament.model.ts
│   │   │   │   ├── level.model.ts
│   │   │   │   ├── blind-structure.model.ts
│   │   │   │   └── index.ts
│   │   │   └── shared.module.ts
│   │   ├── features/
│   │   │   ├── tournament/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── tournament-list/
│   │   │   │   │   │   ├── tournament-list.page.ts
│   │   │   │   │   │   ├── tournament-list.page.html
│   │   │   │   │   │   ├── tournament-list.page.scss
│   │   │   │   │   │   └── tournament-list.page.spec.ts
│   │   │   │   │   ├── tournament-detail/
│   │   │   │   │   │   ├── tournament-detail.page.ts
│   │   │   │   │   │   ├── tournament-detail.page.html
│   │   │   │   │   │   ├── tournament-detail.page.scss
│   │   │   │   │   │   └── tournament-detail.page.spec.ts
│   │   │   │   │   ├── tournament-create/
│   │   │   │   │   │   ├── tournament-create.page.ts
│   │   │   │   │   │   ├── tournament-create.page.html
│   │   │   │   │   │   ├── tournament-create.page.scss
│   │   │   │   │   │   └── tournament-create.page.spec.ts
│   │   │   │   │   └── tournament-timer/
│   │   │   │   │       ├── tournament-timer.page.ts
│   │   │   │   │       ├── tournament-timer.page.html
│   │   │   │   │       ├── tournament-timer.page.scss
│   │   │   │   │       └── tournament-timer.page.spec.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── tournament.service.ts
│   │   │   │   │   ├── timer.service.ts
│   │   │   │   │   ├── blind-structure.service.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── blind-level-card/
│   │   │   │   │   │   ├── blind-level-card.component.ts
│   │   │   │   │   │   ├── blind-level-card.component.html
│   │   │   │   │   │   ├── blind-level-card.component.scss
│   │   │   │   │   │   └── blind-level-card.component.spec.ts
│   │   │   │   │   ├── tournament-controls/
│   │   │   │   │   │   ├── tournament-controls.component.ts
│   │   │   │   │   │   ├── tournament-controls.component.html
│   │   │   │   │   │   ├── tournament-controls.component.scss
│   │   │   │   │   │   └── tournament-controls.component.spec.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── tournament-routing.module.ts
│   │   │   │   └── tournament.module.ts
│   │   │   ├── settings/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── settings/
│   │   │   │   │   │   ├── settings.page.ts
│   │   │   │   │   │   ├── settings.page.html
│   │   │   │   │   │   ├── settings.page.scss
│   │   │   │   │   │   └── settings.page.spec.ts
│   │   │   │   │   ├── blind-structure-editor/
│   │   │   │   │   │   ├── blind-structure-editor.page.ts
│   │   │   │   │   │   ├── blind-structure-editor.page.html
│   │   │   │   │   │   ├── blind-structure-editor.page.scss
│   │   │   │   │   │   └── blind-structure-editor.page.spec.ts
│   │   │   │   │   └── preferences/
│   │   │   │   │       ├── preferences.page.ts
│   │   │   │   │       ├── preferences.page.html
│   │   │   │   │       ├── preferences.page.scss
│   │   │   │   │       └── preferences.page.spec.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── settings.service.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── settings-item/
│   │   │   │   │   │   ├── settings-item.component.ts
│   │   │   │   │   │   ├── settings-item.component.html
│   │   │   │   │   │   ├── settings-item.component.scss
│   │   │   │   │   │   └── settings-item.component.spec.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── settings-routing.module.ts
│   │   │   │   └── settings.module.ts
│   │   │   ├── statistics/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── statistics/
│   │   │   │   │   │   ├── statistics.page.ts
│   │   │   │   │   │   ├── statistics.page.html
│   │   │   │   │   │   ├── statistics.page.scss
│   │   │   │   │   │   └── statistics.page.spec.ts
│   │   │   │   │   └── tournament-history/
│   │   │   │   │       ├── tournament-history.page.ts
│   │   │   │   │       ├── tournament-history.page.html
│   │   │   │   │       ├── tournament-history.page.scss
│   │   │   │   │       └── tournament-history.page.spec.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── statistics.service.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── stats-chart/
│   │   │   │   │   │   ├── stats-chart.component.ts
│   │   │   │   │   │   ├── stats-chart.component.html
│   │   │   │   │   │   ├── stats-chart.component.scss
│   │   │   │   │   │   └── stats-chart.component.spec.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── statistics-routing.module.ts
│   │   │   │   └── statistics.module.ts
│   │   │   └── home/
│   │   │       ├── pages/
│   │   │       │   └── home/
│   │   │       │       ├── home.page.ts
│   │   │       │       ├── home.page.html
│   │   │       │       ├── home.page.scss
│   │   │       │       └── home.page.spec.ts
│   │   │       ├── home-routing.module.ts
│   │   │       └── home.module.ts
│   │   ├── layout/
│   │   │   ├── components/
│   │   │   │   ├── tab-layout/
│   │   │   │   │   ├── tab-layout.component.ts
│   │   │   │   │   ├── tab-layout.component.html
│   │   │   │   │   ├── tab-layout.component.scss
│   │   │   │   │   └── tab-layout.component.spec.ts
│   │   │   │   └── index.ts
│   │   │   └── layout.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   └── app.module.ts
│   ├── assets/
│   │   ├── icon/
│   │   │   └── favicon.png
│   │   ├── images/
│   │   │   ├── poker-chips.svg
│   │   │   └── tournament-bg.jpg
│   │   ├── sounds/
│   │   │   ├── level-up.mp3
│   │   │   └── timer-warning.mp3
│   │   ├── data/
│   │   │   ├── default-blind-structures.json
│   │   │   └── tournament-templates.json
│   │   └── i18n/
│   │       ├── en.json
│   │       └── es.json
│   ├── theme/
│   │   ├── variables.scss
│   │   ├── poker-theme.scss
│   │   └── responsive.scss
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── global.scss
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   └── test.ts
├── angular.json
├── ionic.config.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── karma.conf.js
├── capacitor.config.ts
├── .gitignore
└── README.md
```
