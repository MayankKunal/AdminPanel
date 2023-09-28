import React from 'react'
import {
    Card,
    CardBody,
    Col,
    Row,
    CardTitle,
    Container,
    Table,
    Form,
    Input
  } from "reactstrap";
  import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from 'react-router-dom';
const EditPermission = () => {
    document.title = "Create Permission";
  return (
   <>
      <div className="page-content">
        <Container fluid={true}>
        <Breadcrumbs maintitle="Towner" title="Permissions" breadcrumbItem="Edit Permission" />
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Enter the Permission Name</CardTitle>
                  {/* <p className="card-title-desc">
                    Here are examples of <code>.form-control</code> applied to
                    each textual HTML5 <code>&lt;input&gt;</code>{" "}
                    <code>type</code>.
                  </p> */}
                   <Form>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Permission Name
                    </label>
                    
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Permission Name"
                      />
                    </div>
                    
                    <label
                      htmlFor="description"
                      className="col-md-2 col-form-label mt-3"
                    >
                      Permission Description
                    </label>
                    <div className="col-md-10 mt-3">
                    <textarea id="description" name="w3review" rows="4" cols="50">
            
                    hello
                    </textarea>
                    </div>
                  
                  </Row>
                  <Form>
                  <Table className="table mb-0">
                      <thead className="table-dark">
                        <tr>
                          <th> <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            /> Modules</div></th>
                          <th><div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            />View</div></th>
                          <th><div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            />Create</div></th>
                          <th><div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            />Edit</div></th>
                          <th><div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            />Delete</div></th>
                            <th><div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            />Download</div></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"><div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            />Subscription</div></th>
                          <td><input type='checkbox' className="form-check-input"/></td>
                          <td><input type='checkbox' className="form-check-input"/></td>
                          <td><input type='checkbox' className="form-check-input"/></td>
                          <td><input type='checkbox' className="form-check-input"/></td>
                          <td><input type='checkbox' className="form-check-input"/></td>
                        </tr>
                        <tr>
                          <th scope="row"><div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            />Contact</div></th>
                          <td><input type='checkbox' className="form-check-input"/></td>
                          <td><input type='checkbox' className="form-check-input"/></td>
                          <td><input type='checkbox' className="form-check-input"/></td>
                          <td><input type='checkbox' className="form-check-input"/></td>
                          <td><input type='checkbox' className="form-check-input"/></td>
                        </tr>
                        <tr>
                          <th scope="row"><div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            />Invoice</div></th>
                          <td><input type='checkbox' className="form-check-input"/></td>
                          <td><input type='checkbox' className="form-check-input"/></td>
                          <td><input type='checkbox' className="form-check-input"/></td>
                          <td><input type='checkbox' className="form-check-input"/></td>
                          <td><input type='checkbox' className="form-check-input"/></td>
                        </tr>
                      </tbody>
                    </Table>
                 </Form>
                  <div className="text-center mt-4">
                    <button
                      type="button"
                      className="btn btn-primary waves-effect waves-light"
                    >
                      Submit
                    </button>
                  </div>
                    </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
   </>
  )
}

export default EditPermission;
