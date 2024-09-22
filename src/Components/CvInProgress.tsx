import React from 'react'
import twitterIcon from '../Assets/Icons/teitterIconSmall.png'
import linkedInIcon from '../Assets/Icons/linkedInIconSmall.png'
import portfolio from '../Assets/Icons/portfoliIcon.png'
import phone from '../Assets/Icons/phoneIconSm.png'
import { FormData } from '../Utils/types'
import hero from '../Assets/Icons/avatar.png'
import { makeAbsoluteUrl } from '../Utils/CommonFn'
import GitHub from '../Assets/Icons/Github'
import certificationIcon from '../Assets/Icons/certificationIcon.png'
interface CvInProgressProps {

  formData: FormData
}
function CvInProgress(props: CvInProgressProps) {
  const { formData } = props
return (
    <>
      <div className='flex gap-2 flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col gap-2 w-full lg:w-auto'>
          <div className='bg-white rounded-xl p-4 '>
            <div className='flex gap-4'>
              <img src={hero} alt="img" className='h-16' />
              <div className='flex flex-col'>
                <h6 className='font-medium text-3xl text-textHeading font-[Roboto]'>{formData.fullName}</h6>
                <div>
                  <span className='flex gap-3 flex-grow' >
                    <p className='text-textSecondary font-normal text-lg'>{formData.email}</p>


                  </span>
                  <span className='flex gap-4 items-center'>
                    {

                      formData.linkedInUrl && <a
                        href={makeAbsoluteUrl(formData.linkedInUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-textSecondary font-normal text-lg flex gap-2 items-center'
                      >
                        <img src={linkedInIcon} alt="linkedin" className='h-4' />
                        <p className='text-textSecondary font-normal text-lg'>LinkedIn</p>
                      </a>
                    }
                    {

                      formData.githubUrl && <a
                        href={makeAbsoluteUrl(formData.githubUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-textSecondary font-normal text-lg flex gap-2 items-center'
                      >
                        <GitHub />
                        <p className='text-textSecondary font-normal text-lg'>git</p>
                      </a>
                    }
                    {/* {formData.twitterUrl && <a
                      href={makeAbsoluteUrl(formData.linkedInUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-textSecondary font-normal text-lg flex gap-2 items-center'
                    >
                      <img src={twitterIcon} alt="linkedin" className='h-4' />
                      <p className='text-textSecondary font-normal text-lg'>Twitter</p>
                    </a>
                    } */}
                    {formData.portfolioUrl && <a
                      href={makeAbsoluteUrl(formData.linkedInUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-textSecondary font-normal text-lg flex gap-2 items-center'
                    >
                      <img src={portfolio} alt="linkedin" className='h-4' />
                      <p className='text-textSecondary font-normal text-lg'>Portfolio</p>
                    </a>
                    }
                  </span>

                  {formData.phoneNumber &&
                    <span className='text-textSecondary font-normal text-lg flex gap-2 items-center'>
                      <img src={phone} alt="linkedin" className='h-4' />
                      <p className='text-textSecondary font-normal text-lg'>{formData.phoneNumber}</p>
                    </span>

                  }
                </div>
              </div>
            </div>
            <div>
              <span className='className=' text-textSecondary font-normal text-lg>Explain briefly who you are and your background here in not more than 3 lines. Lorem ipsum dolor  sit amet, consectetur adipiscing elit ut aliquam</span>
            </div>
          </div>
          <div className='bg-white rounded-xl p-4 flex flex-col gap-2'>
            <h6 className='font-bold text-3xl text-textHeading text-[Roboto] my-2'>
              EDUCATION
            </h6>
            <p className='font-medium text-lg text-textHeading'>{formData.degree}</p>
            <p className='font-medium text-lg text-textSecondary'>{formData.schoolName}</p>
            <p className='font-normal text-lg text-textSecondary text-opacity-50'>{formData.graduationStartYear} - {formData.graduationCompleteYear}</p>
          </div>

          <div className='bg-white rounded-xl p-4 flex flex-col gap-2'>
            <h6 className='font-bold text-3xl text-textHeading text-[Roboto]'>
              SKILLS
            </h6>

            <div className='flex items-center gap-4 my-2'>
              <span className='flex'>
                <span className='w-14 h-2 bg-safronMango'></span>
                <span className='w-6 h-2 bg-[#F5F6F7]'></span>
              </span>
              <p className='font-normal text-lg text-textSecondary'>{formData.skill1}</p>
            </div>
            <div className='flex items-center gap-4'>
              <span className='flex'>
                <span className='w-14 h-2 bg-safronMango'></span>
                <span className='w-6 h-2 bg-[#F5F6F7]'></span>
              </span>
              <p className='font-normal text-lg text-textSecondary'>{formData.skill2}</p>
            </div>
            <div className='flex items-center gap-4'>
              <span className='flex'>
                <span className='w-14 h-2 bg-safronMango'></span>
                <span className='w-6 h-2 bg-[#F5F6F7]'></span>
              </span>
              <p className='font-normal text-lg text-textSecondary'>{formData.skill3}</p>
            </div>
            <div className='flex items-center gap-4'>
              <span className='flex'>
                <span className='w-14 h-2 bg-safronMango'></span>
                <span className='w-6 h-2 bg-[#F5F6F7]'></span>
              </span>
              <p className='font-normal text-lg text-textSecondary'>{formData.skill4}</p>
            </div>
            <div className='flex items-center gap-4'>
              <span className='flex'>
                <span className='w-14 h-2 bg-safronMango'></span>
                <span className='w-6 h-2 bg-[#F5F6F7]'></span>
              </span>
              <p className='font-normal text-lg text-textSecondary'>{formData.skill5}</p>
            </div>
            {/* <p className='font-medium text-lg text-textSecondary'>{formData.schoolName}</p>
            <p className='font-normal text-lg text-textSecondary text-opacity-50'>{formData.graduationStartYear} - {formData.graduationCompleteYear}</p> */}
          </div>

          <div className='bg-white rounded-xl p-4 flex flex-col gap-2'>
            <h6 className='font-bold text-3xl text-textHeading text-[Roboto] my-2'>
              CERTIFICATION
            </h6>
            <span className='flex gap-3'>
              <img src={certificationIcon} alt="certificate" />
              <p className='font-normal text-lg text-textSecondary'>{formData.certification1}</p>
            </span>
            <span className='flex gap-3'>
              <img src={certificationIcon} alt="certificate" />
              <p className='font-normal text-lg text-textSecondary'>{formData.certification2}</p>
            </span>
            <span className='flex gap-3'>
              <img src={certificationIcon} alt="certificate" />
              <p className='font-normal text-lg text-textSecondary'>{formData.certification3}</p>
            </span>

          </div>
        </div>
        <div className='flex flex-col bg-white rounded-xl p-4 gap-4' >
          <h6 className='font-bold text-3xl text-textHeading text-[Roboto] my-2'>
            EXPERIENCE
          </h6>
          <div className='flex flex-col border-b-[1.4px] border-slate-100 pb-2'>

            <p className='font-medium text-xl text-textHeading'>{formData.role}  {formData.company ? `| ${formData.company}, ` : null}{formData.location}</p>
            <p className='font-normal text-lg text-textSecondary text-opacity-50'>{formData.start} - {formData.currentJob ? 'Present' : formData.finish}</p>
            <p className='font-normal text-lg text-textSecondary text-opacity-50'>Explain briefly what you do at the company here in not more than 40 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
          </div>
          <div className=' flex flex-col gap-2 border-b-[1.4px] border-slate-100 pb-2'>
            <p className='font-medium text-xl text-textHeading'>{formData.role}  {formData.company ? `| ${formData.company}, ` : null}{formData.location}</p>
            <p className='font-normal text-lg text-textSecondary text-opacity-50'>{formData.start} - {formData.currentJob ? 'Present' : formData.finish}</p>
            <p className='font-normal text-lg text-textSecondary text-opacity-50'>Explain briefly what you do at the company here in not more than 40 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
          </div>
          <div className=' flex flex-col gap-2'>
            <p className='font-medium text-xl text-textHeading'>{formData.role}  {formData.company ? `| ${formData.company}, ` : null}{formData.location}</p>
            <p className='font-normal text-lg text-textSecondary text-opacity-50'>{formData.start} - {formData.currentJob ? 'Present' : formData.finish}</p>
            <p className='font-normal text-lg text-textSecondary text-opacity-50'>Explain briefly what you do at the company here in not more than 40 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
          </div>
        </div>
      </div>
    </>
  )
}


export default CvInProgress
