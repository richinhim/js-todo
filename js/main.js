//console.log("javascript");

const inputText = document.querySelector(".input-text");

//console.log(inputText);
//console.log({ inputText });

const addButton = document.querySelector(".add-button");

const list = document.querySelector(".list");

const likeButtons = document.querySelectorAll(".like");
//console.log(likeButtons);

/* likeButtons.forEach((like) => {
  like.addEventListener("click", () => {
    console.log("clicked");
  });
}); */

//addButton.addEventListener(행동, 함수);
/**
 function(){}     :일반함수 
 ()=>{}           :arrow function 
 */
//const addItem = () => {};
function addItem() {
  //console.log(inputText.value);

  if (inputText.value.trim() === "") return;
  // like
  const like = document.createElement("span");
  const likeIcon = document.createElement("i");
  like.classList.add("like");
  likeIcon.classList.add("material-icons");
  likeIcon.innerText = "favorite_border";
  like.appendChild(likeIcon);

  // item
  const item = document.createElement("span");
  item.classList.add("item");
  item.innerText = inputText.value;

  // manage
  const manage = document.createElement("span");
  const checkIcon = document.createElement("i");
  const clearIcon = document.createElement("i");

  checkIcon.classList.add("material-icons", "check");
  clearIcon.classList.add("material-icons", "clear");
  checkIcon.innerText = "check";
  clearIcon.innerText = "clear";
  manage.classList.add("manage");
  manage.appendChild(checkIcon);
  manage.appendChild(clearIcon);

  const li = document.createElement("li");
  //li.innerText = inputText.value;

  // event
  like.addEventListener("click", (e) => {
    //console.log("hello");
    console.log(e);
    const target = e.target;

    // 조건? 했을때 : 안했을때
    const text =
      target.innerText === "favorite" ? "favorite_border" : "favorite";
    target.innerText = text;
  });

  // event
  checkIcon.addEventListener("click", (e) => {
    //const target = e.target;
    const target = e.target.parentNode.parentNode; //li
    console.log(target);
    console.log(e);
    target.classList.add("done");
  });

  // event
  clearIcon.addEventListener("click", (e) => {
    //const target = e.target;
    const target = e.target.parentNode.parentNode; //li
    console.log(target);
    list.removeChild(target);
    //console.log(target);
  });

  li.appendChild(like);
  li.appendChild(item);
  li.appendChild(manage);
  list.appendChild(li);

  inputText.value = "";
  inputText.focus();
}

inputText.addEventListener("keypress", (e) => {
  //console.log(e);
  if (e.keyCode === 13) {
    addItem();
  }
});

//addButton.addEventListener("click", function () {});
addButton.addEventListener("click", addItem);
