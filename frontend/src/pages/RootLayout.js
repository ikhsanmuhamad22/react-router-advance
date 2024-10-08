import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

export default function RootLayout() {
  // const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>loading...</p>}  */}
        {/* this is optional if you want to add loader when fetch data */}
        <Outlet />
      </main>
    </>
  );
}
