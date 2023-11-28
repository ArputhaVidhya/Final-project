



const product = [
    {
    id : 0,
    image : "img/shoe-1.jpg",
    title : "Sneakers",
    size : "M / L / S / XS",
    Price :  1450,
},
{
    id : 1,
    image : "img/shoe-2.jpg",
    title: "Sneakers",
    size : "M / L / S / XS",
    Price :  1350,
},
{
    id : 2,
    image : "img/shoe-3.jpg",
    title : "Sneakers",
    size : "M / L / S / XS",
    Price :  3550,
},
{
    id : 3,
    image : "img/shoe-4.jpg",
    title : "Sneakers",
    size : "M / L / S / XS",
    Price :  2450,
},
{
    id : 4,
    image : "img/shoe-5.jpg",
    title : "Sneakers",
    size : "M / L / S / XS",
    Price :  1550,
},
{
    id : 5,
    image : "img/shoe-6.jpg",
    title : "Sneakers",
    size : "M / L / S / XS",
    Price :  1550,
},
{
    id : 6,
    image : "img/shoe-7.jpg",
    title : "Sneakers",
    size : "M / L / S / XS",
    Price :  5550,
},
{
    id : 7,
    image : "img/shoe-8.jpg",
    title : "Sneakers",
    size : "M / L / S / XS",
    Price :  1550,
},
{
    id : 8,
    image : "img/shoe-9.jpg",
    title : "Sneakers",
    size : "M / L / S / XS",
    Price : 1550,
},
{
    id : 9,
    image : "img/shoe-10.jpg",
    title : "Sneakers",
    size : "M / L / S / XS",
    Price :  2550,
},
{
    id : 10,
    image : "img/shoe-11.jpg",
    title : "Sneakers",
    size : "M / L / S / XS",
    Price :  4550,
},
{
    id : 11,
    image : "img/shoe-12.jpg",
    title : "Sneakers",
    size : "M / L / S / XS",
    Price :  1550,
}
];
const categories = [...new Set(product.map((item)=> {
    return item
}))]
let i=0;
document.getElementById("root").innerHTML = categories.map((item)=>{
    var {image, title, size, Price} = item;
    return(
       ` <div class ="box">
       <div class = "img-box">
       <img class='images' src=${image}></img>
       </div>
       <div class="bottom">
       <p>${title}</p>
       <p>${size}</p>
       <h2>$ ${Price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+

       `</div>
       </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart(a);
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}


function displaycart(a){
    let j =0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
       document.getElementById("cartItem").innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "$ "+0+".00";
    } 
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image,title,size,Price} = items;
            total=total+Price;
            document.getElementById("total").innerHTML ="$" +total+".00";
            return(
                `<div class="cart-item">
                <div class = "row-img">
                <img class="rowimg" src=${image}>
                </div>
                <p style="font-size:12px;">${title}</p>
                <p style="font-size:12px;">${size}</p>
                <h2 style="font-size:15px;">$ ${Price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                
);
        }).join('');
    
    }
}
 



