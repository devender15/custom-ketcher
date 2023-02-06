structures = [
  {
    id: 1,
    name: "Benzene",
    molecule: {
      atoms: [
        { symbol: "C", x: 1.3962, y: 0.8039 },
        { symbol: "C", x: 2.1914, y: 1.6078 },
        { symbol: "C", x: 2.9866, y: 0.8039 },
        { symbol: "C", x: 2.9866, y: -0.8039 },
        { symbol: "C", x: 2.1914, y: -1.6078 },
        { symbol: "C", x: 1.3962, y: -0.8039 },
      ],
      bonds: [
        { a1: 1, a2: 2, order: 1 },
        { a1: 2, a2: 3, order: 1 },
        { a1: 3, a2: 4, order: 1 },
        { a1: 4, a2: 5, order: 1 },
        { a1: 5, a2: 6, order: 1 },
        { a1: 6, a2: 1, order: 1 },
      ],
    },
  },
  // ... other structures
];

export default structures;
