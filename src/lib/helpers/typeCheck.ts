export type Need<T, K extends keyof T> = Partial<T> & Pick<T, K>;
export type Optional<T, K extends keyof T> = Partial<T> & Omit<T, K>;

export const isType = <T>(obj: any, ...keys: Array<keyof T>): obj is T => {
  for (const key of keys) {
    if (obj[key] === null || obj[key] === undefined) return false;
  }
  return true;
};
