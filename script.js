const answer = document.querySelector('.answer');
let reset = document.querySelector('.reset');

const radius = document.querySelector('.radius');
const radiusSubmit = document.querySelector('.radiusSubmit');

function surfaceAreaOfSphere () {
  const r = Number(radius.value);
  const result = 4 * 3.142 * r * r;
  answer.textContent = "answer: " + result;
  answer.style.backgroundColor = "#2666CF"
  setReset ();
  console.log("Heyoo")
}
radiusSubmit.addEventListener('click', surfaceAreaOfSphere);
// radiusSubmit.addEventListener('click', () => {console.log("Hey")})


function setReset () {
  reset = document.createElement ('button');
  reset.textContent = 'reset';
  document.body.append(reset);
  reset.addEventListener('click', resetCalculator);
}

function resetCalculator() {

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  reset.parentNode.removeChild(reset);

  radius.value = '';
  radius.focus();

  answer.style.backgroundColor = "#395B64";
}
