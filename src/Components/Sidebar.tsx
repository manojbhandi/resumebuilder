import React, { useState } from 'react'
import PropTypes from 'prop-types'
import hamBurgerMenu from "../Assets/Icons/hamBurger.png"
import profile from "../Assets/Icons/profile.png"
import experience from "../Assets/Icons/xperience.png"
import techSkills from "../Assets/Icons/techSkills.png"
import educationIcon from "../Assets/Icons/education.png"
import certification from "../Assets/Icons/certification.png"
import contactIcon from "../Assets/Icons/contactInfo.png"
import SidebarMenuItem from './SidebarMenuItem'
import PersonalInfo from './Builder/PersonalInfo'
import { builderComponents } from '../Utils/SiteConfig'
interface SidebarProps {
  onMenuClick: (component: string) => void,
  activeComponent: string,
  setActiveComponent: Function
}


function Sideabar(props: SidebarProps) {
  const { onMenuClick, activeComponent } = props
  // const [activeItem, setActiveItem] = useState<string>("Personal Information")

  const sidebarMenuItemsArr =
    [
      {
        icon: (
          profile
        ),
        label: "Personal Information",
        component: builderComponents.personalInfo,
      },

      {
        icon: (
          experience
        ),
        label: "Experience",
        component: builderComponents.experience,
      },

      {
        icon: (techSkills),
        label: "Technical Skills",
        component: builderComponents.skills,
      },
      {
        icon: (educationIcon
        ),
        label: "Education",
        component: builderComponents.education,
      },
      {
        icon: (contactIcon),
        label: "Contact Information",
        component: builderComponents.contact,
      },
      {
        icon: certification

        ,
        label: "Certifaction",
        component: builderComponents.certification,
      },
    ]



  return (
    <aside className='bg-white h-screen w-[19rem] border-r-[1.4px] border-slate-100'>
      <div>

        <img src={hamBurgerMenu} className='ml-auto my-2 p-3 cursor-pointer' alt="menu" />
        <div className='flex flex-col gap-4 '>
          <div className=''>
            {
              sidebarMenuItemsArr.map((item, index) => (
                <SidebarMenuItem
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  isActive={item.label === activeComponent}
                  onClick={() => {
                    onMenuClick(item.component)
                    // setActiveItem(item.label)
                  }}
                />
              ))
            }
          </div>

        </div>
      </div>
    </aside>
  )
}

Sideabar.propTypes = {}

export default Sideabar
