import React from 'react'
import PropTypes from 'prop-types'
import CVBuilderLogo from '../Assets/Icons/CvBuilderLogo'
import { useNavigate } from 'react-router-dom'

function Header(props: any) {
    const navigate = useNavigate()
    return (
        <div className="flex flex-row  flex-wrap items-center p-10 justify-between  w-full bg-whiteSmoke border-b-[1.4px] border-slate-100">
            <div>
                <CVBuilderLogo />
            </div>
            
            <div>
                <button
                    onClick={() => {
                        navigate('/login')
                    }}
                    className="px-4 py-2 bg-mutedRed text-white rounded-lg font-semibold text-lg hidden lg:block">
                    Get Statred
                </button>
            </div>
        </div>
    )
}

Header.propTypes = {}

export default Header
