const url = 'https://textgears-textgears-v1.p.rapidapi.com/detect';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '63bceb62e5msh476dad3dcbca811p1c41e3jsn4c6e1a5791ac',
		'X-RapidAPI-Host': 'textgears-textgears-v1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		text: 'Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user\'s viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
