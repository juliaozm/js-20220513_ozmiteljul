/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  const newArr = []
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      newArr.indexOf(arr[i]) === -1 ? newArr.push(arr[i]) : ''
    }
    return newArr.sort(function(a, b) {return a-b})
  } else {
    return []
  }
}
