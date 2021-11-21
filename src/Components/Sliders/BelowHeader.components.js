import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import axios from "axios";
import Image from "react-bootstrap/Image";
import { useState, useEffect } from 'react';

function BelowHeader() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function getMovies() {
            try {
                const response = await axios.get('http://localhost:5000/bookmyshow/movies/getMovies');
                console.log(response);
                setMovie(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getMovies();
    }, []);

    return (
        <div style={{ backgroundColor:"rgb(245, 245, 245)",padding: "2% 9% 2% 9%" }}>
            <h2 style={{fontSize:"1.5rem", fontWeight:"bold"}}>Recommended Movies</h2>
            <Carousel indicators={false} variant="Light">
                <Carousel.Item >
                    <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around", outline:"none"}}>
                        {movie.map((mov, index) => {
                            if (index < 5)
                                return (
                                    <Card border="light" style={{backgroundColor:"rgb(245, 245, 245)",height:"450px", width:"200px"}}>
                                        <Card.Img variant="top" src={mov.imageUrl} style={{borderRadius:"5%",height:"80%", width:"100%"}}/>
                                        <Card.Body>
                                            <Card.Title>{mov.movieName}</Card.Title>
                                            <Card.Text>
                                                {mov.movieGenre}
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
                                    <Card border="light" style={{backgroundColor:"rgb(245, 245, 245)",height:"450px", width:"200px"}}>
                                        <Card.Img variant="top" src={mov.imageUrl} style={{borderRadius:"5%",height:"80%", width:"100%"}}/>
                                        <Card.Body>
                                            <Card.Title>{mov.movieName}</Card.Title>
                                            <Card.Text>
                                                {mov.movieGenre}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>)
                        })}
                    </CardGroup>
                </Carousel.Item>
            </Carousel>

            <Image style={{margin:"7.5% 0 4.5% 0"}}src="./banner2.png" fluid />


        </div>
    );
}

export default BelowHeader;
