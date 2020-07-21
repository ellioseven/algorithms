// Binary Search.
// Type: Search
// Time: O(log n)
// Locates the index of a value within a sorted list by continuously dividing
// the list according to the middle value. If the middle value is greater than
// the search value, the search value must be within the lower to middle range,
// the list is divided from the low to middle, otherwise the list is divided
// from the middle to the high.

const binarySearch = ({ list, item }) => {
  let value, mid
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2)
    value = list[mid]
    if (value === item) return mid
    if (value > item) high = mid - 1
    else low = mid + 1
  }
}
