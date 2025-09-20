console.log("pop that javascriptussy queen");

import * as THREE from 'three';


//canvas
const canvas = document.querySelector('canvas.canvas');
console.log(canvas);


//create scene
const scene = new THREE.Scene();

//create object group
const group = new THREE.Group();
scene.add(group);
group.position.y = -1;
group.position.z = -7;

//create trunk
const trunk = new THREE.Mesh(
    new THREE.BoxGeometry(1, 3, 1),
    new THREE.MeshBasicMaterial({ color: '#573630' })
);
group.add(trunk);
trunk.position.y = -1;

const leaves1 = new THREE.Mesh(
    new THREE.SphereGeometry(2, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
group.add(leaves1);
leaves1.position.y = 2;

const leaves2 = new THREE.Mesh(
    new THREE.SphereGeometry(1, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
group.add(leaves2);
leaves2.position.x = 1.5;
leaves2.position.y = 3;

const leaves3 = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
group.add(leaves3);
leaves3.position.x = -1;
leaves3.position.y = 3;


//camera
const sizes = { //creating an object to store sizes
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); //fov, aspect ratio
//add camera to the scene
scene.add(camera);

var rotateAmount = Math.PI * 4;
var currentRotation = 0;

function rotate(){
    if(currentRotation >= rotateAmount){
        return;
        currentRotation = 0; //?????
        group.rotation.y = 0;
    } else {
        group.rotation.y += 0.1;
        currentRotation += 0.1;
        requestAnimationFrame(rotate);
    }
    
}
//rotate button
document.querySelector('.rotate').addEventListener('click', () => {
    rotate();
});


//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

//animate
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();