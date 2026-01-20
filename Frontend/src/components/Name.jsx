import React , {useState , useEffect} from 'react'
import Cssp from './Cssp';

const Name = () => {

  const [todo , setTodo] = useState([]);

  // useEffect( () => {
  //   fetch('https://dummyjson.com/c/c779-614b-4496-9e0f')
  //   .then(res=>res.json())
  //   .then(data=>setTodo(data.todos))
  // } , [])


  useEffect( () => {
    const fetchData = async () => {
      try{
        const response = await fetch('https://dummyjson.com/c/c779-614b-4496-9e0f');
        const data = await response.json();
        setTodo(data.todos);
      }
      catch(error){
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  } , [])

  
  return (
    <div>
      <div className='text-center'>
            <h1 className='text-red-700 font-bold text-center m-4 border-2 border-red-700  inline-block p-4 '>TODO LIST</h1>
      </div>
      
      

      <div className='flex flex-wrap justify-center'>
        {todo.length > 0 ? todo.map( (item) => (
            <Cssp key = {item.id} todo={item} />
        )) : <p>Loading...</p>}
      </div>
      
    </div>
  );
};


export default Name
