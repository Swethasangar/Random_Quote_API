const quoteText = document.getElementById("quote__text"),
  quoteAuthor = document.getElementById("quote__author"),
  btn = document.getElementById("btn");

let randomQuote = () => {
  fetch("https://quotes-api-self.vercel.app/quote")
    .then((response) => response.json())
    .then((data) => {
      const quote = data.quote;
      const author = data.author;
      quoteText.textContent = quote;
      quoteAuthor.textContent = `- ${author}`;
      // console.log("Quote:", quote);
      // console.log("Author:", author);
    });
};
// randomQuote();
btn.addEventListener("click",()=>{
    randomQuote()
});