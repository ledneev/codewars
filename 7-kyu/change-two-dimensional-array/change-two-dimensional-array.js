function matrix(array) {
  return array.map((row, i) => 
    row.map((val, j) => 
    i === j ? (val < 0 ? 0 : 1): val       
    )                
  )
}