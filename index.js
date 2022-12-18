//Array Object
let person = [{
		fieldId: "roomNo",
		errorTagName: "roomError",
		errorFieldname: "*Room No"
	},{
		fieldId: "personName",
		errorTagName: "personError",
		errorFieldname: "*Person Name"
	},{
		fieldId: "bookDate",
		errorTagName: "bookingError",
		errorFieldname: "*Booking Date"
	},{
		fieldId: "totalPerson",
		errorTagName: "totalError",
		errorFieldname: "*Total Person"
	}
];

		//AddBooking Funtion
function addBooking(){	

	for(let data of person){
		validationFunction(document.getElementById(`${data.fieldId}`),`${data.errorTagName}`,`${data.errorFieldname}`);
	}
		
	//Onsubmit Blank Error Show
	let roomNo = document.getElementById("roomNo").value.trim();
	let personName = document.getElementById("personName").value.trim();
	let bookingDate = document.getElementById("bookDate").value.trim();
	let totalPerson = document.getElementById("totalPerson").value.trim();
	
    if(roomNo!="" && personName!="" && bookingDate!="" && totalPerson!="") {	

	let table = document.getElementById("personDetail");
	table.innerHTML +=
	`<tr>
		<td>${roomNo}</td>
		<td>${personName}</td>
		<td>${bookingDate}</td>
		<td>${totalPerson}</td>
		<td><div class="btn"><button type="button" class="btnEdit" onclick="onEdit(this)">Edit</button>
	<button type="button" class="btnDelete" onclick="onDelete(this)">Delete</button></div></td>
	</tr>
	`
	
	btnReset();
    }
}

	//Delete Function
function onDelete(e){
	 if (confirm('Are you sure to delete this record ?')) {
		 //console.log(e.parentElement.parentElement.parentElement, editRow);
		 if(e.parentElement.parentElement.parentElement == editRow){btnReset();}
        e.parentElement.parentElement.parentElement.remove();
    }
}

	//ResetForm Function
function btnReset(){
	
		document.getElementById("roomNo").value = "";
		document.getElementById("personName").value = "";
		document.getElementById("bookDate").value = "";
		document.getElementById("totalPerson").value = "";
		
		document.getElementById("btnButton").innerHTML = "Submit";
		document.getElementById("btnButton").setAttribute("onclick","addBooking()");
		
		document.getElementById("roomError").innerHTML = "";
		document.getElementById("personError").innerHTML = "";
		document.getElementById("bookingError").innerHTML = "";
		document.getElementById("totalError").innerHTML = "";
	
}

	//OnEdit Function
function onEdit(td){
	//console.log("Edit");
	editRow = td.parentElement.parentElement.parentElement;
	//console.log(editRow);	

		document.getElementById("roomNo").value = editRow.children[0].innerHTML;
		document.getElementById("personName").value = editRow.children[1].innerHTML;
		document.getElementById("bookDate").value = editRow.children[2].innerHTML;
		document.getElementById("totalPerson").value = editRow.children[3].innerHTML;

		document.getElementById("btnButton").innerHTML = "Update";
		document.getElementById("btnButton").setAttribute("onclick","updateData()");
		
}

	//Update Data
function updateData(){	
	//console.log("Hello",editRow.children[0],"lll");
	for(let data of person){
		validationFunction(document.getElementById(`${data.fieldId}`),`${data.errorTagName}`,`${data.errorFieldname}`);
	}

	let updateRoom = document.getElementById("roomNo").value.trim();
	let updateName = document.getElementById("personName").value.trim();
	let updateDate = document.getElementById("bookDate").value.trim();
	let updatePerson = document.getElementById("totalPerson").value.trim();
		
	if(updateRoom != "" && updateName != "" && updateDate != "" && updatePerson != ""){
		document.getElementById("btnButton").innerHTML = "Submit";
		
		editRow.children[0].innerHTML = document.getElementById("roomNo").value;
		editRow.children[1].innerHTML = document.getElementById("personName").value;
		editRow.children[2].innerHTML = document.getElementById("bookDate").value;
		editRow.children[3].innerHTML = document.getElementById("totalPerson").value;
			
		document.getElementById("btnButton").setAttribute("onclick","addBooking()");
		btnReset();
	}
}



	//OnIpnput OnBlur Function Error
function validationFunction(value, errorTagId, errorFieldname) {
	let data = value.value.trim();
	  if(data == ""){
		  document.getElementById(`${errorTagId}`).innerHTML = errorFieldname + " Must Be Field Out!";
	  }else{
		  document.getElementById(`${errorTagId}`).innerHTML = "";
	  }
}

