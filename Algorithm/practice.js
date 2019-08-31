var num = 123456;
var sum = 0;
while(num > 0) {
  sum += num%10;
  console.log(num%10)
  num = parseInt(num/10);
}
