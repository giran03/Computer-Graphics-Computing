import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color( 0xffffff );
renderer.setSize( window .innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const floorGeo = new THREE.BoxGeometry( 1, 1, 1);
const floorMat = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const floorMesh = new THREE.Mesh( floorGeo, floorMat );
floorMesh.position.set(0,0,0);
scene.add(floorMesh);

camera.position.z = 1;
function animate() {
	requestAnimationFrame( animate );

renderer.render( scene, camera );
}
animate();