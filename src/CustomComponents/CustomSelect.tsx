import React from 'react';
import styled from 'styled-components';

const Select = styled.select<{ padding?: string; borderColor?: string; bgColor?: string; arrowPosition?: string; width?: string; borderRadius?: string; boxShadow?: string; placeholderColor?: string; }>`
  padding: ${(props) => props.padding ?? "10px 16px"};
  border: 1px solid ${(props) => props.borderColor ?? "#E4E7EB"}; 
  background-color: ${(props) => props.bgColor ?? "#ffffff"}; 
  width: ${(props) => props.width ?? "20rem"}; 
  border-radius: ${(props) => props.borderRadius ?? "4px"}; 
  box-shadow: ${(props) => props.boxShadow ?? "0 1px 1px rgba(0, 0, 0, 0.1)"};
  appearance: none; 
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: ${(props) => props.arrowPosition ?? "calc(100% - 15px) center"}; 
  background-size: 16px; 
  padding-right: 30px; 
  & option[value=""] {
    color: #9CA3AF; 
  }
  &:focus {
    border-color: ${(props) => props.borderColor ?? "#d1d5db"}; 
    outline: none;
  }
`;

const Option = styled.option<{ color?: string }>`
  color: ${(props) => props.color ?? "#000000"}; 
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

interface SelectProps {
  title: string;
  value: string;
  options: { value: string; label: string }[];
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  labelClassName?: object;
  selectClassName?: object;
}

function CustomSelect(props: SelectProps) {
  const { title, value, options, onSelectChange, labelClassName, selectClassName } = props;

  return (
    <div className='flex flex-col gap-2'>
      <Label {...labelClassName}>{title}</Label>
      <Select
        {...selectClassName}
        name={title}
        id={title}
        value={value}
        onChange={onSelectChange}
      >
        <option value="" disabled selected hidden>
          Select
        </option>
        {options.map((option, index) => (
          <Option key={index} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default CustomSelect;
