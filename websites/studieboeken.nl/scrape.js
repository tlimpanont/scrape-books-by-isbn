var casper = require('casper').create();
var scraper = require('../AbstractScrape');
scraper = new scraper.Scraper(casper, 'http://www.studieboeken.nl/', casper.cli.get(0));

scraper.searchBook('#SearchProductsControl1_TextBoxSearch', '#SearchProductsControl1_ButtonSearch');

scraper.casper.then(function() {
	var output = {
         title: scraper.getBookTitle('.DetailHeaderRightTopInfoLeft h1'),
         price: scraper.getBookPrice('.Prize'),
         image: scraper.getBookImage('#MainContent_ImageMain')
    };
    this.echo(JSON.stringify(output));
});

scraper.casper.run();
