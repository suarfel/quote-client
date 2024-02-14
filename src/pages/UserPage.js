
import {Fragment} from 'react';
import UserMiddle from '../components/user/UserMiddle';
import UserLeft from '../components/user/UserLeft';
import UserMain from '../components/user/UserMain';

const UserPage = () => {
  return (
    <Fragment>
       {/* <UserMiddle />
       <UserLeft /> */}
       <UserMain />
    </Fragment>
  );
};

export default UserPage;
