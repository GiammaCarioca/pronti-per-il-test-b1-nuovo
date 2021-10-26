import { solutions, esercizio, service } from "../index.js";

const answers = {};

const checkAnswers = (answers, solutions) => {
  if (!answers || !solutions) return;

  const fields = Array.from(esercizio.querySelectorAll("input[type='radio']"));
  const checkedFields = fields.filter((field) => field.checked);

  checkedFields?.forEach((field) => {
    field.parentNode.parentNode.classList.remove("right");
    field.parentNode.parentNode.classList.remove("wrong");

    answers[field.name] === solutions[field.name]
      ? field.parentNode.parentNode.classList.add("right")
      : field.parentNode.parentNode.classList.add("wrong");
  });
};

esercizio?.addEventListener("change", (e) => {
  e.target.checked && (answers[e.target.name] = e.target.value);

  // Send event
  service.send("INPUT");
});

esercizio?.addEventListener("submit", (e) => {
  e.preventDefault();

  checkAnswers(answers, solutions);

  service.send("SUBMIT");

  // Stop the service when you are no longer using it.
  service.stop();
});

// Start the service
service.start();
