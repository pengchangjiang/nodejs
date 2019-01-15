function makeData() {
  let arr = [];
  for (let i = 0; i < 100000; i++) {
    arr.length = i;
  }
  return arr;
}

function testfor1() {
  let arr = makeData();
  console.time('for1');
  for (let i = 0; i < arr.length; i++) {
    let k = arr[i];
  }
  console.timeEnd('for1');
}
function testfor2() {
  let arr = makeData();
  console.time('for2');
  for (let i = 0, len = arr.length; i < len; i++) {
    let k = arr[i];
  }
  console.timeEnd('for2');
}
function testfor3() {
  let arr = makeData();
  console.time('for3');
  for (let i = 0; arr[i] !== undefined; i++) {
    let k = arr[i];
  }
  console.timeEnd('for3');
}
function testForEach() {
  let arr = makeData();
  console.time('forEach');
  arr.forEach(a => {
    let k = a;
  });
  console.timeEnd('forEach');
}
function testforof() {
  let arr = makeData();
  console.time('for of');
  for (const a of arr) {
    let k = a;
  }
  console.timeEnd('for of');
}
function testforin() {
  let arr = makeData();
  console.time('for in');
  for (const a in arr) {
    let k = a;
  }
  console.timeEnd('for in');
}
function testmap() {
  let arr = makeData();
  console.time('map');
  arr.map(a => { let k = a; })
  console.timeEnd('map');
}
testfor1();
testfor2();
testfor3();
testForEach();
testforof();
testforin();
testmap();
