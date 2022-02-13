function caseUpdate(isIncreasing){
    const caseInput=document.getElementById('case-number');
    let caseNumber = caseInput.value;
    // let caseNumber= parseInt( caseNumber);
    if(isIncreasing){
        caseNumber= parseInt( caseNumber) +1;
    }else if(caseNumber>0){
        caseNumber= caseNumber -1;
    }
    caseInput.value = caseNumber;
    // update case total
    const caseTotal= document.getElementById('case-total');
    caseTotal.innerText = caseNumber*59;
};
document.getElementById('case-plus').addEventListener('click', function(){
    caseUpdate(true);  
});

document.getElementById('case-minas').addEventListener('click', function(){
    caseUpdate(false);
});