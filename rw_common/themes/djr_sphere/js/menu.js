Fx.Morph = Fx.Styles.extend({

	start: function(className){
		
		var to = {};
		
		$each(document.styleSheets, function(style){
			var rules = style.rules || style.cssRules;
			$each(rules, function(rule){
				if (!rule.selectorText.test('\.' + className + '$')) return;
				Fx.CSS.Styles.each(function(style){
					if (!rule.style || !rule.style[style]) return;
					var ruleStyle = rule.style[style];
					to[style] = (style.test(/color/i) && ruleStyle.test(/^rgb/)) ? ruleStyle.rgbToHex() : ruleStyle;
				});
			});
		});
		return this.parent(to);
	}
	
});

Fx.CSS.Styles = ["backgroundColor", "backgroundPosition", "color", "width", "height", "left", "top", "bottom", "right", "fontSize", "letterSpacing", "lineHeight", "textIndent", "opacity"];
Fx.CSS.Styles.extend(Element.Styles.padding);
Fx.CSS.Styles.extend(Element.Styles.margin);
Element.Styles.border.each(function(border){
	['Width', 'Color'].each(function(property){
		Fx.CSS.Styles.push(border + property);
	});
});

function setupSideMenu() {
	
		if ($('navcontainer').getElement('.currentAncestor')) {
			try {
				$('navcontainer').getElement('.currentAncestor').getElement('ul').clone().inject($('sidebarContainer'), 'top').setProperty('id', 'navbarside');
			}
			catch(err) {
				return;
			}
		}
		else {
			try {
				$('navcontainer').getElement('.current').getElement('ul').clone().inject($('sidebarContainer'), 'top').setProperty('id', 'navbarside');
			}
			catch(err) {
				return;
			}
		}
}

function setupMenu() {
	var navOPFX=$('navcontainer').effect('opacity', {duration: 400, transition: Fx.Transitions.Expo.easeIn, wait: false});
	var navHFX=$('navcontainer').effect('height', {duration: 400, transition: Fx.Transitions.Sine.easeIn, wait: false});
	var list = $$('#navcontainer ul ul');
	if (!window.ie6) {var headerImageHeight=($('headerImage').getSize().size.y);}
	else {var headerImageHeight=220;}
	if (headerImageHeight==0) {
		var headerImageHeight=25;
		}
	
	$('navcontainer').addEvents({
		'mouseenter': function() {
			navOPFX.start(0.9);
			if ($defined($E('#navcontainer ul ul'))) {
				if (!($('headerHeight').getSize().size.y == 0)) {
					navHFX.start(headerImageHeight);
				}
				
			}
			$$('#navcontainer ul ul').each(function(list){
				list.effects({duration: 200, transition: Fx.Transitions.Expo.easeIn}).start({'opacity':[0.9]});
				});
			},
		'mouseleave': function() {
			navOPFX.start(0.6);
			navHFX.start(25);
			$$('#navcontainer ul ul').each(function(list){
				list.effects({duration: 200, transition: Fx.Transitions.Expo.easeOut}).start({'opacity':[0]});
				});
			$('navcontainer').setStyle('overflow','hidden');
			}
	});


	$$('#navcontainer a').each(function(navitem){
		navitem.addClass('morph1');
		var myMorph = new Fx.Morph(navitem, {wait: false, duration: 200});
		
		navitem.addEvent('mouseenter', function(e){
			//new Event(e).stop();
			myMorph.start('morph2');
			});

		navitem.addEvent('mouseleave', function(e){
			//new Event(e).stop();
			myMorph.start('morph1');
		});
		myMorph.start('morph1');
	});

	$$('#breadcrumbcontainer a').each(function(bread){
		bread.addClass('morph1');
		var breadMorph = new Fx.Morph(bread, {wait: false, duration: 200});
		
		bread.addEvent('mouseenter', function(e){
			//new Event(e).stop();
			breadMorph.start('morph2');
		});

		bread.addEvent('mouseleave', function(e){
			//new Event(e).stop();
			breadMorph.start('morph1');
		});
	breadMorph.start('morph1');
	});
	
	
};