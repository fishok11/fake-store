import { FC, useEffect } from 'react';
import { useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useCookies } from 'react-cookie';
import { hideLogInPage } from '../../store/fakeStoreSlice';
import { usersForLogIn, userState } from '../../store/userSlice';
import styles from './LogIn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

const LogIn: FC = () => {
  const dispatch = useAppDispatch();
  const stateUser = useAppSelector(userState);
  const [error, setError] = useState(false);
  const [cookies, setCookie] = useCookies(['user']);
  const cookiesLifetime = useMemo(() =>  new Date('3000-12-17T03:24:00'), []);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(usersForLogIn());
  }, [dispatch])

  const handleChange = () => {
    const user = stateUser.users.find((user) => user.username === username && user.password === password);
    if (user) {
      setError(false);
      dispatch(hideLogInPage());
      if (cookies.user === undefined) {
        setCookie('user', user, { expires: cookiesLifetime })
      }
      toast.success('Success!');
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.close} onClick={() => dispatch(hideLogInPage())}><FontAwesomeIcon icon={faXmark} /></div>
        <p className={styles.title}>Log in</p>
        <input type="text" placeholder='Username' name='username' className={styles.input} value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='Password' name='password' className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className={styles.button} onClick={() => handleChange()}>OK</button>
        {error && (<p className={styles.error}>Fill in all the fields!</p>)}
      </div>
    </div>
  )
}

export default LogIn;