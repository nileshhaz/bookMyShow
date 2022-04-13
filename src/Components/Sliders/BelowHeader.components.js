import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import axios from "axios";
import Image from "react-bootstrap/Image";
import { useState, useEffect } from "react";

function BelowHeader() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function getMovies() {
      try {
        const options = {
          method: "GET",
          url: "https://movie-database-alternative.p.rapidapi.com/",
          params: { s: "avengers", r: "json", page: "1" },
          headers: {
            "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
            "X-RapidAPI-Key":
              "7595d28e6fmsh2af7c4fbb9d33a1p17adecjsn032c75c91f3f",
          },
        };

        axios
          .request(options)
          .then(function (response) {
            console.log(".................", response.data);
            setMovie(response.data.Search);
          })
          .catch(function (error) {
            console.error(error);
          });
        // const response = await axios.get(
        //   "https://movie-database-alternative.p.rapidapi.com/"
        // );
        // console.log(response);
        // setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
  }, []);

  return (
    <div
      style={{ backgroundColor: "rgb(245, 245, 245)", padding: "2% 9% 2% 9%" }}
    >
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Recommended Movies
      </h2>
      <Carousel indicators={false} variant="Light">
        <Carousel.Item>
          <CardGroup
            style={{
              display: "flex",
              gap: "40px",
              justifyContent: "space-around",
              outline: "none",
            }}
          >
            {movie.map((mov, index) => {
              if (index < 5)
                return (
                  <Card
                    border="light"
                    style={{
                      backgroundColor: "rgb(245, 245, 245)",
                      height: "450px",
                      width: "200px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={mov.Poster}
                      style={{
                        borderRadius: "5%",
                        height: "80%",
                        width: "100%",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{mov.Title}</Card.Title>
                      <Card.Text>{`${mov.Type} , ${mov.Year}`}</Card.Text>
                    </Card.Body>
                  </Card>
                );
            })}
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
          <CardGroup
            style={{
              display: "flex",
              gap: "40px",
              justifyContent: "space-around",
            }}
          >
            {movie.map((mov, index) => {
              if (index >= 5)
                return (
                  <Card
                    border="light"
                    style={{
                      backgroundColor: "rgb(245, 245, 245)",
                      height: "450px",
                      width: "200px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={mov.Poster}
                      style={{
                        borderRadius: "5%",
                        height: "80%",
                        width: "100%",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{mov.Title}</Card.Title>
                      <Card.Text>{`${mov.Type} , ${mov.Year}`}</Card.Text>
                    </Card.Body>
                  </Card>
                );
            })}
          </CardGroup>
        </Carousel.Item>
      </Carousel>

      <Image style={{ margin: "7.5% 0 4.5% 0" }} src="./banner2.png" fluid />
    </div>
  );
}

export default BelowHeader;
