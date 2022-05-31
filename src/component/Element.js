import React from 'react';

import Input from '../component/ElementsField/Input';
import Checkbox from '../component/ElementsField/Checkbox';
import Select from './ElementsField/Select';
import Radio from './ElementsField/Radio';
import DatePicker from './ElementsField/Date';

export default function Element(props) {
    console.log("props",props)
    const {questionType,questionDataType,responseData,questionName,questionText,objOptions}=props;
//   return (
//     <div>element</div>
//   )
 switch (questionType) {
     case "FIELD":
         return <Input
         field_id={questionName}
         field_label={questionText}
         field_placeholder={questionText}
         field_value={responseData}
     />
     case "CHECKBOX":
         return <Checkbox
         field_id={questionName}
         field_label={questionText}
         field_value={responseData}
     />
     case "SELECT":
        return <Select
            field_id={questionName}
            field_label={questionText}
            field_placeholder={questionText}
            field_value={responseData}
            field_options={objOptions}
            field_Data_type={questionDataType}
        />
        case "YESNO":
            return <Radio
            field_id={questionName}
            field_label={questionText}
            field_value={responseData}
        />
        case "DATE":
            return <DatePicker
            field_id={questionName}
            field_label={questionText}
            field_value={responseData}
        />
     default:
        return <div>Lot more to come</div>
 }

}
