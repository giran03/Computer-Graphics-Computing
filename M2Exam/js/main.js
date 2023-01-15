const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color( 0xffffff );
renderer.setSize( window .innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// flooring
const flooringGeo = new THREE.BoxGeometry( 12, 1, 4 );
const flooringMat = new THREE.MeshBasicMaterial( { color: 0xffb366 } );
const flooring = new THREE.Mesh( flooringGeo, flooringMat );
scene.add( flooring );
flooring.position.x = 0;
flooring.position.y = -3;

// ceiling
const ceilingGeo = new THREE.BoxGeometry( 12, 1, 4 );
const celilingMat = new THREE.MeshBasicMaterial( { color: 0xffb263 } );
const celiling = new THREE.Mesh( ceilingGeo, celilingMat );
scene.add( celiling );
celiling.position.x = 0;
celiling.position.y = 3;

// wall left
const leftWallGeo = new THREE.PlaneGeometry(12.5,10);
const leftWallMat = new THREE.MeshBasicMaterial( { color: 0xe6e6e6, side: THREE.doubleSided} );
const leftWall = new THREE.Mesh( leftWallGeo, leftWallMat );
scene.add( leftWall );
leftWall.position.x = 10;
leftWall.position.y = 0;
leftWall.position.z = 2.5;
leftWall.rotation.y = -45;

// wall right
const rightWallGeo = new THREE.PlaneGeometry(12.5,10);
const rightWallMat = new THREE.MeshBasicMaterial( { color: 0xe6e6e6, side: THREE.doubleSided} );
const rightWall = new THREE.Mesh( rightWallGeo, rightWallMat );
scene.add( rightWall );
rightWall.position.x = -10;
rightWall.position.y = 0;
rightWall.position.z = 2.5;
rightWall.rotation.y = 45;

// front wall
const frontWallGeo = new THREE.PlaneGeometry(13,10);
const frontWallMat = new THREE.MeshBasicMaterial( { color: 0xdedede, side: THREE.doubleSided} );
const frontWall = new THREE.Mesh( frontWallGeo, frontWallMat );
scene.add( frontWall );
frontWall.position.x = 0;
frontWall.position.y = 0;
frontWall.position.z = -2.5;

//bed
const bedGeo = new THREE.BoxGeometry( 3, 0.5, 3 );
const bedMat = new THREE.MeshBasicMaterial( { color: 0x614725 } );
const bed = new THREE.Mesh( bedGeo, bedMat );
scene.add( bed );
bed.position.x = 4.5;
bed.position.y = -2.2;
bed.position.z = -0.5;
	// mattress
	const mattressGeo = new THREE.BoxGeometry( 3, 1, 3 );
	const mattressMat = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	const mattress = new THREE.Mesh( mattressGeo, mattressMat );
	scene.add( mattress );
	mattress.position.x = 4.5;
	mattress.position.y = -1.5;
	mattress.position.z = -0.5;

//table
const tableGeo = new THREE.BoxGeometry( 1.5, 0.2, 1.5);
const tableMat = new THREE.MeshBasicMaterial( { color: 0x856235 } );
const table = new THREE.Mesh( tableGeo, tableMat );
scene.add( table );
table.position.x = -5;
table.position.y = -0.5;
table.position.z = 0;
	// table legs left and right
	const tableLegLGeo = new THREE.BoxGeometry( 1, 2, 0.1 );
	const tableLegLMat = new THREE.MeshBasicMaterial( { color: 0xa67f4c } );
	const tableLegL = new THREE.Mesh( tableLegLGeo, tableLegLMat );
	scene.add( tableLegL );
	tableLegL.position.x = -5;
	tableLegL.position.y = -1.5;
	tableLegL.position.z = 0.5;
	const tableLegRGeo = new THREE.BoxGeometry( 1, 2, 0.1 );
	const tableLegRMat = new THREE.MeshBasicMaterial( { color: 0x614725 } );
	const tableLegR = new THREE.Mesh( tableLegRGeo, tableLegRMat );
	scene.add( tableLegR );
	tableLegR.position.x = -5;
	tableLegR.position.y = -1.5
	tableLegR.position.z = -0.5;

// monitor
const monitorGeo = new THREE.PlaneGeometry(2.5,1);
const monitorMat = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.doubleSided} );
const monitor = new THREE.Mesh( monitorGeo, monitorMat );
scene.add( monitor );
monitor.position.x = -5;
monitor.position.y = 0.5;
monitor.position.z = 0;
monitor.rotation.y = 90;
	// monitor leg stand
	const monitorLegGeo = new THREE.BoxGeometry( 0.1, 0.8, 0.1 );
	const monitorLegMat = new THREE.MeshBasicMaterial( { color: 0x212121 } );
	const monitorLeg = new THREE.Mesh( monitorLegGeo, monitorLegMat );
	scene.add( monitorLeg );
	monitorLeg.position.x = -5.2;
	monitorLeg.position.y = 0;
	monitorLeg.position.z = 0;
	monitorLeg.rotation.y = -90;
	// monitor base stand
	const monitorBaseGeo = new THREE.BoxGeometry( 0.5, 0.1, 1 );
	const monitorBaseMat = new THREE.MeshBasicMaterial( { color: 0x303030 } );
	const monitorBase = new THREE.Mesh( monitorBaseGeo, monitorBaseMat );
	scene.add( monitorBase );
	monitorBase.position.x = -5.2;
	monitorBase.position.y = -0.4;
	monitorBase.rotation.y = -90;

const ChairGeo = new THREE.BoxGeometry( 1, 0.2, 1.4 );
const ChairMat = new THREE.MeshBasicMaterial( { color: 0x303030 } );
const Chair = new THREE.Mesh( ChairGeo, ChairMat );
scene.add( Chair );
Chair.position.x = -3.5;
Chair.position.y = -1;
const ChairBackGeo = new THREE.BoxGeometry( 0.2, 2, 1.4 );
const ChairBackMat = new THREE.MeshBasicMaterial( { color: 0x525151 } );
const ChairBack = new THREE.Mesh( ChairBackGeo, ChairBackMat );
scene.add( ChairBack );
ChairBack.position.x = -2.9;
ChairBack.position.y = -.1;
const ChairLegGeo = new THREE.BoxGeometry( 0.2, 2, 1.3 );
const ChairLegMat = new THREE.MeshBasicMaterial( { color: 0x949494 } );
const ChairLeg = new THREE.Mesh( ChairLegGeo, ChairLegMat );
scene.add( ChairLeg );
ChairLeg.position.x = -3.38;
ChairLeg.position.y = -1.8;
ChairLeg.rotation.z = 120;
const ChairBaseGeo = new THREE.BoxGeometry( 0.8, 0.2, 1.3 );
const ChairBaseMat = new THREE.MeshBasicMaterial( { color: 0x949494 } );
const ChairBase = new THREE.Mesh( ChairBaseGeo, ChairBaseMat );
scene.add( ChairBase );
ChairBase.position.x = -3.38;
ChairBase.position.y = -2.5;

const windowGeo = new THREE.BoxGeometry( 5, 2.5, 2 );
const windowMat = new THREE.MeshBasicMaterial( { color: 0xb8f3ff } );
const windowWall = new THREE.Mesh( windowGeo, windowMat );
scene.add( windowWall );
windowWall.position.x = 0;
windowWall.position.y = .5;
windowWall.position.z = -3;
const windowOuterGeo = new THREE.BoxGeometry( 5.6, 3, 3 );
const windowOuterMat = new THREE.MeshBasicMaterial( { color: 0xc48341 } );
const windowWallOuter = new THREE.Mesh( windowOuterGeo, windowOuterMat );
scene.add( windowWallOuter );
windowWallOuter.position.x = 0;
windowWallOuter.position.y = .5;
windowWallOuter.position.z = -4;

const windowLineGeo = new THREE.PlaneGeometry(3.7,.03);
const windowLineMat = new THREE.MeshBasicMaterial( { color: 0xc48341, side: THREE.doubleSided} );
const windowLine = new THREE.Mesh( windowLineGeo, windowLineMat );
scene.add( windowLine );
windowLine.position.x = 0;
windowLine.position.y = .3;
windowLine.position.z = 0;
const windowLine2Geo = new THREE.PlaneGeometry(1.9	,.03);
const windowLine2 = new THREE.Mesh( windowLine2Geo, windowLineMat );
scene.add( windowLine2 );
windowLine2.position.x = 0;
windowLine2.position.y = .34;
windowLine2.position.z = 0;
windowLine2.rotation.z = Math.PI*0.5;

const windowShineGeo = new THREE.PlaneGeometry(1,.1);
const windowShineMat = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.doubleSided} );
const windowShine = new THREE.Mesh( windowShineGeo, windowShineMat );
scene.add( windowShine );
windowShine.position.x = -1.3;
windowShine.position.y = .8;
windowShine.position.z = 0;
windowShine.rotation.z = 7;
const windowShine2Geo = new THREE.PlaneGeometry(1.5,.1);
const windowShine2 = new THREE.Mesh( windowShine2Geo, windowShineMat );
scene.add( windowShine2 );
windowShine2.position.x = -1.15;
windowShine2.position.y = .65;
windowShine2.position.z = 0;
windowShine2.rotation.z = 7;


camera.position.z = 5;
function animate() {
	requestAnimationFrame( animate );

renderer.render( scene, camera );
}
animate();