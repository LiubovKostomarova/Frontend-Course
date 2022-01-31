import React from "react";
import word from "./words";
import TableRow from "./TableRow";


class Table extends React.Component {
    render() {
        return (
            <div className='table'>
                <div className="table-header">
                    <table className="table-row">
                        <thead>
                            <tr>
                                <th className="header-rus"> Russian </th>
                                <th className="header-en"> English </th>
                                <th className="header-tr"> Transcription </th>
                            </tr>
                        </thead>
                    </table>
                    {
                        word.map((word) =>
                            <TableRow key={word.id}
                            {...word} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Table;