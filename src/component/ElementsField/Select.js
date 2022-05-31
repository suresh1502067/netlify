import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Select = ({ field_id, field_label, field_value, field_options, field_Data_type = '' }) => {
    const { handleChange } = useContext(FormContext)
    const onHandleInputChange=(event)=>{
        handleChange(field_id,event)
    }
    return (
        <div className='mb-3'>
            <label className="form-label">{field_label}</label>
            <select className="form-select" aria-label="Default select example"
                onChange={onHandleInputChange}
                multiple={field_Data_type === 'MULTI_SELECT' ? true : false}
            >
                {field_options.length > 0 && field_options.map((option, i) => {
                    console.log("optionsss",option)
                    return(<option value={option.optionItemText} selected={field_value.includes(`${option.optionId}`)} key={option.optionId}>{option.optionItemText}</option>)
                }
                )}
            </select>
        </div>
    )
}

export default Select
