import React, { Component } from "react";
import "../css/Subscribe.css";

class Subscribe extends Component {
  state = {
    email: ""
  };

  handleChange = e => {
    this.setState({ email: e.target.value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.email) {
      fetch(`/api/memberAdd?email=${this.state.email}`)
        .then()
        .catch(err => {
          console.log("error", err);
        });
      this.props.toggleLogoSpeed();
      setTimeout(this.props.toggleLogoSpeed, 2000);
      this.setState({ email: "" });
    }

  };

  render() {
    const { placeholder, buttonText } = this.props;

    return (
      <form className="subscribe" onSubmit={e => this.handleSubmit(e)}>
        <input
          className="subscribe-email"
          name="email"
          type="email"
          placeholder={placeholder}
          onChange={this.handleChange}
          value={this.state.email}
        />
        <button className="subscribe-button" type="submit" >
          {buttonText}
        </button>
      </form>
    );
  }
}

export default Subscribe;
