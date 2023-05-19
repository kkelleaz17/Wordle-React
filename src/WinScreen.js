import React from 'react'

export default function WinScreen({Winner,Word,HandleReset}) {
  
  return (
    <div className='WinScreen'>
        <div>
            <h1>{(Winner === 1)?'You Win!':'You Lose!'}</h1>
            <h2>The word was: {Word}</h2>
            <button onClick={HandleReset} className="button-68" >Retry?</button>

        </div>
    </div>
  )
}
