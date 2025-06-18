"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

async function getRandomImage() {
    const endpoint = "http://localhost:8080/api/v1/getRandomImage";
    try {
      const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.error(error);
    }
} 

getRandomImage();

/* const quotes = [
    {
        quote: "Fear is stupid. So are regrets.",
        author: "Marilyn Monroe",
    },

    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },

    {
        quote: "Support, encouragement and love: three relatively simple acts of kindness that can change the course of a person's life.",
        author: "Daniel Levy",
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000); */