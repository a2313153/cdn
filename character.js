// JavaScript Document

buzz.defaults.preload = 'none';

var	voice_01a = new buzz.sound( "voice/chara_01a", {formats: [ "ogg", "mp3" ]}),
	voice_01b = new buzz.sound( "voice/chara_01b", {formats: [ "ogg", "mp3" ]}),
	voice_01c = new buzz.sound( "voice/chara_01c", {formats: [ "ogg", "mp3" ]}),
	voice_01d = new buzz.sound( "voice/chara_01d", {formats: [ "ogg", "mp3" ]}),
	voice_01e = new buzz.sound( "voice/chara_01e", {formats: [ "ogg", "mp3" ]}),
	
	voice_02a = new buzz.sound( "voice/chara_02a", {formats: [ "ogg", "mp3" ]}),
	voice_02b = new buzz.sound( "voice/chara_02b", {formats: [ "ogg", "mp3" ]}),
	voice_02c = new buzz.sound( "voice/chara_02c", {formats: [ "ogg", "mp3" ]}),
	voice_02d = new buzz.sound( "voice/chara_02d", {formats: [ "ogg", "mp3" ]}),
	voice_02e = new buzz.sound( "voice/chara_02e", {formats: [ "ogg", "mp3" ]}),
	
	voice_03a = new buzz.sound( "voice/chara_03a", {formats: [ "ogg", "mp3" ]}),
	voice_03b = new buzz.sound( "voice/chara_03b", {formats: [ "ogg", "mp3" ]}),
	voice_03c = new buzz.sound( "voice/chara_03c", {formats: [ "ogg", "mp3" ]}),
	voice_03d = new buzz.sound( "voice/chara_03d", {formats: [ "ogg", "mp3" ]}),
	voice_03e = new buzz.sound( "voice/chara_03e", {formats: [ "ogg", "mp3" ]}),
	
	voice_04a = new buzz.sound( "voice/chara_04a", {formats: [ "ogg", "mp3" ]}),
	voice_04b = new buzz.sound( "voice/chara_04b", {formats: [ "ogg", "mp3" ]}),
	voice_04c = new buzz.sound( "voice/chara_04c", {formats: [ "ogg", "mp3" ]}),
	voice_04d = new buzz.sound( "voice/chara_04d", {formats: [ "ogg", "mp3" ]}),
	voice_04e = new buzz.sound( "voice/chara_04e", {formats: [ "ogg", "mp3" ]}),
	
	voice_05a = new buzz.sound( "voice/chara_05a", {formats: [ "ogg", "mp3" ]}),
	voice_05b = new buzz.sound( "voice/chara_05b", {formats: [ "ogg", "mp3" ]}),
	voice_05c = new buzz.sound( "voice/chara_05c", {formats: [ "ogg", "mp3" ]}),
	voice_05d = new buzz.sound( "voice/chara_05d", {formats: [ "ogg", "mp3" ]}),
	voice_05e = new buzz.sound( "voice/chara_05e", {formats: [ "ogg", "mp3" ]})
	
	;


$volume = $( '' );

$( function() {
	


	$('a.voice_01a').click(function(){

		buzz.all().stop()
		voice_01a.play();
	});
	
	$('a.voice_01b').click(function(){
		buzz.all().stop()
		voice_01b.play();
	});
	
	$('a.voice_01c').click(function(){
		buzz.all().stop()
		voice_01c.play();
	});
	
	$('a.voice_01d').click(function(){
		buzz.all().stop()
		voice_01d.play();
	});
	
	$('a.voice_01e').click(function(){
		buzz.all().stop()
		voice_01e.play();
	});
	
	
	$('a.voice_02a').click(function(){
		buzz.all().stop()
		voice_02a.play();
	});
	
	$('a.voice_02b').click(function(){
		buzz.all().stop()
		voice_02b.play();
	});
	
	$('a.voice_02c').click(function(){
		buzz.all().stop()
		voice_02c.play();
	});
	
	$('a.voice_02d').click(function(){
		buzz.all().stop()
		voice_02d.play();
	});
	
	$('a.voice_02e').click(function(){
		buzz.all().stop()
		voice_02e.play();
	});
	
	
	$('a.voice_03a').click(function(){
		buzz.all().stop()
		voice_03a.play();
	});
	
	$('a.voice_03b').click(function(){
		buzz.all().stop()
		voice_03b.play();
	});
	
	$('a.voice_03c').click(function(){
		buzz.all().stop()
		voice_03c.play();
	});
	
	$('a.voice_03d').click(function(){
		buzz.all().stop()
		voice_03d.play();
	});
	
	$('a.voice_03e').click(function(){
		buzz.all().stop()
		voice_03e.play();
	});
	
	
	$('a.voice_04a').click(function(){
		buzz.all().stop()
		voice_04a.play();
	});
	
	$('a.voice_04b').click(function(){
		buzz.all().stop()
		voice_04b.play();
	});
	
	$('a.voice_04c').click(function(){
		buzz.all().stop()
		voice_04c.play();
	});
	
	$('a.voice_04d').click(function(){
		buzz.all().stop()
		voice_04d.play();
	});
	
	$('a.voice_04e').click(function(){
		buzz.all().stop()
		voice_04e.play();
	});
	
	
	$('a.voice_05a').click(function(){
		buzz.all().stop()
		voice_05a.play();
	});
	
	$('a.voice_05b').click(function(){
		buzz.all().stop()
		voice_05b.play();
	});
	
	$('a.voice_05c').click(function(){
		buzz.all().stop()
		voice_05c.play();
	});
	
	$('a.voice_05d').click(function(){
		buzz.all().stop()
		voice_05d.play();
	});
	
	$('a.voice_05e').click(function(){
		buzz.all().stop()
		voice_05e.play();
	});
	
});
