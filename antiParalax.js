(function($) {
$.fn.anti=function(options) {
	var count=1;
	return function(options) {
	var settings=$.extend({
		url:'img/example-min.png',
		position:'top right',
		koefX:0.1*count,
		koefY:0.1*count,
		},options),
		$layer=$('<div id="layer'+count+'"></div>');
	$layer.css({
		'position': 'fixed',
		top:0,
		left:0,
		width:'100%',
		height:'100vh',
		zIndex:1,
		background: 'url('+settings.url+') no-repeat '+settings.position
	})
	this.prepend($layer)
	var x0=$layer.offset().left;
	var y0=$layer.offset().top;
		var moveX=function(e) {
			return x0+e.clientX*settings.koefX;
		}
		var moveY=function(e) {
			return y0+e.clientY*settings.koefY;
		}
		$('html').mousemove(function(e) {
			$layer.css({left:moveX(e),top:moveY(e)})
		})
	count++;
	};
}();
})(jQuery)
