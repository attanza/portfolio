import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";
class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    const to = name === "home" ? "/" : `/${name}`;
    this.props.history.push(to);
  };

  componentDidMount() {
    this.setInitialActiveItem();
  }

  setInitialActiveItem = () => {
    const { pathname } = this.props.location;
    if (pathname === "/") {
      this.setState({ activeItem: "home" });
    } else {
      this.setState({ activeItem: pathname.split("/")[1] });
    }
  };

  render() {
    const { activeItem } = this.state;
    const menuItems = [
      { key: "home", icon: "home", text: "Home", value: "home" },
      { key: "resume", icon: "paperclip", text: "Resume", value: "resume" },
      { key: "portfolio", icon: "play", text: "Portfolio", value: "portfolio" },
      { key: "contact", icon: "mail", text: "Contact", value: "contact" }
    ];
    return (
      <div className="br">
        <Menu pointing color="teal" className="mobile hidden">
          {menuItems.map((m, index) => (
            <Menu.Item
              className="button icon"
              key={index}
              name={m.key}
              active={activeItem === m.key}
              onClick={this.handleItemClick}
            />
          ))}
        </Menu>
        <Menu className="mobile only">
          <Dropdown item icon="bars">
            <Dropdown.Menu>
              {menuItems.map((m, index) => (
                <Dropdown.Item
                  className="button icon"
                  key={index}
                  text={m.text}
                  name={m.key}
                  icon={m.icon}
                  active={activeItem === m.key}
                  onClick={this.handleItemClick}
                />
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Navbar);
