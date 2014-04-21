casper.test.begin('studieboeken.nl == Search for book Organisatie en verandering in de praktijk with ISBN 9789081681087', 3, function suite(test) {
    casper.start('http://www.studieboeken.nl/' , function() {
		this.sendKeys('#SearchProductsControl1_TextBoxSearch', '9789081681087');
        this.click('#SearchProductsControl1_ButtonSearch');
	});
    casper.then(function() { });
    casper.then(function() {

    	test.assertEquals(
            this.fetchText('.DetailHeaderRightTopInfoLeft h1')
            .replace(/(\r\n|\n|\r)/gm, '').trim(), 
            'Organisatie en verandering in de praktijk', 
            'Correct h1 title'
        );

        test.assertEquals(
            this.fetchText('.Prize')
            .replace(/(\r\n|\n|\r)/gm, '').trim(), 
            '€ 59,95', 
            'Correct book price'
        );

        test.assertEval(function() {
            return __utils__.findOne('#MainContent_ImageMain')
            .getAttribute('src') == "http://www.studieboeken.nl/images/organisatie-en-verandering-in-de-praktijkanton-cozijnsen-9789081681087-3-1-image"
        }, "find right image!");

    });

    casper.run(function() {
        test.done();
    });
});
