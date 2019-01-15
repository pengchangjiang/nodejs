
function testArrLength() {
  console.time('Arr.lenght');
  let arr = [];
  for (let i = 0; i < 100000; i++) {
    arr.length = i;
  }
  console.timeEnd('Arr.lenght');
}
function testArrPush() {
  console.time('Arr.push');
  let arr = [];
  for (let i = 0; i < 100000; i++) {
    arr.push(i);
  }
  console.timeEnd('Arr.push');
}

testArrLength();
testArrPush();