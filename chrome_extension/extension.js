//chrome://extensions/

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

/**
 * added the keypress event which triggers click event when the user presses "Enter" key
 */
inputEl.addEventListener("keypress", function (event) {
  //when the user presses "Enter"
  if (event.key === "Enter") {
    //trigger the button element with a click
    inputBtn.click();
  }
});

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//this is the original code from instructor
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  //clear out the input field
  inputEl.value = "";

  //save the myLeads array to localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    //   ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

    //or
    //   const li = document.createElement("li");
    //   li.textContent = myLeads[i];
    //   ulEl.append(li);

    //make the link clickable and open in a new tab
    // listItems +=
    //   "<li><a target='_blank' href='" +
    //   myLeads[i] +
    //   "'>" +
    //   myLeads[i] +
    //   "</a></li>";

    //template strings
    listItems += `
      <li>
        <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]} </a>
      </li>`;
  }

  ulEl.innerHTML = listItems;
}
