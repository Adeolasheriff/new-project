let openShoping = document.querySelector('.shoping');
let closeShoping = document.querySelector('.closeShoping')
let list = document.querySelector('.list')
let body = document.querySelector('body')
let listCard = document.querySelector('.listCard')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')


 openShoping.addEventListener('click',()=>{
    body.classList.add('active');

 })

 closeShoping.addEventListener('click',()=>{
    body.classList.remove('active')
 })
 
 let products = [

{
    id: 1,
    name: "PRODUCT NAME 1",
    image: '1.jpg',
    price:120000
},

{
    id: 2,
    name: "PRODUCT NAME 2",
    image: '2.jpg',
    price:140000
},

{
    id: 3,
    name: "PRODUCT NAME 3",
    image: '3.jpg',
    price:160000,
},

{
    id: 4,
    name: "PRODUCT NAME 4",
    image: '4.jpg',
    price:180000,
},





{
    id: 5,
    name: "PRODUCT NAME 5",
    image: '5.jpg',
    price:200000
},



{
    id: 6,
    name: "PRODUCT NAME 6",
    image: '6.jpg',
    price:220000
}

 ];

 let listCards = [];
//  function initApp()
//     product.map((value,key)=>)

    let initApp = () => {
        products.map((value,key)=>{
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML =`
            <img src = " images/${value.image}"/>
            <div class="title">${value.name}  </div>
            <div class="price">$${value.price.toLocaleString()}  </div>
            <button onclick="addToCart(${key})"> add to cart </>

            `
            list.appendChild(newDiv)
        });
    }


 initApp();


 function addToCart(key){
    if(listCards[key] == null){
       listCards[key]=products[key];
       listCards[key].quantity = 1;
    }
    reLoadCart();
 }
 let reLoadCart = () => {
    listCards.innerHTML = '';
    let count = 0;
    let totalPrice = 0;


     listCards.map((value,key)=>{
        totalPrice = totalPrice+value.price;
        count = count+value.quantity;


        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            
             <div>
             <img src ="images/${value.image}"/>
             </div>
             <div>${value.name}</div>
             <div>${value.price.toLocaleString()}</div>
             <div>
             <button onclick="changeQuantity(${key}, ${value.quantity -1})"> - </button>
             <div class="count">${value.quantity}</div>
             <button onclick="changeQuantity(${key}, ${value.quantity +1})">+ </button>
             </div>
            
            
            `;
            listCard.appendChild(newDiv);
        }
     })
     total.innerHTML= totalPrice.toLocaleString();
     quantity.innerHTML= count;
 }



 function changeQuantity(key,quantity){
    if(quantity == 0){
        delete listCards[key];
    } else {
        listCards[key].quantity  = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reLoadCart();
 }
 
