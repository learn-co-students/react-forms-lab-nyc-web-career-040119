import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charsLeft: this.props.maxChars
    };
  }

  handleChange = (event) => {
    if (event.target.value.length <= this.props.maxChars){
      this.setState({
        message: event.target.value,
        charsLeft: this.props.maxChars - event.target.value.length
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
      <p>Characters left: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
