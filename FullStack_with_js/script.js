// Check if number is armstrong or not
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let digits = String(num).length;
    while(temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** digits;
        temp = Math.floor(temp / 10);
    } 
    return sum === num;
}

function checkArmstrong() {
    let val = Number(document.getElementById("number").value);
    if(isArmstrong(val)) {
        document.getElementById("result").innerHTML = val + " is an armstrong number";
    } else {
        document.getElementById("result").innerHTML = val + " is <b>not</b> an armstrong number";
    }
   let para = document.createElement("p");
   if(isArmstrong(val)) {
    para.textContent = val + " is an armstrong number";
   }
   else {
    para.textContent = val + " is not an armstrong number";
   }
   document.getElementsByTagName("body")[0].append(para);
}





