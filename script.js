function calculateGST() {
    let product_price=document.getElementById("product_price").value;
    let tax=document.getElementById("tax").value;

    let final_price=parseInt(product_price)+parseInt(product_price)*tax/100;

    if (!(final_price>0)) final_price=0;

    // alert(final_price)

    document.getElementById("final_price").innerHTML=final_price;

}

setInterval(function(){
    calculateGST()
    },3000)