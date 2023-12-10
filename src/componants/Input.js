import React from 'react';
import './style.css'
// import styles from './TextInput.module.css'
import { Box } from '@mui/material';

function TextInput(props) {
    return (
        <>
            <Box className="form">
                <Box>
                    <input type="text" {...props} /> <i>{props.lable}</i>
                    {props.error && (
                        <p className='errorMessage'>{props.errormessage}</p>
                    )}
                </Box>
            </Box>
        </>
    );
}

export default TextInput;