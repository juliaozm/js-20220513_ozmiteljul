/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (param === 'asc') {
    return [...arr].sort(new Intl.Collator(['ru','en'], {caseFirst: 'upper' } ).compare);
  } else if (param === 'desc') {''
    return [...arr].sort(new Intl.Collator(['ru','en'], {caseFirst: 'lower' } ).compare).reverse();
  }
}
