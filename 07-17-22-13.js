function dataReverse(data) {
  console.log(data);
  let blocks = [];
  for(let i = 0; i < data.length; i += 8) {
    blocks.push(data.slice(i, i + 8));
  }
  console.log(blocks);
  blocks = blocks.reduce((acc, val) => val.concat(acc), []);
  console.log(blocks);
  return blocks;
}