import React, { useEffect } from 'react'
import Header from '../Components/Header'

function Congratulations() {
    const [userData, setUserData] = React.useState<any>("");
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user")!);
        setUserData(user);
    }, [])
    return (
        <>
            <div className='pb-5 bg-whiteSmoke h-screen'>
                <Header />
                <div className='flex items-center justify-center p-20 flex-col gap-5'>
                    <h6 className='text-textHeading font-semibold text-5xl'>Hello {userData?.user}! 👋</h6>
                    <span className='flex items-center flex-col'>
                        <p className='text-textSecondary font-normal text-2xl'>This is Demo only!</p>
                        <p className='text-textSecondary font-normal text-2xl'>The Download Feature is an Upcomming Feature</p>
                    </span>
                    <button className='bg-mutedRed rounded-lg py-2 px-4'>Comming Soon</button>
                </div>
            </div>
        </>
    )
}

export default Congratulations