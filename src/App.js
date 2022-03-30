import "./App.css";
import Header from "./Header";
import SearchInput from "./SearchInput";
import Painting from "./Painting";

const paintingsList = [
  { title: "Huesos", author: "djvieknv", year: 15351, location: "fhuevh"},
  { title: "Artoym", author: "djvieknv", year: 15351, location: "fhuevh"},
]

function App() {
  return (
    <div className="App">
      <Header />
      <div className="filters">
        <SearchInput />
        <SearchInput />
        <SearchInput />
        <SearchInput />
      </div>
      <div className="painting-list">
        {paintingsList.map((el) => (
          <Painting title={el.title} author={el.author} year={el.year} location={el.location} />
        ))}
      </div>
    </div>
  );
}

export default App;
