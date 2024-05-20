const text = document.body.innerText;
const dateRegex = /(\d{1,2})\. (\d{1,2})\./g;
let matches;
const uniqueDates = new Set();
while ((matches = dateRegex.exec(text)) !== null) {
  const day = matches[1];
  const month = matches[2];
  const formattedDate = `${day.padStart(2, "0")}-${month.padStart(2, "0")}`;
  uniqueDates.add(formattedDate);
  }

  let currentMonth = 1;
  let currentYear = 2024;


  const startYear = 2024;
  const startMonth = 1;

  function Kalendar(month) {
    const DnyvMesici = new Date(currentYear, month + 1, 0).getDate(); // rok, mesic + 1, 0 den, aby to vzalo posledni den v minulem mesici
    const PrvniDenvMesici = new Date(currentYear, month, 1).getDay(); // rok, mesic, prvni den v mesici 

    const tableBody = document.querySelector("#calendar tbody");
    tableBody.innerHTML = "";


    //-----------------------------------------------------------------------------------------------//


    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < PrvniDenvMesici - 1) || date > DnyvMesici) {
          const cell = document.createElement("td");
          row.appendChild(cell);
        } else {
          const cell = document.createElement("td");
          const formattedDate = `${date.toString().padStart(2, "0")}-${(
            month + 1
          )
            .toString()
            .padStart(2, "0")}`;
          if (uniqueDates.has(formattedDate)) {
            const button = document.createElement("button");
            button.textContent = date;
            button.classList.add("marked");
            button.dataset.date = formattedDate;
            cell.appendChild(button);
          } else {
            cell.textContent = date;
          }
          row.appendChild(cell);
          date++;
        }
      }
      tableBody.appendChild(row);
    }
    const monthNames = [
      "leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec",
    ];
    const monthElement = document.getElementById("currentMonth");
    monthElement.textContent = `${monthNames[month]} `;
  }

  const prevMonthButton = document.getElementById("prevMonth");
  prevMonthButton.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    Kalendar(currentMonth);
  });

  const nextMonthButton = document.getElementById("nextMonth");
  nextMonthButton.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    Kalendar(currentMonth);
  });

  Kalendar(startMonth); 

  function goToText(month, day) {
    const pattern = `${day}. ${month}. `;
    console.log(pattern);
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      paragraph.style.backgroundColor = "white";
      if (paragraph.innerText.includes(pattern)) {
        paragraph.scrollIntoView({ behavior: "smooth", block: "center" });
        paragraph.style.backgroundColor = "yellow";
        return;
      }
    });
  }
  const calendar = document.getElementById("calendar");
  calendar.addEventListener("click", function (event) {
    if (event.target.classList.contains("marked")) {
      const date = event.target.dataset.date;
      const [day, month] = date.split("-");      
      goToText(Number(month), Number(day));
    }
  });
;
