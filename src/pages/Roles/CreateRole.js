import React, { useState } from "react";
import Select from 'react-select';
import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Container
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { permission } from "./permission";
const CreateRole = () => {
//   const [customchk, setcustomchk] = useState(true);
//   const [customchkPrimary, setcustomchkPrimary] = useState(true);
//   const [customchkSuccess, setcustomchkSuccess] = useState(true);
//   const [customchkInfo, setcustomchkInfo] = useState(true);
//   const [customchkWarning, setcustomchkWarning] = useState(true);
//   const [customchkDanger, setcustomchkDanger] = useState(true);
//   const [customOutlinePrimary, setcustomOutlinePrimary] = useState(true);
//   const [customOutlineSuccess, setcustomOutlineSuccess] = useState(true);
//   const [customOutlineInfo, setcustomOutlineInfo] = useState(true);
//   const [customOutlineWarning, setcustomOutlineWarning] = useState(true);
//   const [customOutlineDanger, setcustomOutlineDanger] = useState(true);
//   const [toggleSwitch, settoggleSwitch] = useState(true);
//   const [toggleSwitchSize, settoggleSwitchSize] = useState(true);

  document.title = "Define Role and its Permissions";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs maintitle="Towner" title="Role" breadcrumbItem="Create Role" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Create Role and Select one or Permissions for thr roles</CardTitle>
                  {/* <p className="card-title-desc">
                    Here are examples of <code>.form-control</code> applied to
                    each textual HTML5 <code>&lt;input&gt;</code>{" "}
                    <code>type</code>.
                  </p> */}
                   <form>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Role Name
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Role Name"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label">Select Permissions</label>
                    <div className="col-md-10">
                    <Select defaultValue={[permission[2], permission[3]]} isMulti name="colors" options={permission} className="basic-multi-select form-control" classNamePrefix="select"/>
                    </div>
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
    </React.Fragment>
  );
};

export default CreateRole;
