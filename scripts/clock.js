var showCurrentTime = function()
{
	const clock = document.getElementById('clock');
	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var meridan = "AM"
	const noon = 12;

	if (hours >= noon)
	{
		meridan = "PM";
		hours = hours - 12;
	}

	var currentTime = hours + ":" + minutes + meridan;

	clock.append(currentTime);
}


