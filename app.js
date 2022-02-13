function caseUpdate(isIncreasing){
    const caseInput=document.getElementById('case-number');
    caseNumber= parseInt( caseInput.value);
    if(isIncreasing){
        caseInput.value= caseNumber +1;
    }else if(caseNumber>0){
        caseInput.value= caseNumber -1;
    }
};
document.getElementById('case-plus').addEventListener('click', function(){
    caseUpdate(true);  
});

document.getElementById('case-minas').addEventListener('click', function(){
    caseUpdate(false);
});