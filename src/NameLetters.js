import {React} from 'react'


function NameLetters({word, colourR, colourL}) {
    
    


  return (
    <p className={`text-center text-transparent 2xl:text-5xl text-4xl font-heebo text-black`}>{word.toUpperCase()}</p>
  )
}

export default NameLetters