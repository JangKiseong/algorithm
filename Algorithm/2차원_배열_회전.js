const rotate = matrix => {
    let rotatedArray = [];

    for (let row=0;row<matrix[0].length;row++){
      rotatedArray.push([]); 
    }
    for (let column=0;column<matrix[0].length;column++){
      for (let row=0;row<matrix.length;row++){
          rotatedArray[column].push(matrix[row][column]) 
      } 
      rotatedArray[column].reverse(); 
    } 
    return rotatedArray;
}