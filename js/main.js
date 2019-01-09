var div = document.getElementById('container');
var PSV = new PhotoSphereViewer({
	panorama: 'https://visor360.herokuapp.com/img/canon.jpg',
	container: div,
	loading_img: 'https://raw.githubusercontent.com/mistic100/Photo-Sphere-Viewer/3.1.0/example/photosphere-logo.gif',
	navbar: 'autorotate zoom download fullscreen',
	caption: 'Dique El Cadillal <b>&copy; Federico Silva</b>',
	default_fov: 65,
	mousewheel: false,

});