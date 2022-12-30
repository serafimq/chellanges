import { AppLayoutsType, AppLayoutToFileMap } from "@/layouts/constants/layout.types";

export async function loadLayoutMiddleware(route) {
  const { layout } = route.meta;
  const normalizedLayoutName = layout || AppLayoutsType.base;
  const fileName = AppLayoutToFileMap[normalizedLayoutName];
  const fileNameWithoutExtension = fileName.split(".vue")[0];

  const component = await import(`../../layouts/${fileNameWithoutExtension}.vue`);
  route.meta.layoutComponent = component.default;
}
