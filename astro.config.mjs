import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://foxi.netlify.app/",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  i18n:{
    defaultLocale:'es',
    locales: ['es','en'],
    routing:{
      prefixDefaultLocale:false
    }
  }
});
