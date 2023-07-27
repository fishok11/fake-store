import { useState } from 'react';
import { User } from '../../store/types';
// import { addNewUser } from '../../store/userSlice';
import styles from './UserCreationPage.module.scss';

const UserCreationPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const user: User = {
    email: email,
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
    if (email !== '' && username !== '' && password !== '') {
      // addNewUser(arg);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <p>Email:</p>
        <input type="text" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <p>Username:</p>
        <input type="text" className={styles.input} value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <p>Password:</p>
        <input type="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {/* <p>firstname</p>
      <input type="text" className={styles.input} />
      <p>lastname</p>
      <input type="text" className={styles.input} />
      <p>city</p>
      <input type="text" className={styles.input} />
      <p>street</p>
      <input type="text" className={styles.input} />
      <p>number</p>
      <input type="text" className={styles.input} />
      <p>zipcode</p>
      <input type="text" className={styles.input} />
      <p>lat</p>
      <input type="text" className={styles.input} />
      <p>long</p>
      <input type="text" className={styles.input} />
      <p>phone</p>
      <input type="text" className={styles.input} /> */}
      <button className={styles.button} onClick={() => handleChange(user)}>Create</button>
      {error && (<p className={styles.error}>Fill in all the fields!</p>)}
    </div>
  )
}

export default UserCreationPage;