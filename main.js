const generations = {
	"Lost Generation": { start: 1883, end: 1900, image: "pics/lostgen.jpg" },
	"Greatest G.I Generation": {
		start: 1901,
		end: 1927,
		image: "pics/G.Igen.jpg",
	},
	"Silent Generation": { start: 1928, end: 1945, image: "pics/silentgen.jpg" },
	"Baby Boomers Generation": {
		start: 1946,
		end: 1964,
		image: "pics/boomer.jpg",
	},
	"Generation X": { start: 1965, end: 1980, image: "pics/genX.jpg" },
	"Millennials/ Generation Y": {
		start: 1981,
		end: 1996,
		image: "pics/millenials.jpg",
	},
	"Zoomers/ Generation Z": { start: 1997, end: 2012, image: "pics/genz.jpg" },
	"Generation Alpha": { start: 2013, end: 2025, image: "pics/genalpha.jpg" },
};

function showGeneration() {
	const birthDate = document.getElementById("birthdate").value;
	if (!birthDate) {
		document.getElementById("result").innerText = "Please select a birthdate. ";
		return;
	}

	const birthYear = new Date(birthDate).getFullYear();
	let generation = "Unknown Generation";
	let generationImage = "";

	for (const [gen, data] of Object.entries(generations)) {
		if (birthYear >= data.start && birthYear <= data.end) {
			generation = gen;
			generationImage = data.image;
			break;
		}
	}
	document.getElementById(
		"result"
	).innerText = `You belong to the ${generation}.`;
	document.getElementById("generation-image").src = generationImage;
	// Set the background image of the div tag with id bg
	// const divbgelement = document.getElementById("bg");
	// divbgelement.style.backgroundImage = `url(${generationImage})`;
	// divbgelement.style.backgroundSize = "cover";
	// divbgelement.style.backgroundSize = "contain";
	// divbgelement.style.backgroundPosition = "center";
	// divbgelement.style.backgroundRepeat = "no-repeat";
	// divbgelement.style.height = "700px";
	// divbgelement.style.width = "700px";
}
