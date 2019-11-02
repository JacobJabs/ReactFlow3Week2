// import libraries
import React from "react";

// Create Component
/*
class ClockComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            hello: "sss",
            data: {}
        }
    }

    componentDidMount() {
        // Calling something from backend <-
        console.log("Hello from componentDidMount!")
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(resJson => this.setState({ data: resJson }))
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("This was my former state: " + JSON.stringify(prevState))
        console.log("This is our new state: " + JSON.stringify(this.state))
        console.log("Hello from ComponentDidUpdate!")
    }

    componentWillUnmount() {

        console.log("I am unmounting now. Please remove anything that could cause memory leak!")
    }

    render() {
        return <div><input type="text" value={this.state.hello} onChange={(e) => this.setState({hello: e.target.value})}/>Hello</div>
    }
}
*/

const ClockComponent = () => {
  const [date, setDate] = React.useState(new Date());

  setTimeout(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div>
      <h1>
        Clock is:{" "}
        {date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}
      </h1>
    </div>
  );
};

// export Component

export default ClockComponent;
