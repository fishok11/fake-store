import { FC } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { useCookies } from 'react-cookie';

const UserProfile: FC = () => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies(['user']);

  return (
    <div>
      <p>{cookies.user.id}</p>
      <p>{cookies.user.email}</p>
      <p>{cookies.user.username}</p>
      <p>{cookies.user.password}</p>
    </div>
  )
}

export default UserProfile;