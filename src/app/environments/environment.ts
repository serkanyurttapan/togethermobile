// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    languages: ["en-US", "tr-TR"],
    url: {
      i18n: "assets/i18n/",
      api: "https://localhost:44353/api/"
    },

    localization: {
      currency: {
        code: "TRY",
        display: "symbol-narrow",
        digits: "1.2"
      },
      date: {
        en: "yyyy-MM-dd",
        tr: "yyyy-MM-dd"
      },
      time: {
        en: "hh:mm a",
        tr: "hh:mm a"
      }
    }
  };
