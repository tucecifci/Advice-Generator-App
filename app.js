const dice = document
  .querySelector(".dice")
  .addEventListener("click", getAdvice);

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      const adviceId = data.slip.id;
      const advice = data.slip.advice;

      document.querySelector(".advice-id").innerText = `ADVICE #${adviceId}`;
      document.querySelector(".advice-text").innerText = `"${advice}"`;
    })
    .catch((err) => console.log(err));
}
