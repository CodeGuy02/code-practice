import './style.css'
import './public/css/main.css'
import * as THREE from 'three';
import { AmbientLight } from 'three';

import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'


const scene = new THREE.Scene();

//const canvasArea = document.getElementById("heroAreaBackground");
const canvasWidth = document.getElementById("heroAreaBackground").clientWidth;
const canvasHeight = document.getElementById("heroAreaBackground").clientHeight;
console.log(canvasWidth);
console.log(canvasHeight);
//alert(width);
//alert(height);

// -----------------------------------------------------
const loader = new THREE.FontLoader();
loader.load('fonts/helvetiker_regular.typeface.json', function(font) {
  const newText = new THREE.TextGeometry( 'Hello three.js!', {
		font: font,
		size: 80,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
	} );
});
