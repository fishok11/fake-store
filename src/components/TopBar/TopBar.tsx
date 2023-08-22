import { FC } from 'react';
import styles from './TopBar.module.scss'
import { showLogInPage } from '../../store/fakeStoreSlice';
import { useAppDispatch } from '../../store/hooks';
import { useCookies } from 'react-cookie';

const TopBar: FC = () => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies(['user']);

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <p>Fake store</p>
        <div className={styles.actionContainer}>
          {cookies.user !== undefined && (
            <>
              <button onClick={() => (console.log(cookies.user))}>Profile</button>
              <button>Cart</button>
            </>
          )}
          {cookies.user === undefined && (<button onClick={() => (dispatch(showLogInPage()))}>Log in</button>)}
        </div>
      </div>
    </div>
  )
}

export default TopBar;