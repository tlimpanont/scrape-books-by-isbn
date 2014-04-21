casper.test.begin('studieboeken.nl == Search for book Organisatie en verandering in de praktijk with ISBN 9789081681087', 6, function suite(test) {
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
            'Correct book new price'
        );

        test.assertEquals(
            this.fetchText("#TabUsedProducts .DetailOffersPrize p span")
            .replace(/(\r\n|\n|\r)/gm, '').trim(), 
            '', 
            'Correct book second price'
        );

        test.assertEval(function() {
            return __utils__.findOne('#MainContent_ImageMain')
            .getAttribute('src') == "http://www.studieboeken.nl/images/organisatie-en-verandering-in-de-praktijkanton-cozijnsen-9789081681087-3-1-image"
        }, "find right image!");

        test.assertEquals(
            this.getCurrentUrl(),
            'http://www.studieboeken.nl/nederlandse-boeken/business-management/management/organisatie-en-verandering-in-de-praktijk/9789081681087/index.html', 
            'Correct book URL'
        );

        test.assertEquals(
            this.getHTML("#DivDescription").trim(), 
            'Vandaag de dag is verandering is de enige constante factor in deze voortdurend veranderende wereld. Veranderingen moeten  verbeteringen opleveren. Dat is de uitdaging waar organisaties voor staan. Organisatie en verandering in de praktijk geeft u de handvatten om verandertrajecten doelgericht in te zetten en goed te begeleiden. Dit boek gaat uit van een integrale benadering van verandermanagement. Essentieel voor deze benadering is dat de verandermanager kennis heeft van meerdere vakgebieden. Niet alleen van organisatiekunde en (sociale) psychologie, maar ook van bijvoorbeeld veranderkunde, communicatie en beleidswetenschappen. Inzichten uit deze vakgebieden helpen bij het sturing geven aan veranderingen, ze bieden een verantwoord referentiekader. De eerste stap bij verand...', 
            'Correct book description'
        );

    });

    casper.run(function() {
        test.done();
    });
});

casper.test.begin('studieboeken.nl == Basisboek Bedrijfseconomie Opgaven with ISBN 9789001797768', 1, function suite(test){
    casper.start('http://www.studieboeken.nl/' , function() {
        this.sendKeys('#SearchProductsControl1_TextBoxSearch', '9789001797768');
        this.click('#SearchProductsControl1_ButtonSearch');
    });
    casper.then(function() { });

    casper.then(function() {
       test.assertEquals(
            this.fetchText("#TabUsedProducts .DetailOffersPrize p span")
            .replace(/(\r\n|\n|\r)/gm, '').trim(), 
            '€ 20,00', 
            'Correct book second price'
        );
    });

    casper.run(function() {
        test.done();
    });
});

