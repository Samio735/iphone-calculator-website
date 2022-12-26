console.log("hello")

function add(num1,num2){
    return num1 + num2
}

function sub(num1,num2){
    return num1 - num2
}

function mul(num1,num2){
    return num1 * num2
}

function div(num1,num2){
    return num1 / num2
}

function operate(num1,num2,operator){
    if(operator === "add"){
        return add(num1,num2)
    }
    if(operator === "sub"){
        return sub(num1,num2)
    }

    if(operator === "mul"){
        return mul(num1,num2)
    }
    if(operator === "div"){
        return div(num1,num2)
    }
}
let num = 0 , numbk = 0
let numMemory = []
let type = ""
let step = 0

const keys = document.querySelectorAll(".key")

keys.forEach( key => {
    key.addEventListener("click", () => {
        
        if( key.getAttribute("class") === "key grey zero"){
            num = 0
          
            update()
            return
        }
    
        if( key.getAttribute("class") === "key grid-2-span except"){
          
            if(num === "0" || num === 0){
                num = "0"
                update()
                return 0
            }
            else{
                 num =  num + "0"
                 update()
                 return 0
             }
            }

        if(num === "0" || num === 0){
           num = key.innerHTML 
        }
        else{
            num =  num + key.innerHTML 
        }
        update()
    })

})

const reset = document.querySelector(".zero")

reset.addEventListener("click",() => {
    num = "0"
    step = 0
    numMemory = []
    update()
})

const display = document.querySelector(".numScreen")
function update(){

    display.innerHTML = num
    
}

function calculate(){
    console.log("calc")
    if (type === "+"){
     numMemory.forEach(numM =>{
        
        num = parseFloat(num) + parseFloat(numMemory)
    })
    }
    if (type === "-"){
        numMemory.forEach(numM =>{
           
           num =  parseFloat(numMemory) - parseFloat(num)
       })
       }
    if (type === "*"){
        numMemory.forEach(numM =>{
           
           num = parseFloat(num) * parseFloat(numMemory)
       })
    }
    if (type === "/"){
        numMemory.forEach(numM =>{
           
           num =   parseFloat(numMemory) / parseFloat(num)
       })
       }
    numMemory = []
    step = 0
    update()
}
const equals = document.querySelector(".equals")

equals.addEventListener("click",() =>{
    calculate()
} )

const orranges = document.querySelectorAll(".orrange")


orranges.forEach(orrange => {
    
    orrange.addEventListener("click", () => {
        console.log("hi")
        if (step > 0){
        calculate()
    }
    numMemory[numMemory.length] = num
    num = "0"
    console.log(type)

    type = orrange.innerHTML
    step = step + 1
})
})





