import Link from 'next/link'
import React, { useState } from 'react'
import tw from "tailwind-styled-components"

function search() {

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <Wrapper>
        <Link href="/">
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </ButtonContainer>
        </Link>
        <InputContainer>
          <FromToIcons>
              <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle" />
              <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line" />
              <Square src="https://img.icons8.com/50/windows/square-full" />
          </FromToIcons>
          <InputBoxes>
            <Input placeholder='Enter pickup location' value={pickup} onChange={(e)=> setPickup(e.target.value)}/>
            <Input placeholder='Where to?' value={dropoff} onChange={(e)=>setDropoff(e.target.value)}/>
          </InputBoxes>
          <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
        </InputContainer>
        <SavedPlaces>
          <StarIcon src="https://img.icons8.com/ios-filled/50/FFFFFF/star" />
          Saved Places
        </SavedPlaces>
        <Link href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff
          }
        }}>
        <ConfirmButton>Confirm Locations</ConfirmButton>
        </Link>
    </Wrapper>
  )
}

export default search

const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white px-4
`

const BackButton = tw.img`
h-12 cursor-pointer
`
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`
const FromToIcons = tw.div`
flex flex-col w-10 mr-3 items-center
`

const Line = tw.img`
h-10
`

const Circle = tw.img`
h-2.5
`

const Square = tw.img`
h-3
`

const InputBoxes = tw.div`
flex flex-col flex-1
`

const Input = tw.input`
h-10 bg-gray-200 my-2 p-2 outline-none border-none rounded-lg
`

const PlusIcon = tw.img`
h-10 w-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmButton = tw.div`
bg-black text-white text-center m-4 px-4 py-3 text-2xl cursor-pointer
`