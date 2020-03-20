//header

window.onscroll = function() {
    const positionCursor = window.scrollY + 89;
    const sections = document.getElementsByClassName('section');
    const itemLinks = document.getElementsByClassName('menu__item-link');
    for (const section of sections) {
        if (section.offsetTop <= positionCursor && (section.offsetTop + section.offsetHeight) > positionCursor) {
            for (const itemLink of itemLinks) {
                itemLink.classList.remove('menu__item-link_selected');
                const hash = itemLink.getAttribute('href');
                if (section.getAttribute('nav-id') === hash.substring(1)) {
                    itemLink.classList.add('menu__item-link_selected');
                    history.replaceState(null, null, hash);
                }
            }
            return;         
        }
    }
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
        if (this.classList.contains('button__item_selected')) return;
        for (const item of portfolioButtons) {
            item.classList.remove('button__item_selected');
        }
        this.classList.add('button__item_selected');
        
        const shuffledNodes = shuffle(images);
        for (const image of images) {
            gallery.removeChild(image);
        }
        for (const image of shuffledNodes) {
            gallery.appendChild(image);
        }
    });
}


function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const imageClassSelected = 'portfolio-image_selected';
const imagesPortfolio = document.getElementsByClassName('portfolio-image');
for (const imagePortfolio of imagesPortfolio) {
    imagePortfolio.addEventListener('click', function() {
        const selectedImage = document.getElementsByClassName(imageClassSelected)[0];
        if (selectedImage) {
            selectedImage.classList.remove(imageClassSelected);
        }
        if (this !== selectedImage) {
            this.classList.add(imageClassSelected);
        }
    });
}



//Get a quote