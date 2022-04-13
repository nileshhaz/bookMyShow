import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import axios from "axios";
import { useState, useEffect } from "react";

function Entertainment() {
  const [events, setevents] = useState([]);
  useEffect(() => {
    async function getMovies() {
      try {
        const options = {
          method: "GET",
          url: "https://movie-database-alternative.p.rapidapi.com/",
          params: { s: "x men", r: "json", page: "1" },
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
            setevents(response.data.Search);
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
      style={{ backgroundColor: "rgb(245, 245, 245)", padding: "0 9% 3.5% 9%" }}
    >
      <h2 style={{ fontSize: "1.7rem", fontWeight: "bold" }}>
        The Best Of Entertainment
      </h2>
      <Carousel indicators={false}>
        <Carousel.Item>
          <CardGroup
            style={{
              display: "flex",
              gap: "40px",
              justifyContent: "space-around",
              outline: "none",
            }}
          >
            {events.map((event, index) => {
              if (index < 5)
                return (
                  <Card
                    border="light"
                    style={{
                      backgroundColor: "rgb(245, 245, 245)",
                      height: "225px",
                      width: "200px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={event.Poster}
                      style={{
                        borderRadius: "5%",
                        height: "100%",
                        width: "100%",
                      }}
                    />
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
            {events.map((event, index) => {
              if (index >= 5)
                return (
                  <Card
                    border="light"
                    style={{
                      backgroundColor: "rgb(245, 245, 245)",
                      height: "225px",
                      width: "200px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={event.Poster}
                      style={{
                        borderRadius: "5%",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </Card>
                );
            })}
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Entertainment;
