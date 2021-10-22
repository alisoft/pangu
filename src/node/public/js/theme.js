const WEBSITE_DARK_THEME_KEY = "__color_theme__";

/**
 * 添加暗色主题
 */
function addDarkTheme() {
  const body = document.getElementById("body");
  const button = document.getElementById("btn");
  body.classList.add("dark");
  button.innerText = "白天模式";
  window.localStorage && localStorage.setItem(WEBSITE_DARK_THEME_KEY, "dark");
}
/**
 * 移除暗色主题
 */
function removeDarkTheme() {
  const body = document.getElementById("body");
  const button = document.getElementById("btn");
  body.classList.remove("dark");
  button.innerText = "黑暗模式";
  window.localStorage && localStorage.setItem(WEBSITE_DARK_THEME_KEY, "light");
}
/**
 * 切换主题
 */
const toggleTheme = () => {
  const body = document.getElementById("body");
  if (body.classList.contains("dark")) {
    removeDarkTheme();
  } else {
    addDarkTheme();
  }
};

/**
 *
 */
(function () {
  let media = window.matchMedia("(prefers-color-scheme: dark)");
  const darkTheme =
    (window.localStorage && localStorage.getItem(WEBSITE_DARK_THEME_KEY)) ||
    "light";
  let callback = (e) => {
    let prefersDarkMode = e && e.matches;
    if (prefersDarkMode || darkTheme === "dark") {
      // 搞事情
      addDarkTheme();
    } else {
      removeDarkTheme();
    }
  };

  callback(null);

  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", callback);
  }
})();
