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

// banners_grid_container

const banners_grid_container = document.querySelector('#banners_grid_container')
const banners_grid_data = [
    {id: 1,
    img: 'media/banners/summer.svg',
    sub_title: 'SUMMER COLLECTIONS',
    title: 'Sale Up to 70%',
    btn: 'Explore new prices'
    },
    {id: 2,
    img: 'media/banners/deal.svg',
    sub_title: 'DEAL OF THE WEEK',
    title: 'Stay Warm With Our New Sweaters',
    btn: 'Limited time offer'
    },
    {id: 3,
    img: 'media/banners/new-collection.svg',
    sub_title: 'NEW COLLECTION',
    title: 'Shoes & Bags autumn / winter 2020 ',
    btn: 'See offers'
     },
    {id: 4,
    img: 'media/banners/delivery.svg.png',
    sub_title: 'FOR All NEW EMAIL SUBSCRIBERS',
    title: 'Get 5% Off & Free Delivery'    
    }
]

banners_grid_data.forEach(({img, sub_title, title, btn}) => {
    const cardElem = document.createElement('div');
    const subTitleElem = document.createElement('p');
    const titleElem = document.createElement('h3');
    const btnElem = document.createElement('div');

    subTitleElem.innerText = sub_title;
    titleElem.innerText = title;
    

    btn === undefined ? '' : btnElem.innerText = btn;
    btn === undefined ? '' : btnElem.classList.add('btnElem');


    cardElem.style.backgroundImage = `url('${img}')`;
   
    cardElem.classList.add('banners_cards');
    subTitleElem.classList.add('banner_sub_title');
    titleElem.classList.add('banner_title');
    

    cardElem.append(subTitleElem, titleElem, btnElem);
    banners_grid_container.append(cardElem);    

})

//popular_catigories_card

const popular_catigories_card = document.querySelector('.popular_catigories_card')

const popular_catigories_data = [
    {
        id: 1,
        img: 'media/categories/tops.svg',
        category: 'Tops'
    },
    {
        id: 2,
        img: 'media/categories/t-shirts.svg',
        category: 'T-shirts'
    },
    {
        id: 3,
        img: 'media/categories/caps.svg',
        category: 'Caps'
    },
    {
        id: 4,
        img: 'media/categories/sandals.svg',
        category: 'Sandals'
    },
    {
        id: 5,
        img: 'media/categories/jackets.svg',
        category: 'Jackets'
    },
    {
        id: 6,
        img: 'media/categories/coats.svg',
        category: 'Coats'
    }
]

popular_catigories_data.forEach(({img, category}) => {
    const cardElem = document.createElement('div')
    const imgElem = document.createElement('div');
    const categoryElem = document.createElement('p');

    categoryElem.innerText = category;
    imgElem.style.backgroundImage = `url('${img}')`;
      

    cardElem.classList.add('popular_card');

    cardElem.append(imgElem, categoryElem)
    popular_catigories_card.append(cardElem)


})

const trending_card = document.querySelector('.trending_card');

const trending_card_data = [
    {
        id: 1,
        img: 'media/trending_card/shirt.svg',
        title: 'Shirt with insertion lace trims',
        price: '49.95'
    },
    {
        id: 2,
        img: 'media/trending_card/watch.svg',
        title: 'Chrono watch with blue leather belt',
        price: '120.60'
    },
    {
        id: 3,
        img: 'media/trending_card/coat.svg',
        title: 'Check coat with colour contrast',
        price: '183.45'
    }
]

trending_card_data.forEach(({img, title, price}) => {

    const cardElem = document.createElement('div');
    const imgElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');

    titleElem.innerText = title;
    priceElem.innerText = `$${price}`

    imgElem.style.backgroundImage = `url('${img}')`;

    cardElem.classList.add('trending_cards');
    titleElem.classList.add('trending_name');
    priceElem.classList.add('trending_price')



    cardElem.append(imgElem, titleElem, priceElem);
    trending_card.append(cardElem);

})