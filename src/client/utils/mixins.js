import { ref, onMounted, onBeforeUnmount } from "vue";
import { Locale } from "vant";
import { useI18n } from "vue-i18n";

export function withTheme() {
  const color = ref(null);

  const addThemeEventListener = (event, c) => {
    color.value = `#${Number(c).toString(16).substring(2)}`;
  };

  const addMessageEventListener = (event) => {
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
}

export function withDarkModeAutoChanged() {
  const addAutoChangedEventListener = (event) => {
    const prefersDarkMode = event && event.matches;
    document.body.setAttribute(
      "data-theme",
      prefersDarkMode ? "dark" : "light"
    );
  };

  let media;
  onMounted(async () => {
    media = window.matchMedia("(prefers-color-scheme: dark)");
    media &&
      media.addEventListener("change", addAutoChangedEventListener, false);
  });

  onBeforeUnmount(() => {
    media &&
      media.removeEventListener("change", addAutoChangedEventListener, false);
  });
}

export function withDarkMode() {
  const addDarkModeEventListener = (event, darkMode) => {
    if (["dark", "light"].includes(darkMode)) {
      document.body.setAttribute("data-theme", darkMode);
    }
  };

  const addMessageEventListener = (event) => {
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
}

export function withLocale() {
  const { t, locale, availableLocales } = useI18n();
  const mappedAvailableLocales = availableLocales.map((locale) =>
    locale.replace("_", "-")
  );

  const addLocaleEventListener = (l) => {
    if (mappedAvailableLocales.includes(l)) {
      locale.value = l.replace("-", "_");
      Locale.use(l, require(`vant/es/locale/lang/${l}`));
    }
  };

  const addMessageEventListener = (event) => {
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
}

export function withPullDown() {
  const refreshing = ref(false);

  const addPullRefreshEventListener = (pullRefresh) => {
    if (pullRefresh) {
      refreshing.value = true;
    }
  };

  const addMessageEventListener = (event) => {
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
}
