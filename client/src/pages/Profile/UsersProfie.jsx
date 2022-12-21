import React, { useState } from 'react';
import LeftSidebar from '../../components/Navbar/Sidebar/LeftSidebar';
import Avatar from '../../components/Navbar/Avatar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CakeIcon from '@mui/icons-material/Cake';
import moment from 'moment';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EditProfileForm from './EditProfileForm';
import ProfileBio from './ProfileBio';
import './UserProfile.css'


const UsersProfie = () => {

    const { id } = useParams();
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)

    const [Switch, setSwitch] = useState(false);

    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <section>
                    <div className='user-details-container'>
                        <div className='user-details'>
                            <Avatar Children={currentProfile?.name.charAt(0).toUpperCase()} backgroundColor='purple' color='white' fontSize='50px' px="30px" py='25px' />
                            <div className='user-name'>
                                <h1>{currentProfile?.name}</h1>
                                <p><CakeIcon /> member since {moment(currentProfile?.joinedOn).fromNow()}</p>
                            </div>
                        </div>
                        {
                            currentUser?.result._id === id && (
                                <button onClick={() => setSwitch(true)} className="edit-profile-btn" >
                                    <ModeEditIcon fontSize='small' />Edit Profile
                                </button>
                            )
                        }
                    </div>
                    <>
                        {
                            Switch ? (
                                <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
                            ) : (
                                    <ProfileBio currentProfile={currentProfile} />
                                )
                        }
                    </>
                </section>
            </div >

        </div >
    )
}

export default UsersProfie