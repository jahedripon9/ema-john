import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Container fluid="md">
                    <Row className="p-5 m-5">
                        <Col>
                        <div>
                                <form>
                                        <div className="row mb-3 d-flex">
                                            <h1 className="text-center text-warning">Plese Register</h1>
                                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                            <input type="email" className="form-control w-50" id="inputEmail3"/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                            <div className="col-sm-10">
                                            <input type="password" className="form-control w-50" id="inputPassword3"/>
                                            </div>
                                        </div>
                                    
                                        <button type="submit" className="btn btn-primary align-items-center">Register</button>
                                        </form>
                                        <p>Already have a Account <Link to='/login'>Login</Link></p>
                                        <div>------------Or-------------</div>
                <button className="btn btn-warning">Google Sign in</button>
                                </div>
                        </Col>
                    </Row>
                    </Container>
            
        </div>
    );
};

export default Register;