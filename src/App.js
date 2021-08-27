import Header from "./components/Header";
function App() {
  const appName = 'BHL';
  // colors
  const primaryColor = '#2A0944';
  return (
    <div className="App">
      <Header title={appName} backColor={primaryColor}/>
    </div>
  );
}

export default App;
