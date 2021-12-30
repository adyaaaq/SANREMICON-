let hemjee = document.getElementById('too_hemjee');
let une = document.getElementById('une');
let mark = document.getElementById('mark');
var x ;

function calculate(){
    if (mark.value == 'M150') {
        x = parseFloat(190000);    
    }
    if (mark.value == 'M200') {
        x = parseFloat(230000);    
    }
    if (mark.value == 'M250') {
        x = parseFloat(250000);    
    }
    if (mark.value == 'M300') {
        x = parseFloat(280000);    
    }
    if (mark.value == 'M350') {
        x = parseFloat(300000);    
    }
    if (mark.value == 'M400') {
        x = parseFloat(330000);    
    }
    if (mark.value == 'M450') {
        x = parseFloat(350000);    
    }
    let output = (parseFloat(hemjee.value) * x);
    une.value = parseFloat(output.toFixed(2));
    
}