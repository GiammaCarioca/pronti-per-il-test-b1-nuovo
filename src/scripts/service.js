import { interpret } from "xstate";

import machine from "./machine.js";

// Interpret the machine, and add a listener for whenever a transition occurs.
const service = interpret(machine).onTransition((state) => {
  console.log(state.value);

  if (state.matches("unanswered")) {
    document.querySelector(".btn").classList.add("disabled");
    document.querySelector(".btn").setAttribute("disabled", true);
  }

  if (state.matches("answered")) {
    document.querySelector(".btn").classList.remove("disabled");
    document.querySelector(".btn").removeAttribute("disabled");
  }
});

export default service;
