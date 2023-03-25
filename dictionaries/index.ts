import "server-only";

const dictionaries = {
  "zh-cn": () => import("./zh-cn.json").then((module) => module.default),
};

// @ts-ignore
export const getDictionary = async (locale: string) => dictionaries[locale || 'zh-cn']();
