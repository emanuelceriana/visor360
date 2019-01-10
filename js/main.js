var div = document.getElementById('container');
var PSV = new PhotoSphereViewer({
	panorama: 'https://visor360.herokuapp.com/img/cadillal2.jpg',
	container: div,
	loading_img: 'https://visor360.herokuapp.com/img/loading.gif',
	navbar: 'autorotate zoom download fullscreen',
	caption: 'Dique El Cadillal <b>&copy; Federico Silva</b>',
	default_fov: 65,
	mousewheel: false,

});