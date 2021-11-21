import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import axios from "axios";
import Image from "react-bootstrap/Image";
import { useState, useEffect } from 'react';

function Premiers() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function getMovies() {
            try {
                const response = await axios.get('http://localhost:5000/bookmyshow/premiers/get');
                console.log(response);
                setMovie(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getMovies();
    }, []);

    return (
        <div style={{ backgroundColor:"rgb(43, 49, 72)",padding: "2% 9% 2% 9%" }}>

            <Image style={{marginBottom:"4.4%"}} src="./premierBanner.png" fluid />

            <h2 style={{color:"white",fontSize:"1.7rem", fontWeight:"bold"}}>Premieres</h2>
            <p style={{color:"white"}}>Brand new realeases every Friday</p>
            <Carousel indicators={false}>
                <Carousel.Item >
                    <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around", outline:"none"}}>
                        {movie.map((mov, index) => {
                            if (index < 5)
                                return (
                                    <Card border="dark" style={{backgroundColor:"rgb(43, 49, 72)",height:"450px", width:"200px"}}>
                                        <Card.Img variant="top" src={mov.imageUrl} style={{borderRadius:"5%",height:"80%", width:"100%"}}/>
                                        <Card.Body style={{color:"white"}}>
                                            <Card.Title style={{fontSize:"1.03rem"}}>{mov.title}</Card.Title>
                                            <Card.Text style={{fontSize:"1rem"}}>
                                                {mov.lang}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>)
                        })}
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item >
                    <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    {movie.map((mov, index) => {
                            if (index >= 5)
                                return (
                                    <Card border="dark" style={{backgroundColor:"rgb(43, 49, 72)",height:"450px", width:"200px"}}>
                                        <Card.Img variant="top" src={mov.imageUrl} style={{borderRadius:"5%",height:"80%", width:"100%"}}/>
                                        <Card.Body style={{color:"white"}}>
                                            <Card.Title style={{fontSize:"1.03rem"}}>{mov.title}</Card.Title>
                                            <Card.Text style={{fontSize:"1rem"}}>
                                                {mov.lang}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>)
                        })}
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Premiers;
