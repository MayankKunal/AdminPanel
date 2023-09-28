import React,{useState}from 'react'
import {
    Card,
    CardBody,
    Col,
    Row,
    CardTitle,
    Container,
    Table,
    Form,
    Input,
    Label
  } from "reactstrap";
  import Breadcrumbs from "../../components/Common/Breadcrumb";
  import Select from 'react-select';
const CreatePermission = () => {

  const optionGroup = [

    { label: "Role1", value: "Role1" },
    { label: "Role2", value: "Role2" },
    { label: "Role3", value: "Role3" }

];
const [selectedGroup, setselectedGroup] = useState(null);

    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }
    document.title = "Create Permission";
  return (
   <>
      <div className="page-content">
        <Container fluid={true}>
        <Breadcrumbs maintitle="Towner" title="Permissions" breadcrumbItem="Create Permission" />
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

export default CreatePermission
