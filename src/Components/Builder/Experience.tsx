import React from 'react';
import CustomInput from '../../CustomComponents/CustomInput';
import CustomButton from '../../CustomComponents/CustomButton';
import { builderComponents } from '../../Utils/SiteConfig';
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik } from 'formik';

const inputClassName = {
  width: '9.8rem',
};

interface ExperienceProps {
  onMenuClick: (component: string) => void;
  formData: any;
  updateFormData: any;
}

const validationSchema = Yup.object({
  company: Yup.string().required('Company is required'),
  location: Yup.string().required('Location is required'),
  employer: Yup.string().required('Employer is required'),
  role: Yup.string().required('Role is required'),
  start: Yup.string().required('Start Date is required'),
  finish: Yup.string().required('Current Job?? Check'),
  // currentlyWorking: Yup.boolean().required('This is required'),
});

function Experience(props: ExperienceProps) {
  const { onMenuClick, formData, updateFormData } = props;

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        updateFormData(values);
        onMenuClick(builderComponents.skills);
      }}
    >
      {({ handleSubmit, values, handleChange, setFieldValue, errors, touched, setTouched }) => (
        <Form onSubmit={handleSubmit} className="p-4">
          <div className="p-4">

            <CustomInput
              title="Company"
              placeholder="Google"
              value={values.company}
              onInputChange={(e:any)=>{
                handleChange(e);
                updateFormData({ company: e.target.value });
              }}
              name="company"
            />
            <ErrorMessage name="company" component="div" className="text-red-500 text-sm" />

            <CustomInput
              title="Employer"
              placeholder="Employer's Address"
              value={values.employer}
              onInputChange={(e:any)=>{
                handleChange(e);
                updateFormData({ employer: e.target.value });
              }}
              name="employer"
            />
            <ErrorMessage name="employer" component="div" className="text-red-500 text-sm" />

            <CustomInput
              title="Role"
              placeholder="Software Engineer"
              value={values.role}
              onInputChange={(e:any)=>{
                handleChange(e);
                updateFormData({ role: e.target.value });
              }}
              name="role"
            />
            <ErrorMessage name="role" component="div" className="text-red-500 text-sm" />

            <CustomInput
              title="Location"
              placeholder="London"
              value={values.location}
              onInputChange={(e:any)=>{
                handleChange(e);
                updateFormData({ location: e.target.value });
              }}
              name="location"
            />
            <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />

            <div className="flex gap-1">
              <div className='flex flex-col'>
                <CustomInput
                  title="Start Date"
                  placeholder="MM/YY"
                  value={values.start}
                  onInputChange={(e:any)=>{
                    handleChange(e);
                    updateFormData({ start: e.target.value });
                  }}
                  inputClassName={inputClassName}
                  name="start"
                />
                <ErrorMessage name="start" component="div" className="text-red-500 text-sm" />
              </div>
              {!values.currentlyWorking &&
                <div className='flex flex-col'>

                  <CustomInput
                    title="Finish Date"
                    placeholder="MM/YY"
                    value={values.finish}
                    onInputChange={(e:any)=>{
                      handleChange(e);
                      updateFormData({ finish: e.target.value });
                    }}
                    inputClassName={inputClassName}
                    name="finish"
                  />
                  <ErrorMessage name="finish" component="div" className="text-red-500 text-sm" />
                </div>
              }
            </div>
            {
              !values.finish &&
              <div className='flex gap-2 mt-3 items-center'>
                <input
                  type='checkbox'
                  name='currentlyWorking'
                  checked={values.currentlyWorking}
                  onChange={(e) => {
                    setFieldValue('currentlyWorking', e.target.checked)
                    updateFormData({ finish: e.target.value });
                    setTouched({ currentlyWorking: true });
                  }}
                  className='w-6 h-6 bg-white border border-[#E4E7EB] checked:bg-[#278917]'
                />
                <p className='font-normal text-sm text-textSecondary opacity-90'>Currently Work Here</p>
                {touched.currentlyWorking && typeof errors.currentlyWorking === 'string' && (
                  <div className="text-red-500 text-sm">{errors.currentlyWorking}</div>
                )}
              </div>
            }
            <div className="mt-10">
              <CustomButton
                title="Next"
                type="submit"
              />
            </div>

          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Experience;
