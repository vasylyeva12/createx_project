// #top_catigories_container

const top_catigories_container = document.querySelector('#top_catigories_container');

const top_catigories_data = [
    {
        id: 1,
        category: "Women’s",
        img: 'media/top_catigories/women.svg'
    },
    {
        id: 2,
        category: "Men’s",
        img: 'media/top_catigories/men.svg'
    },
    {
        id: 3,
        category: "Kids’",
        img: 'media/top_catigories/kids.svg'
    }
]

top_catigories_data.forEach(({category, img}) => {
    const cardElem = document.createElement('div');
    const imgElem = document.createElement('div');
    const categoryElem = document.createElement('p');

    categoryElem.innerText = category;
    cardElem.classList.add('category_card')
    imgElem.style.backgroundImage = `url('${img}')`;
    // imgElem.style.height = '390px';
    // imgElem.style.width = '390px';

    cardElem.append(imgElem, categoryElem);
    top_catigories_container.append(cardElem)
})

// #new_arrivals_cards

const new_arrivals_cards = document.querySelector('.new_arrivals_cards')

const new_arrivals_data = [
    {
        id: 1,
        img: 'media/arrivals_card/cap.svg',
        title: 'Black and white sport cap',
        price: '18.15'
    },
    {
        id: 2,
        img: 'media/arrivals_card/glasses.svg',
        title: 'Metal bridge sunglasses',
        price: '89.95'
    },
    {
        id: 3,
        img: 'media/arrivals_card/romper.svg',
        title: 'Green baby romper',
        price: '20.40'
    },
    {
        id: 4,
        img: 'media/arrivals_card/jeans.svg',
        title: 'Mid-rise slim cropped fit jeans',
        price: '40.00'
    },
    {
        id: 5,
        img: 'media/arrivals_card/earrings.svg',
        title: 'Red dangle earrings',
        price: '29.95'
    },
    {
        id: 6,
        img: 'media/arrivals_card/shoes.svg',
        title: 'Baby shoes with laces',
        price: '30.60'
    }
]

new_arrivals_data.forEach(({img, title, price}) => {
    const cardElem = document.createElement('div')
    const imgElem = document.createElement('div')
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
    const heartElem = document.createElement('p')
    
    titleElem.innerText = title;
    priceElem.innerText = `$${price}`;
    titleElem.style.padding = '16px 16px 8px 16px ';
    priceElem.style.padding = '16px 16px 8px 16px '

    cardElem.classList.add('arrivals_card');
    imgElem.style.backgroundImage = `url('${img}')`;
    heartElem.classList.add('fa-regular');
    heartElem.classList.add('fa-heart');
    heartElem.classList.add('heart_elem');

    heartElem.addEventListener('click', () => heartElem.classList.toggle('liked'));

    imgElem.append(heartElem);
    cardElem.append(imgElem, titleElem, priceElem);
    new_arrivals_cards.append(cardElem);

})