import React, { useState } from 'react';
import './words';

export default function TableRow(props) {
    const [state, setState] = useState(0);


    const handelChange = () => {
        setState(
            { isEdit: !state.isEdit }
        );
    }

    return (

        state.isEdit ?
            <tr>
                <td><input className="td-rus" value={props.russian} /> </td>
                <td><input className="td-en" value={props.english} /> </td>
                <td><input className="td-tr" value={props.transcription} /> </td>
                <td><input className="td-tag" value={props.tags} /> </td>
                <button className="table-btn" data-id={props.id} onClick={handelChange}> &#10004; </button>
                <button className="table-btn" data-id={props.id} onClick={handelChange}> &#10008; </button>
            </tr>
            :
            <tr>
                <td className="td-rus"> {props.russian} </td>
                <td className="td-en"> {props.english}  </td>
                <td className="td-tr"> {props.transcription} </td>
                <td className="td-tag"> {props.tags}</td>
                <button className="table-btn" data-id={props.id} onClick={handelChange}> &#9999; </button>
            </tr>
    )
}
