import { solutions, esercizio, service } from "../index.js";

const answers = {};

const normalizeAnswer = (answer) => {
  return answer.trim().toLowerCase();
};

const checkAnswers = (answers, solutions) => {
  if (!answers || !solutions) return;

  const optionElements = Array.from(
    esercizio.querySelectorAll("option:checked")
  );

  const optionsChecked = optionElements.filter((option) => option.value !== "");

  optionsChecked?.forEach((option) => {
    const currentSelect = option.parentNode;

    currentSelect.classList.remove("right");
    currentSelect.classList.remove("wrong");

    answers[currentSelect.name] === solutions[currentSelect.name]
      ? currentSelect.classList.add("right")
      : currentSelect.classList.add("wrong");
  });
};

esercizio?.addEventListener("change", (e) => {
  answers[e.target.name] = normalizeAnswer(e.target.value);

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
