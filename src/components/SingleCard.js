export default function SingleCard({card, handleChoice}){

    const handleClick = () => {

        handleChoice(card)

    }


    return(
        <div className = "card" >
          <div>

            <img className = "cardPic"
             src = {card.src}
             onClick = {handleClick}
             alt ="character picture"/>

          </div>
        </div>
    )
}