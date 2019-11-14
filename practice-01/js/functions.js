function changeHeaderOnAction(msg) {
  let sectionHeader = document.querySelector(".active[data-tab]").firstElementChild;
  let headerText = sectionHeader.textContent;
  sectionHeader.classList.replace("info", "success");
  sectionHeader.textContent = msg;
  setTimeout(() => {
    sectionHeader.classList.replace("success", "info");
    sectionHeader.textContent = headerText;
  }, 2500);
};

const actionsWithDatesBtn = document.querySelector(".actions-with-dates");
function actionsWithData() {
  let data = JSON.parse(localStorage.getItem("random_date"));
  data.sort(function(a, b) {
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1
    }
    return 0;
  });
  localStorage.setItem("random_date", JSON.stringify(data));

  return changeHeaderOnAction("Dates are parsed, sorted and returned in localStorage");
}
actionsWithDatesBtn.addEventListener("click", actionsWithData);

const randomDataBtn = document.querySelector(".create-dates");
function randomData(length = 10) {
  let date = null;
  let randomDataArr = [];
  for (let i = 0; i < length; i++) {
    date = new Date(
      Math.floor(Math.random() * 3000),
      Math.floor(Math.random() * 11),
      Math.floor(Math.random() * 31)
    );
    randomDataArr.push(date);
  }

  return localStorage.setItem("random_date", JSON.stringify(randomDataArr));
}
randomDataBtn.addEventListener("click", function() {
  randomData();
  if (JSON.parse(localStorage.getItem("random_date")).length > 0) {
    return changeHeaderOnAction("Dates are created and set in localStorage");
  }
});

const callbackBtn = document.querySelector("button.callback");
const phonePattern = /^(067|097|096|098|093|073|063|095|050)([0-9]{3})([0-9]{4})$/;

const alertBlock = document.querySelector(".alert");
const input = document.querySelector(".callback.phone-field");
function checkInput() {
  if (!this.value.match(phonePattern)) {
    alertBlock.classList.add("danger");
    alertBlock.firstElementChild.className = "fas fa-exclamation-triangle";
    alertBlock.lastElementChild.textContent = `Allowed operators – 067 / 097 / 096 / 098 / 093 / 073 / 063 / 095 / 050. Please, enter phone number in corrent format – 0671112233.`;
    callbackBtn.setAttribute("disabled", "disabled");
  } else {
    alertBlock.classList.remove("danger");
    alertBlock.classList.add("success");
    alertBlock.firstElementChild.className = "fas fa-check-square";
    alertBlock.lastElementChild.textContent = `Phone number entered in corrent format – ${this.value}`;
    callbackBtn.removeAttribute("disabled");
  }
}
input.addEventListener("input", checkInput);

function requestCallback() {
  let request = new XMLHttpRequest();
  let body = `callee=${input.value}`;

  request.open("POST", "https://csplatform.herokuapp.com/lektorium/initiateCall");
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.setRequestHeader("x-route-guard", "ek-practice");

  request.send(body);

  request.addEventListener("load", function(e) {
    if (e.target.status >= 400) {
      alertBlock.className = "alert danger";
      alertBlock.firstElementChild.className = "fas fa-exclamation-triangle";
      alertBlock.lastElementChild.textContent = e.target.responseText;
    } else {
      alertBlock.className = "alert success";
      alertBlock.firstElementChild.className = "fas fa-check-square";
      alertBlock.lastElementChild.textContent = e.target.responseText;
    }
  });
}
callbackBtn.addEventListener("click", requestCallback);

const tabLinks = document.querySelectorAll(".menu-link");
const tabContent = document.querySelectorAll(".content-section");
const defaultTab = document.querySelector(".empty-section");
const subNav = document.querySelector(".sub-nav");
tabLinks.forEach(link =>
  link.addEventListener("click", event => {
    alertBlock.firstElementChild.className = "";
    alertBlock.lastElementChild.textContent = "";
    alertBlock.className = "alert";
    input.value = "";
    //if target contains class active - remove class
    if (event.target.classList.contains("active")) {
      subNav.removeAttribute("style");
      document.querySelector(".content-section.active").classList.remove("active");
      event.target.classList.remove("active");
      defaultTab.classList.add("visible");
    } else {
      defaultTab.classList.remove("visible");
      subNav.removeAttribute("style");
      //get all tab links and remove class active
      tabLinks.forEach(link => link.classList.remove("active"));
      //set class active to event target
      event.target.classList.add("active");
      //get all tab content sections and remove class active. then set class active to tab with name like event target dataset tab-name
      tabContent.forEach(section => {
        section.classList.remove("active");
        if (section.dataset.tab === event.target.dataset.tabName) {
          section.classList.add("active");
        }
      });
      if (event.target.dataset.parent === "sub") {
        subNav.setAttribute("style","display:flex;margin: 0 -40px;padding:5px 0;position: absolute;");
      }
    }
  })
);

const tooltip = event => {
  //tooltip function
  let target = event.target;
  if (!target.dataset.tooltip) {
    //return if target not tooltip
    return;
  }

  let tooltip = document.createElement("div"); //create tooltip element
  tooltip.className = "tooltip";
  tooltip.innerHTML = target.dataset.tooltip;
  document.body.appendChild(tooltip);

  let coords = target.getBoundingClientRect(); //tooltip position top-center from target element
  let left = coords.left + (target.offsetWidth - tooltip.offsetWidth) / 2;
  if (left < 0) left = 0; // not offset left side

  let top = coords.top - tooltip.offsetHeight;
  if (top < 0) {
    // if tooltip to big - placed bootom
    top = coords.top + target.offsetHeight;
  }

  tooltip.style.left = left + "px";
  tooltip.style.top = top + "px";

  target.addEventListener("mouseout", () => { tooltip.remove() });
};
document.addEventListener("mouseover", tooltip);
