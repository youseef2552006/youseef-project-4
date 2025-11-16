var user = document.querySelector("#a-user")

if ( localStorage.getItem("first") ){
    user.innerHTML = "Hello: " + localStorage.getItem("first") 
}
/////////////////////////////////////////
var ProductsInCart = localStorage.getItem("productsInCart");
var AllProducts = document.querySelector("#ppp");

if (ProductsInCart) {
    let item = JSON.parse(ProductsInCart);
    drewProducts(item);
}

var count;
function drewProducts(products) {
    count = 0;
    var y = products.map((item) => {
                count += Number(item.qty) * Number(item.price);
        return `
        <div class="product_cart" id="product-${item.id}">
            <img src="${item.imgUrl}" alt="">
            <div>
                <h5>Name : ${item.name}</h5>
                <h6>Price : ${item.price}</h6>
                <h6>Count : ${item.qty}</h6>
                <button class="btn btn-danger" onClick="RemoveFromCart(${item.id})">
                    Remove From Cart
                </button>
            </div>
        </div>
        `;
    }).join(''); 
    AllProducts.innerHTML = y;
}

function RemoveFromCart(id) {
    let ProductsInCart = localStorage.getItem("productsInCart");
    let items = JSON.parse(ProductsInCart);

    let updatedItems = items.filter((item) => item.id !== id);

    localStorage.setItem("productsInCart", JSON.stringify(updatedItems));

    let productDiv = document.getElementById(`product-${id}`);
    if (productDiv) {
        location.reload();
        count -= Number(item.qty) * Number(item.price);
        productDiv.remove();
    }
}


var t = document.querySelector(".totalp")

t.innerHTML = count;