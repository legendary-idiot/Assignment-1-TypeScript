function formatString(input: string, toUpper: boolean = true): string {
  if (toUpper) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}
