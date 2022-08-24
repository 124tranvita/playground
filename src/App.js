import "./App.css";
import { Routes, Route } from "react-router-dom";
import { StaffList } from "./components/StaffList";
import { StaffDetail } from "./components/StaffDetail";
// import Test from "./components/Test";
const STAFFS = [
  {
    id: 1,
    name: "Nguyen Van A",
    age: 27,
    salary: 2000,
  },
  {
    id: 2,
    name: "Nguyen Van B",
    age: 17,
    salary: 3000,
  },
  {
    id: 3,
    name: "Nguyen Van C",
    age: 15,
    salary: 1000,
  },
  {
    id: 4,
    name: "Nguyen Van D",
    age: 29,
    salary: 5000,
  },
];

// const so = 10;

function App() {
  return (
    <div className="App">
      <h1>App Main Page</h1>
      <Routes>
        <Route path="staffs" element={<StaffList staffList={STAFFS} />} />
        <Route
          path="staffs/:staffId"
          element={<StaffDetail staffList={STAFFS} />}
        />
      </Routes>
    </div>
  );
}

export default App;
