import { useState } from 'react'

function App() {
  const[count, setCount] = useState(0);

  function decreaseHandler () {
    setCount(count - 1);
  }
  function increaseHandler () {
    setCount(count + 1);
  }
  function resetHandler () {
    setCount(0);
  }

  return (
    <>
      <div className='bg-gray-700  h-screen w-screen flex justify-center items-center flex-col gap-10'>
        <div className='text-2xl text-white'>Increment & Decrement</div>

        <div className='flex bg-white gap-12 text-2xl text-black '>
          <button onClick={decreaseHandler}>
            -
          </button>

          <div>
            {count}
          </div>

          <button onClick={increaseHandler}>
            +
          </button>
        </div>

        <button onClick={resetHandler} type='reset'>Reset</button>
      </div>
    </>
  )
}

export default App
