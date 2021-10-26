import { Machine } from "xstate";

const machine = Machine({
  // Initial state
  initial: "unanswered",
  // State definitions
  states: {
    unanswered: {
      on: {
        // state transition (shorthand)
        // this is equivalent to { target: 'answered' }
        // INPUT is an event
        INPUT: {
          target: "answered",
        },
      },
    },
    answered: {
      on: {
        SUBMIT: "corrected",
      },
    },
    corrected: {
      type: "final",
    },
  },
});

export default machine;
