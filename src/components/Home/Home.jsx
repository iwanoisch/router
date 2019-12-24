import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Carlos'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({name: 'Ivan'})
        }, 1000);
    }

    render() {
    return (
      <div className="Home">
            <h1>Welcome to Codejobs</h1>
            <p>My name is {this.state.name}</p>
            <p>
              In this recipe you will learn how to add styles to 
              components. If you want to learn more you can visit 
              our Youtube Channel at 
              <a href="http://youtube.com/codejobs">Codejobs</a>.
            </p>
            <button style={{backgroundColor: 'gray',border: '1px solid black', marginBottom: '20px'}}>
              Click me!
            </button>
      </div>
    )
  }
}

export default Home;
