import React from 'react'
import CustomInput from '../../CustomComponents/CustomInput';
import CustomButton from '../../CustomComponents/CustomButton';
import { builderComponents, ROUTES } from '../../Utils/SiteConfig';
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../Utils/CommonFn';

interface CertifactionProps {
  onMenuClick: (component: string) => void;
  formData: any;
  updateFormData: any;
}

const validationSchema = Yup.object({
  certification1: Yup.string()
                  .required('This is required'),
  certification2: Yup.string().required('Email is required'),
  certification3: Yup.string().required('This is required'),

});

function Certifaction(props: any) {
  const { onMenuClick, formData, updateFormData } = props;
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          updateFormData(values);
          onMenuClick(builderComponents.certification)
          isLoggedIn() ? navigate(ROUTES.protected.congratulations) :navigate(ROUTES.login) ;
        }}
      >
        {({ handleSubmit, values, handleChange }) => (
          <Form onSubmit={handleSubmit} className="p-4">
            <div className="p-4">

              <CustomInput
                title="Certification #1"
                placeholder="Certificate Of Engineering"
                length={30}
                value={values.certification1}
                onInputChange={(e:any)=>{
                  handleChange(e);
                  updateFormData({ certification1: e.target.value });
                }}
                name='certification1'
              />
              <ErrorMessage name="certification1" component="div" className="text-red-500 text-sm" />


              <CustomInput
                title="Certification #2"
                placeholder="Certificate Of Engineering"
                length={30}
                value={values.certification2}
                onInputChange={(e:any)=>{
                  handleChange(e);
                  updateFormData({ certification2: e.target.value });
                }}
                name='certification2'

              />
              <ErrorMessage name="certification2" component="div" className="text-red-500 text-sm" />

              <CustomInput
                title="Certification #3"
                placeholder="Certificate Of Engineering"
                length={30}
                value={values.certification3}
                onInputChange={(e:any)=>{
                  handleChange(e);
                  updateFormData({ certification3: e.target.value });
                }}
                name='certification3'

              />
              <ErrorMessage name="certification3" component="div" className="text-red-500 text-sm" />

              <div className="mt-10">
                <CustomButton
                  title="Submit"
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


export default Certifaction
