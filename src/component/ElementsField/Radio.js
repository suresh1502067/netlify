import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const radioOption=[
    {key:1,name:"Yes",value:"1"},
    {key:2,name:"No",value:"0"}
]

const Radio = ({ field_id, field_label, field_placeholder, field_value }) => {
    const { handleChange } = useContext(FormContext);
    const onHandleInputChange=(event)=>{
        // console.log("event",event.target.value,event.target.value)
        handleChange(field_id,event)
    }
    console.log("first",field_value)
    return (
        <div className='mb-3'>
            <label className="form-label">{field_label}</label>
            {
                radioOption.map(d=>{
                    return<div className='p-2' key={d.key}>
                        <input type={"radio"} onChange={onHandleInputChange} checked={d.value===`${field_value}`} value={d.value}/>
                        <label className='ps-2'>{d.name}</label>
                    </div>
                })
            }
        </div>
    )
}
export default Radio
