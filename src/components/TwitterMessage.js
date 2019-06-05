import React from "react";

class TwitterMessage extends React.Component {
  state = {
      charCount: this.props.maxChars,
      message: ''
    }

  handleChange = (e) => {
    let currentCount = this.state.charCount
    this.setState({
      charCount: currentCount-=1,
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
        onChange={this.handleChange} value={this.state.message}/>
        <h6>Characters Left: {this.state.charCount}</h6>
      </div>
    );
  }
}

export default TwitterMessage;
