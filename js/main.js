//console.log("javascript");

const inputText = document.querySelector(".input-text");

//console.log(inputText);
//console.log({ inputText });

const likeButtons = document.querySelectorAll(".like");
//console.log(likeButtons);

/* likeButtons.forEach((like) => {
  like.addEventListener("click", () => {
    console.log("clicked");
  });
}); */

const addButton = document.querySelector(".add-button");

const list = document.querySelector(".list");

//addButton.addEventListener(행동, 함수);
/**
 function(){}     :일반함수 
 ()=>{}           :arrow function 
 */
addButton.addEventListener("click", function () {
  //console.log(inputText.value);

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
  li.appendChild(like);
  li.appendChild(item);
  li.appendChild(manage);
  list.appendChild(li);
});
