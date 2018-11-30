/* I had to use a window prompt to activate the code instead of normal because I couldnt find the code */
window.onload = function(){
	time();
	ampm();
	whatDay();
	whatMonth();
	whatMonthDay();
	whatYear();
	setInterval(function(){
		time();
		ampm();
		whatDay();
	}, 1000);
};

function time(){
	var date = new Date(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds(),
		hours = date.getHours();
		hours = addZero(hours);
		minutes = addZero(minutes);
		seconds = addZero(seconds);
/* ? is a ternary operator, its basically a true or false statement, but its only on one line
if (element 1) then(?) (element 2) or(:) (element 3) */
		hours = (hours > 12) ? (hours - 12) : hours;
		hours = (hours === 0) ? 12 : hours;
	document.getElementsByClassName('hours')[0].innerHTML = hours;
	document.getElementsByClassName('minutes')[0].innerHTML = minutes;
	document.getElementsByClassName('seconds')[0].innerHTML = seconds;
}

function addZero (val){
	return (val <= 9) ? ("0" + val) : val;
}
function ampm(){
	var date = new Date(),
		hours = date.getHours(),
		am = document.getElementsByClassName("am")[0].classList,
		pm = document.getElementsByClassName("pm")[0].classList;
		(hours >= 12) ? pm.add("glow") : am.add("glow");
		(hours >= 12) ? am.remove("glow") : pm.remove("glow");

}

function whatMonth() {
    var date = new Date();
    var month = date.getMonth(),
    	specificmonth = document.getElementsByClassName("month");
    for (x in specificmonth){
    	var classArr = specificmonth[x].classList;
    	(classArr !== undefined) && ((x == month) ? classArr.add("glow") : classArr.remove("glow"));
    }
}

function whatMonthDay() {
    var date = new Date();
    var monthday = date.getDate() - 1,
    	specificday = document.getElementsByClassName("monthday");
    for (x in specificday){
    	var classArr = specificday[x].classList;
    	(classArr !== undefined) && ((x == monthday) ? classArr.add("glow") : classArr.remove("glow"));
    }
}

function whatYear(){
	var date = new Date();
	document.getElementById("year").innerHTML = date.getFullYear();
}
function whatDay(){
	var date = new Date(),
		currentDay = date.getDay(),
		weekdays = document.getElementsByClassName("day");
		for (x in weekdays){
		var classArr = weekdays[x].classList;
	(classArr !== undefined) && ((x == currentDay) ? classArr.add("glow") : classArr.remove("glow"));
	}
}