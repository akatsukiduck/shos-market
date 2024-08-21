// numbers

let num = 0

function posi() {
    num++
    let i = document.getElementById("poga").innerHTML = num;
}
function nig() {
    if (num <= 0) {
        num = 1
    }
    num--
    i = document.getElementById("poga").innerHTML = num;
}
//---------------------------------------------------------------------------------
//hover images

function image1() {
    document.getElementById("big_img").src = "images/image-product-1.jpg";
}
function image2() {
    document.getElementById("big_img").src = "images/image-product-2.jpg";
}
function image3() {
    document.getElementById("big_img").src = "images/image-product-3.jpg";
}
function image4() {
    document.getElementById("big_img").src = "images/image-product-4.jpg";
}

//----------------------------------------------------------------------------------------

// cart i dont know
let nam = "Fall Limited Edition Sneakers";
function cart() {
    const name = document.getElementById("nam").textContent
    const price = document.getElementById("price").textContent
    const image = document.getElementById("big_img").src
    const quantity = document.getElementById("poga").textContent

    let products = {
        nom: name,
        price: price,
        image: image,
        quantity: quantity
    }
    creat
}
function cqrtt() {
    let dom = document.getElementById("loom")
    if (dom.style.display == "block") {
        dom.style.display = "none"
    } else if (dom.style.display = "none") {
        dom.style.display = "block";
    }
}
function delet() {
    document.getElementById("loom").style.display = "none"
}

//------------------------------------------------------------------------------------
// screen
// function changeBackground(color) {
//     document.body.style.background = color;
//   }
// window.addEventListener("load", function() {
//   changeBackground('#00000060'); // Change to your desired color
// });


function ima() {
    document.getElementById("big_im").src = "images/image-product-1.jpg";
}
function image8() {
    document.getElementById("big_im").src = "images/image-product-2.jpg";
}
function image7() {
    document.getElementById("big_im").src = "images/image-product-3.jpg";
}
function image5() {
    document.getElementById("big_im").src = "images/image-product-4.jpg";
}
//-------------------------------------------------------------------------------------------------------
function toggleDisplay() {
    document.getElementById("d14").style.display = "flex";
}
function toggleDispla() {
    document.getElementById("d14").style.display = "none";
}
//--------------------------------------------------------------------------------------------------
function elemnt() {
    array.forEach(products => {
        `
    <div class="imghi">
                  <img src="${products.image}" alt="">
                </div>
                <div class="texthi">
                  <p id="namej">${products.nom}</p>
                  <div class="num">
                    <p id="quantity">${products.quantity}</p>
                    <p id="pri">${products.price}</p>
                    <h4 id="resl"></h4>
                  </div>
                  <img style="cursor: pointer;" onclick="" src="images/icon-delete.svg" alt="">
                </div>
`});
}