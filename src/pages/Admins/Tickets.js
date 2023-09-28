import React, { useState } from 'react'
import {
    Button, Card, CardBody, Col, Container, CardTitle, Form, FormGroup, Input, InputGroup, Label, Row
} from "reactstrap";
import Select from "react-select";
import Breadcrumbs from "../../components/Common/Breadcrumb";
const optionGroup = [

    { label: "Role1", value: "Role1" },
    { label: "Role2", value: "Role2" },
    { label: "Role3", value: "Role3" }

];

const adminName = [

    { label: "Admin1", value: "Admin1" },
    { label: "Admin2", value: "Admin2" },
    { label: "Admin3", value: "Admin3" }

];
const archiveType = [

    { label: "Pending", value: "Pending" },
    { label: "Approved", value: "Approved" },
    { label: "Rejected", value: "Rejected" },
    { label: "Hold", value: "Hold" },
    { label: "Suspended", value: "Suspended" }

];


const Ticket = () => {
    document.title = "Create Ticket";
    const [selectedGroup, setselectedGroup] = useState(null);

    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }
    return (


        <>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs maintitle="Towner" title="Admin" breadcrumbItem="Create Ticket" />
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle className="h4">Create Ticket </CardTitle>
                                    {/* <p className="card-title-desc">
                    Here are examples of <code>.form-control</code> applied to
                    each textual HTML5 <code>&lt;input&gt;</code>{" "}
                    <code>type</code>.
                  </p> */}
                                    <form>
                                       
                                        <Row>
                                            <Col lg="6">
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-4 col-form-label"
                                                    >
                                                        Title
                                                    </label>
                                                    <div className="col-md-10">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Ticket Title"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6" className='mb-6'>
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-4 col-form-label"
                                                    >
                                                        Description
                                                    </label>
                                                    <div className="col-md-10">
                                                        <textarea
                                                            className="form-control"
                                                  
                                                            placeholder="Enter Ticket Description"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                            
                                        </Row>
                                        <Row className='mb-2'>
                                            <Col lg="6">
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-4 col-form-label"
                                                    >
                                                        Raised By
                                                    </label>
                                                    <div className="col-md-10">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Id of Reporting Person"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-4 col-form-label"
                                                    >
                                                        Raised Against
                                                    </label>
                                                    <div className="col-md-10">
                                                        <input
                                                            className="form-control"
                                                            type="email"
                                                            placeholder="Id of reported Person"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                          
                                        </Row>
                                        
                                        <Row>
                                         
                                            <Col lg="6">
                                                <div className="mb-3">
                                                    <Label>Ticket Status</Label>
                                                    <Select
                                                        value={selectedGroup}
                                                        onChange={() => {
                                                            handleSelectGroup();
                                                        }}
                                                        options={archiveType}
                                                        classNamePrefix="select2-selection"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="mb-3">
                                                    <Label>Archive</Label>
                                                    <Select
                                                        value={selectedGroup}
                                                        onChange={() => {
                                                            handleSelectGroup();
                                                        }}
                                                        options={archiveType}
                                                        classNamePrefix="select2-selection"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                    <div className="text-center mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-primary waves-effect waves-light"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default Ticket
