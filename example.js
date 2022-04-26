async function fetchData() {
  const orgs = await fetch("https://api.github.com/users/hadley/orgs");
  const respJson = await orgs.json();
  return respJson;
}

async function createHtml() {
  const data = await fetchData();
  const contentDiv = document.getElementById("content-div");
  data.forEach((element) => {
    appendElement(element, contentDiv);
  });
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
  const linkText = document.createTextNode(element.id);
  linkElement.appendChild(linkText);
  linkElement.title = element.login;
  linkElement.href = element.url;
  elementDiv.append(linkElement);
}

function createImg(element, elementDiv) {
  const imgElement = document.createElement("img");
  imgElement.src = element.avatar_url;
  imgElement.width = 100;
  imgElement.className = "element-img";
  elementDiv.append(imgElement);
}

createHtml();
