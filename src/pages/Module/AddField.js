import React,{useState}from 'react'
import {
    Table,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Label,
    Container,
    Button, Form, FormGroup, Input, FormText
  } from "reactstrap";
  import Select from 'react-select';
  const optionGroup = [

    { label: "Text", value: "text" },
    { label: "Number", value: "number" },
    { label: "Email", value: "email" },
    { label: "TextArea", value: "textarea" },
    { label: "phone", value: "phone" }

];

const AddField = () => {
    document.title = "Add Field";
    const [selectedGroup, setselectedGroup] = useState(null);

    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }
  return (
    <>
    
    <Form>
      <Row className="mb-3">
        <Col lg="6">
          <div className="mb-3">
            <Label>Select Input Type</Label>
            <Select
              value={selectedGroup}
              onChange={() => {
                handleSelectGroup();
              }}
              options={optionGroup}
              classNamePrefix="select2-selection"
            />
          </div>
        </Col>
        <Col lg="6">
          <div className="mb-3">
            <Label>Label</Label>
           <Input type='text'/>
          </div>
        </Col>
      </Row>
    </Form>
  </>
  )
}

export default AddField;
