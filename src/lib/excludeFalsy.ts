export const excludeFalsy = <T>(arr: T[]) =>
  arr.filter(Boolean) as Exclude<
    T,
    0n | -0 | 0 | '' | null | undefined | false | typeof NaN
  >[];
