import React from 'react'
import TextField from '@material-ui/core/TextField';
function MaterialTextField({label,name,value,handleChange,type,errors}) {
    return (
        <>
        <TextField
            label={label}
            name={name}
            value={value}
            onChange={e=>handleChange(e.target)}
            type={type}
            margin="dense"
            variant="outlined"
            />
        {errors.fullName && <div style={{color:"red"}}>{errors.fullName}</div>}
        </>

    )
}

export default MaterialTextField
