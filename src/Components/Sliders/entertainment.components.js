import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import axios from "axios";
import { useState, useEffect } from 'react';

function Entertainment() {
    const [events, setevents] = useState([]);
    useEffect(() => {
        async function getMovies() {
            try {
                const response = await axios.get('http://localhost:5000/bookmyshow/ET/get');
                console.log(response);
                setevents(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getMovies();
    }, []);

    return (
        <div style={{ backgroundColor:"rgb(245, 245, 245)",padding: "0 9% 3.5% 9%" }}>

            <h2 style={{fontSize:"1.7rem", fontWeight:"bold"}}>The Best Of Entertainment</h2>
            <Carousel indicators={false}>
                <Carousel.Item >
                    <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around", outline:"none"}}>
                        {events.map((event, index) => {
                            if (index < 5)
                                return (
                                    <Card border="light" style={{backgroundColor:"rgb(245, 245, 245)",height:"225px", width:"200px"}}>
                                        <Card.Img variant="top" src={event.imageUrl} style={{borderRadius:"5%",height:"100%", width:"100%"}}/>
                                    </Card>)
                        })}
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item >
                    <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    {events.map((event, index) => {
                            if (index >= 5)
                                return (
                                    <Card border="light" style={{backgroundColor:"rgb(245, 245, 245)",height:"225px", width:"200px"}}>
                                        <Card.Img variant="top" src={event.imageUrl} style={{borderRadius:"5%",height:"100%", width:"100%"}}/>
                                    </Card>)
                        })}
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Entertainment;
