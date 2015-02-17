var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	// get a random palette from the top ones
	var randomPalette = req.params.id;
	randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	res.send('Your random palette is called: ' + randomPalette['title']);
	var paletteID = palettes[randomPalette-1];
	res.jason(paletteID);
}
/* project.js
exports.projectInfo = function(req, res) { 
	var projectID = req.params.id;
	console.log(projectID);
	if (projectID == "random") {
		projectID = Math.floor(Math.random() * projects.length) + 1;
	} else {
		projectID = parseInt(projectID);
	}

  	var project = projects[projectID-1]; // of by one, our first project has index 0
  	res.json(project);
}*/