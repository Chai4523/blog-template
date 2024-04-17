import './App.css';

function App() {
  const link = "https://www.google.com"
  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <a href={link}>Go to Google</a>
      </div>
    </div>
  );
}

export default App;
