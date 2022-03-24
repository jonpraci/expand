// =======================================================================
var accordionExample = document.getElementById("accordionExample"),
  save_btn = document.getElementById("save-btn"),
  collapseinputs = document.querySelectorAll(
    "#collapsethree > div > div > div > input "
  );

var form_texts_p = document.querySelectorAll(".form-texts > p");

// console.log(accordionExample);
// console.log(save_btn);
// console.log(collapseinputs);
// console.log(form_texts_p);

items = [
  { name: "", id: 1 },
  { name: "", id: 2 },
  { name: "", id: 3 },
  { name: "", id: 4 },
  { name: "", id: 5 },
];

// save_btn.setAttribute("disabled" , false);
for (let i = 0; i < collapseinputs.length; i++) {
  console.log(collapseinputs[i].value);
  collapseinputs[i].addEventListener("change", (e) => {
    items[i].name = e.target.value;
    console.log(items[i].name);
    console.log(items);
  });
}

save_btn.addEventListener("click", () => {
  for (let i = 0; i < items.length; i++) {
    console.log(Object.values(items[0])[0]);
    // accordion item ==============================
    if (
      items[0].name !== "" &&
      items[1].name !== "" &&
      items[2].name !== "" &&
      items[3].name !== "" &&
      items[4].name !== ""
    ) {
      var accordion_item = document.createElement("div");
      accordion_item.setAttribute("class", "accordion-item"); // 1

      var form_check = document.createElement("div");
      form_check.setAttribute("class", "form-check"); // 2
      form_check.setAttribute("data-bs-toggle", "collapse");
      form_check.setAttribute("data-bs-target", `#collapseOne${i}`);
      form_check.setAttribute("aria-expanded", "true");
      form_check.setAttribute("aria-controls", `collapseOne${i}`);

      var inputs = document.createElement("input");
      inputs.setAttribute("class", "form-check-input"); //3
      inputs.setAttribute("type", "radio");
      inputs.setAttribute("name", "flexRadioDefault1");
      inputs.setAttribute("id", `flexRadioDefault${i}`);

      var labels = document.createElement("label"); // 3
      labels.setAttribute("class", "form-check-label");
      labels.setAttribute("for", `flexRadioDefault${i}`);
      labels.innerText = items[0].name;
      form_check.appendChild(inputs);
      form_check.appendChild(labels);

      var collapse = document.createElement("div"); //4
      collapse.setAttribute("id", `collapseOne${i}`);
      collapse.setAttribute("class", "accordion-collapse collapse");
      collapse.setAttribute("aria-labelledby", "headingOne");
      collapse.setAttribute("data-bs-parent", "#accordionExample");

      var row = document.createElement("div"); // 5
      row.setAttribute("class", "row");

      row.innerHTML = `
                        <div class="col-md-6">
                        <div class="accordion-body">
                          <div class="form-texts">
                            <p class="one">
                              ${items[1].name}
                            </p>
                            <p class="two">
                                ${items[2].name}
                            </p>
                            <p class="three">
                              ${items[3].name}
                            </p>
                            <p class="four">
                            ${items[4].name}
                            </p>
                          </div>
                          <button class="btn">Edit Address</button>
                        </div>
                        </div>
                        <div class="col-md-6 part-map">
                        <div style="width: 100%; height: 100%">
                          <iframe
                            width="100%"
                            height="100%"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            onchange="(e) => console.log('e.target.value')"
                          ></iframe>
                        </div>
                        </div>
                        
                        `;
      document.getElementById("error-mass").style.display = "none";
      // hee
      collapse.appendChild(row);
      accordion_item.appendChild(form_check);
      accordion_item.appendChild(collapse);
    } else {
      document.getElementById("error-mass").style.display = "flex";
    }
  }

  items[0].name !== "" &&
  items[1].name !== "" &&
  items[2].name !== "" &&
  items[3].name !== "" &&
  items[4].name !== ""
    ? accordionExample.appendChild(accordion_item)
    : null;

  // end =========================================
});

var containue_btn = document.getElementById("containue_btn");
var nav_profile_tab = document.getElementById("nav-profile-tab");
var exampleFormControlInput1 = document.getElementById(
  "exampleFormControlInput1"
);
var exampleFormControlInput2 = document.getElementById(
  "exampleFormControlInput2"
);
var phone = document.getElementById("phone");
var name_ = document.getElementById("name");

var contactObject = [];

containue_btn.addEventListener("click", () => {
  if (
    exampleFormControlInput1.value !== "" &&
    exampleFormControlInput2.value !== "" &&
    exampleFormControlInput1.value.length > 2 &&
    exampleFormControlInput2.value.length > 2
  ) {
    nav_profile_tab.click();
    phone.style.display = "none";
    name_.style.display = "none";
    contactObject.push({
      name: exampleFormControlInput2.value,
      phone: exampleFormControlInput1.value,
    });
  }
  if (exampleFormControlInput1.value !== "") {
    phone.style.display = "none";
  } else {
    phone.style.display = "inline";
    phone.style.color = "red";
    phone.style.fontSize = "12px";
  }

  if (exampleFormControlInput2.value !== "") {
    name_.style.display = "none";
  } else {
    name_.style.display = "inline";
    name_.style.color = "red";
    name_.style.fontSize = "12px";
  }
  if (
    exampleFormControlInput1.value !== "" &&
    exampleFormControlInput1.value.length < 2
  ) {
    phone.style.display = "inline";
    phone.textContent = "The field must be more than 3 chrt";
  }
  if (
    exampleFormControlInput2.value !== "" &&
    exampleFormControlInput2.value.length < 2
  ) {
    name_.style.display = "inline";
    name_.textContent = "The field must be more than 3 chrt";
  }
  console.log(contactObject[0]);
  console.log(items);
});

var tabtwo = document.getElementById("nav-profile-tab");

tabtwo.addEventListener("click", () => {
  containue_btn.click();
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 26.8206, lng: 30.8025 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

console.log(map);
