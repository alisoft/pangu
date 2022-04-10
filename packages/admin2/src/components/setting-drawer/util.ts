import { ConfigProvider } from 'ant-design-vue';
import { disable as darkreaderDisable, enable as darkreaderEnable } from '@umijs/ssr-darkreader';

const themeConfig = {
  daybreak: '#1890ff',
  dust: '#F5222D',
  volcano: '#FA541C',
  sunset: '#FAAD14',
  cyan: '#13C2C2',
  green: '#52C41A',
  geekblue: '#2F54EB',
  purple: '#722ED1',
};
/**
 * Daybreak-> #1890ff
 *
 * @param val
 */
export function genStringToTheme(val?: string): string {
  return val && themeConfig[val] ? themeConfig[val] : val;
}

export const updateTheme = async (dark: boolean, color?: string) => {
  if (typeof window === 'undefined') return;
  if (typeof window.MutationObserver === 'undefined') return;

  if (!ConfigProvider.config) return;
  ConfigProvider.config({
    theme: {
      primaryColor: genStringToTheme(color) || '#1890ff',
    },
  });

  if (dark) {
    const defaultTheme = {
      brightness: 100,
      contrast: 90,
      sepia: 10,
    };

    const defaultFixes = {
      invert: [],
      css: '',
      ignoreInlineStyle: [],
      ignoreImageAnalysis: [],
      disableStyleSheetsProxy: true,
    };
    if (window.MutationObserver) darkreaderEnable(defaultTheme, defaultFixes);
  } else {
    if (window.MutationObserver) darkreaderDisable();
  }
};
