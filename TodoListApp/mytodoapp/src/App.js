import './App.css';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { AddTodoAction, RemoveTodoAction } from './actions/Todoactions';
function App() {

   const [state, setstate] = useState('')
   const dispatch = useDispatch()
   const Todo = useSelector((state) => state.Todo)
   const {todos} = Todo
   const handleSubmit = (e)=>{
       e.preventDefault()
      dispatch(AddTodoAction(state))
   }

   const Removehandler = (t)=>{
    dispatch(RemoveTodoAction(t))
   }

   
  return (
    <div className="App">
      <header className="App-header">
        <h1> Todo LIST app</h1>
        <form onSubmit={handleSubmit}>
          <input  className='inputs-text' placeholder='write something' style={{
            backgroundColor : '#fcfcfc', padding :'30px',fontSize:'20px',
            border : 'none', 
          }}
          onChange = {(e)=>setstate(e.target.value)}
          />
          <button type='submit'  style={{
            borderRadius : '15px',
            backgroundColor : 'green',
            fontSize : '20px',
            padding :'30px',
            marginLeft : '10px',
            color: 'white'

            
          }}> Add Todos</button> 

        </form>

        <ul className='List'>
            
              {
                todos && todos.map((t)=>(
                    <li key={t.id} className='List_items'>
                    <span className='text'>{t.todo}</span>
                
                    <button type='submit' style={{
                        borderRadius : '15px',
                        backgroundColor : 'red',
                        color:'#fcfcfc',
                        fontSize : '20px',
                        padding :'30px',
                        marginLeft : '10px',
                  }}    onClick = {() => Removehandler(t)}>
                     Delete
                  </button>
    
                </li>
                ))
              }
              
          </ul>
      </header>
    </div>
  );
}

export default App;
