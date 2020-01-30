var showCurrentTime = function()
{
	var clock = document.getElementById('clock');
	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridan = "AM"

	if (hours >= noon)
	{
		meridan = "PM";
	}
}
