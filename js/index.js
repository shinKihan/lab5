function $(query) {
  return document.querySelector(query);
}

function addNewItem(textItem) {
  const ul = $("ul");

  const newIlElement = document.createElement("li");
  newIlElement.innerHTML = `
  <div>
    <span class='textSpan'>${textItem}</span>
    <div>
      <button class='checkButton' type="button">check</button>
      <button class='deleteButton' type="button">delete</button>
    </div>
  </div>
  `;
  ul.appendChild(newIlElement);

  newIlElement.querySelector(".checkButton").addEventListener('click', () => {
    newIlElement.querySelector(".textSpan").classList.toggle('crossed');
  });
  newIlElement.querySelector(".deleteButton").addEventListener('click', () => {
    ul.removeChild(newIlElement);
  });
}

function onClickSubmitButton(event) {
  event.preventDefault();

  const textItem = $("input").value;
  if (textItem.length == 0) {
    return false;
  }

  addNewItem(textItem);

  return false;
}

function registerListeners() {
  $("#submitButton").addEventListener('click', onClickSubmitButton);
}

(function init() {
  registerListeners();
})();