// show real products
// show real popular products
// make product add button functional

var products = [
    {
        name: "iPhone 15 Pro",
        headline: "The ultimate iPhone",
        price: 999,
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg"
    },
    {
        name: "Google Pixel 8 Pro",
        headline: "Ultra power of Google",
        price: 800,
        image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg"
    },
    {
        name: "Samsung Galaxy S24 Ultra",
        headline: "Power Beyon Imagination",
        price: 1200,
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg"
    }
]
var popular = [
    {
        name: "Xiaomi Redmi Note 10 Pro Max",
        headline: "The ultimate Note",
        price: 280,
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note10-pro-india.jpg"
    },
    {
        name: "Oppo F21 Pro",
        headline: "Selfe Pro",
        price: 270,
        image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno7-4g.jpg"
    },
    {
        name: "Realme 11 Pro",
        headline: "Buget Gaming Beast",
        price: 300,
        image: "https://fdn2.gsmarena.com/vv/bigpic/realme-11-pro.jpg"
    }
]
var cart = []
function addProduct(){
    var clutter = ""
    products.forEach(function(product, index){
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                        <img class="w-full h-full object-contain bg-white" src="${product.image}">
                    </div>
                    <div class="data w-full px-2 py-5">
                        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                        <div class="flex justify-between w-full items-center mt-2">
                            <div class="w-1/2">
                                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                                <h4 class="font-semibold mt-2">$${product.price}</h4>
                            </div>
                            <button class="w-10 h-10 rounded-full shader text-yellow-400"><h5 data-index="${index}" class="add text-2xl font-extrabold">+</h5></button>
                        </div>
                    </div>
                </div>`
    })
    document.querySelector(".products").innerHTML = clutter
}
function addPopularProduct(){
    var clutter = ""
    popular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-contain"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">$${product.price}</h4>
                    </div>
                </div>`
    })
    document.querySelector(".populars").innerHTML = clutter
}
function addToCart(){
    document.querySelector(".products")
    .addEventListener("click", function(details){
        if(details.target.classList.contains('add')){
            // console.log(details.target.dataset)
            cart.push(products[details.target.dataset.index])
        }
    })
}
function showCart(){
    document.querySelector('.carticon')
    .addEventListener('click', function(){
        document.querySelector('.cartexpnd').style.display = 'block'
        var clutter = ""
        cart.forEach(function(product, index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                        <img class="w-full h-full object-contain" src="${product.image}"/>
                    </div>
                    <div>
                        <h3 class="font-semibold">${product.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80">$${product.price}</h5>
                    </div>
                </div>`
        })
        document.querySelector('.cartexpnd').innerHTML = clutter
    })
}

addProduct()
addPopularProduct()
addToCart()
showCart()