import React from 'react';
import { Form, Col, Alert } from 'react-bootstrap';
import $ from 'jquery';
import Recaptcha from 'react-recaptcha';
//import axios from "axios";

class ContactForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phone: '',
    message: '',
    validated: false,
    error: null,
    isFormValid: false,
    isCaptchaValid: false,
    isErrorShown: false,
    isFormSubmitted: null
  };

  /*  API_PATH = `http://localhost/testing/TestPortfoilo/react-php-contact-form-master/api/contact/index.php`; */

  API_PATH = `https://whitex2.com/api/contact/index.php`;

  // Handle visitor's interaction with inputs
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  /* ***************************************
                Recaptcha
  *********************************************/
  // Show message in console when reCaptcha plugin is loaded
  onCaptchaLoad = () => {
    console.log('Captcha loaded');
  };

  // Update state after reCaptcha validates visitor
  onCaptchaVerify = response => {
    this.setState({
      isCaptchaValid: true
    });
  };

  /* **************************************************
        Actions to perform when user hit submit
******************************************************/

  onFormSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });

    // Test
    if (
      this.state.email.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.message.length > 0 &&
      this.state.isCaptchaValid
    ) {
      this.setState({
        error: false,
        isFormValid: true
      });

      // Send the form with AJAX
      $.ajax({
        data: this.state,
        type: 'POST',
        url: `${this.API_PATH}`,
        success: function(data) {
          console.info(data);
        },
        error: function(xhr, status, err) {
          console.error(status, err.toString());
        }
      });

      // Reset state after sending the form
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        phone: '',
        message: '',
        validated: false,
        error: null,
        isFormValid: false,
        isCaptchaValid: false,
        isErrorShown: false,
        isFormSubmitted: true
      });
    } else {
      // Show error message
      this.setState({
        error: true,
        isFormSubmitted: false
      });
    }
  };

  /* onFormSubmit = async e => {
    e.preventDefault();

    //validate form beforsending to server
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    this.setState({ validated: true });

    //send to server
    try {
      const result = await axios({
        method: "post",
        url: `${this.API_PATH}`,
        headers: { "content-type": "application/json" },
        data: this.state
      });

      this.setState({ mailSent: result.data.sent });
      console.log(result);
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  }; */

  renderContent() {
    const { validated } = this.state;
    return (
      <Form
        noValidate
        validated={validated}
        action='#'
        className='contact-form'
        onSubmit={this.onFormSubmit}
      >
        <Form.Row>
          <Col>
            <Form.Label htmlFor='First-name'>
              <h2 className='heading-2'>First name</h2>
            </Form.Label>
            <Form.Control
              required={true}
              id='First-name'
              className='text'
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder='First name'
            />
            <Form.Control.Feedback />
            <Form.Control.Feedback type='invalid' className='feedback'>
              Please provide your first name.
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Label htmlFor='Last-name'>
              <h2 className='heading-2'>Last name</h2>
            </Form.Label>
            <Form.Control
              required={true}
              id='Last-name'
              className='text'
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder='Last name'
            />
            <Form.Control.Feedback />
            <Form.Control.Feedback className='feedback' type='invalid'>
              Please provide your last name.
            </Form.Control.Feedback>
          </Col>
        </Form.Row>

        <Form.Group controlId='basicEmail'>
          <Form.Label>
            <h2 className='heading-2'>Email Address</h2>
          </Form.Label>
          <Form.Control
            required={true}
            type='email'
            className='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='Enter your email'
          />
          <Form.Control.Feedback />
          <Form.Control.Feedback className='feedback' type='invalid'>
            Please provide your email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='companyName'>
          <Form.Label>
            <h2 className='heading-2'>Company Name</h2>
          </Form.Label>
          <Form.Control
            type='text'
            className='text'
            name='companyName'
            value={this.state.companyName}
            onChange={this.handleChange}
            placeholder='Company Name'
          />
          <Form.Control.Feedback />
        </Form.Group>

        <Form.Group controlId='phone'>
          <Form.Label>
            <h2 className='heading-2'>Phone</h2>
          </Form.Label>
          <Form.Control
            type='tel'
            size='lg'
            className='text'
            name='phone'
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder='Enter your phone number'
          />
          <Form.Control.Feedback />
        </Form.Group>

        <Form.Group controlId='message'>
          <Form.Label>
            <h2 className='heading-2'>Your Message</h2>
          </Form.Label>
          <Form.Control
            required={true}
            as='textarea'
            rows='4'
            className='text'
            name='message'
            placeholder='Your message'
            value={this.state.message}
            onChange={this.handleChange}
          />
          <Form.Control.Feedback />
          <Form.Control.Feedback className='feedback' type='invalid'>
            Please type your message.
          </Form.Control.Feedback>
        </Form.Group>

        <Recaptcha
          onloadCallback={this.onCaptchaLoad}
          sitekey='6LeiEKEUAAAAAFW57DF47RhDa0hxmxVYsG2871bK'
          render='explicit'
          verifyCallback={this.onCaptchaVerify}
        />
        {/*  <div
          className="g-recaptcha"
          data-sitekey="6LeiEKEUAAAAAFW57DF47RhDa0hxmxVYsG2871bK"
        /> */}
        <br />

        <button type='submit' name='submit' className='btn btn--white submit'>
          Submit
        </button>
        {/********************************************
         *  Display sucsess Message Or Err0r Message
         **********************************************/}
        <div>
          {this.state.isFormSubmitted && (
            <Alert variant='success'>Thank you for contacting me.</Alert>
          )}
          {this.state.error && (
            <Alert variant='danger'>Please, fill all required fields.</Alert>
          )}
        </div>
      </Form>
    );
  }

  render() {
    return (
      <Col xs={11} sm={10} md={8} lg={8}>
        {this.renderContent()}
      </Col>
    );
  }
}

export default ContactForm;
