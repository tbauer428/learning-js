export const rows = (numberOfRows) => {
  let answer = [[1], [1, 1]]

  if (numberOfRows === 0) {
    return []
  } else if (numberOfRows === 1) {
    return [[1]]
  } else if (numberOfRows === 2) {
    return answer
  } else {
    for (let i = 2; i < numberOfRows; i++) {
      let prev = answer[answer.length - 1]
      let nextRow = [1]
      for (let o = 0; o < prev.length - 1; o++) {
        let current = prev[o]
        let next = prev[o + 1]
        nextRow.push(current + next)
      }
      nextRow.push(1)
      answer.push(nextRow)
    }
  }

  return answer
}
