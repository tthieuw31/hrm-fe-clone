/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spin } from 'antd';
import AuthApi from 'apis/AuthApi';
import { IUser } from 'interface/user.interface';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useMutation } from 'react-query';

type UserContextValues = {
  user?: IUser;
  signOut: () => void;
};

const UserContext = createContext<UserContextValues>(undefined as never);

const useUser = (): UserContextValues => useContext(UserContext);

const UserProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [user, setUser] = useState<IUser>();

  const handleRemoveToken = () => {
    localStorage.removeItem('token');
  };

  // const { mutate: getUser, isLoading } = useMutation(AuthApi.getMe, {
  //   onSuccess: (response) => {
  //     setUser(response);
  //   },
  //   onError: (error) => {
  //     console.log('User remove token 1');
  //   },
  // });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    //getUser();
  }, []);

  const signOut = () => {
    console.log('User remove token 2');
    handleRemoveToken();
    //window.location.replace(process.env.REACT_APP_LOGOUT as string);
  };

  return (
    <UserContext.Provider value={{ user, signOut }}>
      {/*<Spin size="large">{children}</Spin>*/}
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
