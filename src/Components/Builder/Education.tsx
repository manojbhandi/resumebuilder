import React from 'react'
import CustomInput from '../../CustomComponents/CustomInput'
import CustomButton from '../../CustomComponents/CustomButton'
import { builderComponents } from '../../Utils/SiteConfig'
import CustomSelect from '../../CustomComponents/CustomSelect';

interface EducationProps {
  onMenuClick: (component: string) => void;
  formData: any;
  updateFormData: any;
}
function Education(props: EducationProps) {

  const { onMenuClick, formData, updateFormData  } = props

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  return (
    <>
      <div className="p-4">

        <CustomInput
          title="School Name"
          placeholder="University of Lagos"
          value=""
          onInputChange={() => { }}
        />

        <CustomInput
          title="School Location"
          placeholder="Lagos"
          value=""
          onInputChange={() => { }}
        />

        <CustomInput
          title="Degree/Program"
          placeholder="Bachelors Of Technology"
          value=""
          onInputChange={() => { }}
        />

        <CustomInput
          title="Filed of Study"
          placeholder="NG 1113 Oreville"
          value=""
          onInputChange={() => { }}
        />
        <CustomSelect
          title="Graduation Month"
          value=""
          options={options}
          onSelectChange={() => { }}
        />
        <CustomSelect
          title="Graduation Year"
          value=""
          options={options}
          onSelectChange={() => { }}
        />


        <div className="mt-10">
          <CustomButton
            title="Next"
            onBtnClick={() => onMenuClick(builderComponents.contact)}
          />
        </div>

      </div>
    </>
  )
}


export default Education
