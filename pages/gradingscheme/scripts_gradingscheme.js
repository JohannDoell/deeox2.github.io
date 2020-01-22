function myFunction() {
var array = [["Assignments (4 assignments)","25%"],
             ["Class Project","30%"],
             ["Final Exam (3 hours)","45%"],
             ["Total","100%"]],
table = document.getElementById("table");
           
for(var i = 0; i < array.length; i++){
	// create a new row
	var newRow = table.insertRow(table.length);
	for(var j = 0; j < array[i].length; j++){
		// create a new cell
		var cell = newRow.insertCell(j);           
		// add value to the cell
		cell.innerHTML = array[i][j];
		}
}
}
