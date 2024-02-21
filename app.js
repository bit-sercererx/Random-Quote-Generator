const newQuoteButton = document.getElementById("new-quote-button");

newQuoteButton.addEventListener("click", () => {
  const newQuoteButtonString = ["NSX", "LFA", "silvia", "RX-7", "WRX-STI"];
  const randomQuote = Math.floor(Math.random()*newQuoteButtonString.length);
  const indexQuote = newQuoteButtonString[randomQuote];

  const quoteContainer = document.createElement("div");
  quoteContainer.id = "quote-container";
  let list=document.getElementById("quote-list")
  list.appendChild(quoteContainer);

  const quoteList = document.createElement("p");
  quoteList.id = "quote-text";

  quoteList.textContent = indexQuote;

  quoteContainer.appendChild(quoteList);
});
