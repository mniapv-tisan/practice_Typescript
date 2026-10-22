function getFirstElement<T>(arr:T[]):T{
      return arr[0];
}

let ans = getFirstElement(["girl","children","boys"]);
let ans1 = getFirstElement([21,3,34,43,5,6,7,8,9]);

console.log(ans);
console.log(ans1);