


const product = [
    {
    id : 0,
    image : "img/shoe-1.jpg",
    title : "Pureboost 23 sko",
    size : "M / L / S / XS",
    Price :  1.099,
},
{
    id : 1,
    image : "img/shoe-2.jpg",
    title: " AdizeroBoston 12 sko",
    size : "M / L / S / XS",
    Price :  1.299,
},
{
    id : 2,
    image : "img/shoe-3.jpg",
    title : "LIGHT RDY 2.0sko",
    size : "M / L / S / XS",
    Price :  1.699,
},
{
    id : 3,
    image : "img/shoe-4.jpg",
    title : "Supernova 2 sko",
    size : "M / L / S / XS",
    Price :  899,
},
{
    id : 4,
    image : "img/shoe-5.jpg",
    title : "Solarboost 5 sko",
    size : "M / L / S / XS",
    Price :  1.399,
},
{
    id : 5,
    image : "img/shoe-6.jpg",
    title : "Adistar CS2.0sko",
    size : "M / L / S / XS",
    Price :  1.399,
},
{
    id : 6,
    image : "img/shoe-7.jpg",
    title : "Adizero adidas3.0sko",
    size : "M / L / S / XS",
    Price :  1.999,
},
{
    id : 7,
    image : "img/shoe-8.jpg",
    title : "Avanti TYO sko",
    size : "M / L / S / XS",
    Price :  974.35,
},
{
    id : 8,
    image : "img/shoe-9.jpg",
    title : "Adizero Ambition sko",
    size : "M / L / S / XS",
    Price : 769.30,
},
{
    id : 9,
    image : "img/shoe-10.jpg",
    title : "Ultrabounce sko",
    size : "M / L / S / XS",
    Price :  749,
},
{
    id : 10,
    image : "img/shoe-11.jpg",
    title : "Runfalcon 3 sko",
    size : "M / L / S / XS",
    Price :  499,
},
{
    id : 11,
    image : "img/shoe-12.jpg",
    title : "SOLARGLIDE 6 sko",
    size : "M / L / S / XS",
    Price :  1.199,
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

       <h2>${Price} kr</h2>`+
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
    displaycart(a);
}


function displaycart(a){
    let j =0, total=0
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
       document.getElementById("cartItem").innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "kr "+0;
      
    } 
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image,title,size,Price} = items;
            total=total+Price;
            
            
            document.getElementById("total").innerHTML ="kr" +total;
            return(
                `<div class="cart-item">
                <div class = "row-img">
                <img class="rowimg" src=${image}>
                </div>
                <p style="font-size:12px;">${title}</p>
                
                
                <select id="shoeSize" onchange="test()">
                
                <option value="1"> Size</option>
                <option value="2">M</option>
                <option value="3">S</option>
                <option value="4">L</option>
                <option value="5">XS</option>
            </select>
                      
            
                <h2 style="font-size:15px;">${Price} kr</h2>`+
                
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                
);
        }).join('');
    
    }
};


function test(){
    var x = document.getElementById("shoeSize");
    var value = x.options[x.selectedIndex].text;
    var disp = document.getElementsByClassName("cart-item");
    disp.innerHTML=value;
    console.log(x.selectedIndex);
}







    


document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)

        )
    })
    displayItem(filterData)
})


 
      let k=0
  let displayItem =(items) =>{
    document.getElementById('root').innerHTML = items.map((item)=>{
        var {image, title, size, Price,} = item;
                 return(
           ` <div class ="box">
           <div class = "img-box">
            <img class='images' src=${image}></img>
           </div>
            <div class="bottom">
           <p>${title}</p> 
            
           <p>${size} 
                
           
</p>







            <h2>${Price} kr</h2>`+
            "<button onclick='addtocart("+(k++)+")'>Add to Cart</button>"+
            
     
         `</div>
           </div>`
         
         )

      


    }).join('')
};























