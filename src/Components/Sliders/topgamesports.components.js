import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import axios from "axios";
import { useState, useEffect } from 'react';

function SportsEvents() {
    const [events, setevents] = useState([]);
    useEffect(() => {
        async function getMovies() {
            try {
                const response = await axios.get('http://localhost:5000/bookmyshow/topgns/get');
                console.log(response);
                setevents(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getMovies();
    }, []);

    return (
        <div style={{ backgroundColor:"rgb(245, 245, 245)",padding: "1% 9% 1.5% 9%" }}>

            <h2 style={{fontSize:"1.7rem", fontWeight:"bold"}}>Top Games and Sports Events</h2>
            
                    <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around", outline:"none"}}>
                        {events.map((event, index) => {
                            if (index < 5)
                                return (
                                    <Card border="light" style={{backgroundColor:"rgb(245, 245, 245)",height:"500px", width:"200px"}}>
                                        <Card.Img variant="top" src={event.imageUrl} style={{borderRadius:"5%",height:"70%", width:"100%"}}/>
                                        <Card.Body>
                                            <Card.Title style={{fontSize:"1.03rem"}}>{event.title}</Card.Title>
                                            <Card.Text style={{fontSize:"1rem"}}>
                                                {event.venue}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>)
                        })}
                    </CardGroup>
                
        </div>
    );
}

export default SportsEvents;
