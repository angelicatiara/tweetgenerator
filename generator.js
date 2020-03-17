const newQuoteButton = document.querySelector('.new-quote');

const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
function getQuote() {
	fetch(endpoint)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
	})
	.catch(function () {
		console.log("Oops. It's not you. It's us :(");
	});
}

newQuoteButton.addEventListener('click', getQuote);


