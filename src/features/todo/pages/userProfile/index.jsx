import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeList } from '../../../../navigation/routes';
import { getUserInfoMethod } from '../../../auth/services/authThunk';
import './UserProfile.css'


const UserProfilePage = () => {
  const dispatch = useDispatch();
  const {userId, userInfo} = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserInfoMethod(userId));
  }, [dispatch]);

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate(routeList.HOME)
  }

  const handleChangePassword = () => {
    navigate(routeList.RECOVER_PASSWORD)
  }

  return (
    <div className='profile-page'>
      <Card className='user-info'>
          <Card.Title className='card-title'>
            <div className='title'>User Information</div>
            
          </Card.Title>

          <Card.Body>
            <div className='user-info-body'>
              <div className='user-name'>Name: {userInfo.name}</div>
              <div className='user-name'>Email: {userInfo.email}</div>
              <div className='user-name'>Username: {userInfo.username}</div>
              <div className='user-name'>Is Admin: {userInfo.isAdmin ? 'True': 'False'}</div>
              <div className='user-name'>Email Verified: {userInfo.emailVerified ? 'True': 'False'}</div>
              
              
            </div>
          </Card.Body>
          <Card.Footer>
            <Button
                className='logout-btn'
                variant='primary'
                onClick={() => handleGoToHome()}>
                Go to Home
              </Button>
              <Button
                className='logout-btn'
                variant='primary'
                onClick={() => handleGoToHome()}>
                Edit Profile
              </Button>
              <Button
                className='logout-btn'
                variant='primary'
                onClick={() => handleChangePassword()}>
                Change Password
              </Button>
          </Card.Footer>
        </Card>
    </div>
  )
};

export default UserProfilePage;
