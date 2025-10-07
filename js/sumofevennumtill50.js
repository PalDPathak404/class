var n = 50;
var sum =0;

for (var i = 1; i <= n; i++) {
    if(i % 2 == 0){
  sum = sum + i;
  }
}
console.log("Sum of even numbers from 1 to 50 is:  " + sum);