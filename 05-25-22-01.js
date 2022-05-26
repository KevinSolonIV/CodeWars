const getCount = str => str.match(/[aeiou]/gi) == null ? 0 : str.match(/[aeiou]/gi).length;

//better:

const getCount2 = str => (str.match(/[aeiou]/gi) || []).length;

//also good:

const getCount3 = str => str.length - str.replace(/[aeiou]/gi, "").length;
const getcount4 = str => str.replace(/[^aeiou]/gi, "").length;