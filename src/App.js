import { useState } from 'react';
import './App.css';

function App() {
  const [fullname, setFullname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    let isValid = true;

    if (!firstName.trim()) {
      setFirstNameError('Please fill out this field.');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    if (!lastName.trim()) {
      setLastNameError('Please fill out this field.');
      isValid = false;
    } else {
      setLastNameError('');
    }

    if (isValid) {
      setFullname(`${firstName} ${lastName}`);
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {firstNameError && (
            <span
              style={{
                color: 'red',
                fontSize: '12px',
                marginLeft: '10px',
              }}
            >
              {firstNameError}
            </span>
          )}
        </div>
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {lastNameError && (
            <span
              style={{
                color: 'red',
                fontSize: '12px',
                marginLeft: '10px',
              }}
            >
              {lastNameError}
            </span>
          )}
        </div>
        <button style={{ marginTop: '15px' }} type="submit">
          Submit
        </button>
      </form>
      {fullname && (
        <p
          style={{
            color: 'black',
            marginTop: '15px',
          }}
        >
          Full Name: {fullname}
        </p>
      )}
    </div>
  );
}

export default App;
