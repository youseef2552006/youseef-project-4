// login and logout and name 
var links = document.querySelector("#links")
var user = document.querySelector("#a-user")
var ul = document.querySelector("#hello-nv")

if ( localStorage.getItem("first") ){
    links.remove()
    ul.style.display = "block"
    user.innerHTML = "Hello: " + localStorage.getItem("first") 
}

var logout = document.querySelector("#logout")
logout.addEventListener("click" , function(e){
    localStorage.clear();
    setTimeout(() => {
            window.location = "index.html"
        }, 0);
})
////////////////////////////////////////////////////
// view the carts in home page 
var cart = document.querySelector("#item-cart")
var shoppingcart = document.querySelector(".shoppingcart")
cart.addEventListener("click" , check)

function check (){
    if (order.innerHTML != ""){
        if ( shoppingcart.style.display == "block" ){
            shoppingcart.style.display = "none"
        } else {
            shoppingcart.style.display = "block"
        }
    }
}
//////////////////////////////////////////////


var AllProducts = document.querySelector(".products")

var products = [
    {
        id : 1,
        name : "iphon 7",
        price : "3000", 
        category : "mobile",
        imgUrl : "images/9.jpg"
    },
    {
        id : 2,
        name : "iphon 7 pro",
        price : "2500",
        category : "mobile",
        imgUrl : "images/2.jpg"
    },
    {
        id : 3,
        name : "oppo now 3",
        price : "3300",
        category : "mobile",
        imgUrl : "images/3.jpg"
    },
    {
        id : 4,
        name : "iphon 9",
        price : "4000",
        category : "mobile",
        imgUrl : "images/4.jpg" 
    },
    {
        id : 5,
        name : "iphon 7 pro max",
        price : "5000",
        category : "mobile",
        imgUrl : "images/5.jpg" 
    },
    {
        id : 6,
        name : "samsong",
        price : "6000",
        category : "mobile",
        imgUrl : "images/6.jpg" 
    },
    {
        id : 7,
        name : "iphon 8 pro",
        price : "7000",
        category : "mobile",
        imgUrl : "images/7.jpg" 
    },
    {
        id : 8,
        name : "iphon 9 pro max",
        price : "8000",
        category : "mobile",
        imgUrl : "images/8.jpg" 
    },
    {
        id : 9,
        name : "oppo now 4",
        price : "9000",
        category : "mobile",
        imgUrl : "images/9.jpg" 
    },
    {
        id : 10,
        name : "samsong a14",
        price : "10000",
        category : "mobile",
        imgUrl : "images/10.jpg" 
    },
    {
        id : 11,
        name : "samsong a24",
        price : "11000",
        category : "mobile",
        imgUrl : "images/11.jpg" 
    },
    {
        id : 12,
        name : "altra s",
        price : "12000",
        category : "mobile",
        imgUrl : "images/12.jpg" 
    },
    {
        id : 13,
        name : "altra ss",
        price : "13000",
        category : "mobile",
        imgUrl : "images/13.jpg" 
    },
    {
        id : 14,
        name : "poco x3",
        price : "14000",
        category : "mobile",
        imgUrl : "images/14.jpg" 
    },
    {
        id : 15,
        name : "poco x4",
        price : "15000",
        category : "mobile",
        imgUrl : "images/15.jpg", 
    },
]
// function drewItem() {
//     var y = products.map((item) => {
//         return `
//         <div class="product-item card pb-2" style="width: 300px; text-align: center;">
//             <img src="${item.imgUrl}" alt="">
//             <div class="product-item-content" style="margin-top: 5px;">
//                 <h5>${item.name}</h5>
//                 <p>Price : ${item.price}</p>
//                 <p style="margin-top: -10px;">Category : ${item.category}</p>
//             </div>
//             <div class="product-item-action">
//                 <button class="btn btn-primary addbtn" onClick="addToCart(${item.id})">add to cart</button>
//                 <button class="btn btn-danger addbtn1" style="display: none;" id="">remove from cart</button>
//                 <i class="fas fa-heart"></i>
//             </div>
//         </div>
//         `;
//     }).join(''); 
//     AllProducts.innerHTML = y;
// }
// drewItem();
function drewItem(productList = products) {
    var y = productList.map((item) => {
        return `
        <div class="product-item card pb-2" style="width: 300px; text-align: center;">
            <img src="${item.imgUrl}" alt="">
            <div class="product-item-content" style="margin-top: 5px;">
                <h5>${item.name}</h5>
                <p>Price : ${item.price}</p>
                <p style="margin-top: -10px;">Category : ${item.category}</p>
            </div>
            <div class="product-item-action">
                <button class="btn btn-primary addbtn" onClick="addToCart(${item.id})">Add to cart</button>
            </div>
        </div>
        `;
    }).join('');

    AllProducts.innerHTML = y;
}


var searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", function () {
    let value = searchInput.value.toLowerCase();

    let filteredProducts = products.filter(item =>
        item.name.toLowerCase().includes(value)
    );

    drewItem(filteredProducts);
});

var categorySelect = document.querySelector("#product");

categorySelect.addEventListener("change", function () {
    let selectedCategory = categorySelect.value;

    let filtered = (selectedCategory === "all")
        ? products
        : products.filter(item => item.category.toLowerCase() === selectedCategory);

    drewItem(filtered);
});

// var addItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

// if (addItem) {
//     addItem.map((item) => {
//         order.innerHTML = `<p>${item.name}</p>`
//     })
//     badge.innerHTML = addItem.length;
// }

var order = document.querySelector(".order")
var badge = document.querySelector(".badge")
var count = 0;
var addItem = []

var counter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function addToCart (id){
    var num = products.find((item) => item.id === id)
    order.innerHTML += `<p>${num.name}</p>`

    addItem = [...addItem , num]
    localStorage.setItem("productsInCart" , JSON.stringify(addItem))

    count++;
    badge.innerHTML = count;
}

// var bbbt = document.querySelectorAll(".addbtn")

// bbbt.addEventListener("click" , function(e){

// })

var order = document.querySelector(".order");
var badge = document.querySelector(".badge");
var count = 0;
var addItem = JSON.parse(localStorage.getItem("productsInCart")) || [];

updateCartUI(); // لما الصفحة تفتح يحدّث السلة من الlocalStorage

function updateButtonsState() {
    var buttons = document.querySelectorAll(".addbtn");

    buttons.forEach(btn => {
        let id = btn.getAttribute("data-id");
        let exists = addItem.find(item => item.id == id);

        if (exists) {
            btn.classList.add("btn-remove");
            btn.innerHTML = "Remove From Cart";
        } else {
            btn.classList.remove("btn-remove");
            btn.innerHTML = "Add To Cart";
        }
    });
}

function addToCart(id) {
    var product = products.find((item) => item.id === id);

    var exist = addItem.find((x) => x.id === product.id);
    if (exist) {
        exist.qty += 1;
    } else {
        product.qty = 1;
        addItem.push(product);
    }

    localStorage.setItem("productsInCart", JSON.stringify(addItem));

    updateCartUI();
}

function updateCartUI() {
    order.innerHTML = "";
    count = 0;

    addItem.forEach((item) => {
        order.innerHTML += `
            <div class="cart-item d-flex justify-content-between align-items-center mb-2">
                <div>
                    <p class="m-0"><strong>${item.name}</strong></p>
                    <small>Price: $${item.price}</small><br>
                    <small>Qty: ${item.qty}</small>
                </div>
                <button class="btn btn-sm btn-dark" onclick="removeItem(${item.id})">X</button>
            </div>
        `;
        count += item.qty;
    });

    badge.innerHTML = count;
}

function removeItem(id) {
    addItem = addItem.filter((x) => x.id !== id);
    localStorage.setItem("productsInCart", JSON.stringify(addItem));
    updateCartUI();
}

