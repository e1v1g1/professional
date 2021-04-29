let filterPopup = document.querySelector('.filterPopup');
let filterLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');
filterLabel.addEventListener('click', function() {
    filterPopup.classList.toggle('hidden');
    filterLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'img/filter.svg') {
        filterIcon.setAttribute('src', 'img/filter_hover.svg')
    } else {
        filterIcon.setAttribute('src', 'img/filter.svg')
    }
});


let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    });
});

let filterSizesList = document.querySelector('.filterSizesList');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizesList.classList.toggle('hidden');
});