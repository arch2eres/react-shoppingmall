const continents = [
  {
    _id: 1,
    name: "Asia",
  },
  {
    _id: 2,
    name: "Africa",
  },
  {
    _id: 3,
    name: "Europe",
  },
  {
    _id: 4,
    name: "North America",
  },
  {
    _id: 5,
    name: "South America",
  },
  {
    _id: 6,
    name: "Oceania",
  },
];

const price = [
  {
    _id: 0,
    name: "Any",
    array: [],
  },
  {
    _id: 1,
    name: "$0 to $149",
    array: [0, 149],
  },
  {
    _id: 2,
    name: "$150 to $199",
    array: [150, 199],
  },
  {
    _id: 3,
    name: "$200 to $249",
    array: [200, 249],
  },
  {
    _id: 4,
    name: "$250 to $299",
    array: [250, 299],
  },
  {
    _id: 5,
    name: "More than $300",
    array: [300, 1500000],
  },
];

export { continents, price };
