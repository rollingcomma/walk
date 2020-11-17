import {useContext} from 'react'
import {UserContext, DispatchUserContext} from '../context/UserStateProvider';

export const useUserState = () => [
  useContext(UserContext),
  useContext(DispatchUserContext)
];