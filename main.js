const conditions = new Set();
const checkBoxes = document.getElementsByTagName("input");
for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].onclick = function() {
        if (checkBoxes[i].checked) {
            conditions.add(checkBoxes[i].id);
        } else {
            conditions.delete(checkBoxes[i].id)
        }
        uuenda();
    }
}

function rabaSobib(raba) {
    let unsatisfiedConditions = new Set(conditions);
    for (let i = 0; i < raba.supports.length; i++) {
        let s = raba.supports[i].toString();
        if (unsatisfiedConditions.has(s)) {
            unsatisfiedConditions.delete(s);
        }
    }
    return unsatisfiedConditions.size == 0;
}

function uuenda() {
    kustutaTulemused();
    RABAD.forEach(function(raba) {
        if (rabaSobib(raba)) {
            looTulemus(raba);
        }
    })
}

function kustutaTulemused() {
    let tulemused = document.getElementsByClassName("tulemusWrapper");
    const parent = document.getElementById("tulemused");
    for (let i = tulemused.length - 1; i >= 0; i--) {
        parent.removeChild(tulemused[i]);
    }
}

function looTulemus(raba) {
    const parent = document.getElementById("tulemused");
    let d = document.createElement("div");
    d.className = "tulemusWrapper";
    let b = document.createElement("a");
    b.href = "https://www.google.com/search?q=" + raba.name;
    b.target = "_blank";
    b.innerHTML = raba.name;
    
    d.appendChild(b);
    let len = document.createTextNode(" - " + raba.len + "km");
    d.appendChild(len);
    d.appendChild(document.createElement("br"));
    let I = document.createElement("i");
    I.innerHTML = raba.description;
    d.appendChild(I);
    parent.appendChild(d);
}

uuenda();