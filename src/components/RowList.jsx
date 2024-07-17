import React, {useEffect} from 'react';
import Row from './Row';
import Header from './Header';

const RowList = ({rows, goToTop, allCollapse, columns}) => {
    const renderedRows = rows.map((row,idx) => (
        <Row id={idx} key={row.id} {...row} collapse={allCollapse} />
    ));

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        handleTop()
    },[goToTop])

    return (
        <div className="rows-container scroll-container">
            <Header columns={columns} />
            {renderedRows}
        </div>
    );
};

export default RowList;