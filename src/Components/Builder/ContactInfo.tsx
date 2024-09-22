import React from 'react'
import PropTypes from 'prop-types'
import CustomInput from '../../CustomComponents/CustomInput';
import CustomButton from '../../CustomComponents/CustomButton';
import { builderComponents } from '../../Utils/SiteConfig';
import * as Yup from 'yup';
import { ErrorMessage, Formik, Form } from 'formik';

interface ContactInfoProps {
  onMenuClick: (component: string) => void;
  formData: any;
  updateFormData: any;
}
const validationSchema = Yup.object({
  phoneNumber: Yup.string().required('This is required'),
  linkedInUrl: Yup.string().required('Email is required'),
  githubUrl: Yup.string().required('This is required'),
  twitterUrl: Yup.string().required('This is required'),
  portfolioUrl: Yup.string().required('This is required'),
});
function ContactInfo(props: ContactInfoProps) {
  const { onMenuClick, formData, updateFormData } = props;
  return (
    <>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          updateFormData(values);
          onMenuClick(builderComponents.certification)
        }}
      >
        {({ handleSubmit, values, handleChange }) => (
          <Form onSubmit={handleSubmit} className="p-4">

            <div className="p-4">

              <CustomInput
                title="Phone Number"
                placeholder="7219368663"
                value={values.phoneNumber}
                onInputChange={(e:any)=>{
                  handleChange(e);
                  updateFormData({ phoneNumber: e.target.value });
                }}
                name='phoneNumber'
              />
              <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />

              <CustomInput
                title="Linkedin Profile Link"
                placeholder="https:/johndoe"
                value={values.linkedInUrl}
                onInputChange={(e:any)=>{
                  handleChange(e);
                  updateFormData({ linkedInUrl: e.target.value });
                }}
                name="linkedInUrl"
              />
              <ErrorMessage name="linkedInUrl" component="div" className="text-red-500 text-sm" />


              <CustomInput
                title="Twitter Profile Link"
                placeholder="https:/johndoe"
                value={values.twitterUrl}
                onInputChange={(e:any)=>{
                  handleChange(e);
                  updateFormData({ twitterUrl: e.target.value });
                }}
                name="twitterUrl"
              />
              <ErrorMessage name="twitterUrl" component="div" className="text-red-500 text-sm" />

              <CustomInput
                title="GitHub Profile Link"
                placeholder="https:/johndoe"
                value={values.githubUrl}
                onInputChange={(e:any)=>{
                  handleChange(e);
                  updateFormData({ githubUrl: e.target.value });
                }}
                name="githubUrl"
              />
              <ErrorMessage name="githubUrl" component="div" className="text-red-500 text-sm" />

              <CustomInput
                title="Portfolio Link"
                placeholder="https:/johndoe"
                value={values.portfolioUrl}
                onInputChange={(e:any)=>{
                  handleChange(e);
                  updateFormData({ portfolioUrl: e.target.value });
                }}
                name="portfolioUrl"
              />
              <ErrorMessage name="portfolioUrl" component="div" className="text-red-500 text-sm" />
              <div className="mt-10">
                <CustomButton
                  title="Next"
                // onBtnClick={() => onMenuClick(builderComponents.certification)}
                />
              </div>

            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

ContactInfo.propTypes = {}

export default ContactInfo
