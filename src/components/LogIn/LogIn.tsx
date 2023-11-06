import { FC } from 'react';
import { useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useCookies } from 'react-cookie';
import { UserLogIn } from '../../store/types';
import { hideLogInPage } from '../../store/fakeStoreSlice';
import { logIn, userState } from '../../store/userSlice';
import styles from './LogIn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const LogIn: FC = () => {
  const dispatch = useAppDispatch();
  const stateUser = useAppSelector(userState);
  const [error, setError] = useState(false);
  const [cookies, setCookie] = useCookies(['user']);
  const cookiesLifetime = useMemo(() =>  new Date('3000-12-17T03:24:00'), []);
  const [username, setUsername] = useState(cookies.user?.username);
  const [password, setPassword] = useState(cookies.user?.password);
  const user: UserLogIn = {
    username: username,
    password: password,
  }

  const handleChange = (user: UserLogIn | undefined) => {
    if (username !== '' && password !== '' && user !== undefined) {
      setError(false);
      dispatch(logIn(user));
      dispatch(hideLogInPage());
      if (cookies.user === undefined) {
        setCookie('user', user, { expires: cookiesLifetime })
      }
    } else {
      setError(true);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.close} onClick={() => dispatch(hideLogInPage())}><FontAwesomeIcon icon={faXmark} /></div>
        <p className={styles.title}>Log in</p>
        <input type="text" placeholder='Username' className={styles.input} value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='Password' className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className={styles.button} onClick={() => handleChange(user)}>OK</button>
        {error && (<p className={styles.error}>Fill in all the fields!</p>)}
      </div>
    </div>
  )
}

export default LogIn;