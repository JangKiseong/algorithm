const transpose = matrix => {
  const transposedArray = [];
  for (let i=0;i<matrix[0].length;i++) {
      transposedArray.push(new Array(matrix.length).fill(0));
  }
  for (let row=0;row<matrix.length;row++) {
      for (let column=0;column<matrix[0].length;column++) {
          transposedArray[column][row] = matrix[row][column];
      }
  }
  return transposedArray;
}