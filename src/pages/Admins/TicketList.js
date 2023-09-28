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
import Ticket from "./Tickets";

const  TicketList = () => {



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
        label: "Description",
        field: "description",
        sort: "asc",
        width: 100,
      },
      
      {
        label: "Raised By",
        field: "raisedBy",
        sort: "asc",
        width: 100,
      },
      {
        label: "Raised Against",
        field: "raisedAgainst",
        width: 250,
      },
      {
        label: "Status",
        field: "status",
        width: 50,
      },
      {
        label: "Archive",
        field: "archive",
        width: 50,
      },
    ],
    rows: [
      {sno: "1",
        name: <Link to='/subAdmin' style={{color:'black',fontWeight:'500'}}>Tiger</Link>,
        description: "publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
        raisedBy: "507f1f77bcf86cd799439011",
        raisedAgainst:"507f1f77bcf86cd799439011",
        status:<Button className="bg-danger">Hold</Button>,
      archive:<Button className="bg-danger">Rejected</Button>,
      },
      {sno: "2",
      name: <Link to='/subAdmin' style={{color:'black',fontWeight:'500'}}>Mayank</Link>,
      description: "publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
      raisedBy: "507f1f77bcf86cd799439011",
      raisedAgainst:"507f1f77bcf86cd799439011",
      status:<Button className="bg-success">Approved</Button>,
      archive:<Button className="bg-warning">Pending</Button>,
      },
      {sno:"3",
        name: <Link to='/subAdmin' style={{color:'black',fontWeight:'500'}}>Manish</Link>,
      description: "publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
      raisedBy: "507f1f77bcf86cd799439011",
      raisedAgainst:"507f1f77bcf86cd799439011",
      status:"Approved",
      archive: "Pending", status:<Button className="bg-success">Approved</Button>,
      archive:<Button className="bg-info">Suspended</Button>,},
    ],
  };
  document.title = "Data Tables | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Towner" title="Ticket" breadcrumbItem="View Ticket" />

          

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4 text-center"><h1>List of Admin Tickets</h1> </CardTitle>
                  <div className="text-start mb-3">  <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                      
                    >
                     <Link to="/ticket" style={{color:'white'}}> Add New Ticket</Link>
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

export default TicketList;

