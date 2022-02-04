import React from 'react';
import logo from './logo.svg';
import './App.css';
import LinkComp from './components/LinkComp';
import ButtonComp from './components/ButtonComp';
import UserList from './components/UserList';
import {Status} from './models/User'

interface Props {
  appName: string
}
function App({appName}: Props) {

  const handleBtnClick = (name: string) => {
    alert(`Button name: ${name} is clicked`)
  }

  const users = [
    {
      name: 'Mansur',
      age: '33',
      emails: ['mansurmabo@gmail.com, asdas@asd.com'],
      status: Status.confirmed
    },
    {
      name: 'Petya',
      age: 100,
      status: Status.unconfirmed
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test
        </p>
        <LinkComp name={'Google'} url={'https://google.com'} isVisible/>
        <ButtonComp name={'Super Button'} onClick={handleBtnClick}/>
        <UserList users={users}/>
      </header>
    </div>
  );
}

export default App;
