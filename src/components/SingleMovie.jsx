import './SingleMovie.css'
import {Col} from 'react-bootstrap'


const SingleMovie = (prop) => (
<Col xs={12} sm={4} md = {3} lg={2} className='animated mb-3'>
      <img className='img fluid w-100' style={{height:'142px'}}  src={prop.branding} alt='test' />
    </Col>
)


export default SingleMovie
