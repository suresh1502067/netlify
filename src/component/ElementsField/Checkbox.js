import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Checkbox = ({ field_id, field_label, field_value }) => {
    const { handleChange } = useContext(FormContext)
    const onHandleInputChange=(event)=>{
        handleChange(field_id,event)
    }

    return (
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={field_value}
                onChange={onHandleInputChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">{field_label}</label>
        </div>
    )
}

export default Checkbox