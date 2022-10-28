const structure = [
  {
    name: "root",
    children: [
      {
        name: "child1",
        children: [
          {
            name: "grandchild1",
            children: [],
          },
          {
            name: "grandchild2",
            children: [],
          },
        ],
      },
      {
        name: "child2",
        children: [],
      },
      {
        name: "child3",
        children: [
          {
            name: "grandchild3",
            children: [
              {
                name: "greatgrandchild1",
                children: [],
              },
            ],
          },
          {
            name: "grandchild4",
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: "root2",
    children: [],
  },
];

export default structure;
