import Congratulations from "../Pages/Congratulations";

export const builderComponents = Object.freeze({
    "personalInfo": "Personal Information",
    "education": "Education",
    "experience": "Experience",
    "skills": "Technical Skills",
    "certification": "Certifaction",
    "contact": "Contact Information"
});

export const ROUTES = Object.freeze({
    "home": "/",
    "builder": "/builder",
    "login":"/login",
    "register":"/register",
    protected:{
        "congratulations": "/auth/congratulations"
    }
});

export const API_END_POINT = Object.freeze({
    baseUrl:'https://resumebuilder-be.onrender.com',
    login:'api/auth/login',
    regster:'api/auth/register'
})
