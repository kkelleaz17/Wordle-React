import React from 'react'

export default function KeyBoard({KeyDownEvent}) {

   const HandlePress =(e)=>{
      var keyletter = (e.target.innerHTML);
    if(keyletter === 'Back'){
      KeyDownEvent({key:'Backspace'})
    }else{

      KeyDownEvent({key:keyletter})
    }
   }


  return (
    <div className='KeyBoard'>
      
      <div className='KeyBoardRow TopBot'>
      <div onClick={HandlePress}  className='Key'>q</div>
      <div onClick={HandlePress}  className='Key'>w</div>
      <div onClick={HandlePress}  className='Key'>e</div>
      <div onClick={HandlePress}  className='Key'>r</div>
      <div onClick={HandlePress}  className='Key'>t</div>
      <div onClick={HandlePress}  className='Key'>y</div>
      <div onClick={HandlePress}  className='Key'>u</div>
      <div onClick={HandlePress}  className='Key'>i</div>
      <div onClick={HandlePress}  className='Key'>o</div>
      <div onClick={HandlePress}  className='Key'>p</div>
      </div>

      <div className='KeyBoardRow Mid'>
      <div onClick={HandlePress} className='Key'>a</div>
      <div onClick={HandlePress} className='Key'>s</div>
      <div onClick={HandlePress} className='Key'>d</div>
      <div onClick={HandlePress} className='Key'>f</div>
      <div onClick={HandlePress} className='Key'>g</div>
      <div onClick={HandlePress} className='Key'>h</div>
      <div onClick={HandlePress} className='Key'>j</div>
      <div onClick={HandlePress} className='Key'>k</div>
      <div onClick={HandlePress} className='Key'>l</div>
      </div>

      <div className='KeyBoardRow TopBot'>
      <div onClick={HandlePress} className='Key SideKey'>Enter</div>
      <div onClick={HandlePress} className='Key'>z</div>
      <div onClick={HandlePress} className='Key'>x</div>
      <div onClick={HandlePress} className='Key'>c</div>
      <div onClick={HandlePress} className='Key'>v</div>
      <div onClick={HandlePress} className='Key'>b</div>
      <div onClick={HandlePress} className='Key'>n</div>
      <div onClick={HandlePress} className='Key'>m</div>
      <div onClick={HandlePress} className='Key SideKey'>Back</div>
      </div>

    </div>
  )
}
