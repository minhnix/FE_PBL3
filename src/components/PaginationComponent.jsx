import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
const PaginationComponent = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []
    for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i + 1)
    }
    return (
        // <nav className='faj-center'>
        //     <ul className="pagination">
        //         {pageNumbers.map(number => (
        //             <li key={number} className="page-item">
        //                 <button onClick={() => paginate(number)} className='page-link'>{number}</button>
        //             </li>
        //         ))}
        //     </ul>
        // </nav>
        <Pagination>
            <Pagination.First onClick={() => paginate(1)} />
            <Pagination.Prev />
            <Pagination.Item>{pageNumbers[0]}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{pageNumbers[pageNumbers.length - 1]}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
}

export default PaginationComponent