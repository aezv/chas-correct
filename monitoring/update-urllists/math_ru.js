var LinkExtractor = require('../../parser/linkExtractor.js').LinkExtractor;

var extractor = new LinkExtractor({
	flushEvery: 10000,
	name:	'math_ru',
});


extractor.extractURLlistFromSiteRecursive({
	pause:5000,
	root: 'http://math.ru/',
});
