import React from 'react'
import { useEffect , useState } from 'react'

const List = () => {

  const [count , setCount] = useState(0);
  const [data , setData] = useState([]);
  const [limit , setLimit] = useState(0);

  // useEffect( ()=>{
  //   alert(`Count is: ${count}`)
  // } , [count])

  useEffect( ()=>{
    document.title = `Count is: ${count}`
  } , [count]);


  useEffect( ()=>{
    fetch('https://dummyjson.com/c/6b58-e5fe-4c1e-aa9e')
    .then(res=>res.json())
    .then(data=>setData(data))
  } , []);

  const add = ()=>{
    setCount(count + 1)
  }

  const handlechange = (e)=>{
    setLimit(Number(e.target.value));
  }

  const col = [
    { key : 'name' , label : 'Name' },
    { key : 'email' , label : 'Email' },
    { key : 'age' , label : 'Age' }
    
  ]

  return (
    <div>
      <div className='flex flex-col m-4 gap-4 items-center'>
        <h1 className='text-red-800'>Count: {count}</h1>
        <button className='border-2 border-red-700 rounded p-4' onClick={add}>Add</button>
      </div>
      <div className='flex gap-2 m-4 items-center'>
        <p>Limit :</p>
        <input
        type = "number"
        value={limit}
        onChange={handlechange}
        className='border-2 border-slate-700 p-3 '
       />
       <button className='border-2 border-blue-400 bg-slate-400'>Click to add the filter</button>
      </div>

      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            {/* <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Email</th>
            <th className="border border-gray-400 p-2">Age</th> */}
            {col.map( (c) => (
              <th key={c.key} className='border border-gray-400 p-2'>{c.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map(
              (item) =>
                item.id > limit && (
                  <tr key={item.id}>
                    <td className="border border-gray-400 p-2">{item.name}</td>
                    <td className="border border-gray-400 p-2">{item.email}</td>
                    <td className="border border-gray-400 p-2">{item.age}</td>
                  </tr>
                )
            )
          ) : (
            <tr>
              <td colSpan="3" className="p-2 text-center">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>



    </div>
    
  )
}

export default List
