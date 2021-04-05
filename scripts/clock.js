function addZero(i)	{

	if (i < 10)	{
		i = "0" + i;
	}
	return i;
}
var showCurrentTime = function()
{
	const clock = document.getElementById('clock');
	var currentTime = new Date();

	var hours = addZero(currentTime.getHours());
	var minutes = addZero(currentTime.getMinutes());
	var currentTime = hours + ":" + minutes;

	clock.innerHTML = currentTime;
}


