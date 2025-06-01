let cart = localStorage.getItem("cart") ? JSON. parse(localStorage.getItem("cart")) : [];

function addtocart()
{
    let product_name = document.getElementById("product_name").innerText;
    let amount = document.getElementById("amount").innerText;
    cart.push({name : product_name,amount : amount});
    localStorage.setItem('cart',JSON.stringify(cart));
    window.alert("Successfully added your cart");
}

function view()
{
    const storedcart = localStorage.getItem('cart');
    if(storedcart)
    {
        cart = JSON.parse(storedcart);
        if(cart.length === 0)
        {
            window.alert("Your cart is empty");
            return;
        }
        let cartstring = "Your cart : \n";
        let total_amount = 0;
        for(let i=0;i<cart.length;i++)
        {
            cartstring += `${cart[i].name} - Amount : ${cart[i].amount}\n`;
            total_amount += parseInt(cart[i].amount);
        }
        window.alert(cartstring + "\nTotal Amount : " + total_amount);
    }
    else
    {
        window.alert("Your card is empty");
    }
}

function remove()
{
    
    if (window.confirm("Are you sure you want to remove all items from your cart?")) {
        localStorage.removeItem('cart'); // Only remove cart data
        window.alert("Your cart is now empty.");
        // Optionally, update your cart display here
    }
    
    
}