export function enumToPgEnum(
  enumeration: Record<string, string>,
): [string, ...string[]] {
  return Object.values(enumeration).map((value: string) => `${value}`) as [
    string,
    ...string[],
  ];
}
