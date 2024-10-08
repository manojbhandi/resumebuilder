import React from "react";

import CustomInput from "../../CustomComponents/CustomInput";
import CustomButton from "../../CustomComponents/CustomButton";
import { builderComponents } from "../../Utils/SiteConfig";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from 'yup';

const inputClassName = {
    width: '9.8rem'
}
interface PersonalInfoProps {
    onMenuClick: (component: string) => void;
    formData: any;
    updateFormData: any;
}

const validationSchema = Yup.object({
    fullName: Yup.string().required('Name is required'),
    email: Yup.string()
            .max(30, "Should be Less Than 30 characters")
            .email('Invalid email format').required('Email is required'),
    profession: Yup.string().required('Profession is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
});
function PersonalInfo(props: PersonalInfoProps) {
    const { onMenuClick, formData, updateFormData } = props
    return (
        <>
            <Formik
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                    updateFormData(values);
                    onMenuClick(builderComponents.experience)
                }}
            >
                {({ handleSubmit, values, handleChange }) => (
                    <Form onSubmit={handleSubmit} className="p-4">
                        <div className="p-4">

                            <CustomInput
                                title="Full Name"
                                placeholder="John Doe"
                                value={values.fullName}
                                onInputChange={(e: any) => {
                                    handleChange(e);
                                    updateFormData({ fullName: e.target.value });
                                }}
                                name="fullName"
                            />
                           
                            <ErrorMessage name="fullName" component="div" className="text-pink-400 text-sm"  />
                            <CustomInput
                                title="Email Address"
                                placeholder="johndoe@gmail.com"
                                value={values.email}
                                length={23}
                                onInputChange={(e: any) => {
                                    handleChange(e);
                                    updateFormData({ email: e.target.value });
                                }}
                                name="email"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                            <CustomInput
                                title="Profession"
                                placeholder="Software Engineer"
                                value={values.profession}
                                onInputChange={(e: any) => {
                                    handleChange(e);
                                    updateFormData({ profession: e.target.value });
                                }}
                                name="profession"
                            />
                            <ErrorMessage name="profession" component="div" className="text-red-500 text-sm" />
                            <CustomInput
                                title="Address"
                                placeholder="NG 1113 Oreville"
                                value={values.address}
                                onInputChange={(e: any) => {
                                    handleChange(e);
                                    updateFormData({ address: e.target.value });
                                }}
                                name="address"
                            />
                            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />

                            <div className="flex gap-1">
                                <div className="flex flex-col">
                                    <CustomInput
                                        title="City"
                                        placeholder="Orlean"
                                        value={values.city}
                                        onInputChange={(e: any) => {
                                            handleChange(e);
                                            updateFormData({ city: e.target.value });
                                        }}
                                        inputClassName={inputClassName}
                                        name="city"

                                    />
                                    <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <CustomInput
                                        title="State"
                                        placeholder="New Jersey"
                                        value={values.state}
                                        onInputChange={(e: any) => {
                                            handleChange(e);
                                            updateFormData({ state: e.target.value });
                                        }}
                                        inputClassName={inputClassName}
                                        name="state"
                                    />

                                    <ErrorMessage name="state" component="div" className="text-red-500 text-sm" />
                                </div>
                            </div>
                            <div className="mt-10">
                                <CustomButton
                                    type="submit"
                                    title="Next"
                                // onBtnClick={() => onMenuClick(builderComponents.experience)}
                                />
                            </div>

                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}


export default PersonalInfo
