import React from 'react'


const Square = (props) => {
  const handleClick = () => {
      if (!squareValue){
        if(player) {
        squares.splice(index, 1, 'X') 
        setSquares(squares)
        setPlayer(!player)
        } else {
          squares.splice(props.index, 1, 'O') 
          setSquares(props.squares)
          setPlayer(!props.player)
        }
      }
    }
  const {squareValue, squares, player, index, setSquares, setPlayer} = props
    return (
    <div className='square' onClick={handleClick}>
        {squareValue === 'O' ? <img alt='DevMountain Logo' src='https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png'/> : squareValue}
    </div>
    )
}

export default Square