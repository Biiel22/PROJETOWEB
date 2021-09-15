function show_menu(){

    var menu = document.getElementsByClassName("menu_items");
    var item = document.getElementsByClassName("material-icons")

    if(item[0].className == "material-icons"){
        item[0].className = "material-icons rodopiado";
    }else{
        item[0].className = "material-icons";
    }

    for(let x = 0; x < menu.length; x++){
        if(menu[x].className == "menu_items"){
            menu[x].className += " resp";
        }else{
            menu[x].className = "menu_items";
        }
    }
}