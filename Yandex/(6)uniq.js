function uniq(arr) {
  // let a = [1,2,2,3,4,5,5,5,5,5];
  let res = [];

  for (let i = 0; i < arr.length; i++) {
      const a = arr[i];

      let exist = 1;

      for (let n = 0; n < res.length; n++) {
          if (a == res[n]) {
              exist = 0;
              console.log(res[n]);
              break;
          }
      }

      if (exist == 1) {
          res.push(a);
      }
  }
  console.log(res)
}



uniq([1, 2, 5, 4, 2]); // [1, 2, 5, 4]
uniq([3, 3, 3, 5]); // [3, 5]
uniq([1, 4, 2, 2, 3, 4, 8]); // [1, 4, 2, 3, 8]
