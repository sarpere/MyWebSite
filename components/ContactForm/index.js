import React, { Component } from 'react'
import './style.scss'
import { Container, Row, Form, Col, Jumbotron, InputGroup, FormControl, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import UButton from '../UButton'
import * as yup from 'yup'
import axios from 'axios'
const emailRegex = /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    number: yup.number(),
    company: yup.string(),
    website: yup.string().matches(emailRegex, 'example: www.example.xyz'),
    message: yup.string().required(),
});
// const schema = yup.object({
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     username: yup.string().required(),
//     city: yup.string().required(),
//     state: yup.string().required(),
//     zip: yup.string().required(),
// });

export default class ContactForm extends Component {
    constructor(state) {
        super(state);
        this.state = {
            mailing: {
                pending: false,
                success: false,
                error: false
            }
        }
    }
    submit(e, {resetForm}) {
        this.setState({
            mailing: {
                ...this.state.mailing,
                pending: true
            }
        }, () => {
            axios.post('/api/contact', e)
                .then((response) =>  {
                    this.setState({
                        mailing: {
                            ...this.state.mailing,
                            success: true
                        }
                    })
                    resetForm({values :''})
                    console.log(response);
                })
                .catch((error)=> {
                    console.log(error);
                    this.setState({
                        mailing: {
                            ...this.state.mailing,
                            error: true
                        }
                    })
                }).finally(() => {
                    this.setState({
                        mailing: {
                            ...this.state.mailing,
                            pending: false,
                            success: false,
                            error: false
                        }
                    })
                });
        })
    }
    render() {
        return (
            <Jumbotron className="contact__form">
                <Formik
                    validationSchema={schema}
                    onSubmit={this.submit.bind(this)}
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        number: '',
                        company: '',
                        website: '',
                        message: ''
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row> <h1 className="m-auto marginB-1">let's leave a message</h1></Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="validationFormik01">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="firstName"
                                            name="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            isInvalid={touched.firstName && !!errors.firstName}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.firstName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationFormik02">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="lastName"
                                            name="lastName"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            isInvalid={touched.firstName && !!errors.lastName}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.lastName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationFormik03">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="name@example.com"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            isInvalid={touched.firstName && !!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationFormik04">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Phone number"
                                            name="number"
                                            value={values.number}
                                            onChange={handleChange}
                                            isInvalid={touched.firstName && !!errors.number}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.number}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationFormik05">
                                        <Form.Label>Company</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Company"
                                            name="company"
                                            value={values.company}
                                            onChange={handleChange}
                                            isInvalid={touched.firstName && !!errors.company}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.company}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationFormik06">
                                        <Form.Label>Website</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Website"
                                            name="website"
                                            value={values.website}
                                            isInvalid={touched.firstName && !!errors.website}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.website}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationFormik07">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea"
                                            rows="3"
                                            name="message"
                                            placeholder="Message"
                                            value={values.message}
                                            onChange={handleChange}
                                            isInvalid={touched.firstName && !!errors.message}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <UButton type="submit" 
                                success={this.state.mailing.success} 
                                error={this.state.mailing.error} 
                                pending={this.state.mailing.pending}>Submit form</UButton>
                            </Form>
                        )}
                </Formik>
            </Jumbotron >
        )
    }
}
