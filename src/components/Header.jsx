import { Component } from "react";
import { Container, Dropdown } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Container fluid>
        <div className="header-main">
          <div className="header-button">
            <p className="header-text">TV Shows</p>
            <Dropdown>
              <Dropdown.Toggle className="genres-button">
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Fantasy</Dropdown.Item>
                <Dropdown.Item href="#">Drama</Dropdown.Item>
                <Dropdown.Item href="#">Sci-Fi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Container>
    );
  }
}

export default Header;
