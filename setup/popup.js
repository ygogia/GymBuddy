(function (ui) {
	var closePopup = ui.closePopup.bind(ui);
	document.getElementById('checkPopup-close').addEventListener('click', closePopup, false);
})(window.tau);
var week='Nothing';
function updateWeek(day) {
			week = day;
		var checkboxes = document.getElementsByTagName('input');
		     for (var i = 0; i < checkboxes.length; i++) {
		         if (checkboxes[i].type == 'checkbox') {
		             checkboxes[i].checked = false;
		         }
		     }
		     var temp = localStorage.getItem(week);
			
			if(temp != null)
			{
		exercise = temp.split("-");
			for (var i = 0; i < exercise.length; i++) {
				var x=document.getElementById(exercise[i])
				x.checked = true;
			}
			
			
	}
};


function selectedExercises()
{
var week = ["monday","tuesday","wednsday","thursday","friday","saturday","sunday"];

  for (var i = 0; i < week.length; i++) {
	  var span_id = '-selected';
	  span_id = week[i].concat(span_id);
	  var temp = localStorage.getItem(week[i]);
	  if(temp != null && temp != " " && temp!= 0)
		{
		  var exercise = temp.split("-");
		  exercise = exercise.join(",");
		  document.getElementById(span_id).innerHTML= exercise;
		}
	else
		document.getElementById(span_id).innerHTML= "No Exercise Selected";
  }
  };
  
  function initExercises()
  {
	  
	  var week = ["monday","tuesday","wednsday","thursday","friday","saturday","sunday"];

	  for (var i = 0; i < week.length; i++) {
		  localStorage.setItem(week[i]," ")
	  }
	  localStorage.setItem("muscleStorage"," ");
  };

function updateExercise(cb) {
	if(cb.checked)
	{
		var exercise = [];
		var temp = localStorage.getItem(week);
		if(temp != null && temp != " " && temp!= 0)
			{
			exercise = temp.split("-");
			exercise.push(cb.value);
			exercise = exercise.join("-");
			}
		else
		exercise.push(cb.value);
			
			localStorage.setItem(week, exercise);
			
	}
	else
	{
		var exercise = [];
		var temp = localStorage.getItem(week);
		exercise = temp.split("-");
		var index = exercise.indexOf(cb.value);
		
		if (index > -1) {
		    exercise.splice(index, 1);
		}
		
		exercise = exercise.join("-");
		localStorage.setItem(week, exercise);
	
	}
	selectedExercises();
	};


	  function selectedMuscles()
		{
		 localStorage.setItem("muscleStorage","");
		 var muscleStorage = localStorage.getItem("muscleStorage");
		 muscleStorage = muscleStorage.split("-");
		 
			var week = ["monday","tuesday","wednsday","thursday","friday","saturday","sunday"];
			
			
			  for (var i = 0; i < week.length; i++) 
			  {
				  var temp = localStorage.getItem(week[i]);
				  if(temp != null && temp != " " && temp!= 0)
					{
					  var muscles = temp.split("-");
					  for (var j = 0; j < muscles.length; j++)
						  {
						  	var index = muscleStorage.indexOf(muscles[j]);
							if (index > -1) {
						
							}
							else
								{
									muscleStorage.push(muscles[j]);
								}
						
						  }
					}
				
			  }
			  muscleStorage = muscleStorage.join("-");
			  localStorage.setItem("muscleStorage", muscleStorage);
			 
		};
		
		
		
		
		
		var muscleGroup='Nothing';
		function updateWorkout(x) {
					muscleGroup = x;
				var checkboxes = document.getElementsByTagName('input');
				     for (var i = 0; i < checkboxes.length; i++) {
				         if (checkboxes[i].type == 'checkbox') {
				             checkboxes[i].checked = false;
				         }
				     }
				     
				     var temp = localStorage.getItem(muscleGroup);
					
					if(temp != null)
					{
				exercises = temp.split("-");
					for (var i = 0; i < exercises.length; i++) {
						var x=document.getElementById(exercises[i])
						x.checked = true;
					}
					
					
			}
		};
		function updateMuscleGroup(cb) {
			if(cb.checked)
			{
				var exercise = [];
				var temp = localStorage.getItem(muscleGroup);
				if(temp != null && temp != " " && temp!= 0)
					{
					exercise = temp.split("-");
					exercise.push(cb.value);
					exercise = exercise.join("-");
					}
				else
				exercise.push(cb.value);
					
					localStorage.setItem(muscleGroup, exercise);
				
			}
			else
			{
				var exercise = [];
				var temp = localStorage.getItem(muscleGroup);
				exercise = temp.split("-");
				var index = exercise.indexOf(cb.value);
				
				if (index > -1) {
				    exercise.splice(index, 1);
				}
				
				exercise = exercise.join("-");
				localStorage.setItem(muscleGroup, exercise);
			
			}
			selectedExercises();
			};
		function enableMuscle()
		{
				
			var temp = localStorage.getItem("muscleStorage");
			  if(temp != null && temp != " " && temp!= 0)
				{
				  	var muscles = temp.split("-");
				  	for (var j = 1; j < muscles.length; j++)
					  {
				  		
				  			document.getElementById(muscles[j]).className = "li-has-next-depth";
				  			
					  }
				}
			  else
				  {
				  		
				  }
		};
		
		
		function startUp()
		{

			var temp = localStorage.getItem("muscleStorage");
			  if(temp != null && temp != " " && temp!= 0)
				{
				  document.getElementById("begin").innerHTML = "PROCEED";
				  document.getElementById("begin1").setAttribute("href", "start.html")
				  
				} 
		}
		function updateWarmup()
		{
			var x=document.getElementById("warmup");
			if(x.checked == true)
				{
					localStorage.setItem("warmup","1");
				
				}
			else
				{
					x.checked =	false;
					localStorage.setItem("warmup","0");
				
				}
		}