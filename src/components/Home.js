import React, { Fragment } from 'react';
import { Button , Stack} from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Home = () => {
    return (
        <Fragment>
            <div className="container d-flex align-items-center justify-content-center w-100 mt-5">
                <div className='center'>
                    <Stack direction="horizontal" gap={2}>
                        <Button as="a" variant="primary">
                           <Link className='text text-white' to='/addProperties'>Add Property</Link>
                        </Button>
                        <Button as="a" variant="success">
                        <Link className='text text-white' to='/enquireProperties'>Enquire Property</Link>
                        </Button>
                    </Stack>
                </div>
            </div>
        </Fragment>
    )
}

export default Home
