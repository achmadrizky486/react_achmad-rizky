import React from 'react';
import Contact_Us from './Contact_Us';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Home />
        {/* <Contact_Us /> */}
      </>
    )
  }
}

export default App;