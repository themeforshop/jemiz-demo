// Logo + Purchase button
$('header .logo').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated fadeInDown');
	}},
{ offset: '100%' });
$('header .desc').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated fadeInUp');
	}},
{ offset: '100%' });

// Choose your home page version
$('.store-list .middle-block .preview-item').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated zoomIn');
	}},
{ offset: '100%' });
$('.store-list .left-block .preview-item').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated fadeInLeft');
	}},
{ offset: '100%' });
$('.store-list .right-block .preview-item').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated fadeInRight');
	}},
{ offset: '100%' });

// function
$('.sub-desc').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated slideInUp');
	}},
{ offset: '100%' });
$('.rating').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated slideInUp');
	}},
{ offset: '100%' });
$('.title').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated slideInUp');
	}},
{ offset: '100%' });
$('.content_footer_bottom p').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated slideInUp');
	}},
{ offset: '100%' });
// new label
$('#buy-now').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated flipInX');
	}},
{ offset: '80%' });

