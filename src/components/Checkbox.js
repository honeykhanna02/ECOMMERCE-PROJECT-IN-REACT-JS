import React from 'react'

const Checkbox=(props)=>{
    return (
        <>
            <div className="d-flex justify-content-between mt-2">
          <div className="form-check"> 
            <input className="form-check-input" id={props.value} 
                    name={props.value} type="checkbox" value={props.value} onClick={props.onClick}/>
            <label className="form-check-label" for={props.value}>{props.label}
            </label>
          </div>
      </div>
        </>
    )
}

export default Checkbox
