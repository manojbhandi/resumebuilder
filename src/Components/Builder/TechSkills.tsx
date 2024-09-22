import React from 'react'
import CustomInput from '../../CustomComponents/CustomInput'
import CustomSelect from '../../CustomComponents/CustomSelect'
import CustomButton from '../../CustomComponents/CustomButton';
import * as Yup from 'yup';
import { builderComponents } from '../../Utils/SiteConfig';
import { ErrorMessage, Form, Formik } from 'formik';
interface SkillsProps {
  onMenuClick: (component: string) => void;
  formData: any;
  updateFormData: any;
}

const validationSchema = Yup.object({
  skill1: Yup.string().required('Skill 1 is required'),
  skill2: Yup.string().required('Skill 2 is required'),
  skill3: Yup.string().required('Skill 3 is required'),
  skill4: Yup.string().required('Skill 4 is required'),
  skill5: Yup.string().required('Skill 5 is required'),
});
function TechSkills(props: SkillsProps) {
  const { onMenuClick, formData, updateFormData } = props;
  const options = [
    { value: 'python', label: 'Python' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'java', label: 'Java' },
    { value: 'sql', label: 'SQL' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },
  ];
  return (
    <>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          updateFormData(values);
          onMenuClick(builderComponents.skills);
          onMenuClick(builderComponents.education)
        }}
      >
        {({ handleSubmit, values, handleChange, setFieldValue, errors, touched, setTouched }) => {
          // const selectedOptions: string[] = Object.values(values);
          // const filteredOptions = (excludeValues: string[]): { value: string; label: string }[] =>
          //   options.filter(option => !excludeValues.includes(option.value));
          // console.log('Selected Options:', selectedOptions);
          // console.log('Filtered Options for Skill 1:', filteredOptions([]));
          // console.log('Filtered Options for Skill 2:', filteredOptions([values.skill1]));
          // console.log('Filtered Options for Skill 3:', filteredOptions([values.skill1, values.skill2]));
          // console.log('Filtered Options for Skill 4:', filteredOptions([values.skill1, values.skill2, values.skill3]));
          // console.log('Filtered Options for Skill 5:', filteredOptions([values.skill1, values.skill2, values.skill3, values.skill4]));
          return (
            <Form onSubmit={handleSubmit} className="p-4">
              <div className="p-4">

                <CustomSelect
                  title="Skill 1"
                  value={values.skill1}
                  options={options}
                  onSelectChange={(e) => {
                    setFieldValue('skill1', e.target.value)
                    updateFormData({ skill1: e.target.value });
                  }}
                />
                <ErrorMessage name="skill1" component="div" className="text-red-500 text-sm" />

                <CustomSelect
                  title="Skill 2"
                  value={values.skill2}
                  options={options}
                  onSelectChange={(e) => {
                    setFieldValue('skill2', e.target.value)
                    updateFormData({ skill2: e.target.value });
                  }}
                  name="skill2"
                />
                <ErrorMessage name="skill2s" component="div" className="text-red-500 text-sm" />

                <CustomSelect
                  title="Skill 3"
                  value={values.skill3}
                  options={options}
                  onSelectChange={(e) => {
                    setFieldValue('skill3', e.target.value)
                    updateFormData({ skill3: e.target.value });
                  }}
                />
                <ErrorMessage name="skill3" component="div" className="text-red-500 text-sm" />

                <CustomSelect
                  title="Skill 4"
                  value={values.skill4}
                  options={options}
                  onSelectChange={(e) => {
                    setFieldValue('skill4', e.target.value)
                    updateFormData({ skill4: e.target.value });
                  }}
                />
                <ErrorMessage name="skill4" component="div" className="text-red-500 text-sm" />

                <CustomSelect
                  title="Skill 5"
                  value={values.skill5}
                  options={options}
                  onSelectChange={(e) => {
                    setFieldValue('skill5', e.target.value)
                    updateFormData({ skill5: e.target.value });
                  }}
                />
                <ErrorMessage name="skill5" component="div" className="text-red-500 text-sm" />

                <div className="mt-10">
                  <CustomButton
                    type='submit'
                    title="Next"

                  />
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>

    </>
  )
}


export default TechSkills
