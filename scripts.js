function createTable() {
	var body = document.body;
	var table = document.createElement('table');
	table.style.width = '100px';
	table.style.border = '1px solid black';
	
	for(var i = 0; i < 3; i++) {
		var tableRow = table.insertRow();
		
		for(var j = 0; j < 2; j++) {
			if(i == 2 && j == 1) {
				break;
			}	else {
				var tableData = tableRow.insertCell();
				tableData.appendChild(document.createTextNode('Cell'));
				tableData.style.border = '1px solid black';
				if (i == 1 && j == 1) {
					tableData.setAttribute('rowSpan', '2');
				}
			}
		}
	}
	body.appendChild(table);
	
	
}
