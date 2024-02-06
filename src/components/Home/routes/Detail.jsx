import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location);
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    return <div>dfgsdfgsdgf</div>;
  }
}

export default Detail;
