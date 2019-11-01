var slideIndex = 1;
var isPause = false;

if(isPause){
    showSlides(slideIndex);
}
else{
    showSlidesD();
    showSlides(1);
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function stopSlides(){
    isPause = true;
}

function showSlidesD() {
    var slideIndexInner = 0;
    var interval = setInterval( function(){
    
        console.log("Here");
        var i;
        var slides = document.getElementsByClassName("slider");
        for (i = 0; i < slides.length; i++) {
            // slides[i].classList.add('fade');
            slides[i].style.display = "none";
        }
        slideIndexInner++;
        slideIndexInner = slideIndexInner % slides.length;

        if (slideIndexInner > slides.length) {slideIndex = 1}
        if(slideIndexInner == 0){
            slides[slideIndexInner].style.display = "block";
        }
        else{
            slides[slideIndexInner-1].style.display = "block";
        }
        if(isPause){
            clearInterval(interval);
        }
        
    }, 5000);
}

function showSlides(n) {
  var i;
  isPause = false;
  var slides = document.getElementsByClassName("slider");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}