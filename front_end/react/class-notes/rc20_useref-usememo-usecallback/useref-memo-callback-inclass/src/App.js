import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
  }, [])

  const filteredData = data?.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))

  const handleSearch = ()=>{
    setSearch(text)
  }

  return (
    <div className="container mt-2">
      <div>
        <Header count={count<5 ? 0 : count} />
        <hr />
        <HeaderMemo count={count<5 ? 0 : count} />
      </div>
      <hr />
      <div>
        <p>{count}</p>
        <button className='btn btn-danger' onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input type='text' value={text} onChange={({target})=>setText(target.value)} />
        <button type='button' onClick={handleSearch}>Search</button>
      </div>
      <div className="row">
        <Card data={filteredData} />
      </div>
    </div>
  );
}

export default App;
