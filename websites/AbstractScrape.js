var Scraper = function(casper, url, ISBN) {
	this.casper = casper;
	this.url = url;
	this.ISBN = ISBN;

	this.searchBook = function(searchFieldElement, submitButtonElement) {
		var self = this;
		this.casper.start(this.url , function() {
			 this.sendKeys(searchFieldElement, self.ISBN.toString());
			 this.click(submitButtonElement);
		});
		this.casper.then(function() {});
	}

	this.getBookTitle = function(element) {
		return this.casper.fetchText(element)
		.replace(/(\r\n|\n|\r)/gm, '').trim();
	}

	this.getBookPrice = function(element) {
		return this.casper.fetchText(element)
		.replace(/(\r\n|\n|\r)/gm, '').trim();
	}

	this.getBookImage = function(element) {
		return this.casper.getElementAttribute(element, 'src')
		.replace(/(\r\n|\n|\r)/gm, '').trim();
	}
};

exports.Scraper = Scraper;
