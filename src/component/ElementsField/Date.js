import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const DatePicker = ({ field_id, field_label, field_placeholder, field_value }) => {
    const { handleChange } = useContext(FormContext)
    const formatDate=window.moment(field_value).format("YYYY-MM-DD")
    const onHandleInputChange=(event)=>{
        handleChange(field_id,event)
    }
    return (
        <div className='mb-3'>
            <label className="form-label">{field_label}</label>
            <input id="startDate" onChange={onHandleInputChange} class="form-control" type="date"  value={formatDate} />
        </div>
    )
}
export default DatePicker
