import React, {useEffect,useState} from "react";

export const LocationsList = () => {
    const [locations, setLocationList] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then(setLocationList)
        },
        []
    )
    return ( 
         <>
        
        {
            locations.map(
                (locationObject) => {
                    return <p key={`locations--${locationObject.id}`}> {locationObject.name}</p>
                }
                )

    }
    </>
    )
    }