import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CVBuilderLogo from '../Assets/Icons/CvBuilderLogo'
import { useNavigate } from 'react-router-dom'
import ReactSpinner from '../CustomComponents/ReactSpinner'

function Header(props: any) {
    const navigate = useNavigate()
    let USER: { user: string | null, message: string | null } = { user: '', message: '' }
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        USER = JSON.parse(localStorage.getItem("user")!);

    }, []);
    const isLoggedIn = () => {
        const user = localStorage.getItem("user");
        return user && JSON.parse(user).user;
    };

    const handleLogout = () => {
        setLoading(true)
        localStorage.removeItem("user");
        setLoading(false)
        navigate('/login');
    };

    return (
        <>
            <ReactSpinner
                loading={loading}
            />

            <div className="flex flex-row  flex-wrap items-center p-10 justify-between  w-full bg-whiteSmoke border-b-[1.4px] border-slate-100">
                <div
                    role='button'
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    <CVBuilderLogo />
                </div>

                <div>
                    {
                        isLoggedIn() ? <button
                            onClick={() => {
                                handleLogout()
                            }}
                            className="px-4 py-2 bg-mutedRed text-white rounded-lg font-semibold text-lg hidden lg:block">
                            Log out
                        </button> :
                            <button
                                onClick={() => {
                                    navigate('/login')
                                }}
                                className="px-4 py-2 bg-mutedRed text-white rounded-lg font-semibold text-lg hidden lg:block">
                                Login
                            </button>
                    }

                </div>
            </div>
        </>
    )
}

Header.propTypes = {}

export default Header
