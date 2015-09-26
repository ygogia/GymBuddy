var warmup = [
	{"codenam":"treadmill", "name":"Treadmill", "time":"300", "set":"0", "weight":"0"} ,
	{"codenam":"cycling", "name":"Cycling", "time":"300", "set":"0", "weight":"0"} ,
	{"codenam":"jumpingjacks", "name":"Jumping Jacks", "time":"60", "set":"2", "weight":"0"} ,
	{"codenam":"alternatetoes", "name":"Alternate Toes", "time":"60", "set":"2", "weight":"0"} ,
    {"codenam":"pushups", "name":"Push Ups", "time":"90", "set":"3", "weight":"0"}
];
var database = [
	{"codenam":"neck01", "name":"Chin to Chest Stretch", "time":"60", "set":"0", "weight":"0", "target":"Neck"} ,
	{"codenam":"neck02", "name":"Side Neck Stretch", "time":"30", "set":"0", "weight":"0", "target":"Neck"} ,
	{"codenam":"traps01", "name":"Clean Shrug", "time":"60", "set":"0", "weight":"0", "target":"Traps"} ,
	{"codenam":"traps02", "name":"Dumbbell Shrug", "time":"60", "set":"0", "weight":"0", "target":"Traps"} ,
	{"codenam":"shoulders01", "name":"Dumbell Press", "time":"60", "set":"0", "weight":"0", "target":"Shoulders"}, 
	{"codenam":"shoulders02", "name":"Lateral Raise", "time":"45", "set":"0", "weight":"0", "target":"Shoulders"} ,
	{"codenam":"biceps01", "name":"Barbell Curl", "time":"30", "set":"0", "weight":"0", "target":"Biceps"} ,
	{"codenam":"biceps02", "name":"Hummer Curl", "time":"30", "set":"0", "weight":"0", "target":"Biceps"} ,
	{"codenam":"chest01", "name":"Butterfly", "time":"300", "set":"0", "weight":"0", "target":"Chest"},
	{"codenam":"chest02", "name":"Bench Press", "time":"300", "set":"0", "weight":"0", "target":"Chest"},
	{"codenam":"treadmill", "name":"Treadmill", "time":"300", "set":"0", "weight":"0", "target":"Forearms"},
	
	];


var list_string1 = "<li onclick='startExercise('";

var list_string2 = "')'><a href='#checkPopup'  data-rel='popup'>";

var list_string3 = "<span id='grey'>";

var list_string4 = "</span></a></li>";
var day = 'Dryday';
var x,total;

function startCheck()
{
		var d = new Date(),
		a = d.getDay();

		switch(a)
		{
			case 0:
				day='sunday';
				break;
			case 1:
				day='monday';
				break;
			case 2:
				day='tuesday';
				break;
			case 3:
				day='wednsday';
				break;
			case 4:
				day='thursday';
				break;
			case 5:
				day='friday';
				break;
			case 6:
				day='saturday';
				break;	
		}
		
		var temp = localStorage.getItem(day);
		if(temp!=null && temp!=" " && temp!=0)
			{
				startWorkout(day);
			}
		else
			{
				alert("No Workout for today !")
				
			}
		
}
function startWorkout(day)
{
	var temp = localStorage.getItem(day);
	var muscles = temp.split("-");
	var total = muscles.length;
	temp = localStorage.getItem("warmup");
	setPage();
}
function setPage()
{
	if(temp==1)
	{	
		document.getElementById("start-header").innerHTML = "Warm Up";
		document.getElementById("exercise_list").innerHTML=" ";
		for(var i=0; i<=4; i++)
			{
				var x = document.getElementById("exercise_list");
				
				x.innerHTML = x.innerHTML + list_string1 + warmup[i].codenam + list_string2 +  warmup[i].name + list_string3 + "(" + warmup[i].time + " sec)" + list_string4;
				document.getElementById("noBorder2").setAttribute("onclick","setToast('0')");
				document.getElementById("noBorder1").className = "ui-btn ui-color-green disabled";
				document.getElementById("noBorder1").setAttribute("style","background:gray; font-size: 1.5rem; ");
			}
	}
	else
	{
		var temp = localStorage.getItem(day);
		var muscles = temp.split("-");
		var total = muscles.length;
		document.getElementById("start-header").innerHTML = muscles[0];
		for(var i=1; i<10;i++)
			{
				if(database[i].target==muscles[0]) break;
			}
		document.getElementById("exercise_list").innerHTML=" ";
		for(i=0; i<=2 ; i++)
			{
				var x = document.getElementById("exercise_list");
				x.innerHTML = x.innerHTML + list_string1 + database[i].codenam + list_string2 +  database[i].name + list_string3 + "(" + database[i].time + " sec)" + list_string4;
				document.getElementById("noBorder1").className = "ui-btn ui-color-green disabled";
				document.getElementById("noBorder1").setAttribute("style","background:gray; font-size: 1.5rem; ");
				if(total==1){
				document.getElementById("noBorder2").className = "ui-btn ui-color-green disabled";
				document.getElementById("noBorder2").setAttribute("style","background:gray; font-size: 1.5rem; ");
				}
				else{
				var	x=1;
				document.getElementById("noBorder2").setAttribute("onclick","setToast(" + x + ")");
				}
				}
	}

};
function setToast(x)
{
	
	var temp = localStorage.getItem(day);
	var muscles = temp.split("-");
	var total = muscles.length - 1;

	document.getElementById("start-header").innerHTML = muscles[x];

	for(var i=0; i<11;i++)
	{
		if(database[i].target==muscles[x]) break;
	}
	var c = document.getElementById("exercise_list");
	c.innerHTML=" ";
	var d= x+1, e=x-1;
for(i=i-1; i<2 ; i++)
	{

		c.innerHTML = c.innerHTML + list_string1 + database[i].codenam + list_string2 +  database[i].name + list_string3 + "(" + database[i].time + " sec)" + list_string4;
	}

		if(x==1)
			{
		document.getElementById("noBorder1").setAttribute("onclick","setPage()");
		document.getElementById("noBorder1").className = "ui-btn ui-color-green";
		document.getElementById("noBorder1").setAttribute("style","background:#e74c3c; font-size: 1.5rem; ");
			}
		else
		{
			document.getElementById("noBorder1").className = "ui-btn ui-color-green";
			document.getElementById("noBorder1").setAttribute("onclick","setToast(" + e + ")");
		}
		
		
		if(total==x){
		document.getElementById("noBorder2").className = "ui-btn ui-color-green disabled";
		document.getElementById("noBorder2").setAttribute("style","background:gray; font-size: 1.5rem; ");
		}
		else
			{
			var d=x+1;
			document.getElementById("noBorder2").className = "ui-btn ui-color-green";
			document.getElementById("noBorder2").setAttribute("style","background:#e74c3c; font-size: 1.5rem; ");
			document.getElementById("noBorder2").setAttribute("onclick","setToast(" + d + ")");
			}
}
function startExercise(codename)
{
	for(var i=0; i<10; i++)
	{
		if(database[i].codenam==codename)
			{
				document.getElementById("noBorder4").setAttribute("onclick","stopWatch(" + database[i].time + ")");
				document.getElementById("popup-title-now").innerHTML = database[i].name;
			}
	}
}
