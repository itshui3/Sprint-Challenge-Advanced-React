import React from 'react';
import Dashboard from './components/Dashboard'
import Axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: [],
      appMounted: false
    }
  }

  componentDidMount() {
    this.setState({appMounted: true})
  }

  componentWillUnmount() {
    this.setState({appMounted: false})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.appMounted !== this.state.appMounted && this.state.appMounted) {
      Axios.get('http://localhost:5000/api/players')
        .then( res => {
          this.setState({ players: res.data })
        })
        .catch( err => {
          console.log(err)
        })
    }
  }

  render (){
    return (
      <div className="App">
        {
          this.state.players && <Dashboard players={this.state.players}/>
        }
        
      </div>
    );

  }

}

export default App;
