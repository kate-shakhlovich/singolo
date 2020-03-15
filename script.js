const itemLinks = document.querySelectorAll('.menu__item-link');
for (const itemLink of itemLinks) {
    itemLink.addEventListener('click', function () {
        for (const item of itemLinks) {
            item.classList.remove('menu__item-link_selected');
        }
        this.classList.add('menu__item-link_selected');
    })
}

