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
import * as Yup from 'yup';
import { link } from 'fs';
import CvInProgress from '../Components/CvInProgress';
import { FormData } from '../Utils/types';
type ComponentMap = {
    [key: string]: JSX.Element;
};


function Builder(props: any) {
    const [activeComponent, setActiveComponent] = useState<string>(builderComponents.personalInfo);
    const handleMenuClick = (component: string) => {
        setActiveComponent(component);
    };

    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        profession: '',
        address: '',
        city: '',
        state: '',
        company: '',
        employer: '',
        role: '',
        location: '',
        start: '',
        finish: '',
        currentJob: '',
        skill1: '',
        skill2: '',
        skill3: '',
        skill4: '',
        skill5: '',
        schoolName: '',
        schoolLocation: '',
        degree: '',
        fieldOfStudy: '',
        graduationMonth: '',
        graduationYear: '',
        graduationStartYear: '',
        graduationCompleteYear: '',
        phoneNumber: '',
        linkedInUrl: '',
        githubUrl: '',
        twitterUrl: "",
        portfolioUrl: "",
        certification1: '',
        certification2: '',
        certification3: '',


    });
    const updateFormData = (newData: Partial<FormData>) => {
        console.log(newData, "newData");

        setFormData((prevData: any) => ({ ...prevData, ...newData }));
    };
    const componentMap: ComponentMap = {
        [builderComponents.personalInfo]: <PersonalInfo onMenuClick={handleMenuClick} formData={formData} updateFormData={updateFormData} />,
        [builderComponents.education]: <Education onMenuClick={handleMenuClick} formData={formData} updateFormData={updateFormData} />,
        [builderComponents.experience]: <Experience onMenuClick={handleMenuClick} formData={formData} updateFormData={updateFormData} />,
        [builderComponents.contact]: <ContactInfo onMenuClick={handleMenuClick} formData={formData} updateFormData={updateFormData} />,
        [builderComponents.certification]: <Certifaction onMenuClick={handleMenuClick} formData={formData} updateFormData={updateFormData} />,
        [builderComponents.skills]: <TechSkills onMenuClick={handleMenuClick} formData={formData} updateFormData={updateFormData} />,
    };


    return (

        <div className='pb-5 bg-whiteSmoke'>
            <Header />

            <div className='flex '>
                <Sideabar
                    activeComponent={activeComponent}
                    setActiveComponent={setActiveComponent}
                    onMenuClick={handleMenuClick}
                />
                <div className='flex pr-3 flex-wrap lg:flex-nowrap'>
                    {
                        componentMap[activeComponent]
                    }
                    <CvInProgress
                        formData={formData}
                    />
                </div>
            </div>
        </div>

    )
}

Builder.propTypes = {}

export default Builder
