import React from 'react'
import CustomInput from '../../CustomComponents/CustomInput';
import CustomButton from '../../CustomComponents/CustomButton';
import { builderComponents } from '../../Utils/SiteConfig';


interface CertifactionProps {
  onMenuClick: (component: string) => void;
  formData: any;
  updateFormData: any;
}
function Certifaction(props: any) {
  const { onMenuClick , formData, updateFormData} = props;

  return (
    <>
      <div className="p-4">

        <CustomInput
          title="Certification #1"
          placeholder="Certificate Of Engineering"
          value=""
          onInputChange={() => { }}
        />

        <CustomInput
          title="Certification #2"
          placeholder="Certificate Of Engineering"
          value=""
          onInputChange={() => { }}
        />

        <CustomInput
          title="Certification #3"
          placeholder="Certificate Of Engineering"
          value=""
          onInputChange={() => { }}
        />

        <div className="mt-10">
          <CustomButton
            title="Submit"
            onBtnClick={() => onMenuClick(builderComponents.certification)}
          />
        </div>

      </div>
    </>
  )
}


export default Certifaction
