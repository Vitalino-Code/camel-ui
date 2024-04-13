import ReactPaginate from 'react-paginate'
import { Container } from './styles'

const Pagination = ({ pageCount, setCurrentPage }) => {
  return (
    <Container>
      <ReactPaginate
        pageCount={pageCount}
        nextLabel=">"
        previousLabel="<"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => {
          setCurrentPage(selected)
        }}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </Container>
  )
}

export default Pagination
