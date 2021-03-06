async function fetchPhotosData() {
  const photos = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photosJson = await photos.json();
  console.log(photosJson);
  return photosJson;
}

async function fetchOnePhotoData(idx) {
  const photo = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${idx}`
  );
  const photoJson = await photo.json();
  console.log(photoJson);
  return photoJson;
}

async function createHtml() {
  const data = await fetchPhotosData();
  const contentDiv = document.getElementById("content-div");

  // List 5000 photo element
  /*data.forEach((element) => {
    appendElement(element, contentDiv);
  });*/

  //List one element every second
  setInterval(async () => {
    const onePhotoData = await fetchOnePhotoData(
      Math.round(Math.random() * 5000)
    );
    appendElement(onePhotoData, contentDiv);
  }, 1000);
}

function setIntervalMethod() {
  let intervalTime = createRandomInterval();
  setInterval(() => {
    console.log(`Just printing the random intervalTime: ${intervalTime}`);
    intervalTime = createRandomInterval();
  }, 1000);
}

function createRandomInterval() {
  return Math.round(Math.random() * 2000);
}

function appendElement(element, contentDiv) {
  const elementDiv = document.createElement("div");

  createLink(element, elementDiv);
  createImg(element, elementDiv);

  elementDiv.append(document.createElement("br"));
  elementDiv.className = "element-div";
  contentDiv.append(elementDiv);
}

function createLink(element, elementDiv) {
  const linkElement = document.createElement("a");
  const linkText = document.createTextNode(element.title);
  linkElement.appendChild(linkText);
  linkElement.title = element.id;
  linkElement.href = element.url;
  elementDiv.append(linkElement);
}

function createImg(element, elementDiv) {
  const imgElement = document.createElement("img");
  imgElement.src = element.thumbnailUrl;
  imgElement.width = 100;
  imgElement.className = "element-img";
  elementDiv.append(imgElement);
}

createHtml();
