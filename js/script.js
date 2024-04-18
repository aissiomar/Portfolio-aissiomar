var bm = document.getElementById('button_menu');
var m = document.getElementById('menu');
bm.onclick=function(){
	if(bm.classList!='is_active'){
		bm.classList.add('is_active');
		m.classList.add('is_active');
	}else{
		m.classList.remove('is_active');
		bm.classList.remove('is_active');
	}
};

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#card-carousel', {
		  perPage    : 2,
		  breakpoints: {
			  640: {
				  perPage: 1,
			  },
		  },
	} ).mount();
  } );


