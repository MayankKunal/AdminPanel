import React,{useState}from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle,Modal,
  Container,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button } from "reactstrap";
import { Link } from "react-router-dom";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";


const  ViewFleetOwner = () => {



  const data = {
    columns: [
      {
        label: "S.No.",
        field: "sno",
        sort: "asc",
        width: 30,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 10,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 100,
      },
      
      {
        label: "Mobile No.",
        field: "mobileNo",
        sort: "asc",
        width: 100,
      },
      {
        label: "Service City",
        field: "city",
        width: 250,
      },
      {
        label: "Action",
        field: "action",
        width: 50,
      },
    ],
    rows: [
      {sno: "1",
        name: 'Tiger',
        email: "tiger467@gamil.com",
        mobileNo: "7488135956",
        city:"Allahabad",
        action: <><Link to="/editFleetOwner"><i className="ti-pencil-alt fs-3 me-5 text-warning"/></Link> <i className="ti-archive fs-3 text-danger"/></>,
      },
      {sno: "2",
        name: 'Jhon Doe',
        email: "jhon467@gamil.com",
        mobileNo: "7485135956",
        city:"Allahabad",
        action: <><Link to="/editFleetOwner"><i className="ti-pencil-alt fs-3 me-5 text-warning"/></Link><i className="ti-archive fs-3 text-danger"/>  </>,
      },
      {sno: "3",
        name:'Mark Watney',
        email: "mark567@gmail.com",
        mobileNo: "7488135956",
        city:"Kolkata",
        action: <> <Link to="/editFleetOwner"><i className="ti-pencil-alt fs-3 me-5 text-warning"/></Link><i className="ti-archive fs-3 text-danger"/> </>,
      },
    ],
  };
  document.title = "Data Tables | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Towner" title="Fleet Owner" breadcrumbItem="View Fleet Owner" />

          

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4 text-center"><h1>List of Fleet Owner</h1> </CardTitle>
                  <div className="text-start mb-3">  <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                      
                    >
                     <Link to="/createFleetOwner" style={{color:'white'}}> Add New Fleet Owner</Link>
                    </Button></div>

                  <MDBDataTable responsive striped bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
       
      </div>
    </React.Fragment>
  );
};




export default ViewFleetOwner
