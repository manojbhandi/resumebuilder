import React from 'react';
import CustomInput from '../../CustomComponents/CustomInput';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomSelect from '../../CustomComponents/CustomSelect';
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik } from 'formik';
import { builderComponents } from '../../Utils/SiteConfig';

interface EducationProps {
  onMenuClick: (component: string) => void;
  formData: any;
  updateFormData: any;
}

const validationSchema = Yup.object({
  schoolName: Yup.string().required('This is required'),
  schoolLocation: Yup.string().required('This is required'),
  degree: Yup.string().required('This is required'),
  fieldOfStudy: Yup.string().required('This is required'),
  graduationStartYear: Yup.string().required('This is required'),
  graduationCompleteYear: Yup.string().required('This is required'),
});

function Education(props: EducationProps) {
  const { onMenuClick, formData, updateFormData } = props;

  const monthOptions = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];
  const startYear = 1990;
  const endYear = new Date().getFullYear();

  const yearOptions = Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = startYear + i;
    return { value: year.toString(), label: year.toString() };
  });

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form submitted:', values); 
        updateFormData(values);
        onMenuClick(builderComponents.contact);
      }}
    >
      {({ handleSubmit, values, handleChange, setFieldValue }) => (
        <Form onSubmit={handleSubmit} className="p-4">
          <div className="p-4">
            <CustomInput
              title="School Name"
              placeholder="University of Lagos"
              value={values.schoolName}
              onInputChange={(e:any)=>{
                handleChange(e);
                updateFormData({ schoolName: e.target.value });
              }}

              name="schoolName"
            />
            <ErrorMessage name="schoolName" component="div" className="text-red-500 text-sm" />

            <CustomInput
              title="School Location"
              placeholder="Lagos"
              value={values.schoolLocation}
              onInputChange={(e:any)=>{
                handleChange(e);
                updateFormData({ schoolLocation: e.target.value });
              }}

              name='schoolLocation'
            />
            <ErrorMessage name="schoolLocation" component="div" className="text-red-500 text-sm" />

            <CustomInput
              title="Degree/Program"
              placeholder="Bachelors Of Technology"
              value={values.degree}
              onInputChange={(e:any)=>{
                handleChange(e);
                updateFormData({ degree: e.target.value });
              }}

              name='degree'
            />
            <ErrorMessage name="degree" component="div" className="text-red-500 text-sm" />

            <CustomInput
              title="Field of Study"
              placeholder="NG 1113 Oreville"
              value={values.fieldOfStudy}
              onInputChange={(e:any)=>{
                handleChange(e);
                updateFormData({ fieldOfStudy: e.target.value });
              }}

              name='fieldOfStudy'
            />
            <ErrorMessage name="fieldOfStudy" component="div" className="text-red-500 text-sm" />

            <CustomSelect
              title="Graduation Start Year"
              value={values.graduationStartYear}
              options={yearOptions}
              onSelectChange={(e) =>{ 
                setFieldValue('graduationStartYear', e.target.value)
                updateFormData({ graduationStartYear: e.target.value });
              }}
              name='graduationStartYear'
            />
            <ErrorMessage name="graduationStartYear" component="div" className="text-red-500 text-sm" />

            <CustomSelect
              title="Graduation Year"
              value={values.graduationCompleteYear}
              options={yearOptions}
              onSelectChange={(e) => {
                setFieldValue('graduationCompleteYear', e.target.value)
                updateFormData({ graduationCompleteYear: e.target.value });
              }}
              name='graduationCompleteYear'
            />
            <ErrorMessage name="graduationCompleteYear" component="div" className="text-red-500 text-sm" />

            <div className="mt-10">
              <CustomButton
                type='submit'
                title="Next"
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Education;
