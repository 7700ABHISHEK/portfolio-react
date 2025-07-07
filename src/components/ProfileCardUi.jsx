import React from 'react'
import ProfileCard from '../bitsComponent/ProfileCard'

const ProfileCardUi = () => {

    const leetCode = () => {
        window.open("https://www.hackerrank.com/profile/7700_Abhishekdu1", "_blank");
    }

    return (
        <div className="w-full lg:w-6/12 flex justify-center ">
            <div className="profile-card max-w-sm w-full">
                <ProfileCard
                    name="Abhishek Dubey"
                    title="Full Stack Web Developer"
                    handle="javicodes"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="/path/to/avatar.jpg"
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={leetCode}
                />
            </div>
        </div>
    )
}

export default ProfileCardUi