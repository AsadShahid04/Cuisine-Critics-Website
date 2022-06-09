//This file is used for implementing the random dishes generator which is run by clicking the green button on the home page. Created by Ethan

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//The bottom portion is responsible for the random links. Created by Ethan

var randomlinks=new Array()

randomlinks[0]="https://webpage-design-period-5.period-7.repl.co/drinks_margarita.html"
randomlinks[1]="https://webpage-design-period-5.period-7.repl.co/drinks_shirley.html"
randomlinks[2]="https://webpage-design-period-5.period-7.repl.co/Salad%20Shirazi.html"
randomlinks[3]="https://webpage-design-period-5.period-7.repl.co/Mast%20o%20Khiar.html"
randomlinks[4]="https://webpage-design-period-5.period-7.repl.co/Giardiniera%20Antipasto%20Platter.html"
randomlinks[5]="https://webpage-design-period-5.period-7.repl.co/Parmesan-Basil%20Crumbs.html"
randomlinks[6]="https://webpage-design-period-5.period-7.repl.co/CHAR%20KWAY%20TEOW.html"
randomlinks[7]="https://webpage-design-period-5.period-7.repl.co/Assam%20Laksa.html"
randomlinks[8]="https://webpage-design-period-5.period-7.repl.co/Hawaii%20Lunch%20Plate.html"
randomlinks[9]="https://webpage-design-period-5.period-7.repl.co/Luau%20Stew.html"
randomlinks[10]
="https://webpage-design-period-5.period-7.repl.co/Lasagne.html"
randomlinks[11]="https://webpage-design-period-5.period-7.repl.co/Rag%C3%B9%20alla%20Bolognes.html"
randomlinks[12]
="https://webpage-design-period-5.period-7.repl.co/Kranjska%20Klobasa%20(Carniolan%20sausage).html"
randomlinks[13]
="https://webpage-design-period-5.period-7.repl.co/%C5%A0tefani%20Pe%C4%8Denka.html"
randomlinks[14]
="https://webpage-design-period-5.period-7.repl.co/drinks_thai.html"
randomlinks[15]
="https://webpage-design-period-5.period-7.repl.co/drinks_moscow.html"
randomlinks[16]
="https://webpage-design-period-5.period-7.repl.co/drinks_sake.html"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}

//The bottom code is responsible for teh search function. Made by Ethan 

function searchFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//The bottom code is responsible for the collapsible questions section. Created by Ethan
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}