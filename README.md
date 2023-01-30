# Node-Generator
A Particle Network made for my portfolio, i made it inspired by particles.js' particle network mode. It doesn't run as smooth but i made its setup as simple as possible.
# Features
It might not support hundreds of particles but it's very customizable and easy to use, you can, for example, modify colors, nodes' properites and a bit more.
# Setup
The basic setup of this script is very quick and easy, you can see an example of it in my portfolio.
When you've completed the site setup i reccomend you to read the comments on the first part of "Node Generator.js" to learn how to configure it.
You may need to tweak things a bit to have it look nice, but this process will take less than 2 minutes probably.
# 
You just need to create a canvas element in your HTML page and give it an id(e.g. canvas) and then make a script with an src="wherever/you/put/it/Node Generator.js" argument and the job is done.
Inside the css i reccomend you create a style for it (with #whateveryounamedit) and modify its position as absolute(position: absolute;).
# Config
============Code Config============
elementId - ID of your Canvas Element
nNodes - Number of Nodes to create, in this case i create 10 nodes every 240px of resolution.
minAcceleration - Max Negative Acceleration
baseAcceleration - Min Acceleration(+/-)
maxAcceleration - Max Positive Acceleration
============Graphic Customization============
showWatermark - Shows Watermark in the bottom left corner
nodeLineDist - Distance between Nodes to Draw a Line
lineWidth - Width of Lines that connect nodes (laggy if over 1 for some particular reason)
lineColor - Color of the Lines
enableNodes - Enables Nodes (just Graphically since they are needed)
nodeColor - Color of the Nodes (Circles)
nodeAlpha - Opacity of the Nodes
opacityDivisionFactor - It is used to modify the opacity based on node distance
minRad - Min Random Radius of Nodes, also if you want the same node radius just set both config.Nodes[4].minRad and config.Nodes[5].maxRad to the same value
maxRad - Max Random Radius of Nodes
============Experimental Features============
enableDrawer - Enables Drawers, wich draw lines or polygons(depending on how you set it)
useExperimentalLineDrawer -
/\ If true it enables the experimental Line Drawer that uses the distance between 2 points formula(Could Lag)(More precise, circular area)
/\ If false it enables the default Line Drawer that's made to be lightweight and fast(Less precise, square area)

polygonDrawer - Enables Polygon Drawer wich makes every at least 3 Nodes' gap filled
randomColorList - The list of colors that the Random Color functions can use, you may add or remove some colors /\
randomColorLinesMode - Select wheter Lines have Random Color or not
randomColorLinesIterations - After how many Iterations should the Color change
randomColorNodesMode - Select wheter Nodes have Random Color or not
randomColorNodesIterations - After how many Iterations should the Color change
pulsatingNodeSize - Makes Nodes' radius bigger and smaller depending on how you set Min/Max Pulse Size.
minPulseSize - Minimum Nodes' radius decrease
maxPulseSize - Maximum Nodes' radius increase
============End of Config============
