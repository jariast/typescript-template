function fillArray(arrayLength: number, prefix: string): Array<string> {
  return Array.from({ length: arrayLength + 1 }, (_, i) => `${prefix}${i}`);
}

export { fillArray };
