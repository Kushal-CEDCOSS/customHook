import './App.css';
import useFetch from './useFetch';


function App() {
  const { state, updateData } = useFetch();
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=30";
  const method = "GET";
  const payload = 1;
  console.log(state);
  return (
    <div className="App">
      <button onClick={()=>{updateData(url, method, payload)}}>Fetch Data</button>
      {state.length === 0 ? null : JSON.stringify(state)}
    </div>
  );
}

export default App;
