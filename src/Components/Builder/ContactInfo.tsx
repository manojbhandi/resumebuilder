import React from 'react'
import PropTypes from 'prop-types'
import CustomInput from '../../CustomComponents/CustomInput';
import CustomButton from '../../CustomComponents/CustomButton';
import { builderComponents } from '../../Utils/SiteConfig';

interface ContactInfoProps {
  onMenuClick: (component: string) => void;
  formData: any;
  updateFormData: any;
}
function ContactInfo(props: ContactInfoProps) {
  const { onMenuClick,  formData, updateFormData } = props;
  return (
    <>
      <div className="p-4">

        <CustomInput
          title="Phone Number"
          placeholder="7219368663"
          value=""
          onInputChange={() => { }}
        />

        <CustomInput
          title="Linkedin Profile Link"
          placeholder="https:/johndoe"
          value=""
          onInputChange={() => { }}
        />

        <CustomInput
          title="Twitter Profile Link"
          placeholder="https:/johndoe"
          value=""
          onInputChange={() => { }}
        />

        <CustomInput
          title="GitHub Profile Link"
          placeholder="https:/johndoe"
          value=""
          onInputChange={() => { }}
        />

        <CustomInput
          title="Portfolio Link"
          placeholder="https:/johndoe"
          value=""
          onInputChange={() => { }}

        />

        <div className="mt-10">
          <CustomButton
            title="Next"
            onBtnClick={() => onMenuClick(builderComponents.certification)}
          />
        </div>

      </div>
    </>
  )
}

ContactInfo.propTypes = {}

export default ContactInfo
