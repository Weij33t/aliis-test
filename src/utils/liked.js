export const sortLiked = (array, by, order) => {
  const multiple = order === 'asc' ? 1 : -1
  array.sort((a, b) => (a[by] - b[by]) * multiple)
  return array
}
