const row = document.querySelector(".row")



window.addEventListener('load', () => {
    fetch("https://652553ed67cfb1e59ce71adc.mockapi.io/bestsellers")
        .then(res => res.json())
        .then(data => innerProduct(data))
        .catch(error => console.log(error))
})

function innerProduct(data) {
    data.forEach(element => {
        row.innerHTML += `
        <div class="товар-content-box">
        <img class="товар-icon2" src="./img/heart.png" alt="">
        <img class="товар-img" src="${element.img}" alt="">
        <h1 class="товар-content-box-title">${element.title}</h1>
        <p class="товар-content-box-text">${element.name}</p>
        <h1 class="товар-content-box-number">${element.price}₽</h1>
        <p class="товар-content-box-text">Размеры</p>
        <div class="boss">
          <div class="boss-b">
            <h1 class="boss-b-title">ШИРИНА</h1>
            <p class="boss-b-text">${element.width} СМ</p>
          </div>
          <h1 class="boss-x">×</h1>
          <div class="boss-b">
            <h1 class="boss-b-title">ГЛУБИНА</h1>
            <p class="boss-b-text">${element.depth} СМ</p>
          </div>
          <h1 class="boss-x">×</h1>
          <div class="boss-b">
            <h1 class="boss-b-title">ВЫСОТА</h1>
            <p class="boss-b-text">${element.height} СМ</p>
          </div>
        </div>
        <button class="boss-btn">Добавить в корзину</button>
      </div> 
        `
    });
}