import React, { ComponentType, ReactNode, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

interface MenuItemProps {
    icon: string;
    label: string;
    onClick: () => void,
    isActive: boolean
}

function SidebarMenuItem(props: MenuItemProps) {
    const { icon, label, isActive } = props;
    return (
        <div className={`${isActive ? 'bg-mutedRed bg-opacity-20' : "bg-white"} `}>
            <div
                role='button'
                className={`flex gap-4 text-textHeading px-4 py-4  pl-8 `}
                onClick={() => {
                    props.onClick()
                }}
            >
                <img src={icon} alt={label} className='w-4 h-4' />
                <h6 className=' font-medium text-base'>{label}</h6>
            </div>
        </div>
    )
}



export default SidebarMenuItem
