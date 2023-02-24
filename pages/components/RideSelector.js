import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import CarItem from './CarItem'
import { carList } from '../../data/carList'


const RideSelector = ({ pickupCoords, dropoffCoords }) => {
  const [rideDuration, setRideDuration] = useState(0)

  // get ride duration from mapboxGL
  useEffect(() => {
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoords[0]},${pickupCoords[1]};${dropoffCoords[0]}, ${dropoffCoords[1]}?access_token=pk.eyJ1IjoianNpbmhhIiwiYSI6ImNsZHB0a2NuMDBha24zd256a2tzajZpcWMifQ.1_v3E0Wq34usRJ4EmrcMCA`)
      .then(res => res.json())
      .then(data => {
        if (data !== undefined && data.routes.length >= 1) {
          setRideDuration(data.routes[0].duration / 1000)
        }
      })
  }, [pickupCoords, dropoffCoords]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {
          carList.map((car, index) => {
            return <CarItem key={index} imgUrl={car.imgUrl} service={car.service} rideDuration={rideDuration} multiplier={car.multiplier}></CarItem>
          })
        }
      </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.div`
text-center text-gray-500 text-xs py-2 border-b
`

const CarList = tw.div`
overflow-y-scroll
`