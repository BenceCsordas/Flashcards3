import React from 'react'
import ReactFlipCard from 'reactjs-flip-card'


const MyFlipCard = ({currentCard}) => {
    
 currentCard && console.log(currentCard)
  return (
    <div className='cardHolder'>
        <ReactFlipCard
                flipTrigger={'onClick'}
                flipCardCss='flipCard'
                containerCss='flipContainer'
                frontCss='FCFront'
                backCss='FCBack'
                frontComponent={<div>{currentCard?.question}</div>}
                backComponent={<div>{currentCard?.answer}</div>}
        />
        
    </div>
  )
}

export default MyFlipCard
