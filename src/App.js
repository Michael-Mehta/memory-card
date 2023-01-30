import { useEffect, useState } from 'react';
import SingleCard from './components/SingleCard';
import './App.css';

const cardImages = [
  {"src":"/img/kakashi.jpg"},
  {"src":"/img/killerBee.jpg"},
  {"src":"/img/madara.jpg"},
  {"src":"./img/narutoSageMode.jpeg"},
  {"src":"./img/pain.jpeg"},
  {"src":"./img/sasuke.jpeg"}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [scores, setScores] = useState(0)
  const [end, setEnd] = useState(0)
  const [copies, setCopies] = useState([])
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [choiceThree, setChoiceThree] = useState(null)
  const [choiceFour, setChoiceFour] = useState(null)
  const [choiceFive, setChoiceFive] = useState(null)
  const [choiceSix, setChoiceSix] = useState(null)

  useEffect(() => {

    
   

    if(turns === 2){
     
    copies.map((copy) => {

    
      
 
      if(choiceTwo){
      if(copy.card.src === choiceTwo.src)
      {

        console.log("Can't pick the same card twice")
        
      
        setEnd(1)
        resetChoices()
        setTurns(0)
      
        console.log(copies)
        if(turns > scores){
  
          setScores(turns-1)
        }
        
      }else{
        return addCopy(choiceTwo)
      }
    }
    
    })

  }


    if(turns === 3){
      
      copies.map((copy) => {
  
       
       
      
   
        if(choiceThree){
        if(copy.card.src === choiceThree.src)
        {
  
          console.log("Can't pick the same card twice")

          if(turns > scores){
  
            setScores(turns-1)
          }
          setEnd(1)
          resetChoices()
        setTurns(0)
        console.log(copies)
        }else{

          return addCopy(choiceThree)
        }
      }
      
      })
  }


  if(turns === 4){
   
    copies.map((copy) => {

      
      
      
 
      if(choiceFour){
      if(copy.card.src === choiceFour.src)
      {

        console.log("Can't pick the same card twice")

        if(turns > scores){
  
          setScores(turns-1)
        }
      
        setEnd(1)
        resetChoices()
        setTurns(0)
        console.log(copies)
      }else{
        return addCopy(choiceFour)
      }
    }
    
    })
}


if(turns === 5){
  
  copies.map((copy) => {

    
    
    

    if(choiceFive){
    if(copy.card.src === choiceFive.src)
    {

      console.log("Can't pick the same card twice")

      if(turns > scores){
  
        setScores(turns-1)
      }
    
      setEnd(1)
      resetChoices()
        setTurns(0)
        console.log(copies)
    }else{
      return addCopy(choiceFive)
    }
  }
  
  })
}



if(turns === 6){

 
  copies.map((copy) => {

    
    

    if(choiceSix){
    if(copy.card.src === choiceSix.src)
    {

      console.log("Can't pick the same card twice")

      if(turns > scores){
  
        setScores(turns-1)
      }
    
      setEnd(1)
      resetChoices()
        setTurns(0)
        console.log(copies)
    }else{

      
      setEnd(1)

      
      return addCopy(choiceSix)
      
    }
  }
  
  })
}




if(end){
  setCopies([])
  setEnd(0)
}






  }, [choiceOne, choiceTwo, choiceThree, choiceFour, choiceFive, choiceSix])


  const addCopy = (card) => {

    setCopies([...copies, {card}])
  }



  const shuffleCards = () => {

    const shuffledCards = [...cardImages].sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id:Math.random() }))

    setCards(shuffledCards);
    setTurns(0)
  }

  const handleChoice = (card) => {

    

   if(turns === 1){
    setChoiceTwo(card)
    shuffleCards()
    setTurns(2)
    return
   }else if(turns === 2){

    setChoiceThree(card)
    shuffleCards()
    setTurns(3)
    return
   }else if(turns === 3){
    setChoiceFour(card)
    shuffleCards()
    setTurns(4)
    return
   }else if(turns ===4){
    setChoiceFive(card)
    shuffleCards()
    setTurns(5)
    return
   }else if(turns === 5){
    setChoiceSix(card)
    shuffleCards()
    setTurns(6)
    return
   }else{
    setChoiceOne(card)
    addCopy(card)
    shuffleCards()
    setTurns(1)
    return
   }

  
   
    
  }



  const resetChoices = () => {

    setChoiceOne(null)
    setChoiceTwo(null)
    setChoiceThree(null)
    setChoiceFour(null)
    setChoiceFive(null)
    setChoiceSix(null)
  }

  return (
    <div className="App">
     <h1>Naruto Memory game</h1>
     <p> Get points by clicking on the image but don't click one any more than once</p>
     <button onClick={shuffleCards}>New Game</button>
     <p> Score: {turns}</p>
     <p> Best Score: {scores}</p>
     
     <div className = "card-grid">

      {cards.map(card => (

        <SingleCard 
         key = {card.id}
         card = {card}
         handleChoice = {handleChoice}/>

      ))}

     </div>
    </div>
  );
}

export default App;
