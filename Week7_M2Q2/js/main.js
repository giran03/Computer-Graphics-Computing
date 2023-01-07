const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color( 0x000000 );
renderer.setSize( 800,800 );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry( 0.6, 0.3) ;
const material = new THREE.MeshBasicMaterial( { color: 0x63ff78, side: THREE.DoubleSide} );
const dvdBox = new THREE.Mesh( geometry, material );
scene.add( dvdBox );

// -------- V A R I A B L E S --------
let xSpeed = 0.008;
let ySpeed = 0.008;
let dvdHP = 8;

// -------- F U N C T I O N S --------

// to generate a random rgb color for the material.
function randColor()
{
    randColorR = Math.random(256);
    randColorG = Math.random(256);
    randColorB = Math.random(256);
    dvdBox.material.color.setRGB(randColorR,randColorG,randColorB);
}

// to decrease dvdBox scale on hit.
function dvdSize()
{
    dvdBox.scale.x -= 0.1;
    dvdBox.scale.y -= 0.1;
}

// decrement and print the variable 'dvdHP'.
function dvdHPLeft()
{
    dvdHP -= 1;
    console.log("DVD BOUNCES LEFT: " + dvdHP);
}

// stop the movement of the dvdBox after 8 bounces.
function stop() 
{
    xSpeed = 0;
    ySpeed = 0;
}
// -------- END OF FUNCTIONS --------

camera.position.z = 1;

// default dvdBox position
dvdBox.position.x = 0;
dvdBox.position.y = 0;
dvdBox.position.z = 0;

// starting dvdBox color
randColor(dvdBox);

function animate() {
	requestAnimationFrame( animate );

    //console.log("current position x: " + dvdBox.position.x);
    //console.log("current position y: " + dvdBox.position.y);

    dvdBox.position.x += xSpeed
    dvdBox.position.y += ySpeed

    if(dvdBox.position.x > 0.7)
        {xSpeed *= -1; randColor(dvdBox); dvdSize(); dvdHPLeft();}
    else if(dvdBox.position.x < -0.7)
        {xSpeed *= -1; randColor(dvdBox); dvdSize(); dvdHPLeft();}
    else if(dvdBox.position.y > 0.85)
        {ySpeed *= -1; randColor(dvdBox); dvdSize(); dvdHPLeft();}
    else if(dvdBox.position.y < -0.85)
        {ySpeed *= -1; randColor(dvdBox); dvdSize(); dvdHPLeft();}
    else if(dvdHP <= 0)
        {dvdBox.visible = false; stop();}

renderer.render( scene, camera );
}
animate();