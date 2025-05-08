window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
  
    const progressBar = document.querySelector('.scroll-progress');
    progressBar.style.width = scrollPercent + '%';
  });
  
  const products = [
    {
      name: "Cappuccino",
      price: "2.05",
      img: "images/cup-coffee.svg",
      desc: "In some cases, coffee may be good for health, as it may offer benefits such as lowering the risk of type 2 ...",
    },
    {
      name: "Americano",
      price: "1.25",
      img: "images/cup-coffee.svg",
      desc: "In some cases, coffee may be good for health, as it may offer benefits such as lowering the risk of type 2 ...",
    },
    {
      name: "Espresso",
      price: "1.40",
      img: "images/cup-coffee.svg",
      desc: "In some cases, coffee may be good for health, as it may offer benefits such as lowering the risk of type 2 ...",
    },
    {
      name: "Latte",
      price: "1.09",
      img: "images/cup-coffee.svg",
      desc: "In some cases, coffee may be good for health, as it may offer benefits such as lowering the risk of type 2 ...",
    }
  ];
  
  const productList = document.getElementById("product-list");
  
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
  
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-desc">${product.desc}</p>
      <div class="product-info">
        <span>0.25l</span>
        <span class="product-price">${product.price}</span>
      </div>
      <button class="order-btn">Order in bulk</button>
    `;
  
    productList.appendChild(card);
  });
  
  





  document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelector('#reviews .reviews');
    const leftBtn = document.querySelector('#reviews .left');
    const rightBtn = document.querySelector('#reviews .right');
  
    let scrollAmount = 0;
    const scrollStep = 270; // card width + gap
  
    leftBtn.addEventListener('click', () => {
      scrollAmount -= scrollStep;
      if (scrollAmount < 0) scrollAmount = 0;
      reviews.style.transform = `translateX(-${scrollAmount}px)`;
    });
  
    rightBtn.addEventListener('click', () => {
      const maxScroll = reviews.scrollWidth - reviews.clientWidth;
      scrollAmount += scrollStep;
      if (scrollAmount > maxScroll) scrollAmount = maxScroll;
      reviews.style.transform = `translateX(-${scrollAmount}px)`;
    });
  });
  

  document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your request has been submitted!');
  });
  