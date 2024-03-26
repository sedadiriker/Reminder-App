import "./App.module.scss"
import Lesson from "./pages/Lesson";
import {data} from "./helper/data"
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <Lesson data={data}/>
    </div>
  );
}

export default App;
