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
  const theLink = document.createElement("a");
  var linkText = document.createTextNode(element.node_id);
  theLink.appendChild(linkText);
  theLink.title = element.login;
  theLink.href = element.url;
  elementDiv.append(theLink);
}

function createImg(element, elementDiv) {
  const theImg = document.createElement("img");
  theImg.src = element.avatar_url;
  theImg.width = 100;
  elementDiv.append(theImg);
}

createHtml();
