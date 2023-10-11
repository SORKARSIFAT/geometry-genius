let count = 0;

function getInputField(fieldId){
    const getInputField = document.getElementById(fieldId);
    const inputFieldString = getInputField.value;
    const inputField = parseFloat(inputFieldString);
    return inputField;
}
 function setInnerText(IdText){
    const getTextField = document.getElementById(IdText);
     const Text = getTextField.innerText;
     return Text;
 }

function setTheData (text , calculation){
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    count+= 1;
tr.innerHTML =` <td>${count}</td>
<td>${text}</td>
<td>${calculation}cm<sup>2</sup></td>
<td>
    <button class = "bg-violet-700 hover:bg-violet-900 rounded px-4 py-2">Convert to m<sup>2</sup></button>
</td>
`
container.appendChild(tr);
}

