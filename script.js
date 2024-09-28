const hamburger =  document.querySelector('.ham');
const nav   = document.querySelector('.links');
let checker = false;

hamburger.addEventListener('click', ()=>{
    if (checker === false) {
        nav.style.display = 'flex';
        checker = true
    }
    else {
        nav.style.display = 'none';
        checker = false;
    }
})