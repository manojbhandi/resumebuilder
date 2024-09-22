import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



const Button = styled.button<{ padding?: string; fontSize?: string; fontWeight?: string; borderColor?: string; bgColor?: string; width?: string; borderRadius?: string; }>`
    width:${(props) => props.width ?? "20rem"}; 
    background-color: ${(props) => props.bgColor ?? "#EB5757"};
    border-radius: ${(props) => props.borderRadius ?? "4px"};
    opacity: 0.9;
    color: white;
    padding: ${(props) => props.padding ?? "0.5rem 1rem"};
    font-size: ${(props) => props.fontSize ?? "700"};
    font-weight: ${(props) => props.fontWeight ?? "700"};

`
interface CustomButtonProps {
    title: string,
    buttonStyle?: object,
    onBtnClick?: any,
    type?:any

}
function CustomButton(props: CustomButtonProps) {
    const { buttonStyle, title,onBtnClick ,type } = props;
    return (
        <>
            <Button
                {...buttonStyle}
                onClick={onBtnClick}
                type={type}
            >
                {title}
            </Button>
        </>
    )
}

CustomButton.propTypes = {}

export default CustomButton
