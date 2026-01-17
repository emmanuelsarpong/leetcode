var getRow = function (rowIndex) {
  // create a empty array called triangle. This essentially creates the triangle from which we will build the rows from
  const triangle = [];

  // Create loop to add a row as long as the index is smaller or equal to the rowIndex
  for (let i = 0; i <= rowIndex; i++) {
    // Create emty array so we can create rows from
    const row = [];

    // this loop creates each index within a row, so it adds one whenever j <= i
    for (let j = 0; j <= i; j++) {
        // If the value is at the beginning or end of the row, it must be 1.
      if (j === 0 || j === i) {
        row[j] = 1;
      } else {
        // Otherwise, take the two numbers above this position from the previous row and add them together
        row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }

    triangle.push(row);
  }

  return triangle[rowIndex];
};
