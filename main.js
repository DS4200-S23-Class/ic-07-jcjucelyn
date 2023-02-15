/*
D3 IC-07
Ju
Modified: 02/15/23
*/

const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS = {left:50, right:50, top:50, bottom:50}


// add a frame
const FRAME1 = 
d3.select("#numline")
	.append("svg")
		.attr("height", FRAME_HEIGHT)
		.attr("width", FRAME_WIDTH)
		.attr("class", "frame");

// add the data
const data = [55000, 48000, 27000, 66000, 90000]
const datadiv1k = [55, 48, 27, 66, 90]

// add points based on data
FRAME1.selectAll("points")
	.data(datadiv1k)
	.enter()
	.append("circle")
		.attr("cx", 0)
		.attr("cy", (d) => {return d;})
		.attr("r", 15)
		.attr("class", "point");
