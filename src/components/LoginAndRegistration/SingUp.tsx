import { FC } from 'react';
import { useState, useMemo } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { useCookies } from 'react-cookie';
import { UserSignUp } from '../../store/types';
import { hideSignUpPage } from '../../store/fakeStoreSlice';
import { signUp } from '../../store/userSlice';
import styles from './LoginAndRegistration.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const SignUp: FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [cookies, setCookie] = useCookies(['user']);
  const cookiesLifetime = useMemo(() =>  new Date('3000-12-17T03:24:00'), []);
  const user: UserSignUp = {
    email: email,
    username: username,
    password: password,
  }

  const handleChange = async (user: UserSignUp | undefined) => {
    if (email !== '' && username !== '' && password !== '' && user !== undefined) {
      setError(false);
      const resultAction = await dispatch(signUp(user));
      const userData = resultAction.payload;
      if (resultAction.type === 'user/signUp/fulfilled') {
        dispatch(hideSignUpPage());
        if (cookies.user === undefined) {
          setCookie('user', userData, { expires: cookiesLifetime })
        }
      }
    } else {
      setError(true);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.close} onClick={() => dispatch(hideSignUpPage())}><FontAwesomeIcon icon={faXmark} /></div>
        <p className={styles.title}>Sing up</p>
        <input type="text" placeholder='Email' name='email' className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='Username' name='username' className={styles.input} value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='Password' name='password' className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className={styles.button} onClick={() => handleChange(user)}>OK</button>
        {error && (<p className={styles.error}>Fill in all the fields!</p>)}
      </div>
    </div>
  )
}

export default SignUp;