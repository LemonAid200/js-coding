 date = new Date()
 console.log(date)

 let disko_flag = true





 let bit_nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
 const button = document.getElementById("btn")
 const auto_button = document.getElementById("autochange")
 const color = document.querySelector(".color")


 button.addEventListener("click", () => {
    new_color = getRandomColor()
    color.textContent = new_color
    document.body.style.backgroundColor = new_color
 })


 function getRandomColor() {
    let color = "#"
    for (let i = 0; i < 6; i++) {
       color += bit_nums[Math.floor(Math.random() * bit_nums.length)]
    }
    return color
 }


 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

 async function demo() {
    console.log('Taking a break...');
    await sleep(1000);
    console.log('Two seconds later, showing sleep in a loop...');
 }

 auto_button.addEventListener("click", () => {
    console.log("до цикла")
    for (let a; a<10; a++) {
       console.log("В цикле")
       new_color = getRandomColor()
       color.textContent = new_color
       document.body.style.backgroundColor = new_color
       demo()
    }
 })