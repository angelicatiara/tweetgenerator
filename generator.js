const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

function getQuote() {
	fetch(endpoint)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		displayQuote(data.message);
	})
	.catch(function () {
		console.log("Oops. It's not you. It's us :(");
	});
}

function displayQuote(quote) {
	const quoteText = document.querySelector('.quote-text');
	quoteText.textContent = quote;
	const tweetButton = document.querySelector('.tweet');
	tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote} - TesterDTrump`);
}

const newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

getQuote();


