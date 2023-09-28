import React,{useState} from "react";

import { Row, Col, Card, CardBody, CardTitle,Modal,
  Container,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button} from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { Link } from "react-router-dom";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import EditModule from "./EditModule";
// import EditModule from "./EditModule";


const ViewModule = () => {
  const [modal_center, setmodal_center] = useState(false);

  const tog_center = () => {
    setmodal_center(!modal_center);
    removeBodyCss();
  };

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };

  document.title = "View Modules";
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Towner" title="Module" breadcrumbItem=" View Module" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4"><h1>Modules</h1> </CardTitle>
                  <div className="text-end">  <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                      
                    >
                     <Link to='/createModule' style={{color:'white'}}>Add New Module</Link> 
                    </Button></div>
                  <p className="card-title-desc text-center">
                    List of Module
                  </p>

                  <div className="table-rep-plugin">
                    <div
                      className="table-responsive mb-0 mr-0"
                      data-pattern="priority-columns"
                    >
                    <Row>

                    <Col className="col-6">
                      <Table
                        id="tech-companies-1"
                        className="table table-striped table-bordered"
                      >
                               <Tbody className="text-center">
                          <Tr>
                            
                            <Th data-priority="1"><span className="me-5">Module Name</span> <Link to='/editModule' ><i className="fas fa-edit fa-lg  ms-5 "/></Link> <i className="fas fa-trash-alt fa-lg ms-2"></i></Th>
                           
                           
                          </Tr>
              
                
                          <Tr>
                            
                          <Th data-priority="1"><span className="me-5">Module Name</span><Link to='/editModule'><i className="fas fa-edit fa-lg  ms-5 "/></Link> <i className="fas fa-trash-alt fa-lg ms-2"></i></Th>
                            
                          </Tr>
                          <Tr>
                          <Th data-priority="1"><span className="me-5">Module Name</span> <Link to='/editModule' ><i className="fas fa-edit fa-lg  ms-5 "/></Link> <i className="fas fa-trash-alt fa-lg ms-2"></i></Th>
                            
                          </Tr>
                          <Tr>
                          <Th data-priority="1"><span className="me-5">Module Name</span> <Link to='/editModule' ><i className="fas fa-edit fa-lg  ms-5 "/></Link> <i className="fas fa-trash-alt fa-lg ms-2"></i></Th>
                            
                          </Tr>
                          
                        </Tbody>
                      </Table>
                      </Col>
                      <Col className="col-6">
                      <Table
                        id="tech-companies-1"
                        className="table table-striped table-bordered"
                      >
                               <Tbody className="text-center">
                          <Tr>
                            
                          <Th data-priority="1"><span className="me-5">Module Name</span> <Link to='/editModule' ><i className="fas fa-edit fa-lg  ms-5 "/></Link> <i className="fas fa-trash-alt fa-lg ms-2"></i> </Th>
                           
                           
                          </Tr>
              
                
                          <Tr>
                            
                          <Th data-priority="1"><span className="me-5">Module Name</span> <Link to='/editModule' ><i className="fas fa-edit fa-lg  ms-5 "/></Link> <i className="fas fa-trash-alt fa-lg ms-2"></i> </Th>
                            
                          </Tr>
                          <Tr>
                          <Th data-priority="1"><span className="me-5">Module Name</span> <Link to='/editModule' ><i className="fas fa-edit fa-lg  ms-5 "/></Link> <i className="fas fa-trash-alt fa-lg ms-2"></i></Th>
                            
                          </Tr>
                          <Tr>
                          <Th data-priority="1"><span className="me-5">Module Name</span><Link to='/editModule' ><i className="fas fa-edit fa-lg  ms-5 "/></Link><i className="fas fa-trash-alt fa-lg ms-2"></i></Th>
                            
                          </Tr>
                          
                        </Tbody>
                      </Table>
                      </Col>
                      </Row>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <Modal isOpen={modal_center} toggle={tog_center} size="xl">
                        <ModalHeader className="mt-0" toggle={tog_center}>Edit Module</ModalHeader>
                        <ModalBody>
                          <EditModule/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={tog_center}>
                              Close
                            </Button>{' '}
                            <Button color="primary">
                              Save changes
                            </Button>
                          </ModalFooter>
                      </Modal>
      </div>
    </React.Fragment>
  );
};

export default ViewModule;
