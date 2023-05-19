import { useEffect, useState } from 'react';
import './App.css';
import Line from './Line';
import KeyBoard from './KeyBoard';
import WinScreen from './WinScreen';


function App() {
  document.title='Wordle'
  
  const [Words,SetWords]=useState(null);
  const [WordOfTheDay,SetWordOftheDay]=useState('')
  const [CurrentWord,SetCurrentWord]=useState('');
  const [WordList,SetWordList]=useState('');
  const [LineNum,SetLineNum]=useState(0);
  const [Winner,SetWinner]= useState(null);

  useEffect(()=>{  
     if(WordList.length > 1 && WordOfTheDay.toLocaleLowerCase() === WordList.substring(WordList.length-6,WordList.length).toLocaleLowerCase().trim()){
      SetWinner(1);
      return;
     }else if(WordList.length === 36){
      SetWinner(2);
     }
     /// length 36
  },[WordList,WordOfTheDay,Winner])



  useEffect(()=>{
    const FetchWords =async()=>{
   await fetch('https://raw.githubusercontent.com/tabatkins/wordle-list/main/words')
   .then(res=>res.text())
   .then(res=>res.split('\n')).then(res=>{
    SetWords(res);
    SetWordOftheDay(res[Math.round(Math.random()*res.length)])
  })
    }
    FetchWords()
  },[])
 
  useEffect(()=>{
   document.addEventListener('keydown',KeyDownEvent,true)
  },[])
  
  const KeyDownEvent=(e)=>{
   var valid = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'

   if(valid.includes(e.key) && e.key.trim().length === 1){
    SetCurrentWord(prev=>{
      if(prev.length < 5){
        return prev+e.key
      }else{
        return prev
      }
    })
   }else if(e.key ==='Backspace'){
    SetCurrentWord(prev=>{
      if(prev.length === 0){
        return ''
      }else{
        return prev.substring(0,prev.length-1)
      }
    })
   }else if(e.key ==='Enter'){
    SetCurrentWord(prev=>{
      if(prev.length === 5){
          SetWordList(p=>p+prev+' ')
          SetLineNum(p=>{
            if(p === 6){
              
              return p
            }
            else{
              return p+1
            }
          });
          return ''
      }else{
        alert('Five letter words please!')
        return prev
      }
    })
   }
  }
 

  if(Words === null){
    return <h1 className='Loading'>Loading</h1>
  }
 
 
  if(Winner !== null){
    const HandleReset =()=>{
      SetWinner(null);
      SetLineNum(0);
      SetWordList('');
      SetWordOftheDay(Words[Math.round(Math.random()*Words.length)])
     }
   
    return <WinScreen Winner={Winner} Word={WordOfTheDay} HandleReset={HandleReset} />
  }


  return (
    <>
    <div className="App">
      <Line Animate={(LineNum === 1)?true:false} On={(LineNum === 0)?true:false} Word={WordOfTheDay} text={(LineNum === 0)?CurrentWord:WordList.substring(0,5)} />
      <Line Animate={(LineNum === 2)?true:false} On={(LineNum === 1)?true:false} Word={WordOfTheDay} text={(LineNum === 1)?CurrentWord:WordList.substring(6,11)} />
      <Line Animate={(LineNum === 3)?true:false} On={(LineNum === 2)?true:false} Word={WordOfTheDay} text={(LineNum === 2)?CurrentWord:WordList.substring(12,17)} />
      <Line Animate={(LineNum === 4)?true:false} On={(LineNum === 3)?true:false} Word={WordOfTheDay} text={(LineNum === 3)?CurrentWord:WordList.substring(18,23)} />
      <Line Animate={(LineNum === 5)?true:false} On={(LineNum === 4)?true:false} Word={WordOfTheDay} text={(LineNum === 4)?CurrentWord:WordList.substring(24,29)} />
      <Line Animate={(LineNum === 6)?true:false} On={(LineNum === 5)?true:false} Word={WordOfTheDay} text={(LineNum === 5)?CurrentWord:WordList.substring(30,35)} />
    </div>
    <KeyBoard KeyDownEvent={KeyDownEvent}/>
    </>
  );
}

export default App;
