import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [number, setNumber] = useState('0')
  const handledigits = (d)=>{
    if(number === '0'){
      setNumber(d)
    }else setNumber(`${number}${d}`)

  }
  useEffect(()=>{
    const input = document.querySelector('.calculator_inputs')
    input.textContent = number
  }, [number])
  const remove = ()=>{
       if(number ==='0') return;

       let len = number.length

       if(len <= 1){
        setNumber('0')
       }else{
        setNumber(number.slice(0, len - 1))
       }
  }
  const calc = ()=>{
    const res = eval(number)

 const output = document.querySelector('.calculator_outputs')
 output.textContent =res
 setNumber(res)
  }

  return (
    <div className="App">
      <header className="App-header">
       <h2>Calculator</h2>
      </header>
      <main className='calculator_container'>
        <section className='calculator'>
            <div className='calculator_inputs'></div>
            <div className='calculator_outputs'></div>
            <div cl assName='calculator_digits'>
              <div className='grid-container'>
                    <div className='grid-item' onClick={()=>handledigits('1')}>1</div>
                    <div className='grid-item' onClick={()=>handledigits('2')}>2</div>
                    <div className='grid-item' onClick={()=>handledigits('3')}>3</div>
                    <div className='grid-item' onClick={()=>handledigits('4')}>4</div>
                    <div className='grid-item' onClick={()=>handledigits('5')}>5</div>
                    <div className='grid-item' onClick={()=>handledigits('6')}>6</div>
                    <div className='grid-item' onClick={()=>handledigits('7')}>7</div>
                    <div className='grid-item' onClick={()=>handledigits('8')}>8</div>
                    <div className='grid-item' onClick={()=>handledigits('9')}>9</div>
                    <div className='grid-item' onClick={remove}>CE</div>
                    <div className='grid-item' onClick={()=>handledigits(0)}>0</div>
                    <div className='grid-item' onClick={()=>setNumber('0')}>C</div>
              </div>
              <div className='operators'>
              <div className='op-plus' onClick={()=>handledigits('+')}>+</div>
              <div className='op-min' onClick={()=>handledigits('-')}>-</div>
              <div className='op-mult' onClick={()=>handledigits('*')}>*</div>
              <div className='division' onClick={()=>handledigits('/')}>/</div>
              <div className='op-squar' onClick={()=>handledigits('**')}>**</div>
              <div className='op-power' onClick={()=>handledigits('.')}>.</div>
              <div className='grid-modules' onClick={()=>handledigits('%')}>%</div>
              <div className='op-calc' onClick={calc}>=</div>


              </div>
            </div>

        </section>

      </main>
    </div>
  );
}

export default App;
