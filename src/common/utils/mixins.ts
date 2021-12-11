import { ref, onMounted, onBeforeUnmount } from "vue";
import { Locale } from "vant";
import { useI18n } from "vue-i18n";

interface HooksResp {
  [key: string]: any;
}

export const withTheme = (): HooksResp => {
  const color = ref();

  const addThemeEventListener = (event: MessageEvent, c: string) => {
    color.value = `#${Number(c).toString(16).substring(2)}`;
  };

  const addMessageEventListener = (event: MessageEvent) => {
    if (typeof event.data !== "string") return;
    try {
      const data = JSON.parse(event.data);
      if (data.color) {
        addThemeEventListener(event, data.color);
      }
    } catch (e) {
      console.error(e);
    }
  };

  onMounted(() => {
    window.addEventListener("message", addMessageEventListener, false);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("message", addMessageEventListener, false);
  });

  return {
    color,
  };
};

export const withDarkModeAutoChanged = (): void => {
  const addAutoChangedEventListener = (event: MediaQueryListEvent) => {
    const prefersDarkMode = event && event.matches;
    document.body.setAttribute(
      "data-theme",
      prefersDarkMode ? "dark" : "light"
    );
  };

  let media: MediaQueryList;
  onMounted(async () => {
    media = window.matchMedia("(prefers-color-scheme: dark)");
    media &&
      media.addEventListener("change", addAutoChangedEventListener, false);
  });

  onBeforeUnmount(() => {
    media &&
      media.removeEventListener("change", addAutoChangedEventListener, false);
  });
};

export const withDarkMode = (): void => {
  const addDarkModeEventListener = (event: MessageEvent, darkMode: string) => {
    if (["dark", "light"].includes(darkMode)) {
      document.body.setAttribute("data-theme", darkMode);
    }
  };

  const addMessageEventListener = (event: MessageEvent) => {
    if (typeof event.data !== "string") return;
    try {
      const data = JSON.parse(event.data);
      if (data.darkMode) {
        addDarkModeEventListener(event, data.darkMode);
      }
    } catch (e) {
      console.error(e);
    }
  };

  onMounted(() => {
    window.addEventListener("message", addMessageEventListener, false);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("message", addMessageEventListener, false);
  });
};

export const withLocale = (): HooksResp => {
  const { t, locale, availableLocales } = useI18n();
  const mappedAvailableLocales = availableLocales.map((locale) =>
    locale.replace("_", "-")
  );

  const addLocaleEventListener = (l: string) => {
    if (mappedAvailableLocales.includes(l)) {
      locale.value = l.replace("-", "_");
      Locale.use(l, require(`vant/es/locale/lang/${l}`));
    }
  };

  const addMessageEventListener = (event: MessageEvent) => {
    if (typeof event.data !== "string") return;
    try {
      const data = JSON.parse(event.data);
      if (data.locale) {
        addLocaleEventListener(data.locale);
      }
    } catch (e) {
      console.error(e);
    }
  };

  onMounted(() => {
    window.addEventListener("message", addMessageEventListener, false);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("message", addMessageEventListener, false);
  });
  return {
    t,
  };
};

export const withPullDown = (): HooksResp => {
  const refreshing = ref(false);

  const addPullRefreshEventListener = (pullRefresh: boolean) => {
    if (pullRefresh) {
      refreshing.value = true;
    }
  };

  const addMessageEventListener = (event: MessageEvent) => {
    if (typeof event.data !== "string") return;
    try {
      const data = JSON.parse(event.data);
      if (data.pullDown) {
        addPullRefreshEventListener(data.pullDown);
      }
    } catch (e) {
      console.error(e);
    }
  };

  onMounted(() => {
    window.addEventListener("message", addMessageEventListener, false);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("message", addMessageEventListener, false);
  });

  return {
    refreshing,
  };
};

export const withMounted = (): HooksResp => {
  const mounted = ref(false);

  onMounted(() => {
    mounted.value = true;
  });

  onBeforeUnmount(() => {
    mounted.value = false;
  });

  return {
    mounted,
  };
};
