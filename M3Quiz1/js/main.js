const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color( 0xffffff );
renderer.setSize( window .innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// PointLight.shadow.mapSize.width = 1024;
// PointLight.shadow.mapSize.height = 1024;

const flooring = new THREE.Mesh(
    flooringGeo = new THREE.BoxGeometery(1,1,1),
    flooringMat = new THREE.MeshBasicMaterial({color: 0x000000 })
)
flooring.position.set(1,1,1);
scene.add(flooring);

//helper
// const helper = new THREE.PointLightHelper( PointLight, 1, 1 );
// const shadowHelper = new THREE.CameraHelper( PointLight.shadow.camera );
// const grHelper = new THREE.GridHelper(200,50);
// scene.add( helper, grHelper, shadowHelper );

camera.position.z = 5;
function animate() {
	requestAnimationFrame( animate );

renderer.render( scene, camera );
}
animate();