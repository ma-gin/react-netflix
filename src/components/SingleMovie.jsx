import './SingleMovie.css'
import {Col} from 'react-bootstrap'


const SingleMovie = (prop) => (
<Col xs={12} sm={4} md = {3} lg={2} className='animated mb-3' onClick={(e) => prop.function(prop.branding.imdbID)}>
      <img className='img fluid w-100' style={{height:'200px'}}  src={prop.branding.Poster} alt='test' onClick={prop.onClick} />
    </Col>
)


export default SingleMovie
