function productUpdate(product, price, isIncreasing){
    const productInput=document.getElementById(product+'-number');
    let productNumber = productInput.value;
    // let caseNumber= parseInt( caseNumber);
    if(isIncreasing){
        productNumber= parseInt( productNumber) +1;
    }else if(productNumber>0){
        productNumber= productNumber -1;
    }
    productInput.value = productNumber;
    // update case total
    const productTotal= document.getElementById(product +'-total');
    productTotal.innerText = productNumber*price;
    // calculate total
    calculateTotal();
};
 function getInputValue(product){
     const productInput = document.getElementById(product + '-number');
     const productNumber = parseInt(productInput.value);
     return productNumber;
 }

 function  calculateTotal(){
     const phoneTotal = getInputValue('phone')* 1200;
     const caseTotal = getInputValue('case')* 50;
     const subTotal = phoneTotal + caseTotal;
     const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
 }

// Phone part
document.getElementById('phone-plus').addEventListener('click', function(){
    productUpdate('phone',1200,true);
});
document.getElementById('phone-minas').addEventListener('click', function(){
    productUpdate('phone', 1200, false);
});


// case part
document.getElementById('case-plus').addEventListener('click', function(){
    productUpdate('case',50,true);  
});

document.getElementById('case-minas').addEventListener('click', function(){
    productUpdate('case', 50, false);
});