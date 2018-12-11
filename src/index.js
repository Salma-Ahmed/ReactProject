import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import FancyCard from "./cards/fancy";
import Header from "./header";
import Title from "./title";
import uuid from "uuid";

import "../node_modules/font-awesome/css/font-awesome.css";
import "./styles/grid.css";
import "./styles/header.css";
import "./styles/style.css";
import "./styles/discover.css";

// var cards = [];
// var movies = [
//   { rate: 5.3, title: "Jurrasic world : fallen kingdom" },
//   { rate: 2.1, title: "Jurrasic world : fallen kingdom" },
//   { rate: 6.9, title: "Jurrasic world : fallen kingdom" },
//   { rate: 2.8, title: "Jurrasic world : fallen kingdom" },
//   { rate: 9.6, title: "Jurrasic world : fallen kingdom" },
//   { rate: 4.1, title: "Jurrasic world : fallen kingdom" }
// ];
// for (let i = 0; i < 6; i++) {
//   cards.push(
//     <FancyCard key={uuid()} rate={movies[i].rate} title={movies[i].title} />
//   );
// }

// const App = () => (
//   <>
//     {/* <Counter rail={40} path={160} />
//     <Rating rate={7.3} />
//     <Button text="Save Movie" /> */}
//     {/* <SimpleCard title="Jurrasic world : fallen kingdom" rate={9.1} /> */}
//     {/* <FancyCard rate={5.9} title="Jurrasic world : fallen kingdom" /> */}
//   </>
// );
class App extends React.Component {
  state = {
    movies: [],
    isLoaded: false
  };
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=c3bd0d2f708d96793ef25c442a9e6863&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            movies: result.results
          });
          console.log(result);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    return (
      <>
        <Header />
        <Title title="Discover" />
        <div className="container">
          <div className="cards">
            {this.state.movies.map(movie => {
              return (
                <FancyCard
                  key={uuid()}
                  rate={movie.vote_average}
                  title={movie.title}
                  imgPath={`https://image.tmdb.org/t/p/w780${
                    movie.poster_path
                  }`}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
