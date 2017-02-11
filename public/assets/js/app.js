console.clear();

const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 35; // max distance to move shadow
                 // half this each direction from the middle

hero.addEventListener('mousemove', shadow);

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: mouseX, offsetY: mouseY } = e;

  if (this !== e.target) {
    [mouseX, mouseY] = [mouseX + e.target.offsetLeft, mouseY + e.target.offsetTop];
  }

  const walkX = Math.round(mouseX / width * walk - walk/2);
  const walkY = Math.round(mouseY / height * walk - walk/2);

  text.style.textShadow = `${walkX}px ${walkY}px 2px rgba(46, 46, 44, 0.25)`;
}
