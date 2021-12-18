import Content from "./component/Content";
import Header from "./component/Header";
import data from './data.json';

const App = () => {

  return (
    <div className="App">
      <Header />
      {
        data.map((object, index) => <Content key={index} data={object} />)
      }
    </div>
  );
}

export default App;
