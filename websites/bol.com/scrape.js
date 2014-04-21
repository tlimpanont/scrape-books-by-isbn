var casper = require('casper').create();
var scraper = require('../AbstractScrape');
scraper = new scraper.Scraper(casper, 'http://www.bol.com/', casper.cli.get(0));

scraper.searchBook('#searchfor', '#java_search_button_small');

scraper.casper.then(function() {
	var output = {
         title: scraper.getBookTitle('div.product_heading.bottom_s h1.bol_header.clear_autoheight.bottom_0'),
         price: scraper.getBookPrice('div.plaza ul.plaza-tabs li#tab_bol span.pricetag_grey'),
         image: scraper.getBookImage('img.js_product_img')
    };
    this.echo(JSON.stringify(output));
});

scraper.casper.run();
