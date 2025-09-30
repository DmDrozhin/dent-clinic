// src/utils/assets.ts

/**
 * Создаёт карту из glob-результата вида:
 * { './path/to/file.svg': { default: 'url' }, ... }
 *
 * Возвращает объект { 'file.svg': 'url', ... }
 */
export function createAssetMap(
  globResult: Record<string, { default: string }>
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(globResult).map(([path, module]) => {
      const filename = path.split('/').pop();
      return [filename as string, module.default];
    })
  );
}

/**
 * Возвращает полный путь к иконке в папке assets/images/ui
 */
export function getIconPath(file?: string): string {
  if (!file) {
    return '';
  }
  return new URL(`../assets/images/ui/${file}`, import.meta.url).href;
}
