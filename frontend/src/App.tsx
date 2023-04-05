import Table from "./components/Table";
import Filter from "./components/Filter";
import Paginator from "./components/Paginator";

function App() {
  return (
    <div className="App">
      <Filter />
      <Table />
      <Paginator />
    </div>
  );
}

export default App;
