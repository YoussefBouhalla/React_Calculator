import Calculator from "./components/Layout/Calculator";
import Description from "./components/Layout/Description";
import Header from "./components/Layout/Header";
function App() {
  const appName = 'BHL';
  // colors
  const primaryColor = '#2A0944';
  return (
    <div className="App">
      <Header title={appName} backColor={primaryColor}/>
      <div className='content d-flex w-85'>
        <Description title={appName} />
        <Calculator />

      </div>
    </div>
  );
}

export default App;
