import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    // console.log(event.target.value)
    this.setState({
      value: event.target.value
    })
  }

  render() {
    // console.log('TwitterMessage props', this.props)
    // console.log('TwitterMessage state', this.state)

    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>remaining character:
        {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
