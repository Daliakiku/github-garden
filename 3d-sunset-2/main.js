console.log("Hello from main.js!");
console.log(THREE);


const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//scene, camera, mesh, renderer

//scene
const scene = new THREE.Scene();

//camera   
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
//field of view, aspect ratio, where the camera starts to render, and where it stops rendering

//mesh
//we need geometry and material to create a mesh
const geometry = new THREE.TorusKnotGeometry(); //can be left blank
const material = new THREE.MeshNormalMaterial({flatShading: true, color: "red"}); //can be left blank

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh); //add the mesh to the scene
mesh.position.z = -8; //move the mesh away from the camera

//Render
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.width, canvas.height);

//Give instruction to print the first frame
renderer.render(scene, camera);

function animate (){
    requestAnimationFrame(animate); //calls the animate function at 60fps
    mesh.rotation.x += 0.01; //rotate the mesh
    mesh.rotation.y += 0.01; //rotate the mesh
    renderer.render(scene, camera); //render the scene
}

animate();