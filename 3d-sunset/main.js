
//console.log(gsap);


 gsap.registerPlugin(MotionPathPlugin);

gsap.to("#sun", {duration: 5, motionPath: "#path"});


console.log(THREE);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("webgl");

var width = window.innerWidth;
var height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//create and configure a scene
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); //camera angle/lens size
const mesh = new THREE.Mesh(
   new THREE.SphereGeometry(), //figure
   new THREE.MeshBasicMaterial({ color: "#ff6600", wireframe: true }) //texture
);

//add the object to the scene
scene.add(mesh);

//move the mesh into the scene
mesh.position.z = -5;

//render what the camera is seeing
renderer.render(scene, camera)