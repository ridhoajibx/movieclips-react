import React from 'react';

const Pagination = (props) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-between">
                <li className="page-item"><button className="page-link" onClick={props.prevPage}>Previous</button></li>
                <li className="page-item"><button className="page-link">{props.page} of { props.totalPages }</button></li>
                <li className="page-item"><button className="page-link" onClick={props.nextPage}>Next</button></li>
            </ul>
        </nav>
    );
}

export default Pagination;
