window.log = function(){
  log.history = log.history || [];  
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});



hljs.tabReplace = '  '; 
hljs.initHighlightingOnLoad();

$(function(){
	$(".banners").jshowoff({speed:10000});
	/*$('pre code').not('code[class]').each(function(i, e) {$(e).addClass('csharp c-sharp'); hljs.highlightBlock(e, '  ')});*/
});

$('a[href*="Resizer3"]').click(function(){
	_gaq.push(['_trackEvent', 'Downloads', 'Releases', $(this).attr('href')]);
	_gaq.push(['_trackPageview', $(this).attr('href') ]);
});

$('a[href*="Resizer2"]').click(function(){
	_gaq.push(['_trackEvent', 'Downloads', 'Releases-v2', $(this).attr('href')]);
	_gaq.push(['_trackPageview', $(this).attr('href') ]);
});


if (typeof(loadq) !== 'undefined'){
	for (var i = 0; i < loadq.length; i++)
		$(loadq[i]);
}
//So e-junkie falls back gracefully.
if (typeof(EJEJC_lc) !== undefined) var EJEJC_lc = function (th) { return false; };


/*function EJEJC_config() {
EJEJC_BEACON = "https://www.googleadservices.com/pagead/conversion/0062225003/?value=1&label=purchase&script=0";
}


$(function(){
  ejGATracker = _gat._getTracker("UA-XXXXX-X");
});
	*/