window.addEvent('domready', function(){
	var myTips = new Tips($$('#mainContent a'), {
		timeOut: 700,
		maxTitleChars: 30,
		maxOpacity: .8
		});
});