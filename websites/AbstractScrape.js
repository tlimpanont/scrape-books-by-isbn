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

	this.getBookNewPrice = function(element) {
		return this.casper.fetchText(element)
		.replace(/(\r\n|\n|\r)/gm, '').trim();
	}

	this.getBookSecondPrice = function(element) {
		var price = this.casper.fetchText(element)
		.replace(/(\r\n|\n|\r)/gm, '').trim();
		return (price === '') ? null : price;
	}

	this.getBookImage = function(element) {
		return this.casper.getElementAttribute(element, 'src')
		.replace(/(\r\n|\n|\r)/gm, '').trim();
	}

	this.getBookUrl = function() {
		return this.casper.getCurrentUrl();
	}

	this.getDescription = function(element) {
		return this.casper.getHTML(element).trim();
	}
};

exports.Scraper = Scraper;
