import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import About from "./layouts/About";
import Footer from "./layouts/Footer";

class App extends React.Component {
  state = {
    apps: [
      {
        name: "Matching Game",
        description: `Matching Game enables you to showcase how good your memory is, by matching each card with their corresponding partner. While making as little moves as possible.<br />
          Matching Game was developed with:<br />
          HTML5,<br />
          CSS3, and<br />
          Javascript ( using MVC model ). <br />`,
        img: "apps/MatchingGame/img/MatchingGame.PNG",
        url: "apps/MatchingGame/index.html"
      },
      {
        name: "Foody",
        description: `Foody app was designed to make our life more enjoyable, by giving us the power to browse our favorite dish and get it’s recipes with preparation direction.<br />
        Foody was programmed with:<br />
        HTML5,<br />
        CSS3,<br />
        Javascript ( using MVC model ), and<br />
        Webpack.<br />`,
        img: "apps/Foody/img/Foody.PNG",
        url: "apps/Foody/index.html"
      },
      {
        name: "Picture Gallery",
        description: `The power of beauty is at your finger tips. With Picture Gallery, you can search and view any thing you desire.<br />
        Picture Gallery was developed with:<br />
        HTML5,<br />
        CSS3,<br />
        Semantic Ui, and<br />
        React.<br />
        `,
        img: "apps/PicsGallery/img/PicsGallery.PNG",
        url: "apps/PicsGallery/index.html"
      },
      {
        name: "B Jack",
        description: `This is a simplify back-jack game. Designed with the bare minimum rules of black-jack.<br />
        The game was built with:<br />
        HTML5,<br />
        CSS3, and<br />
        JAVASCRIPT.<br />
        `,
        img: "apps/Bjack/img/back_cards-07.png",
        url: "apps/Bjack/index.html"
      },
      {
        name: "Budget Calculator ",
        description: `Do you find it difficult to keep track of you income and expenses? With Budget Calculator your nightmare will come to an end.<br />
        Budget Calculator was programmed with:<br />
        HTML5,<br />
        CSS, and<br />
        Javascript ( using MVC model ).<br />`,
        img: "apps/BudgetCal/img/budget.PNG",
        url: "apps/BudgetCal/index.html"
      },
      {
        name: "Color Tester",
        description: `Are you a designer? Always trying out new shade of color. Colo Tester gives you the power to input your hexadecimal, rgb, or color-name and see the color shade. <br />
        This App was built with:<br />
        HTML5,<br />
        CSS3, and <br />
        Javascript.<br />`,
        img: "apps/ColorTester/img/ColorTester.PNG",
        url: "apps/ColorTester/index.html"
      },
      {
        name: "L Shape Game",
        description: `A simple but interesting game, make an L shape with one kind of the card to win.<br />
          This game was developed with:<br />
          HTML5,<br />
          CSS ( css grid ), and<br />
          Javascript. <br />
          `,
        img: "apps/Lshape/img/Lshape.PNG",
        url: "apps/Lshape/index.html"
      },
      {
        name: "Pig Game",
        description: `Pig game is a simple adaptive game, and it is played by rolling two dice. If the two dice display one, the game moves to the next player. The first player to reach final score wins. By default the final score is 100, but this can be change by entering the desired number before the game begins.<br />
        Pig game was developed with:<br />
        HTML5,<br />
        CSS3, and<br />
        javascript.<br />`,
        img: "apps/PigGame/img/PigGame.PNG",
        url: "apps/PigGame/index.html"
      },
      {
        name: "Video Tube",
        description: `You-tube redefined, browse and watch your favorite videos on Video-Tube.<br />
        Video Tube was developed with:<br />
        HTML5,<br />
        CSS3,<br />
        Semantic Ui, and<br />
        React.<br />
        `,
        img: "apps/VideoTube/img/VideoTube.PNG",
        url: "apps/VideoTube/index.html"
      }
    ]
  };

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Navbar />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Header apps={this.state.apps} />
                <Main apps={this.state.apps} />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
          <Footer />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
