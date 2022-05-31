import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Input = ({ field_id, field_label, field_placeholder, field_value }) => {
    const { handleChange}  = useContext(FormContext)
    const onHandleInputChange=(event)=>{
        handleChange(field_id,event)
    }
    return (
        <div className="mb-3">
            <label  className="form-label">{field_label}</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder={field_placeholder ? field_placeholder : ''}
                value={field_value}
                onChange={onHandleInputChange}
            />
        </div>
    )
}

export default Input
