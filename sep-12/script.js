import * as THREE from 'three';

//get canvas
const canvas = document.querySelector('canvas.canvas');
console.log(canvas + " loaded");


//create the scene
const scene = new THREE.Scene();

//create mesh & geometry
const geometry = new THREE.TorusKnotGeometry();
const material = new THREE.MeshNormalMaterial({color: 'red'});
const mesh = new THREE.Mesh(geometry, material);

//add mesh to scene
scene.add(mesh);

//move the mesh
mesh.position.z = -5;

//create the camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000); 
//where it begins rendering, where it ends rendering
//move the camera away from the object
camera.position.z = 5;

//create the renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

//window resizing
window.addEventListener('resize', () => {
    //update camera aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    //update renderer size and pixel ratio
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    //make sure everythings working!
    console.log("resized!!!");

    //change mesh color when resized
    const newMaterial = new THREE.MeshBasicMaterial({ color: 'blue' }); // Change color to blue
    mesh.material = newMaterial;

    //create render
    //make sure the renderer is inside the event listener to update on resize
    //and be continuosly listening for changes
    renderer.render(scene, camera);
});


