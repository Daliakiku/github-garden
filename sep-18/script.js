console.log("pop that javascriptussy queen");

import * as THREE from 'three';


//canvas
const canvas = document.querySelector('canvas.canvas');
console.log(canvas);


//create scene
const scene = new THREE.Scene();

//object/mesh = geometry + material
const geometry = new THREE.BoxGeometry(1, 1, 1); //width, height, depth
const material = new THREE.MeshBasicMaterial({ color: "red"});
const mesh = new THREE.Mesh(geometry, material);

//add mesh to scene
scene.add(mesh);

//rotate mesh
mesh.rotation.y = 0.5;

//camera
const sizes = { //creating an object to store sizes
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); //fov, aspect ratio
//add camera to the scene
scene.add(camera);
camera.position.z = 3; //move the camera away from the cube

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

//create render
renderer.render(scene, camera);