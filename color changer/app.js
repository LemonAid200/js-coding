 // Sat Jan 29 2022 17:51 adding a button that randomly changes pages color and tells the colors id
 date = new Date()
 console.log(date)


let bit_nums = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
const button = document.getElementById("btn")
const color = document.querySelector(".color")


 button.addEventListener("click", ()=>{
    let new_color = getRandomColor()
    color.textContent = new_color
    document.body.style.backgroundColor = new_color
 })

 function getRandomColor(){
    let color = "#"
    for (let i = 0; i < 6; i++){
        color += bit_nums[Math.floor(Math.random()*bit_nums.length)]
    }
    return color
 }

 document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
      alert('Отменить!')
    }
  });
