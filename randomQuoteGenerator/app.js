const quoteText = document.querySelector(".quote")
const quoteBtn = document.querySelector(".quoteBtn")
console.log(quoteBtn);
const authorName = document.querySelector(".quoteAuther")
const speechBtn = document.querySelector(".quoteSpeaker")
const copyBtn = document.querySelector(".quoteCopy")
const twitterBtn = document.querySelector(".quoteTweeter")
const synth = speechSynthesis;


quoteBtn.addEventListener("click",randomQuote)

async function randomQuote(){
   

    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";

    const response = await fetch("http://api.quotable.io/random")
    const data = await response.json()
    console.log(data);
    quoteText.innerText = data.content;
    authorName.innerText = data.author;
    
    quoteBtn.classList.remove("loading");
    quoteBtn.innerText = "New Quote";

}