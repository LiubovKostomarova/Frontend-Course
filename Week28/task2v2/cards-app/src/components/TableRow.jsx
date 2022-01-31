import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './words';

//const element = <FontAwesomeIcon icon={faCoffee} />

class TableRow extends React.Component {

  

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        };
    };

    handelChange = () => {
        this.setState(
            { isEdit: !this.state.isEdit }
        );
    }
    
    render() {
        const { id, russian, english, transcription, tags } = this.props;
        return (
    this.state.isEdit ?
                                <tr>
                                    <td><input className="td-rus" value={russian} /> </td>
                                    <td><input className="td-en" value={english} /> </td>
                                    <td><input className="td-tr" value={transcription} /> </td>
                                    <td><input className="td-tag" value={tags} /> </td>
                                        <button className="table-btn" data-id={id} onClick={this.handelChange}> &#10004; </button>
                                        <button className="table-btn" data-id={id} onClick={this.handelChange}> &#10008; </button>
                                </tr>
                            :
                                <tr>
                                    <td className="td-rus"> {russian} </td> 
                                    <td className="td-en"> {english}  </td>
                                    <td className="td-tr"> {transcription} </td>
                                    <td className="td-tag"> {tags}</td>
                                        <button className="table-btn" data-id={id} onClick={this.handelChange}> &#9999; </button>
                                </tr>
        )
    }
}
export default TableRow;