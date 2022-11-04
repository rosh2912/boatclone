// change images on mouseOver
document.getElementById("img1").addEventListener("mouseover", mouseOver1);
document.getElementById("img1").addEventListener("mouseout", mouseOut1);

function mouseOver1() {
  document.getElementById("img1").src = "11.jpg";
}

function mouseOut1() {
  document.getElementById("img1").src = "card1.jpg";
}

document.getElementById("img2").addEventListener("mouseover", mouseOver2);
document.getElementById("img2").addEventListener("mouseout", mouseOut2);

function mouseOver2() {
  document.getElementById("img2").src = "21.jpg";
}

function mouseOut2() {
  document.getElementById("img2").src = "card2.jpg";
}

document.getElementById("img3").addEventListener("mouseover", mouseOver3);
document.getElementById("img3").addEventListener("mouseout", mouseOut3);

function mouseOver3() {
  document.getElementById("img3").src = "31.jpg";
}

function mouseOut3() {
  document.getElementById("img3").src = "card3.jpg";
}

document.getElementById("img4").addEventListener("mouseover", mouseOver4);
document.getElementById("img4").addEventListener("mouseout", mouseOut4);

function mouseOver4() {
  document.getElementById("img4").src = "41.jpg";
}

function mouseOut4() {
  document.getElementById("img4").src = "card4.jpg";
}

document.getElementById("img5").addEventListener("mouseover", mouseOver5);
document.getElementById("img5").addEventListener("mouseout", mouseOut5);

function mouseOver5() {
  document.getElementById("img5").src = "51.jpg";
}

function mouseOut5() {
  document.getElementById("img5").src = "card5.jpg";
}

document.getElementById("img6").addEventListener("mouseover", mouseOver6);
document.getElementById("img6").addEventListener("mouseout", mouseOut6);

function mouseOver6() {
  document.getElementById("img6").src = "61.jpg";
}

function mouseOut6() {
  document.getElementById("img6").src = "card6.jpg";
}

document.getElementById("img7").addEventListener("mouseover", mouseOver7);
document.getElementById("img7").addEventListener("mouseout", mouseOut7);

function mouseOver7() {
  document.getElementById("img7").src = "71.jpg";
}

function mouseOut7() {
  document.getElementById("img7").src = "card7.jpg";
}

document.getElementById("img8").addEventListener("mouseover", mouseOver8);
document.getElementById("img8").addEventListener("mouseout", mouseOut8);

function mouseOver8() {
  document.getElementById("img8").src = "81.jpg";
}

function mouseOut8() {
  document.getElementById("img8").src = "card8.jpg";
}





// text color change
document.getElementById("demo").onmouseover = function () { mouseOver() };
document.getElementById("demo").onmouseout = function () { mouseOut() };

function mouseOver() {
    document.getElementById("demo").style.color = "red";
}

function mouseOut() {
    document.getElementById("demo").style.color = "white";
}


//navbar underline on mouse hover
// document.getElementById("navbarDropdown").onmouseover = function () { mouseOver5() };
// document.getElementById("navbarDropdown").onmouseout = function () { mouseOut5() };

// function mouseOver5() {
//     document.getElementById("navbarDropdown").innerHTML = "<u>Shop</u>" ;
// }

// function mouseOut5() {
//     document.getElementById("navbarDropdown").innerHTML = "Shop" ;


// document.getElementById("navitem1").onmouseover = function () { mouseOver6() };
// document.getElementById("navitem1").onmouseout = function () { mouseOut6() };

// function mouseOver6() {
//     document.getElementById("navitem1").innerHTML = "<u>Daily Deals</u>" ;
// }

// function mouseOut6() {
//     document.getElementById("navitem1").innerHTML = "Daily Deals" ;
// }