/*const formForType = document.getElementById("formForType");

var typeSelect = formForType.depositeType;

function changeOption() {
    var selection = document.getElementById("selection");
    var selectedOption = typeSelect.options[typeSelect.selectedIndex];
    if (selectedOption.text == "Пополняемый"){
        console.log(1);
    }
}*/

var typeSelect = document.getElementById("depositeType");

typeSelect.addEventListener("change", function() {
    if (typeSelect.value == "Пополняемый") {
        document.getElementById("depositeTerm2").style.display = "none";
        document.getElementById("depositeTerm").style.display = "block";
    }
    if (typeSelect.value == "Срочный") {
        document.getElementById("depositeTerm2").style.display = "block";
        document.getElementById("depositeTerm").style.display = "none";
    }
});

function getFormValue(event) {
    
    const depositeType = window.document.querySelector("#depositeType").value;

    const depositeTerm = window.document.querySelector("#depositeTerm").value;

    const depositeSum = window.document.querySelector("#depositeSum").value;

    document.getElementById("depositeTypeOutput").innerHTML = depositeType;
    document.getElementById("depositeTermOutput").innerHTML = depositeTerm;
    document.getElementById("depositeSumOutput").innerHTML = depositeSum;

    console.log(depositeType, depositeTerm, depositeSum);
}