const tiles = {};

tiles.base = {
  name: "Base game",

  tiles: {
    // Monasterys
    "base-z1-r1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-cloister.png": {
      count: 2,
      fileName: "base-z1-r1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-cloister.png",
      set: "base",
      // sortString: "z1-r1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-cloister",
      sortString: "a1",
      name: "monasteryWithRoad",
    },
    "base-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-cloister.png": {
      count: 4,
      fileName: "base-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-cloister.png",
      set: "base",
      // sortString: "z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-z1-cloister",
      sortString: "a2",
      name: "monastery",
    },

    // Doritos
    "base-c1-c1-c1-c1-c1-c1-z1-z1-z1-z1-z1-z1-C1n.png": {
      count: 5,
      fileName: "base-c1-c1-c1-c1-c1-c1-z1-z1-z1-z1-z1-z1-C1n.png",
      set: "base",
      // sortString: "c1-c1-c1-c1-c1-c1-z1-z1-z1-z1-z1-z1-C1n",
      sortString: "a3",
      name: "doritos",
    },

    "base-c1-c1-c1-c1-c1-c1-z1-r1-z2-z2-r1-z1-C1n.png": {
      count: 5,
      fileName: "base-c1-c1-c1-c1-c1-c1-z1-r1-z2-z2-r1-z1-C1n.png",
      set: "base",
      // sortString: "c1-c1-c1-c1-c1-c1-z1-r1-z2-z2-r1-z1-C1n",
      sortString: "a4",
      name: "doritosWithRoad",
    },

    "base-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-C1s.png": {
      count: 1,
      fileName: "base-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-C1s.png",
      set: "base",
      // sortString: "c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-c1-C1s",
      sortString: "a5",
      name: "cccc",
    },

    "base-c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-z1-z1-C1n.png": {
      count: 4,
      fileName: "base-c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-z1-z1-C1n.png",
      set: "base",
      // sortString: "c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-z1-z1-C1n",
      sortString: "a6",
      name: "ccc",
    },
    "base-c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-r1-z2-C1n.png": {
      count: 3,
      fileName: "base-c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-r1-z2-C1n.png",
      set: "base",
      // sortString: "c1-c1-c1-c1-c1-c1-c1-c1-c1-z1-r1-z2-C1n",
      sortString: "a7",
      name: "cccr",
    },

    "base-c1-c1-c1-z1-z1-z1-z1-z1-z1-z1-z1-z1-C1n.png": {
      count: 5,
      fileName: "base-c1-c1-c1-z1-z1-z1-z1-z1-z1-z1-z1-z1-C1n.png",
      set: "base",
      // sortString: "c1-c1-c1-z1-z1-z1-z1-z1-z1-z1-z1-z1-C1n",
      sortString: "a8",
      name: "vanila",
    },

    "base-c1-c1-c1-z1-r1-z2-z2-z2-z2-z2-r1-z1-C1n.png": {
      count: 4,
      fileName: "base-c1-c1-c1-z1-r1-z2-z2-z2-z2-z2-r1-z1-C1n.png",
      set: "base",
      // sortString: "c1-c1-c1-z1-r1-z2-z2-z2-z2-z2-r1-z1-C1n",
      sortString: "a9",
      name: "startTille",
    },

    "base-c1-c1-c1-z1-z1-z1-z1-r1-z2-z2-r1-z1-C1n.png": {
      count: 3,
      fileName: "base-c1-c1-c1-z1-z1-z1-z1-r1-z2-z2-r1-z1-C1n.png",
      set: "base",
      // sortString: "c1-c1-c1-z1-z1-z1-z1-r1-z2-z2-r1-z1-C1n",
      sortString: "b10",
      name: "leftCurve",
    },

    "base-c1-c1-c1-z1-r1-z2-z2-r1-z1-z1-z1-z1-C1n.png": {
      count: 3,
      fileName: "base-c1-c1-c1-z1-r1-z2-z2-r1-z1-z1-z1-z1-C1n.png",
      set: "base",
      // sortString: "c1-c1-c1-z1-r1-z2-z2-r1-z1-z1-z1-z1-C1n",
      sortString: "b11",
      name: "rightCurve",
    },

    "base-c1-c1-c1-f1-r1-f2-f2-r2-f3-f3-r3-f1-C1n.png": {
      count: 3,
      fileName: "base-c1-c1-c1-f1-r1-f2-f2-r2-f3-f3-r3-f1-C1n.png",
      set: "base",
      // sortString: "c1-c1-c1-f1-r1-f2-f2-r2-f3-f3-r3-f1-C1n",
      sortString: "b12",
      name: "crossroadsCap",
    },

    "base-c1-c1-c1-c2-c2-c2-z1-z1-z1-z1-z1-z1-C1n-C2n.png": {
      count: 2,
      fileName: "base-c1-c1-c1-c2-c2-c2-z1-z1-z1-z1-z1-z1-C1n-C2n.png",
      set: "base",
      // sortString: "c1-c1-c1-c2-c2-c2-z1-z1-z1-z1-z1-z1-C1n-C2n",
      sortString: "b13",
      name: "crossroadsCap",
    },

    "base-c1-c1-c1-z1-z1-z1-c2-c2-c2-z1-z1-z1-C1n-C2n.png": {
      count: 3,
      fileName: "base-c1-c1-c1-z1-z1-z1-c2-c2-c2-z1-z1-z1-C1n-C2n.png",
      set: "base",
      // sortString: "c1-c1-c1-z1-z1-z1-c2-c2-c2-z1-z1-z1-C1n-C2n",
      sortString: "b14",
      name: "spliter",
    },

    "base-c1-c1-c1-z1-z1-z1-c1-c1-c1-z2-z2-z2-C1n.png": {
      count: 3,
      fileName: "base-c1-c1-c1-z1-z1-z1-c1-c1-c1-z2-z2-z2-C1n.png",
      set: "base",
      // sortString: "c1-c1-c1-z1-z1-z1-c1-c1-c1-z2-z2-z2-C1n",
      sortString: "b15",
      name: "joinner",
    },

    "base-z1-r1-z2-z2-r1-z1-z1-z1-z1-z1-z1-z1.png": {
      count: 9,
      fileName: "base-z1-r1-z2-z2-r1-z1-z1-z1-z1-z1-z1-z1.png",
      set: "base",
      // sortString: "z1-r1-z2-z2-r1-z1-z1-z1-z1-z1-z1-z1",
      sortString: "b16",
      name: "curve",
    },

    // Roads
    "base-z1-r1-z2-z2-z2-z2-z2-r1-z1-z1-z1-z1.png": {
      count: 8,
      fileName: "base-z1-r1-z2-z2-z2-z2-z2-r1-z1-z1-z1-z1.png",
      set: "base",
      // sortString: "z1-r1-z2-z2-z2-z2-z2-r1-z1-z1-z1-z1",
      sortString: "b17",
      name: "straitRoad",
    },

    "base-z1-r1-z2-z2-r2-z3-z3-r3-z1.png": {
      count: 4,
      fileName: "base-z1-r1-z2-z2-r2-z3-z3-r3-z1.png",
      set: "base",
      // sortString: "z1-r1-z2-z2-r2-z3-z3-r3-z1",
      sortString: "b18",
      name: "crossroads",
    },

    "base-z1-r1-z2-z2-r2-z3-z3-r3-z4-z4-r4-z1.png": {
      count: 1,
      fileName: "base-z1-r1-z2-z2-r2-z3-z3-r3-z4-z4-r4-z1.png",
      set: "base",
      // sortString: "z1-r1-z2-z2-r2-z3-z3-r3-z4-z4-r4-z1",
      sortString: "b19",
      name: "fourCrossroads",
    },
  },
};
