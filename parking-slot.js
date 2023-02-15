var entry = document.getElementById("btn");
entry.addEventListener("click",createTable);

function createTable() {
    var name = document.getElementById("name").value;
    var bikename = document.getElementById("bikename").value;
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;

    var table = document.getElementById("tb1");
    var tr = document.createElement("tr");
        
    var td1 = tr.appendChild(document.createElement("td"));
    var td2 = tr.appendChild(document.createElement("td"));
    var td3 = tr.appendChild(document.createElement("td"));
    var td4 = tr.appendChild(document.createElement("td"));

    td1.innerHTML = name ;
    td2.innerHTML = bikename ;
    td3.innerHTML = checkin ;
    td4.innerHTML = checkout ;

    table.appendChild(tr);
}