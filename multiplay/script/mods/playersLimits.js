function cleanUnitsAndStruct()
{
	for (var playnum = 0; playnum < maxPlayers; playnum++)
	{
		enumStruct(playnum).forEach((s) =>
		{
			removeObject(s);
		});

		enumDroid(playnum).forEach((d) =>
		{
			removeObject(d);
		});

	}
}

function pushUnitsAndStruct()
{
	let players = [];
	for (var playnum = 0; playnum < maxPlayers; playnum++)
	{
		if (playnum == AI){continue;}
		players.push(playnum);
	}
	const y = getScrollLimits().y2-(getScrollLimits().y2-getScrollLimits().y)/2;
	const ConstructorDroid = {
		"body": "Body1REC",
		"turrets": "Spade1Mk1",
		"id": "ConstructorDroid",
		"name": "Truck",
		"propulsion": "wheeled01"
	};
	players.forEach((p, index) =>
	{
		const x = ((mapWidth-(2*BORDER))/(players.length))*(index+0.5)+BORDER;
		addDroid(p, x, y, ConstructorDroid.name, ConstructorDroid.body, ConstructorDroid.propulsion,"","", ConstructorDroid.turrets);
	//TODO
	});

}


