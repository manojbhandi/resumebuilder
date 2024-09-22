import React from 'react'
import styled from 'styled-components'


const Input = styled.input<{ padding?: string; borderColor?: string; bgColor?: string; width?: string; borderRadius?: string; boxShadow?: string; placeholderColor?: string; }>`
padding: ${(props) => props.padding ?? "10px 16px "};
border: 1px solid ${(props) => props.borderColor ?? "#E4E7EB"}; 
background-color: ${(props) => props.bgColor ?? "#ffffff"}; 
width: ${(props) => props.width ?? "20rem"}; 
border-radius: ${(props) => props.borderRadius ?? "4px"}; 
box-shadow: ${(props) => props.boxShadow ?? "0 1px 1px rgba(0, 0, 0, 0.1)"}; 
transition: border-color 0.2s ease;
color: ${(props) => props.color ?? "#000000"}; 
&:focus {
    border-color: ${(props) => props.borderColor ?? "#d1d5db"}; 
    outline: none;
}

&::placeholder {
    color: ${(props) => props.placeholderColor ?? "#6b7280"}; 
}
`;

const Label = styled.p<{ color?: string; fontSize?: string; fontWeight?: string; opacity?: string; padding?: string; borderColor?: string; borderRadius?: string }>`
color: ${(props) => props.color ?? "#6b7280"};
font-size: ${(props) => props.fontSize ?? "1rem"}; 
font-weight: ${(props) => props.fontWeight ?? "normal"}; 
opacity: ${(props) => props.opacity ?? "0.9"}; 
padding: ${(props) => props.padding ?? "0.5rem 0"}; 
border-radius: ${(props) => props.borderRadius ?? "4px"}; 
border: 1px solid ${(props) => props.borderColor ?? "transparent"}; 
transition: border-color 0.2s ease;
&:focus, &:active {
    border-color: ${(props) => props.borderColor ?? "#6b7280"}; 
}
`;
interface InputProps {
  name?:string,
  title: string,
  value: string,
  placeholder: string,
  onInputChange: any,
  labelClassName?: object,
  inputClassName?: object,
  length?:number
}
function CustomInput(props: InputProps) {
  const { title, value, onInputChange,placeholder, labelClassName, inputClassName, name,length } = props;

  return (
    <div className=' flex flex-col gap-2'>
      <Label {...labelClassName}>{title}</Label>
      <Input
        maxLength={length}
        {...inputClassName}
        title={title}
        placeholder={placeholder}
        name={name}
        id={title}
        value={value}
        onChange={onInputChange}
      />
    </div>
  )
}


export default CustomInput
