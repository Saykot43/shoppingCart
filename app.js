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
};
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