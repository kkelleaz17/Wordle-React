import React from 'react'

export default function Line({text,Word,On,Animate}) {
  console.log(Word)
  return (
    <>
    <div className={'Square'+FindColor(text[0],Word,text,On,1)+Animation(Animate)} >{text[0]}</div>
    <div className={'Square'+FindColor(text[1],Word,text,On,2)+Animation(Animate)} >{text[1]}</div>
    <div className={'Square'+FindColor(text[2],Word,text,On,3)+Animation(Animate)} >{text[2]}</div>
    <div className={'Square'+FindColor(text[3],Word,text,On,4)+Animation(Animate)} >{text[3]}</div>
    <div className={'Square'+FindColor(text[4],Word,text,On,5)+Animation(Animate)} >{text[4]}</div>
    </>
  )
}

function Animation(A){
 if(A){
  return ' Animate'
 }else{
  return ''
 }
}


function FindColor(L2,FullWord,PlayersWord,On,N){
  
  if(L2 === undefined || PlayersWord.length < 5 || On === true){
    return ''
  }
  
  var WORDOFTHEDAY = FullWord.split('');

  if(!WORDOFTHEDAY.includes(L2)){
    return ' Normal'
  }

  /// Check for Right spot
  if(WORDOFTHEDAY[N-1] === L2){
    WORDOFTHEDAY.splice(N-1, 1);
    return ' Correct'
  }
 if(WORDOFTHEDAY.join('').includes(L2)){
    return ' Wrong'
 }

}