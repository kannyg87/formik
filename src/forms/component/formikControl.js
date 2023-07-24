import React from "react";
import Input from "./input";
import Textarea from "./textarea"
import Select from "./select";
import Radio from "./radio";
import Checkbox from "./checkbox";
import Datepicker from "./datePicker";


const FormikControl = (props)=>{
  const {control, ...rest} = props
  switch(control){
    case 'input': return <Input {...rest}/>
      case 'textarea': return <Textarea {...rest}/>
        case 'select': return <Select {...rest}/>
          case 'radio':return <Radio {...rest}/>
            case 'checkbox': return <Checkbox {...rest}/>
              case 'date': return <Datepicker {...rest}/>
                default: return null
  }

  }
export default FormikControl;