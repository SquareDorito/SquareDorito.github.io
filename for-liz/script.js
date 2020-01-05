var endDate = new Date("Jan 12, 2020 18:00:00").getTime();

var timer = setInterval(function() {
	let now = new Date().getTime(); 
	let t = endDate - now; 
	if (t >= 0) {
	    let days = Math.floor(t / (1000 * 60 * 60 * 24));
	    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
	    let secs = Math.floor((t % (1000 * 60)) / 1000);
	    document.getElementById("timer-days").innerHTML = days + 
		"<span class='label'>DAY(S)</span>";

		document.getElementById("timer-hours").innerHTML= ("0" + hours).slice(-2) +
		"<span class='label'>HR(S)</span>";

		document.getElementById("timer-mins").innerHTML= ("0" + mins).slice(-2) +
		"<span class='label'>MIN(S)</span>";

		document.getElementById("timer-secs").innerHTML= ("0" + secs).slice(-2) +
		"<span class='label'>SEC(S)</span>";
	}
}, 1000);