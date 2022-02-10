const button = document.querySelector(".btn")
const image = document.querySelector(".img")

const img = document.querySelector(".card")
let after = ''
// url = "https://reddit-meme-api.herokuapp.com"

// async function fetchHandler() {
//     try {
//         url = "https://www.reddit.com/r/memes.json?after=${" + after + "}"
//         console.log(url)
//         fetch(url)
//             .then(responce => responce.json())
//             .then(body => {
//                 after = body.data.after
//                 console.log(after)
//                 console.log(body.data.children.length)
//                 for (let index = 0; index < body.data.children.length; index++) {
//                     if (body.data.children[index].data.post_hint == 'image') {
//                         image.src = "https://i.redd.it/aq3cxdu2kvg81.jpg"

//                         return
//                     }
//                 }
//             })

//     } catch (error) {
//         console.log(error)
//     }
// }

// async function fetchHandler(){
//     var x = new XMLHttpRequest();
//     x.open("GET", "https://reddit-meme-api.herokuapp.com/", true);
//     x.onload = function (){
//     console.log( x.responseText);
// }
// x.send(null);
// }

// async function fetchHandler(){
//     try {
//         fetch(url, {mode: "no-cors"})
//         .then(response => console.log(response.body))


//       } catch (error) {
//         console.log(error);
//       }
// }


const url = "https://aws.random.cat/meow";

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data.file;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  let isLoaded = image.complete;

  if (isLoaded) {
    fetchHandler();
  }
});

fetchHandler()