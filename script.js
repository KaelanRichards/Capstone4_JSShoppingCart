//create array that will hold all ordered products
var shoppingCart = [];

//this function manipulates DOM and displays content of our shopping cart
function displayShoppingCart(){
  var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
  //ensure we delete all previously added rows from ordered products table
  while(orderedProductsTblBody.rows.length>0) {
    orderedProductsTblBody.deleteRow(0);
  }

  //variable to hold total price of shopping cart
  var cart_total_price=0;
  //iterate over array of objects
  for(var product in shoppingCart){
    //add new row      
    var row=orderedProductsTblBody.insertRow();
    //create three cells for product properties 
    var cellName = row.insertCell(0);
   
    var cellPrice = row.insertCell(1);
    cellPrice.align="right";
    //fill cells with values from current product object of our array
    cellName.innerHTML = shoppingCart[product].Name;
    cellPrice.innerHTML = shoppingCart[product].Price;
    cart_total_price+=shoppingCart[product].Price;
  }
  //fill total cost of our shopping cart 
  document.getElementById("cart_total").innerHTML=cart_total_price;
}


function AddtoCart(name,price){
  //JavaScript Object that will hold Name and Price
  var singleProduct = {};
  //Fill the product object with data
  singleProduct.Name=name;
  singleProduct.Price=price;
  //Add newly created product to our shopping cart 
  shoppingCart.push(singleProduct);
  //call display function to show on screen
  //displayShoppingCart();

}  




