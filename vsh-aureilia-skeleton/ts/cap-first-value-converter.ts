export class CapFirstValueConverter {
  fromView(value) {
    if (value.length < 1) return value;

    let firstLetterCap = value.slice(0, 1).toUpperCase();
    let restOfIt = value.slice(1);

    let changed = firstLetterCap + restOfIt;
    return changed;
  }
} 