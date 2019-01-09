var div = document.getElementById('container');
var PSV = new PhotoSphereViewer({
	panorama: 'https://visor360.herokuapp.com/img/canon.jpg',
	container: div,
	loading_txt: 'Se está cargando la imágen 360 en alta calidad para una mejor experiencia, esto podria tardar varios segundos...',
	navbar: 'autorotate zoom download fullscreen',
	caption: 'Dique El Cadillal <b>&copy; Federico Silva</b>',
	default_fov: 65,
	mousewheel: false,

});