const form = document.getElementById('form');
const result = document.getElementById('result');
const select = document.getElementById('select');
let funct = '';
select.onchange = (e) => {
  funct = e.target.value;
  form.onsubmit = (b) => {
    b.preventDefault();
    if (e.target.value === 'resverseString') {
      reverseStr(b.target[0].value);
    } else {
      reverseWord(b.target[0].value);
    }
  };
};

const reverseWord = (str) => {
  let arr = str.split('').reverse().join('');
  result.innerText = str.split('').reverse().join('');
  return arr;
};

const reverseStr = (str) => {
  let arr = str.split(' ').reverse().join(' ');
  result.innerText = str.split(' ').reverse().join(' ');
  return arr;
};