import React, { useState } from 'react';
import './Contact.css'; 
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  const [formData,setFormData] = useState ({
    username:'',
    email:'',
    phone:'',
    message:'',

  });
  const handleChange =(e) =>{
    const {name,value} =e.target
    setFormData({
      ...formData,
      [name]:value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formData submitted',formData)
  };
  

  return (
    <div className="contact-container">
      <h1>Contact us</h1>
      <div className="contact-form">


      
<Form onSubmit={handleSubmit}>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    
    <Form.Label column sm="3">
      UserName:
    </Form.Label>
    <Col sm="9">
      <input type="text"  name="username" value={formData.username}  placeholder='username' onChange={handleChange} required />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="3">
      Email:
    </Form.Label>
    <Col sm="9">
      <input type="email"  name="email"  value={formData.email} placeholder='email'  onChange={handleChange}required />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="3">
      Phone:
    </Form.Label>
    <Col sm="9">
      <input type="tel"  name="phone"  placeholder="123-456-7890"  value={formData.phone} onChange={handleChange}required  />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label column sm="3">
      Textarea:
    </Form.Label>
    <Col sm="9">
      <Form.Control as="textarea" rows={3}  name="message"  value={formData.message} placeholder='message' onChange={handleChange}/>
    </Col>
    
  </Form.Group>
  
  <button type="submit">Submit</button>
</Form>



      <div className="map-container">
        <h2>Our Location</h2>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5995320838038!2d78.44759407493575!3d17.43099598346359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a9d97a104f%3A0x24f5ebbec44c0c8d!2sSomajiguda%2C%20Rajbhavan%20Road!5e0!3m2!1sen!2sin!4v1719471122511!5m2!1sen!2sin" width="1460" height="450" style={{border:0}} allowfullscreen="" loading="lazy" title='Our Location'></iframe>
      </div>
      </div>
    </div>
  );
}

export default Contact;
