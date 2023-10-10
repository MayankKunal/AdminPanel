import React, { useState } from 'react'
import {
    Button, Card, CardBody, Col, Container, CardTitle, Form, FormGroup, Input, InputGroup, Label, Row
} from "reactstrap";
import Select from "react-select";
import Breadcrumbs from "../../components/Common/Breadcrumb";
const CompanyType = [

    { label: "Proprietorship", value: "Proprietorship" },
    { label: "Partnership", value: "Partnership" },
    { label: "Privatelimited", value: "Privatelimited" }

];

const FleetType = [

    { label: "ownerCumDriver", value: "ownerCumDriver" },
    { label: "fleet", value: "fleet" },
    { label: "ownerCumMultipleDrivers", value: "ownerCumMultipleDrivers" }

];
const archiveType = [

    { label: "Pending", value: "Pending" },
    { label: "Approved", value: "Approved" },
    { label: "Rejected", value: "Rejected" },
    { label: "Hold", value: "Hold" },
    { label: "Suspended", value: "Suspended" }

];

const optionGroup = [

    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    
    { label: "Other", value: "Others" }
    

];



const EditFleetOwner = () => {
    document.title = "Create Admin";
    const [selectedGroup, setselectedGroup] = useState(null);

    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }
    return (


        <>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs maintitle="Towner" title=" FleetOwner" breadcrumbItem="Edit  FleetOwner" />
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle className="h4 text-center"><h1>Edit FleetOwner</h1> </CardTitle>
                                    {/* <p className="card-title-desc">
                    Here are examples of <code>.form-control</code> applied to
                    each textual HTML5 <code>&lt;input&gt;</code>{" "}
                    <code>type</code>.
                  </p> */}
                  <form>
                                       
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
                                                       Mobile Number
                                                   </label>
                                                   <div className="col-md-10">
                                                       <input
                                                           className="form-control"
                                                           type="text"
                                                           placeholder="Enter Your MobileNo."
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
                                                       Alt. Mobile Number
                                                   </label>
                                                   <div className="col-md-10">
                                                       <input
                                                           className="form-control"
                                                           type="text"
                                                           placeholder="Enter Your Alter MobileNo."
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
                                       </Row>
                                       <Row>
                                           <Col lg="4">
                                               <div className="mb-6">
                                                   <label className="form-label" htmlFor="pancard">Company Name</label>{" "}
                                                   <input type="String" className="form-control" id="pancard" />
                                               </div>
                                           </Col>
                                           <Col lg="4">
                                               <div className="mb-3">
                                                   <label className="form-label" htmlFor="dob">Date of Birth</label>{" "}
                                                   <input type="date" className="form-control" id="dob" />
                                               </div>
                                           </Col>
                                           <Col lg="4">
                                               <div className="mb-3">
                                                   <Label>Gender</Label>
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
                                       </Row>
                                       <Row className='mb-2'>
                                       <Col lg="4">
                                               <div className="mb-6">
                                                   <label className="form-label" htmlFor="country">Country</label>{" "}
                                                   <input type="text" className="form-control" id="country" placeholder='Enter Your Country Name' />
                                               </div>
                                           </Col>
                                           <Col lg="4">
                                           <div className="mb-6">
                                                   <label className="form-label" htmlFor="state">State</label>{" "}
                                                   <input type="text" className="form-control" id="state" placeholder='Enter Your State Name'  />
                                               </div>
                                           </Col>
                                           <Col lg="4">
                                               <div className="mb-6">
                                                   <label className="form-label" htmlFor="city">City</label>{" "}
                                                   <input type="text" className="form-control" id="city" placeholder='Enter Your City Name'  />
                                               </div>
                                           
                                           </Col>
                                       </Row>
                                       
                                      
                                       <Row>
                                           
                                       
                                           <Col lg="6">
                                           <div className="mb-6">
                                                   <label className="form-label" htmlFor="state">Registration Addess</label>{" "}
                                                   <textarea className="form-control" id="state" placeholder='Enter Your Registraion Adress' />
                                               </div>
                                           </Col>
                                           <Col lg="6">
                                               <div className="mb-6">
                                                   <label className="form-label" htmlFor="city">Communication Address</label>{" "}
                                                   <textarea  className="form-control" id="city"  placeholder='Enter Your Communication ADdress'/>
                                               </div>
                                           
                                           </Col>
                                       </Row>
                                       <Row>
                                        
                                        <Col lg="4">
                                            <div className="mb-3">
                                                <Label>Company Type</Label>
                                                <Select
                                                    value={selectedGroup}
                                                    onChange={() => {
                                                        handleSelectGroup();
                                                    }}
                                                    options={CompanyType}
                                                    classNamePrefix="select2-selection"
                                                />
                                            </div>
                                        </Col>
                                        <Col lg="4">
                                            <div className="mb-3">
                                                <Label>Fleet Type</Label>
                                                <Select
                                                    value={selectedGroup}
                                                    onChange={() => {
                                                        handleSelectGroup();
                                                    }}
                                                    options={FleetType}
                                                    classNamePrefix="select2-selection"
                                                />
                                            </div>
                                        </Col>
                                        <Col lg="4">
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





export default EditFleetOwner;
