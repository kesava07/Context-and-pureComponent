import React from 'react';
import './App.css';
import ComponetA from './Containers/ComponetA';
import { UserProvider } from './Containers/UserContext';


class App extends React.Component {
  state = {
    title: "Welcome to context API",
    message: "Hii"
  }
  toggleButton = () => {
    alert("Welcome")
  }
  render() {
    const { title, message } = this.state;
    return (
      <UserProvider value={{ title, message, toggle: this.toggleButton }}>

        <ComponetA />

      </UserProvider>
    )
  }
}


export default App;
