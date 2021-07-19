const catBasket = document.getElementById('cat-basket');
const cats = [
    {
        name: 'Pumpkin',
        thumbnail: 'imgs/Pumpkin.jpeg'
    },
     {
        name: 'Snuggles',
        thumbnail: 'imgs/Snuggles.png'
        // credit: 'https://unsplash.com/photos/OzAeZPNsLXk'
    },
     {
        name: 'Cruella',
        thumbnail: 'imgs/Cruella.png',
        // credit: 'https://unsplash.com/photos/w2DsS-ZAP4U'
    },
]

let html = "";

cats.forEach((cat => {
    html = html + `
                <div class="profile">
                    <img class="pic" src="${cat.thumbnail}"></img>
                    <div class="subtitle">${cat.name}</div>
                    <button>Follow</button>
                </div>
                
            `
}))

catBasket.innerHTML = html;


