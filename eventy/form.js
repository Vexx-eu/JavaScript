
let main = document.querySelector("main");
let table = document.createElement("table");
main.append(table);


let jsonTeams = `[
    {"TYM": "HC Dynamo Pardubice","Z": "20", "V": "14", "VP": "1", "PP": "3", "P":"2", "SCORE": "76:42", "B": "47", "T": "148"},
    {"TYM": "HC Sparta Praha","Z": "20", "V": "11", "VP": "3", "PP": "1", "P":"5", "SCORE": "63:44", "B": "40", "T": "261"},
    {"TYM": "HC Verva Litvínov","Z": "20", "V": "11", "VP": "3", "PP": "0", "P":"6", "SCORE": "67:56", "B": "39", "T": "210"},
    {"TYM": "HC Oceláři Třinec","Z": "19", "V": "9", "VP": "3", "PP": "4", "P":"3", "SCORE": "63:47", "B": "37", "T": "171"},
    {"TYM": "HC Tygři Liberec","Z": "21", "V": "9", "VP": "3", "PP": "2", "P":"7", "SCORE": "71:65", "B": "35", "T": "272"},
    {"TYM": "HC Kometa Brno","Z": "20", "V": "9", "VP": "2", "PP": "1", "P":"8", "SCORE": "58:51", "B": "32", "T": "187"},
    {"TYM": "Mountfield HK","Z": "20", "V": "8", "VP": "2", "PP": "3", "P":"7", "SCORE": "54:47", "B": "31", "T": "208"},
    {"TYM": "Banes Motor Č. Budějovice","Z": "20", "V": "14", "VP": "1", "PP": "3", "P":"2", "SCORE": "46:51", "B": "29", "T": "190"},
    {"TYM": "HC Energie Karlovy Vary","Z": "19", "V": "7", "VP": "2", "PP": "4", "P":"6", "SCORE": "54:51", "B": "28", "T": "226"},
    {"TYM": "HC Škoda Plžeň","Z": "20", "V": "6", "VP": "4", "PP": "2", "P":"8", "SCORE": "44:57", "B": "22", "T": "216"},
    {"TYM": "HC Olomouc","Z": "19", "V": "6", "VP": "1", "PP": "2", "P":"10", "SCORE": "41:60", "B": "22", "T": "227"},
    {"TYM": "HC Vítkovice Ridera","Z": "20", "V": "5", "VP": "2", "PP": "3", "P":"10", "SCORE": "43:60", "B": "17", "T": "139"},
    {"TYM": "Ritíři Kladno","Z": "18", "V": "3", "VP": "3", "PP": "2", "P":"10", "SCORE": "42:68", "B": "17", "T": "288"},
    {"TYM": "BK Mladá Boleslav","Z": "20", "V": "4", "VP": "1", "PP": "1", "P":"14", "SCORE": "41:64", "B": "15", "T": "168"}
]`




let myArr = JSON.parse(jsonTeams);

let keys = Object.getOwnPropertyNames(myArr[0]);
let tr = document.createElement("tr");
for (let i = 0; i < keys.length; i++) {
    let th = document.createElement("th");
    th.id = keys[i];
    th.textContent = keys[i];
    th.dataset.reverse = false;
    th.addEventListener('click', () => {
        let property = th.textContent;
        changeOrder(property);
    })
    tr.append(th);
}
table.append(tr);
for (let i = 0; i < myArr.length; i++) {
    let tr = document.createElement("tr");
    for (let prop in myArr[i]) {
        let td = document.createElement("td");
        td.textContent = myArr[i][prop];
        tr.append(td);
    }
    table.append(tr);
}
//
function changeOrder(property) {
    let reverse = document.getElementById(property);
    if(reverse.dataset.reverse == "false") {
        reverse.dataset.reverse = true;
        myArr.sort((a, b) => {
            if(property === "score") {
                let first_b = Number(b["score"].slice(0, 2));
                let second_b = Number(b["score"].slice(3));
                let result_b = first_b - second_b;
                let first_a = Number(a["score"].slice(0, 2));
                let second_a = Number(a["score"].slice(3));
                let result_a = first_a - second_a;
                return result_b - result_a;
            } else if (property === "name") {
                if (a["name"] < b["name"]) {
                    return -1;
                  }
                  if (a["name"] > b["name"]) {
                    return 1;
                  }
                  return 0
            }
            else {
                return b[property] - a[property];
            }
        })
    } else {
        reverse.dataset.reverse = false;
        myArr.sort((a, b) => {
            if(property === "score") {
                let first_b = Number(b["score"].slice(0, 2));
                let second_b = Number(b["score"].slice(3));
                let result_b = first_b - second_b;
                let first_a = Number(a["score"].slice(0, 2));
                let second_a = Number(a["score"].slice(3));
                let result_a = first_a - second_a;
                return result_a - result_b;
            } else if (property === "name") {
                if (a["name"] < b["name"]) {
                    return 1;
                  }
                  if (a["name"] > b["name"]) {
                    return -1;
                  }
                  return 0
            }
            else {
                return a[property] - b[property];
            }
        })
    }
    setValues();
}

function setValues() {
    for(let i in myArr) {
        let trList = document.querySelectorAll("tr:not(:first-child)");
        let row = 0;
        for(let prop in myArr[i]) {
            let tdList = trList[i].querySelectorAll("td");
            tdList[row].textContent = myArr[i][prop];
            row++;
        }
    }
}