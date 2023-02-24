import React from 'react'
import { useEffect } from "react"
import mapboxgl from "mapbox-gl"
import tw from "tailwind-styled-components"

mapboxgl.accessToken = 'pk.eyJ1IjoianNpbmhhIiwiYSI6ImNsZHB0a2NuMDBha24zd256a2tzajZpcWMifQ.1_v3E0Wq34usRJ4EmrcMCA'

const Map = (props) => {

    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [72.8777, 19.0760],
            zoom: 9
        })
        
        if (props.pickupCoords) {
          addToMap(map, props.pickupCoords)
        }
        if (props.dropoffCoords) {
          addToMap(map, props.dropoffCoords)
        }

        if (props.pickupCoords && props.dropoffCoords) {
          map.fitBounds([
            props.dropoffCoords, props.pickupCoords
          ], {
            padding: 60
          })
        }
    }, [props.pickupCoords, props.dropoffCoords])

    const addToMap = (map, coordinates) => {
      const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map)
    }

  return (
    <Wrapper id='map'>
    </Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`