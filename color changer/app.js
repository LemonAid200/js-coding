 date = new Date()
 console.log(date)

diskoFlag = true

 let bit_nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

 const colorButton = document.getElementById("btn")
 const dickoButton = document.getElementById("autochange")
 const color = document.querySelector(".color")


 function setRandomBackground(){
   new_color = getRandomColor()
   color.textContent = new_color
   document.body.style.backgroundColor = new_color
}

 function getRandomColor() {
    let color = "#"
    for (let i = 0; i < 6; i++) {
       color += bit_nums[Math.floor(Math.random() * bit_nums.length)]
    }
    return color
 }



 colorButton.addEventListener("click", () => {
    setRandomBackground()
    clearInterval(colorChanging)
    diskoFlag = true    
 })

 dickoButton.addEventListener("click", () => {
    if (diskoFlag){
       colorChanging = setInterval(setRandomBackground, 250)
       diskoFlag = false
    }
    else{       
       clearInterval(colorChanging)
       diskoFlag = true
    }
 })



