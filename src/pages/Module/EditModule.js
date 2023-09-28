import React,{useState} from 'react'
import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Modal,ModalBody,
  ModalHeader,
  ModalFooter,
  CardSubtitle,
  Container,
  Button, Form, FormGroup, Label, Input, FormText
} from "reactstrap";
import AddField from './AddField';
import Breadcrumbs from "../../components/Common/Breadcrumb";
const EditModule = () => {
   const [modal_center, setmodal_center] = useState(false);

  const tog_center = () => {
    setmodal_center(!modal_center);
    removeBodyCss();
  };

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };

  return (
    <>
    <div className="page-content">
        <Container fluid={true}>
            <Breadcrumbs maintitle="Towner" title="Module" breadcrumbItem="Edit Module" />
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle className="h4">Edit Module </CardTitle>
                            {/* <p className="card-title-desc">
            Here are examples of <code>.form-control</code> applied to
            each textual HTML5 <code>&lt;input&gt;</code>{" "}
            <code>type</code>.
          </p> */}
                            <form>
                                <Row>
                                    <Col lg="12">
                                        
                                        <div className="mb-6">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-md-4 col-form-label"
                                                    >
                                                        Module Name
                                                    </label>
                                                    <div className="col-md-10">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Moudule Name"
                                                            defaultValue='Module'
                                                        />
                                                    </div>
                                                </div>
                                        
                                    </Col>
                                    
                                </Row>
                                <div className='text-center'>
                               <button type='button' onClick={tog_center} className='btn btn-dark mt-5 text-center'>Add New Field</button>    
                               </div>
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
        <Modal isOpen={modal_center} toggle={tog_center} size="xl">
                        <ModalHeader className="mt-0" toggle={tog_center}>Add New Field</ModalHeader>
                        <ModalBody>
                          <AddField/>
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
</>
  )
}

export default EditModule
