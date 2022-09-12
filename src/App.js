import List from "./List";

const list = [
  {
    title: "1",
    child: [
      {
        title: "1.1",
        child: [
          {
            title: "1.1.1",
          },
          {
            title: "1.1.2",
          },
        ],
      },
      {
        title: "1.2",
      },
    ],
  },
  {
    title: "2",
    child: [
      {
        title: "2.1",
        child: [
          {
            title: "2.1.1",
          },
        ],
      },
    ],
  },
  {
    title: "3",
  },
];

function App() {
  return (
    <div className="">
      <List items={list} />
    </div>
  );
}

export default App;
