import React from 'react'
import CustomInput from '../../CustomComponents/CustomInput'
import CustomSelect from '../../CustomComponents/CustomSelect'
import CustomButton from '../../CustomComponents/CustomButton';
import { builderComponents } from '../../Utils/SiteConfig';
interface SkillsProps {
  onMenuClick: (component: string) => void;
  formData: any;
  updateFormData: any;
}
function TechSkills(props: SkillsProps) {
  const { onMenuClick , formData, updateFormData } = props;
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  return (
    <>

      <div className="p-4">

        <CustomSelect
          title="Skill 1"
          value=""
          options={options}
          onSelectChange={() => { }}
        />
        <CustomSelect
          title="Skill 2"
          value=""
          options={options}
          onSelectChange={() => { }}
        />
        <CustomSelect
          title="Skill 3"
          value=""
          options={options}
          onSelectChange={() => { }}
        />
        <CustomSelect
          title="Skill 3"
          value=""
          options={options}
          onSelectChange={() => { }}
        />
        <CustomSelect
          title="Skill 5"
          value=""
          options={options}
          onSelectChange={() => { }}
        />
        <div className="mt-10">
          <CustomButton
            type='submit'
            title="Next"
            onBtnClick={() => onMenuClick(builderComponents.education)}
          />
        </div>
      </div>

    </>
  )
}


export default TechSkills
