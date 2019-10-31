var hamburger = document.getElementsByClassName('hamburger')[0];
var count = 0;

hamburger.onclick = function(){
    let menuItem = document.getElementsByClassName('menu-item')[0];
    if(count % 2 == 0){
        menuItem.style.display = 'block';
    }
    else{
        menuItem.style.display = 'none';
    }
    count++;
}