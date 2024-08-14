const allBtnElm = document.querySelectorAll(".btn");
let displayElm=document.querySelector(".result")
let numberValue = JSON.parse(localStorage.getItem("total")) || "";
document.querySelector(".result").innerHTML = numberValue;
let lastOperator =  "";
let operator=["+","-","*","/","%"]
allBtnElm.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        displayElm.classList.remove("prank");
        let value = e.target.innerHTML;
        let lastChr = numberValue[numberValue.length - 1];

        if (value === "AC") { 
            numberValue = "";
            return display(numberValue);
        }
        if (value === "C") {
            numberValue = numberValue.slice(0, -1);
            return display(numberValue);
        }
        if (value === "=") {
            prank();
            if (operator.includes(lastChr)) {
                
                numberValue = numberValue.slice(0, -1);
                
                
            }
            let result = eval(numberValue);
           
            numberValue = result;
            localStorage.setItem("total", JSON.stringify(numberValue));
            return display(numberValue);
        }
        if (operator.includes(value)) { 
            lastOperator = value;
            if (operator.includes(lastChr)) {
                return;
            }
        };
        if (value === ".") { 
            let lastOprIndex = numberValue.lastIndexOf(lastOperator);
            let lastOperatorChr = numberValue.slice(lastOprIndex);
            console.log(lastOperatorChr)
            if (lastOperatorChr.includes(".")) {
                return;
            }
            if (!lastOperator && numberValue.includes(".")) {
                return;
            }
        }
       
        numberValue += value
        display(numberValue);
       
  })
})

const display = () => {
    document.querySelector(".result").innerHTML = numberValue;
}


const prank = () => {
    randomNum = Math.floor(Math.random() * 10);
    console.log(randomNum);
    if (randomNum < 4) {
        displayElm.classList.add("prank");
        let audio = new Audio("aa.wav");
        audio.play();
    }
}