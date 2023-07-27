import { useState } from 'react';
import { User } from '../../store/types';
import styles from './UserCreationPage.module.scss';

const UserCreationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const user: User = {
    email: '',
    username: username,
    password: password,
    name: {
      firstname: '',
      lastname: '',
    },
    address: {
      city: '',
      street: '',
      number: null,
      zipcode: '',
      geolocation: {
        lat: '',
        long: '',
      },
    },
    phone: '',
  };

  const handleChange = (arg: User) => {
    if (username !== '' && password !== '') {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <p>Username:</p>
        <input type="text" className={styles.input} value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <p>Password:</p>
        <input type="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className={styles.button} onClick={() => handleChange(user)}>Create</button>
      {error && (<p className={styles.error}>Fill in all the fields!</p>)}
    </div>
  )
}

export default UserCreationPage;