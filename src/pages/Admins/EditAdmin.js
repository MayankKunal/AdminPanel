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


const EditAdmin = () => {
    document.title = "Edit Admin";
    const [selectedGroup, setselectedGroup] = useState(null);

    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }
    return (


        <>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs maintitle="Towner" title="Admin" breadcrumbItem="Edit Admin" />
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle className="h4">Edit Admin </CardTitle>
                                
                                    <form>
                                        <Row>
                                            <Col lg="6">
                                                <div className="mb-3">
                                                    <Label>Select Role</Label>
                                                    <Select
                                                        value={selectedGroup}
                                                        onChange={() => {
                                                            handleSelectGroup();
                                                        }}
                                                        options={optionGroup}
                                                        classNamePrefix="select2-selection"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="profile">Profile Image</label>{" "}
                                                    <input type="file" className="form-control" id="profile" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="4">
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-4 col-form-label"
                                                    >
                                                        First Name
                                                    </label>
                                                    <div className="col-md-10">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Your First Name"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="4" className='mb-6'>
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-4 col-form-label"
                                                    >
                                                        Middle Name
                                                    </label>
                                                    <div className="col-md-10">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Your Middle Name"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-4 col-form-label"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <div className="col-md-10">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Your Last Name"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='mb-2'>
                                            <Col lg="4">
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-4 col-form-label"
                                                    >
                                                        Phone Number
                                                    </label>
                                                    <div className="col-md-10">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Your Phone Number"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-4 col-form-label"
                                                    >
                                                        Email
                                                    </label>
                                                    <div className="col-md-10">
                                                        <input
                                                            className="form-control"
                                                            type="email"
                                                            placeholder="Enter Your Email"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-4 col-form-label"
                                                    >
                                                        Service City
                                                    </label>
                                                    <div className="col-md-10">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Your Service City"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="4">
                                                <div className="mb-6">
                                                    <label className="form-label" htmlFor="pancard">Pan-Card No.</label>{" "}
                                                    <input type="text" className="form-control" id="pancard" />
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="mb-6">
                                                    <label className="form-label" htmlFor="aadhar">Aadhar Card No.</label>{" "}
                                                    <input type="text" className="form-control" id="aadhar" />
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="imgDoc">ImageDoc No.</label>{" "}
                                                    <input type="text" className="form-control" id="imgDoc" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="4">
                                                <div className="mb-6">
                                                    <label className="form-label" htmlFor="pancard">Pan Card</label>{" "}
                                                    <input type="file" className="form-control" id="pancard" />
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="mb-6">
                                                    <label className="form-label" htmlFor="aadhar">Aadhar Card</label>{" "}
                                                    <input type="file" className="form-control" id="aadhar" />
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="imgDoc">ImageDoc</label>{" "}
                                                    <input type="file" className="form-control" id="imgDoc" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-4 col-form-label"
                                                    >
                                                        Password
                                                    </label>
                                                    <div className="col-md-10">
                                                        <input
                                                            className="form-control"
                                                            type="password"
                                                            placeholder="Enter Your PassWord"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="mb-3">
                                                    <Label>ReportTo</Label>
                                                    <Select
                                                        value={selectedGroup}
                                                        onChange={() => {
                                                            handleSelectGroup();
                                                        }}
                                                        options={adminName}
                                                        classNamePrefix="select2-selection"
                                                    />
                                                </div>
                                            </Col>
                                           
                                        </Row>
                                        <div className="text-center mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-primary waves-effect waves-light"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                    </form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default EditAdmin
