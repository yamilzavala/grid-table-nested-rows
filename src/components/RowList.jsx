import React, {useEffect} from 'react';
import Row from './Row';
import Header from './Header';

const RowList = ({rows, goToTop, allCollapse, columns, showLastColumn}) => {
    const renderedRows = rows.map((row,idx) => (
        <Row id={row.id} key={idx} {...row} collapse={allCollapse} rowPosition={idx} showLastColumn={showLastColumn}/>
    ));

    const handleTop = () => {
        const top_elment = document.getElementById('topel');
        top_elment?.scrollIntoView({
            behavior: "smooth"
        });
    };

    useEffect(() => {
        handleTop()
    },[goToTop])

    return (
        <div className="rows-container scroll-container">
            <div id='topel'></div>
            <Header columns={columns} showLastColumn={showLastColumn}/>
            {renderedRows}
        </div>
    );
};

export default RowList;