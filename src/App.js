import Cards from "./components/card/Cards";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import {data} from "./helper/data"
function App() {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="container">
        {data.map(({id,title,desc,image})=>
        <Cards id={id} title={title} desc={desc} image={image}  />
        )}
      </div>
    </div>
  );
}

export default App;
