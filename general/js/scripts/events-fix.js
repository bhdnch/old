let tabPaneMonth = document.querySelector("#month-tab");
let tabPaneWeek = document.querySelector("#week-tab");

let tabPaneWeekBtn = document.querySelector("#week-tab-btn");
let tabPaneMonthBtn = document.querySelector("#month-tab-btn");

tabPaneWeekBtn.addEventListener("click", checkTab);
tabPaneMonthBtn.addEventListener("click", checkTab);

function checkTab() {
   if (!tabPaneMonth.classList.contains("active")) {
      tabPaneMonth.classList.add("hidden");
      tabPaneWeek.classList.remove("hidden");
   } else {
      tabPaneWeek.classList.add("hidden");
      tabPaneMonth.classList.remove("hidden");
   }
}
