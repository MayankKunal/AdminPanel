import React,{useState} from "react";

import { Row, Col, Card, CardBody, CardTitle,Modal,
  Container,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,} from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { Link } from "react-router-dom";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
const ViewPermission = () => {
  

  document.title = "View Permissions";
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Towner" title="Permissions" breadcrumbItem=" View Permission" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                <CardTitle className="h4"><h1>Permissions</h1> </CardTitle>
                  <div className="text-end">  <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                      
                    >
                     <Link to="/createPermission" style={{color:'white'}}> Add New Permission</Link>
                    </Button></div>
                  <p className="card-title-desc text-center">
                    List of Permission
                  </p>
                  <div className="table-rep-plugin">
                    <div
                      className="table-responsive mb-0"
                      data-pattern="priority-columns"
                    >
                      <Table
                        id="tech-companies-1"
                        className="table table-striped table-bordered"
                      >
                        <Thead className='table-dark'>
                          <Tr>
                            <Th>#</Th>
                            <Th data-priority="1">Permission Name</Th>
                            <Th>Description</Th>
                            <Th>Actions</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th>
                             1
                            </Th>
                            <Td> <Link to='/permissionList'>Permission1</Link> </Td>
                            <Td> publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</Td>
                            <Td><Link to="/editPermission"><i className="ti-pencil-alt"/></Link></Td>
                          </Tr>
                          <Tr>
                            <Th>
                              2
                            </Th>
                            <Td>  <Link to='/permissionList'>Permission2</Link> </Td>
                            <Td> publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</Td>
                            <Td><Link to='/editPermission'><i className="ti-pencil-alt"/></Link></Td>
                            
                          </Tr>
                          <Tr>
                            <Th>
                             3
                            </Th>
                            <Td>  <Link to='/permissionList'>Permission3</Link> </Td>
                            <Td> publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</Td>
                            <Td><Link to="/editPermission"><i className="ti-pencil-alt"/></Link></Td>
                            
                          </Tr>
                          
                        </Tbody>
                      </Table>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      
      </div>
    </React.Fragment>
  );
};

export default ViewPermission;
