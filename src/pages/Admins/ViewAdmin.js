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
import EditAdmin from "./EditAdmin";
import "./ViewAdmin.scss";

const  ViewAdmin = () => {



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
        label: "Phone No.",
        field: "phoneNo",
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
        phoneNo: "7488135956",
        city:"Allahabad",
        action: <><Link to="/editAdmin"><i className="ti-pencil-alt fs-3 me-5 text-warning"/></Link> <i className="ti-archive fs-3 text-danger"/> <Link to='/ticketList'><i className="ti-ticket ms-5 fs-3 text-primary"/></Link><Link to="/subAdmin/Tiger"  ><i className="fas fa-users ms-5 fs-3 text-primary"/></Link></>,
      },
      {sno: "2",
        name:  'Jhon Doe',
        email: "jhon467@gamil.com",
        phoneNo: "7485135956",
        city:"Allahabad",
        action: <><Link to="/editAdmin"><i className="ti-pencil-alt fs-3 me-5 text-warning"/></Link><i className="ti-archive fs-3 text-danger"/> <Link to='/ticketList'><i className="ti-ticket ms-5 fs-3 text-primary"/></Link><Link to="/subAdmin/Jhon Doe" ><i className="fas fa-users ms-5 fs-3 text-primary"/></Link> </>,
      },
      {sno: "3",
        name:'Mark Watney',
        email: "mark567@gmail.com",
        phoneNo: "7488135956",
        city:"Kolkata",
        action: <> <Link to="/editAdmin"><i className="ti-pencil-alt fs-3 me-5 text-warning"/></Link><i className="ti-archive fs-3 text-danger"/> <Link to='/ticketList'><i className="ti-ticket ms-5 fs-3 text-primary"/></Link><Link to="/subAdmin/Mark Watney"><i className="fas fa-users ms-5 fs-3 text-primary"/></Link></>,
      },
    ],
  };
  document.title = "Data Tables | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Towner" title="Admin" breadcrumbItem="View Admin" />

          

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4 text-center"><h1>List of Admin</h1> </CardTitle>
                  <div className="text-start mb-3">  <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                      
                    >
                     <Link to="/createAdmin" style={{color:'white'}}> Add New Admin</Link>
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

export default ViewAdmin;

