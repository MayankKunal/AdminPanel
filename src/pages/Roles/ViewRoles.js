import React,{useState} from "react";

import { Row, Col, Card, CardBody, CardTitle,Modal,
  Container,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,} from "reactstrap";
  import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { permission } from "./permission";
const ViewRole = () => {
  const [modal_center, setmodal_center] = useState(false);

  const tog_center = () => {
    setmodal_center(!modal_center);
    removeBodyCss();
  };

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };

  document.title = "View Roles";
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Towner" title="Roles" breadcrumbItem="View Role" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4 text-center"><h1>Role</h1> </CardTitle>
                  <div className="text-start mb-3">  <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                      
                    >
                     <Link to="/createRole" style={{color:'white'}}> Add New Role</Link>
                    </Button></div>
                  <p className="card-title-desc">
                    Role with thier repective allowed permission
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
                        <Thead>
                          <Tr>
                            <Th>Role</Th>
                            <Th data-priority="1">Permissions</Th>
                            <Th>Edit</Th>
                            <Th>Archive</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th>
                             Role1
                            </Th>
                            <Td> Permission1,Permission2,Permission3,Permission4,Permission5</Td>
                            <Td><Link to="/editRole"><i  className="ti-pencil-alt"/></Link></Td>
                            <Td><i className="ti-archive"/></Td>
                          </Tr>
                          <Tr>
                            <Th>
                              Role2
                            </Th>
                            <Td> Permission1,Permission2,Permission3,Permission4,Permission5</Td>
                            <Td><Link to="/editRole"><i  className="ti-pencil-alt"/></Link></Td>
                            <Td><i className="ti-archive"/></Td>
                            
                          </Tr>
                          <Tr>
                            <Th>
                             Role3
                            </Th>
                            <Td> Permission1,Permission2,Permission3,Permission4,Permission5</Td>
                            <Td><Link to="/editRole"><i  className="ti-pencil-alt"/></Link></Td>
                            <Td><i  className="ti-archive"/></Td>
                            
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

export default ViewRole;
