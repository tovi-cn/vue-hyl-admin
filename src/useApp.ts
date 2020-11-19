// Application related functions
import type { ProjectConfig } from '/@/types/config';
import type { App } from 'vue';
import { computed, ref } from 'vue';

import { ThemeModeEnum } from '/@/enums/appEnum';
import { PROJ_CFG_KEY } from '/@/enums/cacheEnum';

import projectSetting from '/@/settings/projectSetting';
import { getLocal } from '/@/utils/helper/persistent';
import { isUnDef, isNull } from '/@/utils/is';
import {
  updateGrayMode,
  updateColorWeak,
  updateHeaderBgColor,
  updateSidebarBgColor,
} from '/@/setup/theme';

import { appStore } from '/@/store/modules/app';

let app: App;
export function setApp(_app: App): void {
  app = _app;
}

export function getApp(): App {
  return app;
}

// TODO 主题切换
export function useThemeMode(mode: ThemeModeEnum) {
  const modeRef = ref(mode);
  const html = document.documentElement;
  const clsList = html.classList;

  const change = () => {
    clsList.contains(mode) ? clsList.remove(mode) : clsList.add(mode);
  };
  return {
    runChangeThemeMode: change,
    mode: computed(() => modeRef.value),
  };
}

// 初始项目配置
export function useInitAppConfigStore() {
  let projCfg: ProjectConfig = getLocal(PROJ_CFG_KEY) as ProjectConfig;
  if (!projCfg) {
    projCfg = projectSetting;
  }
  const { colorWeak, grayMode, headerBgColor, menuBgColor } = projCfg;
  try {
    // if (
    //   themeColor !== primaryColor &&
    //   themeColor &&
    //   process.env.VUE_APP_USE_THEME_REPLACER !== 'TRUE'
    // ) {
    //   updateTheme(themeColor);
    // }
    headerBgColor && updateHeaderBgColor(headerBgColor);
    menuBgColor && updateSidebarBgColor(menuBgColor);
    grayMode && updateGrayMode(grayMode);
    colorWeak && updateColorWeak(colorWeak);
  } catch (error) {
    console.log(error);
  }
  appStore.commitProjectConfigState(projCfg);
}

// 配置提供者
export function useConfigProvider() {
  function transformCellText({ text }: { text: string }) {
    if (isNull(text) || isUnDef(text)) {
      return ' - ';
    }
    return text;
  }
  return {
    transformCellText,
  };
}
