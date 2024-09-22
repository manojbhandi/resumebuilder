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
    email: Yup.string().email('Invalid email format').required('Email is required'),
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
                                onInputChange={handleChange}
                                name="fullName"
                            />
                            <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
                            <CustomInput
                                title="Email Address"
                                placeholder="johndoe@gmail.com"
                                value={values.email}
                                onInputChange={handleChange}
                                name="email"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                            <CustomInput
                                title="Profession"
                                placeholder="Software Engineer"
                                value={values.profession}
                                onInputChange={handleChange}
                                name="profession"
                            />
                            <ErrorMessage name="profession" component="div" className="text-red-500 text-sm" />
                            <CustomInput
                                title="Address"
                                placeholder="NG 1113 Oreville"
                                value={values.address}
                                onInputChange={handleChange}
                                name="address"
                            />
                            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />

                            <div className="flex gap-1">
                                <div className="flex flex-col">
                                    <CustomInput
                                        title="City"
                                        placeholder="Orlean"
                                        value={values.city}
                                        onInputChange={handleChange}
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
                                        onInputChange={handleChange}
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
