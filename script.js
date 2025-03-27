function insert_Row() {
    //Write your code here

	let table=document.getElementById("sampleTable")
       
	let cell1=document.createElement("td")
   cell1.innerText="New Cell1"
	let cell2=document.createElement("td")
	cell2.innerText="New Cell2";
    let newRow=table.insertRow(0)
	newRow.appendChild(cell1)
    newRow.appendChild(cell2)
}
