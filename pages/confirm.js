import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from '../pages/components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const confirm = () => {
    const [pickupCoords, setPickupCoords] = useState([0, 0]);
    const [dropoffCoords, setDropoffCoords] = useState([0, 0]);
    const router = useRouter();
    const { pickup, dropoff } = router.query;

    const getPickupCoordinates = (location) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoianNpbmhhIiwiYSI6ImNsZHB0a2NuMDBha24zd256a2tzajZpcWMifQ.1_v3E0Wq34usRJ4EmrcMCA",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setPickupCoords(data.features[0].center)
            })
    }

    const getDropoffCoordinates = (location) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoianNpbmhhIiwiYSI6ImNsZHB0a2NuMDBha24zd256a2tzajZpcWMifQ.1_v3E0Wq34usRJ4EmrcMCA",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setDropoffCoords(data.features[0].center)
            })
    }

    useEffect(() => {
        getPickupCoordinates(pickup)
        getDropoffCoordinates(dropoff)
    }, [pickup, dropoff])


    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/search">
                    <BackButton src="https://img.icons8.com/ios-filled/30/000000/left.png" />
                </Link>
            </ButtonContainer>
            <Map pickupCoords={pickupCoords} dropoffCoords={dropoffCoords} />
            <RideContainer>
                <RideSelector pickupCoords={pickupCoords} dropoffCoords={dropoffCoords}></RideSelector>
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default confirm

const Wrapper = tw.div`
flex h-screen flex-col
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2`

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 text-center py-2 text-xl
`
const ConfirmButtonContainer = tw.div`
border-t-2
`

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`
h-full object-container
`