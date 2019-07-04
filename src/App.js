import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";
import "./App.css";
import { Navbar, ScrollToTop, Sidebar } from "./components/layouts";
import { Contact, Home, Portfolio, Resume } from "./pages";
const App = () => {
  return (
    <Container style={{ marginTop: 50 }}>
      <Grid>
        <Grid.Row>
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column computer={11} tablet={11} mobile={16}>
            <Router>
              <div>
                <Navbar />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/resume" exact component={Resume} />
                  <Route path="/portfolio" exact component={Portfolio} />
                  <Route path="/contact" exact component={Contact} />
                </Switch>
              </div>
            </Router>
          </Grid.Column>
        </Grid.Row>
        <ScrollToTop />
      </Grid>
    </Container>
  );
};

export default App;
