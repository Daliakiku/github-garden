import * as THREE from 'three';
console.log(THREE);

//canvas
const canvas = document.querySelector('canvas.canvas');

//sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

canvas.width = sizes.width;
canvas.height = sizes.height;

//scene
const scene = new THREE.Scene();

//cube
const geometry = new THREE.TorusKnotGeometry(0.3, 0.05, 100, 16);
const material = new THREE.MeshNormalMaterial({ color: 0xff0000 });
const knot = new THREE.Mesh(geometry, material);

scene.add(knot);

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);


//Clock
const clock = new THREE.Clock();

// Animate
const tick = () => 
{
    const elapsedTime = clock.getElapsedTime();

    //Update objects
    knot.position.y = Math.sin(elapsedTime);
    //camera.lookAt(mesh.position);


    //Render
    renderer.render(scene, camera)

    //Call the function on the next frame 
    window.requestAnimationFrame(tick);
}

tick();
