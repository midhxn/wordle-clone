import React from 'react'

export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Hurrayyy! You Won</h1>
          <p className="solution">{solution}</p>
          <p>In just {turn} guesses you found the solution</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Try again warrior</h1>
          <p className="solution">Answer: {solution}</p>
          <p>Better luck next time</p>
        </div>
      )}
    </div>
  )
}
