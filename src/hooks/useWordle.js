import React,{useState} from 'react'

const useWordle = (solution) => {
    const [turn,setTurn] = useState(0)
    const [currentGuess,setCurrentGuess] = useState('')
    const [guesses,setGuesses]=useState([])
    const [history,setHistory]=useState([])
    const [isCorrect,setIsCorrect]=useState(false)


    const formatGuess = () =>{
        

    }
    
    const addNewGuess = () =>{
        
    }


    //handle keypress
    const handleKeyUp = ({key}) =>{


        console.log('key pressed ');

        if(key==='Enter'){
            if(turn < 5){
                console.log("No Way")
                return
            }
            if(history.includes(currentGuess)){
                console.log("No Way2")
                return
            }       
            
            if(currentGuess.length>5){
                console.log("No Way3")
                return;
            }
        }
        if(key==='Backspace'){
            setCurrentGuess((prev)=>{
                return prev.slice(0,-1)
            })
            return
        }

        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess(prev =>  prev + key)
            }
        }
    }
    return(turn,currentGuess,guesses,isCorrect,handleKeyUp)
}

export default useWordle;