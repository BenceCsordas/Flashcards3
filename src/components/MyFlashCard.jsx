import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { readCardsOnce } from '../fireBaseBackend'
import MyFlipCard from './MyFlipCard'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const MyFlashCard = () => {
    const [cards, setCards] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        readCardsOnce(id, setCards)    
    }, [])

    const swipeLeft = () => {
        console.log(cards.length);
        
        setCurrentIndex(prev => prev != cards.length-1 ? prev+=1 : prev-=cards.length-1)
    }
    const swipeRight = () => {
        setCurrentIndex(prev => prev != 0 ? prev-=1 : prev+=cards.length-1)
    }

  return (
    <div className='Flashcards'>
      <button onClick={()=>navigate("/addCard/"+id)}>Új kártya hozzáadása</button>

        {cards.length > 0 ? <MyFlipCard currentCard={cards[currentIndex]}/> : <p>Nincsenek kérdések ehhez a témakörhöz</p>}
      {/* {cards && cards.length > 0 && cards.map(obj=><MyFlipCard {...obj}/>)}   */}
      <div>
        <span  onClick={swipeRight}>
            <FaArrowLeft />
        </span>
                   
        <span  onClick={swipeLeft}>
            <FaArrowRight />
        </span>
      </div>
    </div>
  )
}

export default MyFlashCard
