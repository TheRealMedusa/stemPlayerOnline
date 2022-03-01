const updateVolumes = (prevWholeMaxVol) => {
	tracks.forEach((track, index) => {
		track.volume = ((levels[index]-1)/3)*(wholeMaxVolume/8);
	});
}

const volumeLights = ["bottom_4", "bottom_3", "bottom_2", "bottom_1", "top_1", "top_2", "top_3", "top_4"];
const displayVolume = () => {
	allLightsOff();
	for (let i=0; i<8; i++) {
		$(volumeLights[i]).style.backgroundColor = null;
	}
	for (let i=0; i<wholeMaxVolume; i++) {
		$(volumeLights[i]).style.backgroundColor = "blue";
	}
	clearTimeout(hideLightsTimeout);
	hideLightsTimeout = setTimeout(() => {
		for (let i=0; i<8; i++) {
			$(volumeLights[i]).style.backgroundColor = null;
		}
		showStemLights();
	}, 800);
}

$("minusButton").addEventListener("click", () => {
	if (wholeMaxVolume != 0) {
		wholeMaxVolume--;
		maxVolume = wholeMaxVolume/8;
		updateVolumes();
	}
	displayVolume();
});
$("plusButton").addEventListener("click", () => {
	if (wholeMaxVolume != 8) {
		wholeMaxVolume++;
		maxVolume = wholeMaxVolume/8;
		updateVolumes();
	}
	displayVolume();
});