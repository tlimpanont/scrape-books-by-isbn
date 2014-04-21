casper.test.begin('bol.com === Search for book Organisatie en verandering in de praktijk with ISBN 9789081681087', 6, function suite(test) {
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
            'Correct book new price'
        );

        test.assertEquals(
            this.fetchText('table.bol_table tr:first-child td.align_right p.bol_pricetag')
            .replace(/(\r\n|\n|\r|)/gm,'').trim(), 
            '€ 49,95', 
            'Correct book second price'
        );

        test.assertEval(function() {
            return __utils__.findOne('img.js_product_img')
            .getAttribute('src') == "http://s.s-bol.com/imgbase0/imagebase/large/FC/8/4/1/9/9200000012539148.jpg"
        }, "Find right image!");

        test.assertEquals(
            this.getCurrentUrl(),
            'http://www.bol.com/nl/p/organisatie-en-verandering-in-de-praktijk/9200000012539148/', 
            'Correct book URL'
        );

        test.assertEquals(
            this.getHTML("p[itemprop='description']").trim(), 
            'Verandering lijkt zo langzamerhand de enige constante in een veranderende wereld. Maar veranderingen moeten ook verbeteringen opleveren. Dat is geen geringe opgave. Organisatie en verandering in de praktijk geeft u de handvatten om veranderingen zo goed mogelijk in te zetten en te begeleiden. In dit boek wordt gekozen voor een integrale benadering van verandermanagement. <br><br>Essentieel voor die integrale benadering is dat de verandermanager kennis heeft van meerdere vakgebieden. Niet alleen van organisatiekunde en (sociale) psychologie, maar ook van bijvoorbeeld veranderkunde, communicatie en beleidswetenschappen. Inzichten uit deze vakgebieden helpen om sturing te geven aan de veranderingen, ze geven een gedegen referentiekader. De eerste stap is een goede analyse van de context van de organisatie, daarna kan gekeken worden naar de verandering zelf en de dynamiek die daarbij komt kijken. Ten slotte wordt de aansturing van de verandering behandeld, zowel vanuit de technische kant als de menselijke kant. Verandermanagers die zich alleen richten op de technische kant van aansturing slagen er vaak niet in om vertrouwen en toewijding te krijgen van de mensen binnen de organisatie.<br><br>Dit boek is bedoeld voor studenten die kennismaken met het vak verandermanagement. Maar het is ook geschikt voor studenten, docenten en geïnteresseerden die hun kennis van het vak willen verdiepen. Organisatie en verandering in de praktijk geeft u een breed, actueel, relevant en goed onderbouwd beeld van veranderen in organisaties en het vak verandermanagement. Daarnaast krijgt u meer inzicht in die wetenschappelijke disciplines die het vakgebied verandermanagement onderbouwen. Dit boek reduceert de complexiteit van verandermanagement en helpt om theorieën toegankelijk en toepasbaar te maken in de praktijk. De stijl van het boek, de cases en de praktijkgerichte opdrachten vormen hiertoe een belangrijke bijdrage.', 
            'Correct book description'
        );
        
    });

    casper.run(function() {
        test.done();
    });
});

casper.test.begin('bol.com === Search for book De kraamhulp with ISBN 9041423699', 1, function suite(test) {
    casper.start('http://www.bol.com/' , function() {
        this.sendKeys('#searchfor', '9041423699');
        this.click('#java_search_button_small');
    });

    casper.then(function() { });

    casper.then(function() {

        test.assertEquals(
            this.fetchText('table.bol_table tr:first-child td.align_right p.bol_pricetag')
            .replace(/(\r\n|\n|\r|)/gm,'').trim(), 
            '€ 12,00', 
            'Correct book second price'
        );
    });

    casper.run(function() {
        test.done();
    });
});

