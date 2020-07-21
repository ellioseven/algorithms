// Selection Sort
// Type: Sort
// Time: n^2
// Sorts a list by in-place comparision. Runs a nested comparision on each
// item in the array. This example sorts a list with a minimum comparision.
// [20, 10, 5, 40] => [5, 10, 20, 40].

const getMin = ({ list }) => list.reduce((min, value, index) =>
  value < list[min] ? index : min, 0)

const selectionSort = ({ list }) => {
  const sorted = []
  let values = [ ...list ]

  for (let i = 0; i < list.length; i++) {
    const minIdx = getMin({ list: values })
    const minVal = values[minIdx]
    values.splice(minIdx, 1)
    sorted.push(minVal)
  }

  return sorted
}
