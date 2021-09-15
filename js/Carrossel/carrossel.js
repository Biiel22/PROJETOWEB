var carrossel_i = 1;
show_carrossel(carrossel_i);

function plus_carrossel(n){
    show_carrossel(carrossel_i += n);
}

function current_carrossel(n){
    show_carrossel(carrossel_i = n);
}

function show_carrossel(n){
    var a;
    var carrossel = document.getElementsByClassName("carrossel");
    var dots = document.getElementsByClassName("dot");

    if(n > carrossel.length){
        carrossel_i = 1;
    }

    if(n < 1){
        carrossel_i = carrossel.length;
    }

    for(a = 0; a < carrossel.length; a++){
        carrossel[a].style.display = "none";
    }

    for(a = 0; a < dots.length; a++){
        dots[a].className = dots[a].className.replace("ativo", "");
    }

    carrossel[carrossel_i-1].style.display = "block";
    dots[carrossel_i-1].className += " ativo";
}