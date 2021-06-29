import React, {useEffect, useState} from 'react';
import {apiGetLicense} from "../backendQuery";
import {CardDeck, Carousel, Container} from "react-bootstrap";
import License from "./License";


const LicenseList = () => {
    const [licenses, setLicenses] = useState([])

    // Carousel
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    const licenceList = [
        {
            'license_type':"Mp3",
            'price': '$80',
            'recording': 'Used For Music Recording',
            'distribution':'Distribute up to 2500 copies',
            'streams': '100000 Online Audio Streams',
            'videos' : '1 Music Videos',
            'performances': 'Profit Live Performance',
            'broadcasting': 'Radio Broadcasting rights (2 stations)'

        },
        {
            'license_type':"WAV",
            'recording': 'Used For Music Recording',
            'price': '$120',
            'distribution':'Distribute up to 3000 copies',
            'streams': '500000 Online Audio Streams',
            'videos' : '1 Music Video',
            'performances': 'Profit Live Performances',
            'broadcasting': 'Radio Broadcasting rights (2 stations)'

        },
        {
            'license_type':'WAV + Trackouts',
            'recording':'Used For Music Recording',
            'price': '$150',
            'distribution':'Distribute up to 10000 copies',
            'streams': '500000 Online Audio Streams',
            'videos' : '1 Music Video',
            'performances': 'Profit Live Performances',
            'broadcasting': 'Radio Broadcasting rights (2 stations)'

        },
        {
            'license_type':"Exclusive",
            'price': '$300',
            'recording':'Used For Music Recording',
            'distribution':'Distribute unlimited copies',
            'streams': 'Unlimited Online Audio Streams',
            'videos' : 'Unlimited Music Videos',
            'performances': 'For Profit Live Performances',
            'broadcasting': 'Radio Broadcasting rights (Unlimited stations)'

        },

    ]


    useEffect(() => {
        setLicenses(licenceList);

        const handleLicenseList = (response) => {
            // setLicenses(response.data);
        }
        handleLicenseList()
        // apiGetLicense(handleLicenseList)
    },[])


    return (
        <>
            <Container>
                <CardDeck>
                    {licenses.map((license)=> (
                        <License key={license.license_type} license={license} />
                    ))}
                        </CardDeck>
                <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={true} interval={90000}>
                    {licenses.map((license)=> (
                    <Carousel.Item>
                        <License key={license.license_type} license={license} />
                    </Carousel.Item>
                        ))}
                </Carousel>
            </Container>

        </>
    );

}

export default LicenseList;