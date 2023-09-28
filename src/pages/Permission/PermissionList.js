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
export const PermissionList = () => {
    document.title = "Create Permission";
  return (
   <>
      <div className="page-content">
        <Container fluid={true}>
        <Breadcrumbs maintitle="Towner" title="Permissions" breadcrumbItem="Permission List" />
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4 text-center"><h1> Permission List</h1></CardTitle>
                  {/* <p className="card-title-desc">
                    Here are examples of <code>.form-control</code> applied to
                    each textual HTML5 <code>&lt;input&gt;</code>{" "}
                    <code>type</code>.
                  </p> */}
                
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Permission Name
                    </label>
                    
                    <div className="col-md-10">
                     <h3>Permission1</h3>
                    </div>
                    
                    <label
                      htmlFor="description"
                      className="col-md-2 col-form-label mt-3"
                    >
                      Permission Description
                    </label>
                    <div className="col-md-10 mt-3">
                    <p>publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</p>
                    </div>
                  
                  </Row>
                
                  <Table className="table mb-0">
                      <thead className="table-dark">
                        <tr>
                          <th> <div className="form-check">
                            Modules</div></th>
                          <th><div className="form-check">
                           View</div></th>
                          <th><div className="form-check">
                           Create</div></th>
                          <th><div className="form-check">
                           Edit</div></th>
                          <th><div className="form-check">
                           Delete</div></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"><div className="form-check">
                           Subscription</div></th>
                          <td><i className="fas fa-check fs-2 text-success"/></td>
                          <td><i className="fas fa-check fs-2 text-success"/></td>
                          <td><i className="fas fa-check fs-2 text-success"/></td>
                          <td><i className="fas fa-check fs-2 text-success"/></td>
                        </tr>
                        <tr>
                          <th scope="row"><div className="form-check">
                        Contact</div></th>
                          <td><i className="fas fa-check fs-2 text-success"/></td>
                          <td><i className="fas fa-times fs-2 text-danger"/></td>
                          <td><i className="fas fa-times fs-2 text-danger"/></td>
                          <td><i className="fas fa-times fs-2 text-danger"/></td>
                        </tr>
                        <tr>
                          <th scope="row"><div className="form-check">
                            Invoice</div></th>
                          <td><i className="fas fa-check fs-2 text-success"/></td>
                          <td><i className="fas fa-times fs-2 text-danger"/></td>
                          <td><i className="fas fa-times fs-2 text-danger"/></td>
                          <td><i className="fas fa-times fs-2 text-danger"/></td>
                        </tr>
                      </tbody>
                    </Table>
                
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
   </>
  )
}


