const plusButton = document.querySelector(".question__icon");
const answerBlock = document.querySelector(".question__answer");

plusButton.addEventListener("click", (event) => {
  if (answerBlock.style.display == "block") {
    answerBlock.style.display = "none";
    event.target.style.transform = "rotate(180deg)";
    return;
  }

  answerBlock.style.display = "block";
});
