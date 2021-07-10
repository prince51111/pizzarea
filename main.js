menu_list_array = ["Veg Margherita Pizza","Double Cheese Margherita","Farm House"
                    ];

function getmenu(){
var htmldata;
document.getElementById("display_menu").innerHTML=menu_list_array
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
//Complete the code
menu_list_array.push(item)
}

function add_top(){
//Complete the code
}