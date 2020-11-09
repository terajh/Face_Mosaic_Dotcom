import React from 'react';
import Header from './header/Header';
import Section from './section/Section';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => this.setState({title: data.title}));
  }

  render() {
    return(
      <div className="all">
        <Header></Header>
        <Section></Section>
      </div>
    );
  }
}

export default App;
