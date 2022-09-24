
let base = [
    {id: 1,  img: './img/image 1.png', title: 'wnw'},
]



let row = document.querySelector('.row')

base.forEach((item) =>{
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./img/image 1.png" alt="$item.subtitle"><h2 class="card__title">Syltherine</h2><h3>Stylish cafe chair</h3> <h2>Rp 2.500.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./img/image 2.png" alt="$item.subtitle"><h2 class="card__title">Leviosa</h2><h3>Stylish cafe chair</h3> <h2>Rp 2.500.000<h2></div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./img/image 3.png" alt="$item.subtitle"><h2 class="card__title">Lolito</h2><h3>Luxury big sofa</h3> <h2>Rp 7.000.000<h2></div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./img/image 4.png" alt="$item.subtitle"><h2 class="card__title">Respira</h2><h3>Minimalist fan</h3><h2>Rp 500.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./img/image 9.png" alt="$item.subtitle"><h2 class="card__title">Grifo</h2><h3>Night lamp</h3>  <h2>Rp 1.500.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./img/image 6.png" alt="$item.subtitle"><h2 class="card__title">Muggo</h2><h3>Small mug</h3>   <h2>Rp 150.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./img/image 7.png" alt="$item.subtitle"><h2 class="card__title">Pingky</h2><h3>Cute bed set</h3>   <h2>Rp 7.000.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./img/image 8.png" alt="$item.subtitle"><h2 class="card__title">Potty</h2><h3>Minimalist flower pot</h3>   <h2>Rp 2.500.000<h2> </div>'
    
})
        
