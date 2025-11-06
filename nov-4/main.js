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

// Create geometry and mesh
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 200, 16);
const knot = new THREE.Mesh(geometry, mat);
scene.add(knot);
knot.position.y = 2;

// Create geometry and mesh
const geometry2 = new THREE.SphereGeometry(1, 64, 64);
const sphere = new THREE.Mesh(geometry2, mat);
scene.add(sphere);
sphere.position.y = 2;
sphere.position.x = -3.5;

// Create geometry and mesh
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
    // Update renderer size
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Update camera aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

console.log(`Renderer size: ${renderer.domElement.width}x${renderer.domElement.height}`);
console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();


