import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from '../Components/Header'
import Sideabar from '../Components/Sidebar'
import PersonalInfo from '../Components/Builder/PersonalInfo';
import { builderComponents } from '../Utils/SiteConfig';
import Education from '../Components/Builder/Education';
import Experience from '../Components/Builder/Experience';
import TechSkills from '../Components/Builder/TechSkills';
import ContactInfo from '../Components/Builder/ContactInfo';
import Certifaction from '../Components/Builder/Certifaction';
type ComponentMap = {
    [key: string]: JSX.Element;
};
function Builder(props: any) {
    const [activeComponent, setActiveComponent] = useState<string>(builderComponents.personalInfo);
    const handleMenuClick = (component: string) => {
        setActiveComponent(component);
    };

    const [formData, setFormData] = useState<any>({
        fullName: '',
        email: '',
        profession: '',
        address: '',
        city: '',
        state: '',
        company:'',
        employer:'',
        role:'',
        location:'',
        start:'',
        finish:'',
        currentJob:'',

    });
    const updateFormData = (newData: Partial<FormData>) => {
        console.log(newData,"newData");
        
        setFormData((prevData:any) => ({ ...prevData, ...newData }));
    };
    const componentMap: ComponentMap = {
        [builderComponents.personalInfo]: <PersonalInfo onMenuClick={handleMenuClick} formData={formData} updateFormData={updateFormData}/>,
        [builderComponents.education]: <Education onMenuClick={handleMenuClick} formData={formData} updateFormData={updateFormData}/>,
        [builderComponents.experience]: <Experience onMenuClick={handleMenuClick} formData={formData} updateFormData={updateFormData} />,
        [builderComponents.contact]: <ContactInfo onMenuClick={handleMenuClick} formData={formData} updateFormData={updateFormData} />,
        [builderComponents.certification]: <Certifaction onMenuClick={handleMenuClick} formData={formData} updateFormData={updateFormData}/>,
        [builderComponents.skills]: <TechSkills onMenuClick={handleMenuClick} formData={formData} updateFormData={updateFormData}/>,
    };


    return (
        <>
            <Header />
            <div className='flex bg-whiteSmoke'>
                <Sideabar
                    activeComponent={activeComponent}
                    setActiveComponent={setActiveComponent}
                    onMenuClick={handleMenuClick}
                />
                <div className='flex '>
                    {
                        componentMap[activeComponent]
                    }

                </div>
            </div>
        </>
    )
}

Builder.propTypes = {}

export default Builder
