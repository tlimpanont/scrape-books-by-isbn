casper.test.begin('bol.com === Search for book Organisatie en verandering in de praktijk with ISBN 9789081681087', 3, function suite(test) {
    casper.start('http://www.bol.com/' , function() {
		this.sendKeys('#searchfor', '9789081681087');
        this.click('#java_search_button_small');
	});

    casper.then(function() { });

    casper.then(function() {

    	test.assertEquals(
            this.fetchText('div.product_heading.bottom_s h1.bol_header.clear_autoheight.bottom_0')
            .replace(/(\r\n|\n|\r)/gm, '').trim(), 
            'Organisatie en verandering in de praktijk', 
            'Correct h1 title'
        );

        test.assertEquals(
            this.fetchText('div.plaza ul.plaza-tabs li#tab_bol span.pricetag_grey')
            .replace(/(\r\n|\n|\r|)/gm,'').trim(), 
            '€ 59,95', 
            'Correct book price'
        );

        test.assertEval(function() {
            return __utils__.findOne('img.js_product_img')
            .getAttribute('src') == "http://s.s-bol.com/imgbase0/imagebase/large/FC/8/4/1/9/9200000012539148.jpg"
        }, "Find right image!");
        
    });

    casper.run(function() {
        test.done();
    });
});
