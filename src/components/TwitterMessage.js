import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = e => {
    this.setState({ message: e.target.value })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange} />

        <div>
          Remaining characters: {this.props.maxChars - this.state.message.length}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
