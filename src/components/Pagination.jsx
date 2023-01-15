import React from 'react'

function Pagination({ numberOfPages, currentPage, setCurrentPage }) {
    const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1)

    const nextPage = () => {
        if(currentPage !== numberOfPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav className="mt-4">
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a className="page-link"
                       onClick={prevPage}
                       href='#'>

                        Previous
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber}
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}
                           className='page-link'
                           href='#'>

                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link"
                       onClick={nextPage}
                       href='#'>

                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;
