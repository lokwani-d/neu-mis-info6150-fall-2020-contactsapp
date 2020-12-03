import './App.scss';
import React from 'react';
import ContactsContainer from './contacts-container/ContactsContainer';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <React.Fragment>
      <ContactsContainer>
      </ContactsContainer>
      </React.Fragment>
    );
  }
}

export default App;
