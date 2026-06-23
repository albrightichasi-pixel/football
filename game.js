import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.166/build/three.module.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 18, 28);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

// Sun
const sun = new THREE.DirectionalLight(0xffffff, 2);
sun.position.set(40, 60, 20);
sun.castShadow = true;

scene.add(sun);

// Ambient light
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// Grass
const grass = new THREE.Mesh(
    new THREE.PlaneGeometry(90, 60),
    new THREE.MeshLambertMaterial({
        color: 0x3cb043
    })
);

grass.rotation.x = -Math.PI / 2;
grass.receiveShadow = true;

scene.add(grass);

function animate() {

    requestAnimationFrame(animate);

    renderer.render(scene, camera);

}

animate();