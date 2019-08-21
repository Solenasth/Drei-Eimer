import ACTIONS from "./validActions";

const SOLUTION1 = {
  finished: true,
  steps: [
    {
      id: "00001",
      action: ACTIONS.FILL,
      state: {
        a: 0,
        b: 0,
        c: 0
      },
      payload: {
        target: "a"
      }
    },
    {
      id: "00002",
      action: ACTIONS.TRANSFER,
      state: {
        a: 3,
        b: 0,
        c: 0
      },
      payload: {
        origin: "a",
        target: "b"
      }
    },
    {
      id: "00003",
      action: ACTIONS.FILL,
      state: {
        a: 0,
        b: 3,
        c: 0
      },
      payload: {
        target: "a"
      }
    },
    {
      id: "00004",
      action: ACTIONS.TRANSFER,
      state: {
        a: 3,
        b: 3,
        c: 0
      },
      payload: {
        origin: "a",
        target: "b"
      }
    },
    {
      id: "00005",
      action: ACTIONS.EMPTY,
      state: {
        a: 1,
        b: 5,
        c: 0
      },
      payload: {
        target: "b"
      }
    },
    {
      id: "00006",
      action: ACTIONS.TRANSFER,
      state: {
        a: 1,
        b: 0,
        c: 0
      },
      payload: {
        origin: "a",
        target: "b"
      }
    },
    {
      id: "00007",
      action: ACTIONS.FILL,
      state: {
        a: 0,
        b: 1,
        c: 0
      },
      payload: {
        target: "a"
      }
    },
    {
      id: "00008",
      action: ACTIONS.TRANSFER,
      state: {
        a: 3,
        b: 1,
        c: 0
      },
      payload: {
        origin: "a",
        target: "b"
      }
    },
    {
      id: "00009",
      action: ACTIONS.TRANSFER,
      state: {
        a: 0,
        b: 4,
        c: 0
      },
      payload: {
        origin: "b",
        target: "c"
      }
    },
    {
      id: "00010",
      action: ACTIONS.END,
      state: {
        a: 0,
        b: 0,
        c: 4
      },
      payload: {
        origin: "b",
        target: "c"
      }
    }
  ]
};

export { SOLUTION1 };
