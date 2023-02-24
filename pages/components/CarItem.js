import React from 'react'
import tw from "tailwind-styled-components"

const CarItem = (props) => {

      
  return (
    <Wrapper>
        <CarImage src={props.imgUrl} />
        <CarDetails>
            <Service>{props.service}</Service>
            <Time>5 min away</Time>
        </CarDetails>
        <Price>

            {'₹' +  (props.rideDuration * props.multiplier).toFixed(0)}
        </Price>
    </Wrapper>
  )
}

export default CarItem

const Wrapper = tw.div`
flex p-4 items-center
`

const CarImage = tw.img`
h-14 mr-4
`

const CarDetails = tw.div`
flex-1
`

const Service = tw.div`
font-medium
`

const Time = tw.div`
text-xs text-blue-500
`

const Price = tw.div`
text-sm
`