var div = document.getElementById('container');
			var PSV = new PhotoSphereViewer({
					panorama: 'http://tassedecafe.org/wp-content/uploads/2013/01/parc-saint-pierre-amiens.jpg',
					container: div,
          time_anim: 3000,
          loading_img: 'https://raw.githubusercontent.com/mistic100/Photo-Sphere-Viewer/3.1.0/example/photosphere-logo.gif',
					navbar: false,
					navbar_style: {
						backgroundColor: 'rgba(58, 67, 77, 0.7)'
					},
				});