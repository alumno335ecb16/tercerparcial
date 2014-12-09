//JavaScript
$(document).ready(function(e){	
$('#principal').height($('#page1').height());
document.addEventListener("deviceready",function(){
	
	audio=window.plugins.LowLatencyAudio;
	
	audio.preloadFx('do','audio/DO'.mp3, function(){},function(e){alert('Error '+e);});
	audio.preloadFx('re','audio/RE'.mp3, function(){},function(e){alert('Error '+e);});
	audio.preloadFx('mi','audio/MI'.mp3, function(){},function(e){alert('Error '+e);});
	audio.preloadFx('fa','audio/FA'.mp3, function(){},function(e){alert('Error '+e);});
	audio.preloadFx('sol','audio/SOL'.mp3, function(){},function(e){alert('Error '+e);});
	audio.preloadFx('la','audio/LA'.mp3, function(){},function(e){alert('Error '+e);});
	audio.preloadFx('si','audio/SI'.mp3, function(){},function(e){alert('Error '+e);});
	
	$('.nota').bind('touchstart',function(){
		$(this).addClass('tocada');
		audio.play($(this).attr('id'));
		
	}).bind('touchend',function(){
		$(this).removeClass('tocada');
	});
	
  },false);//deviceReady
});//ready
