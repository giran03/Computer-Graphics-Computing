const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color( 0xda9eff );
renderer.setSize( window.innerWidth,window.innerHeight );
document.body.appendChild( renderer.domElement );

const roomGeo = new THREE.BoxGeometry( 1.1, 1.1) ;
const roomMat = new THREE.MeshBasicMaterial( { color: 0x63ff78} );
const roomWall = new THREE.Mesh( roomGeo, roomMat );
scene.add( roomWall );

const floorGeo = new THREE.DodecahedronGeometry(2, 0) ;
const floorMat = new THREE.MeshBasicMaterial( { color: 0xa9eff} );
const floor = new THREE.Mesh( floorGeo, floorMat );
scene.add( floor );

const wallLeftGeo = new THREE.DodecahedronGeometry(1, 0) ;
const wallLeftMat = new THREE.MeshBasicMaterial( { color: 0xa9eff} );
const wallLeft = new THREE.Mesh( wallLeftGeo, wallLeftMat );
scene.add( wallLeft );

camera.position.z = 1;

function animate() {
	requestAnimationFrame( animate );

    roomWall.position.set(0,0.1);
    floor.position.set(0,-2.3);
    wallLeft.position.set(-1.3,0);

renderer.render( scene, camera );
}
animate();