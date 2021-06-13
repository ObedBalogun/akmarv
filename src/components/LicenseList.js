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

    useEffect(() => {
        const handleLicenseList = (response) => {
            setLicenses(response.data);
        }
        apiGetLicense(handleLicenseList)
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