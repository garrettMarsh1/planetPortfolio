import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AmbientLight } from 'three';
import { Float32BufferAttribute } from 'three';
import { RingBufferGeometry } from 'three';
import { Plane } from 'three';
import { DoubleSide } from 'three';

var camera, scene, renderer, mesh, goal, keys;
var time = 0;
var newPosition = new THREE.Vector3();
var matrix = new THREE.Matrix4();
var stop = 1;
var DEGTORAD = 0.01745327;
var temp = new THREE.Vector3;
var dir = new THREE.Vector3;
var a = new THREE.Vector3;
var b = new THREE.Vector3;
var coronaSafetyDistance = 0.3;
var velocity = 0.0;
var speed = 0.0;





var model;
var loader = new GLTFLoader();
 loader.load(
     'assets/retroUFO.glb',
     ( glb ) => {
         //called when the resource is loaded
         model = glb.scene;
         model.position.set(0, 0, 60000);
         scene.add( model );
         console.log(model)
         model.add(camera)
         camera.lookAt(mesh.position)
         model.rotateY(1) 
     },
     ( xhr ) => {
         // called while loading is progressing
         console.log( `${( xhr.loaded / xhr.total * 100
          )}% loaded` );
     },
     init(),
    animate(),  
 );




 const sunTexture = new THREE.TextureLoader().
 load('images/sun.jpeg');
 
 const sun = new THREE.Mesh(
   new THREE.SphereGeometry(7000, 200, 200 ),
   new THREE.MeshStandardMaterial({
     map: sunTexture,
     
   })
 );
 scene.add(sun);

 sun.position.x = 400;




const mercuryTexture = new THREE.TextureLoader().
 load('images/mercury.jpeg');
 const mercuryParent = new THREE.Object3D();
 const mercury = new THREE.Mesh(
   new THREE.SphereGeometry(250, 50, 50 ),
   new THREE.MeshStandardMaterial({
     map: mercuryTexture,
   })
 );
 scene.add(mercury);
 scene.add(mercuryParent);
 mercuryParent.add(mercury);
 mercuryParent.position.x = 400;
 mercury.position.x = 21000


 const venusTexture = new THREE.TextureLoader().
 load('images/venus.jpeg');
 const venusParent = new THREE.Object3D();
 const venus = new THREE.Mesh(
   new THREE.SphereGeometry(620, 50, 50 ),
   new THREE.MeshStandardMaterial({
     map: venusTexture,
   })
 );
 scene.add(venus);
 scene.add(venusParent);
 venusParent.add(venus);
 venusParent.position.x = 400;
 venus.position.x = 26500;
 venus.position.z = 26500;






 const earthTexture = new THREE.TextureLoader().
 load('images/earth_UV.jpeg');
 const earthParent = new THREE.Object3D();
 const earth = new THREE.Mesh(
   new THREE.SphereGeometry(640, 50, 50 ),
   new THREE.MeshStandardMaterial({
     map: earthTexture,
   })
 );
 scene.add(earth);
 scene.add(earthParent);
 earthParent.add(earth);
 earthParent.position.x = 400;
 earth.position.x = -39500;
 earth.position.z = -39500;


 const marsTexture = new THREE.TextureLoader().
 load('images/mars.jpeg');
 const marsParent = new THREE.Object3D();
 const mars = new THREE.Mesh(
   new THREE.SphereGeometry(335, 50, 50 ),
   new THREE.MeshStandardMaterial({
     map: marsTexture,
     side: DoubleSide,
   })
 );
 scene.add(mars);
 scene.add(marsParent);
 marsParent.add(mars);
 marsParent.position.x = 400;
 mars.position.x = 47500;
 mars.position.z = -47500;


 const jupiterTexture = new THREE.TextureLoader().
 load('images/jupiter.jpeg');
 const jupiterParent = new THREE.Object3D();
 const jupiter = new THREE.Mesh(
   new THREE.SphereGeometry(2200, 300, 300 ),
   new THREE.MeshStandardMaterial({
     map: jupiterTexture,
     side: DoubleSide,
   })
 );
 scene.add(jupiter);
 scene.add(jupiterParent);
 jupiterParent.add(jupiter);
 jupiterParent.position.x = 400;
 jupiter.position.x = 75000;
 jupiter.position.z = 75000;



 const saturnTexture = new THREE.TextureLoader().
 load('images/saturn.jpeg');
 const saturnParent = new THREE.Object3D();
 const saturn = new THREE.Mesh(
   new THREE.SphereGeometry(1740, 1740, 1740 ),
   new THREE.MeshStandardMaterial({
     map: saturnTexture,
     side: DoubleSide,
     
   })
 );


 scene.add(saturn);
 scene.add(saturnParent)
 saturnParent.add(saturn)
 saturnParent.position.x = 400;
 
 const saturnRingTexture = new THREE.TextureLoader().
 load('images/saturnRing.jpeg');
 const saturnRing = new THREE.Mesh(
   new THREE.RingGeometry(2800, 3800, 3800 ).
   rotateX(-Math.PI * 0.5),
 new THREE.MeshStandardMaterial({
   map: saturnRingTexture,
   side: DoubleSide,
     }
   ),
 );
saturnParent.add(saturn);
saturnParent.add(saturnRing);
saturn.position.x = 95000;
saturnRing.position.x = 95000;



const uranusTexture = new THREE.TextureLoader().
 load('images/uranus.jpeg');
 const uranusParent = new THREE.Object3D();
 const uranus = new THREE.Mesh(
   new THREE.SphereGeometry(1520, 300, 300 ),
   new THREE.MeshStandardMaterial({
     map: uranusTexture,
     side: DoubleSide,
   })
 );


 scene.add(uranus);
 scene.add(uranusParent)
 uranusParent.add(uranus)
 uranusParent.position.x = 400;
 uranus.position.x = -115000;
 uranus.position.z = 115000


const neptuneTexture = new THREE.TextureLoader().
load('images/neptune.jpeg');
const neptuneParent = new THREE.Object3D();
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(1500, 300, 300 ),
  new THREE.MeshStandardMaterial({
    map: neptuneTexture,
    side: DoubleSide,
  })
);


scene.add(neptune);
scene.add(neptuneParent)
neptuneParent.add(neptune)
neptuneParent.position.x = 400;
neptune.position.x = -124000;
neptune.position.z = -124000





function init() {
    
    camera = new THREE.PerspectiveCamera(
       75,
       window.innerWidth / window.innerHeight,
      0.01,
      200000 
    );

    //camera.position.set( 5, 10, 10 );
    
    scene = new THREE.Scene();
    const light = new AmbientLight(0xffffff, .6);
    scene.add(light);
    const light2 = new THREE.PointLight( 0xfffff0, 1, 1000000 );
    light.position.set( 400, 0, 0 );
    scene.add( light2 );
    const light3 = new THREE.HemisphereLight( 0xfffff0, 1, .7 );
    light.position.set( 400, 0, 0 );
    scene.add( light3 );


    mesh = new THREE.Mesh( model );    
    goal = new THREE.Object3D;
    goal.position.z = -coronaSafetyDistance;
    goal.add( camera );
    
    
    const listener = new THREE.AudioListener();
    camera.add(listener)

    const audioLoader = new THREE.AudioLoader();

    const backgroundSound = new THREE.Audio(listener);

    audioLoader.load('audio/soundScape.mp3', function( buffer ) {
      backgroundSound.setBuffer( buffer );
      backgroundSound.setLoop( true );
      backgroundSound.setVolume(0.3);
      backgroundSound.play(onload);
    });



  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  
  keys = {
      a: false,
      s: false,
      d: false,
      w: false,
      e: false,
      q: false,
      c: false,
      z: false
    };

    document.body.addEventListener( 'keydown', function(e) {
      
      var key = e.code.replace('Key', '').toLowerCase();
      if ( keys[ key ] !== undefined )
        keys[ key ] = true;
      
    });
    document.body.addEventListener( 'keyup', function(e) {
      
      var key = e.code.replace('Key', '').toLowerCase();
      if ( keys[ key ] !== undefined )
        keys[ key ] = false;
    
});


  

//placing stars
function  placeAllStars() {

  const starVertices = []
  for (let i = 0; i < 100000; i++){
    const x = (Math.random() - 0.5) * 1000000
    const y = (Math.random() - 0.5) * 1000000
    const z = -Math.random()* 4000000
    starVertices.push(x, y, z)
  }
  const starGeometry = new THREE.BufferGeometry(2, 50, 50)
  const starMaterial = new THREE.PointsMaterial({
     color: 0xffffff,
    
    
  })

const stars = new THREE.Points(starGeometry, starMaterial)
starGeometry.setAttribute('position', 
new THREE.Float32BufferAttribute(
  starVertices, 3))
  scene.add(stars)


//creating stars
const starVertices2 = []
for (let i = 0; i < 10000; i++){
  const x = (Math.random() - 0.5) * 1000000
  const y = (Math.random() - 0.5) * 100000
  const z = -Math.random() * 4000000
  starVertices2.push(x, y, z)
}
const starGeometry2 = new THREE.BufferGeometry(2, 50, 50)
const starMaterial2 = new THREE.PointsMaterial({
  color: 0xfff504,
 
})

//placing stars
const stars2 = new THREE.Points(starGeometry2, starMaterial2)
starGeometry2.setAttribute('position', 
new THREE.Float32BufferAttribute(
  starVertices2, 3))
  scene.add(stars2)

 //////////////////////////////
  const starVertices3 = []
  for (let i = 0; i < 100000; i++){
    const x = (Math.random() - 0.5) * -1000000
    const y = (Math.random() - 0.5) * -1000000
    const z = -Math.random()* -4000000
    starVertices3.push(x, y, z)
  }
  const starGeometry3 = new THREE.BufferGeometry(4, 50, 50)
  const starMaterial3 = new THREE.PointsMaterial({
    color: 0xffffff,
  })
  
  //placing stars
  const stars3 = new THREE.Points(starGeometry3, starMaterial3)
  starGeometry3.setAttribute('position', 
  new THREE.Float32BufferAttribute(
    starVertices3, 3))
    scene.add(stars3)
  
  
  //creating stars
  const starVertices4 = []
  for (let i = 0; i < 100000; i++){
    const x = (Math.random() - 0.5) * -1000000
    const y = (Math.random() - 0.5) * -1000000
    const z = -Math.random() * -4000000 * Math.PI
    starVertices2.push(x, y, z)
  }
  const starGeometry4 = new THREE.BufferGeometry(2, 50, 50)
  const starMaterial4 = new THREE.PointsMaterial({
    color: 0xfff504,
   
  })
  
  //placing stars
  const stars4 = new THREE.Points(starGeometry4, starMaterial4)
  starGeometry4.setAttribute('position', 
  new THREE.Float32BufferAttribute(
    starVertices4, 3))
    scene.add(stars4)
  }

  placeAllStars()
}




function animate() {
requestAnimationFrame( animate );
renderer.render( scene, camera );
//renderer.render( scene, camera );
  speed = 0.0;
  if (model){
  if ( keys.w )
    speed = -13.5;
  else if ( keys.s )
    speed = 3.5;
  velocity += ( speed - velocity ) * .3;
  model.translateZ( velocity );

  if ( keys.a )
    model.rotateY(0.05);
  else if ( keys.d )
    model.rotateY(-0.05);

  if ( keys.c )
    model.rotateZ(0.05);
  else if ( keys.z )
    model.rotateZ(-0.05);

  if ( keys.e )
    model.rotateX(0.03)
  else if ( keys.q )
    model.rotateX(-0.03);
  a.lerp(model.position, 0.4);
  b.copy(model.position);
  
    dir.copy( a ).sub( b ).normalize();
    const dis = a.distanceTo( b ) - coronaSafetyDistance;
    goal.position.addScaledVector( dir, dis );
    temp.setFromMatrixPosition(goal.matrixWorld);

    sun.rotation.y += -0.001;
    mercury.rotation.y += -0.001;
    mercuryParent.rotation.y += -0.00016;
    venus.rotation.y += -0.001;
    venusParent.rotation.y += -0.0001;
    earth.rotation.y += -0.001;
    earthParent.rotation.y += -0.000118;
    mars.rotation.y += -0.001;
    marsParent.rotation.y += -0.000118;
    saturnParent.rotation.y += -0.000016;
    saturn.rotation.y += -0.001;
    jupiterParent.rotation.y += -0.000019;
    jupiter.rotation.y += -0.001;
    uranusParent.rotation.y += -0.000029;
    uranus.rotation.y += -0.001;
    neptuneParent.rotation.y += -0.000031
    uranus.rotation.y += -0.001;
    
  }
  
    camera.position.set(0, 5, 10)
    //camera.position.lerp(temp, 0.5);

   
   
    
    

}

