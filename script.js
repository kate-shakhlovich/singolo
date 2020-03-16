//header

const itemLinks = document.querySelectorAll('.menu__item-link');
for (const itemLink of itemLinks) {
    itemLink.addEventListener('click', function () {
        for (const item of itemLinks) {
            item.classList.remove('menu__item-link_selected');
        }
        this.classList.add('menu__item-link_selected');
    });
}

//slider

const slideHandler = function() { 
    const iPhoneVertical = document.getElementsByClassName('box__iPhone-Vertical')[0];
    const iPhoneHorizontal = document.getElementsByClassName('box__iPhone-Horizontal')[0];
    const iPhoneMultiple = document.getElementsByClassName('slider__iPhone-Multiple')[0];
    const slider = document.getElementsByClassName('slider')[0];
    if (window.getComputedStyle(iPhoneMultiple).display === 'none') {
        iPhoneVertical.style.display = 'none';
        iPhoneHorizontal.style.display = 'none';
        iPhoneMultiple.style.display = 'inline-block';
        slider.style.background = '#648BF0';
    } else {
        iPhoneVertical.style.display = 'inline-block';
        iPhoneHorizontal.style.display = 'inline-block';
        iPhoneMultiple.style.display = 'none';
        slider.style.background = '#f06c64';
    }
};
const arrowRight = document.getElementsByClassName('slider__arrow-right')[0];
const arrowLeft = document.getElementsByClassName('slider__arrow-left')[0];
arrowRight.addEventListener('click', slideHandler);
arrowLeft.addEventListener('click', slideHandler);

const iPhoneVerticalHandler = function() {
    const darkScreenVertical = document.getElementsByClassName('dark-screen__iPhone-Vertical')[0];
    if (window.getComputedStyle(darkScreenVertical).display === 'none' ) {
        darkScreenVertical.style.display = 'inline-block';
    } else {
        darkScreenVertical.style.display = 'none';
    }
};
const iPhoneHorizontalHandler = function() {
    const darkScreenHorizontal = document.getElementsByClassName('dark-screen__iPhone-Horizontal')[0];
    if (window.getComputedStyle(darkScreenHorizontal).display === 'none' ) {
        darkScreenHorizontal.style.display = 'inline-block';
    } else {
        darkScreenHorizontal.style.display = 'none';
    }
};
const buttonIPhoneVertical = document.getElementsByClassName('button__iPhone-Vertical')[0];
const buttonIPhoneHorizontal = document.getElementsByClassName('button__iPhone-Horizontal')[0];
buttonIPhoneVertical.addEventListener('click', iPhoneVerticalHandler);
buttonIPhoneHorizontal.addEventListener('click', iPhoneHorizontalHandler);

//portfolio

const portfolioButtons = document.getElementsByClassName("button__item");
const images = Array.from(document.getElementsByClassName("portfolio-image"));
const gallery = document.getElementsByClassName("gallery")[0];
for (const button of portfolioButtons) {
    button.addEventListener("click", function() {
        // TODO Add styling
        const shuffledNodes = shuffle(images);
        for (const image of images) {
            gallery.removeChild(image);
        }
        for (const image of shuffledNodes) {
            gallery.appendChild(image);
        }
    });
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

//Get a quote