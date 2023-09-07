let nextButton = document.getElementById("nextButton");
let avtar = document.getElementById("avtar");
let personName = document.getElementById("personName");
let personjob = document.getElementById("job");
let personInfo = document.getElementById("personInfo");
let previousButton = document.getElementById("previousButton");
let url = "https://apigenerator.dronahq.com/api/IEjVishw/review";
let currentDataIndex = 0;
let apiData = [];
fetchData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    apiData = data;
  } catch (error) {
    console.error("Error fetching  data:", error);
  }
};

function addItem() {
  nameofPerson = apiData[currentDataIndex].name;
  personName.textContent = nameofPerson;
  personjob.textContent = apiData[currentDataIndex].job;
  personInfo.textContent = apiData[currentDataIndex].text;
  imgUrl = apiData[currentDataIndex].img;
  avtar.src = imgUrl;
}

function displayNextItem() {
  if (currentDataIndex < apiData.length) {
    currentDataIndex++;
    addItem();
  }
  else {
    console.log("No more images available.");
}
 
}

function displayPreviousItem() {
  if (currentDataIndex > 0) {
    --currentDataIndex;
    addItem();
  }
 if (apiData.length < 0) {
  currentDataIndex = 0
  addItem()
 }
}

window.addEventListener('DOMContentLoaded', async () => {
  await fetchData()
  addItem()
})

nextButton.addEventListener("click", async () => {
  displayNextItem(); 
});

previousButton.addEventListener("click", () => {
  displayPreviousItem();
});
