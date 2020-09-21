import React from "react";


class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  };
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <section>
          <img src={location.state.poster} />
          <span>{location.state.title}</span>
        </section>
      );
    } else {
      return null;
    }

  }

}

export default Detail;