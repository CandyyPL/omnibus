export const countValuesInObjects = (arr, keyName) => {
  let result = {}

  arr.forEach((e) => {
    let valName = e[keyName]

    if (Object.keys(result).includes(e[keyName])) {
      result[valName] += 1
    } else {
      result[valName] = 1
    }
  })

  return result
}
