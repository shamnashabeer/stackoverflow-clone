import React , { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import moment from 'moment'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'

const UserProfile = () => {

    const { id } = useParams()
    const [Switch, setSwitch] = useState(false)

    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
  return (
    <div className='home-container-1' >
        <LeftSidebar/>
        <div className='home-container-2'>
            <section>
                <div className='user-details-container'>
                    <div className='user-details'>
                        <div className='user-font'>
                        <Avatar backgroundColor="orange" color='white' fontSize={20} px='40px' py='30px'  >
                            {currentProfile?.name.charAt(0).toUpperCase()}

                        </Avatar>
                        </div>
                        <div className='user-name'>
                            <h1>{currentProfile?.name}</h1>
                            <p><FontAwesomeIcon icon={faBirthdayCake}/> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                        </div>
                    </div>
                    {
                        currentUser?.result._id === id && (
                            <button className='edit-profile-btn' type='button' onClick={() => setSwitch(true)} >
                                <FontAwesomeIcon icon={faPen}/> Edit Profile
                            </button>
                        )
                    }
                </div>
                <>
                {
                    Switch ? (
                        <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                    ) : (
                        <ProfileBio currentProfile={currentProfile}/>
                    )
                }
                </>
            </section>
        </div>
    </div>
  )
}

export default UserProfile
