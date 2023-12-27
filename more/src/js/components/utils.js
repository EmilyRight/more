/// Unique ID
/**
  * @param {number} dec
  * @return {string}
  */
function dec2hex(dec) {
  return (`0${dec.toString(16)}`).substring(-2);
}

/**
 * @param {number} len
 * @return {string}
 */
function generateId(len) {
  const arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join('');
}

function getCurrentYear() {
  const yearSpan = document.querySelectorAll('.current-year');
  yearSpan.forEach((span) => {
    span.innerHTML = new Date().getFullYear().toString();
  });
}

function countScroll() {
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  );
  const { clientHeight } = document.documentElement;
  const currentPos = 100 * (window.scrollY / (scrollHeight - clientHeight));
  const bar = document.querySelector('.bar_colored');
  bar.style.width = `${currentPos}%`;
  handleScrollBar();
}

function handleScrollBar() {
  const fixedBar = document.querySelector('.bar');
  const footer = document.querySelector('.section-footer');
  const options = {
    root: null,
    rootMargin: '5px',
    threshold: 0,
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fixedBar.classList.remove('fixed');
      } else {
        fixedBar.classList.add('fixed');
      }
    });
    observer.unobserve(footer);
  }, options);
  observer.observe(footer);
}

export { generateId, getCurrentYear, countScroll };
