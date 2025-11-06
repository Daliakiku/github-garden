import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Add lights
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

// Load textures
const loader = new THREE.TextureLoader();
const Tex = {
    albedo: loader.load('./silver-bl/silver_albedo.png'),
    ao: loader.load('./silver-bl/silver_ao.png'),
    metalness: loader.load('./silver-bl/silver_metallic.png'),
    normal: loader.load('./silver-bl/silver_normal-ogl.png'),
    roughness: loader.load('./silver-bl/silver_roughness.png'),
    displacement: loader.load('./silver-bl/silver_height.png'),
};

// Create material
const mat = new THREE.MeshStandardMaterial({
    map: Tex.albedo,
    aoMap: Tex.ao,
    metalnessMap: Tex.metalness,
    normalMap: Tex.normal,
    roughnessMap: Tex.roughness,
    displacementMap: Tex.displacement,
    displacementScale: 0.1,
    metalness: 0.975,
    roughness: 0.7,
    side: THREE.FrontSide,
});

// Create geometry and meshes
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 200, 16);
const knot = new THREE.Mesh(geometry, mat);
scene.add(knot);
knot.position.y = 2;

const geometry2 = new THREE.SphereGeometry(1, 64, 64);
const sphere = new THREE.Mesh(geometry2, mat);
scene.add(sphere);
sphere.position.y = 2;
sphere.position.x = -3.5;

const geometry3 = new THREE.SphereGeometry(1, 64, 64);
const sphere2 = new THREE.Mesh(geometry3, mat);
scene.add(sphere2);
sphere2.position.y = 2;
sphere2.position.x = 3.5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild(renderer.domElement);

// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Track mouse position
const mouse = new THREE.Vector2();
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Raycaster for detecting hover
const raycaster = new THREE.Raycaster();

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update the raycaster with the mouse position
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections with the meshes
    const intersects = raycaster.intersectObjects([knot, sphere, sphere2]);

    // Reset rotation for all meshes
    knot.rotation.x = 0;
    sphere.rotation.x = 0;
    sphere2.rotation.x = 0;

    // Rotate the intersected mesh
    if (intersects.length > 0) {
        intersects[0].object.rotation.x = THREE.MathUtils.degToRad(15); // Rotate by -15 degrees
    }

    renderer.render(scene, camera);
}
animate();

