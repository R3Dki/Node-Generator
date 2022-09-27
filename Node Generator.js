//Config
const elementId = 'background'; //ID of your Canvas Element
const nNodes = Math.floor(window.innerHeight/240)*10; //Number of Nodes to create, in this case i create 10 nodes every 240px of resolution.
const minAcceleration = -1.8; //Max Negative Acceleration
const baseAcceleration = 1.0; //Min Acceleration(+/-)
const maxAcceleration = 1.6; //Max Positive Acceleration
//Graphic Customization
let nodeLineDist = 40; //Distance between Nodes to Draw a Line
const lineWidth = 1; //Width of Lines that connect nodes (laggy if over 1 for some particular reason)
const lineColor = 'green'; //Color of the Lines
const nodeColor = '#BF0000'; //Color of the Nodes (Circles)
const nodeAlpha = 1; //Opacity of the Nodes
const opacityDivisionFactor = 500; //It is used to modify the opacity based on node distance
const minRad = 3 //Min Random Radius of Nodes, also if you want the same node radius just set both minRad and maxRad to the same value
const maxRad = 7 //Max Random Radius of Nodes

//Code
let maxY = window.innerHeight;
let maxX = window.innerWidth;
document.getElementById(elementId).setAttribute('widht', maxX)
document.getElementById(elementId).setAttribute('height', maxY)
const canvas = document.getElementById(elementId);
const ctx = canvas.getContext('2d');
let nodeList = [];
let distX, distY, min = 0;
let nodeCount = 0;
nodeLineDist *= 10;
ctx.strokeStyle = lineColor;
ctx.fillStyle = nodeColor;
ctx.lineWidth = lineWidth;

Begin();
Renderer();

//Functions
function Node() {
    this.x = Math.floor(Math.random() * (maxX - min + 1) + min);
    this.y = Math.floor(Math.random() * (maxY - min + 1) + min);
    this.accelerationX = Math.floor(Math.random() * (maxAcceleration - minAcceleration + 1) + minAcceleration);
    this.accelerationY = Math.floor(Math.random() * (maxAcceleration - minAcceleration + 1) + minAcceleration);
    if (this.accelerationX < baseAcceleration && this.accelerationX > -baseAcceleration) {this.accelerationX = baseAcceleration}
    if (this.accelerationY < baseAcceleration && this.accelerationY > -baseAcceleration) {this.accelerationY = baseAcceleration}
    if (minRad != maxRad) {
        this.radius = Math.floor(Math.random() * (maxRad - minRad + 1) + minRad);
    } else {
        this.radius = minRad;
    }
}

function Begin() {
    while (nNodes != nodeList.length) {
        nodeList.push(new Node());
        nodeCount = nodeList.length;
    }
}

function Renderer() {
    setTimeout(ctx.clearRect(0, 0, maxX, maxY), 1);
    for (let i = 0; i < nodeCount; i++) {
        if (nodeList[i].x > maxX || nodeList[i].x < 0) {
            nodeList[i].accelerationX = -nodeList[i].accelerationX;
        }
        if (nodeList[i].y > maxY || nodeList[i].y < 0) {
            nodeList[i].accelerationY = -nodeList[i].accelerationY;
        }
        nodeList[i].x += nodeList[i].accelerationX;
        nodeList[i].y += nodeList[i].accelerationY;
        //Draw Lines between nearing Nodes
        ctx.beginPath();
        for (let i2 = i; i2 < nodeCount; i2++) {
            distX = nodeList[i2].x-nodeList[i].x;
            distY = nodeList[i2].y-nodeList[i].y;
            if ((distX < nodeLineDist && distY < nodeLineDist && distX > -nodeLineDist && distY > -nodeLineDist)) {
                ctx.moveTo(nodeList[i2].x, nodeList[i2].y);
                ctx.lineTo(nodeList[i].x, nodeList[i].y);
                ctx.globalAlpha = (distX+distY)/opacityDivisionFactor;
                ctx.stroke();
            }
        }
        //Draw Circles were nodes are
        ctx.globalAlpha=nodeAlpha;
        ctx.moveTo(nodeList[i].x, nodeList[i].y);
        ctx.arc(nodeList[i].x, nodeList[i].y, nodeList[i].radius, 0, 6.28318531);
        ctx.fill();
    }
    requestAnimationFrame(Renderer);
}
