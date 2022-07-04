import React, {useEffect,useState} from 'react';

const useWordle = (soliution) => {
    const [turn,setTurn] = useState(0);
    const [currentGuess,setCurrentGuess] = useState('');
    const [guesses,setGuesses]=useState([]);
    const [history,setHistory]=useState([]);
    const [isCorrect,setIsCorrect]=useState(false);


    const formatGuess = () =>{

    }
    
    const addNewGuess = () =>{
        
    }

    const handleKeyUp = () =>{
        
    }

    return(turn,currentGuess,guesses,isCorrect,handleKeyUp)
}

export default useWordle;