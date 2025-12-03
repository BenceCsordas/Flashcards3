import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { readCardsOnce } from '../fireBaseBackend'
import MyFlipCard from './MyFlipCard'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MyAuthContext } from '../context/AuthContext';
import AccessKeyModal from './AccessKeyModal';

const MyFlashCard = () => {
    const [cards, setCards] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const {hasAccess} = useContext(MyAuthContext)
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

    const handleAddCard = () => {
      if(hasAccess){
        navigate("/addCard/"+id)
      }else {
        setOpen(true)
      }
    }

  return (
    <div className='Flashcards'>
      <button onClick={handleAddCard} className='addBtn'>Új kártya hozzáadása</button>

        {cards.length > 0 ? <MyFlipCard currentCard={cards[currentIndex]} currentIndex={currentIndex}/> : <p>Nincsenek kérdések ehhez a témakörhöz</p>}
      {/* {cards && cards.length > 0 && cards.map(obj=><MyFlipCard {...obj}/>)}   */}
      <div className='ArrowsHolder'>
        <span  onClick={swipeRight} className='Arrows'>
            <FaArrowLeft />
        </span>
                   
        <span  onClick={swipeLeft} className='Arrows'>
            <FaArrowRight />
        </span>
      </div>
      <AccessKeyModal open={open} onClose={()=>setOpen(false)} onSuccess={()=>navigate('/addCard/'+id)}/>
    </div>
  )
}

export default MyFlashCard
