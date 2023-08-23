import { useState, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useCookies } from 'react-cookie';
import { User } from '../../store/types';
import { hideLogInPage } from '../../store/fakeStoreSlice';
import { logIn, userState } from '../../store/userSlice';
import styles from './LogIn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const LogIn = () => {
  const dispatch = useAppDispatch();
  const stateUser = useAppSelector(userState);
  const [user, setUser] = useState();
  const [username, setUsername] = useState('johnd');
  const [password, setPassword] = useState('m38rmF$');
  const [error, setError] = useState(false);
  const [cookies, setCookie] = useCookies(['user']);
  const cookiesLifetime = useMemo(() =>  new Date('3000-12-17T03:24:00'), []);

  const handleChange = (user: User | undefined) => {
    if (username !== '' && password !== '' && user !== undefined) {
      setError(false);
      dispatch(logIn(user));
      dispatch(hideLogInPage());
      if (stateUser.token === '') {
        setCookie('user', user, { expires: cookiesLifetime })
      }
    } else {
      setError(true);
    }
  }
  
  useEffect(() => {
    const getASingleUser = async() => {
      const response = await fetch('https://fakestoreapi.com/users/1');
      const data = await response.json();
      setUser(data);
    }
    getASingleUser();
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.close} onClick={() => dispatch(hideLogInPage())}><FontAwesomeIcon icon={faXmark} /></div>
        <p className={styles.title}>Log in</p>
        <input type="text" className={styles.input} value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className={styles.button} onClick={() => handleChange(user)}>OK</button>
        {error && (<p className={styles.error}>Fill in all the fields!</p>)}
      </div>
    </div>
  )
}

export default LogIn;