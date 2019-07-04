import React from "react";
import { Button } from "semantic-ui-react";
class ScrollToTop extends React.Component {
  state = {
    scrollY: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll = () => {
    this.setState({ scrollY: window.scrollY });
  };
  handleClick = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { scrollY } = this.state;
    if (scrollY < 300) {
      return <></>;
    } else {
      return (
        <div className="scrolltotop-wrapper animated fadeIn">
          <Button
            circular
            icon="arrow up"
            color="teal"
            size="huge"
            onClick={this.handleClick}
          />
        </div>
      );
    }
  }
}

export default ScrollToTop;
