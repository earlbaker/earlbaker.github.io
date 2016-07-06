window.addEvent('domready', function(){
	function setupLayout() {
		$('navcontainer').setStyle('height','25px');
		$('navcontainer').setStyle('overflow','hidden');
		$('navcontainer').setStyle('opacity','0.6');
		$('breadcrumbcontainer').setStyle('opacity','0.5');
		$$('#navcontainer ul ul').each(function(list){
			list.setStyle('opacity','0');
		});
	}
	


	
	if(!(navigator.userAgent.match(/iPhone/i))){
		setupSideMenu();
		setupLayout();
		setupMenu();
		}	
	
});

