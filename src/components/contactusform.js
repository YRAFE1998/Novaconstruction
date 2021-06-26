import { Input, InputLabel,FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { useState } from 'react';
import {Container, Row, Col} from 'reactstrap';
import { GoldButton } from '../styledcomponents/buttons';
import Styledblock from './styledblock';
import {axiosConfig} from '../utils/axioshelper';
const axios = require('axios');

const apiUrl = 'https://novaengineeringapi.herokuapp.com';


export function YourPost(object) {
  console.log("-------------PETER---------- ", object);
  return axios.post(`${apiUrl}/api/getaquote`, object, axiosConfig());
}

export const Form = (props) => { 
    const emailerror = "";
    const nameerror = "";
    const companyerror="";
    const subjecterror="";
    const messageerror="";
    const phoneerror="";

    const [form,setform]=useState({});

    const submit = (e) => {
      console.log(e);
      e.preventDefault();
      YourPost(form)
      .then(res => {
        console.log(res);
      })
      .catch(err =>{
        console.log(err);
      })
  }

    const inputchange = (value, state) => {
      setform({...form, [state]:value.target.value});
    };
    return(
        <Styledblock bg={props.color} title='Contact Us' subtitle='' backgroundpath={5} id="contactus" backimage="/assets/images/ba2.jpg">
        <Container fluid={true} className="mt-md-5 px-0 px-md-auto text-primarybold">
            <Container className="px-lg-5 text-center"  id={props.color=="white"?"":"formwhite"}>
            <form onSubmit={(e) => submit(e)}>
                <Row>
                <Col xs='12' className="px-md-5">
                <Row className="my-3">
                    <Col xs='12' md='6' className="px-md-5">
                            <FormControl className='w-100 text-white'>
                              <InputLabel className="text-primarybold" color="secondary" htmlFor="my-input">YOUR NAME</InputLabel>
                              <Input onChange={(e) => inputchange(e,"name")} error={!!emailerror} helpe="Please enter a valid email address" id="my-input" aria-describedby="my-helper-text" />
                              <FormHelperText error={true} >{nameerror}</FormHelperText>
                            </FormControl>
                    </Col>
                    <Col xs='12' md='6' className="px-md-5">
                            <FormControl className='w-100'>
                              <InputLabel htmlFor="my-input">YOUR EMAIL</InputLabel>
                              <Input onChange={(e) => inputchange(e,"email")} error={!!nameerror} id="my-input" aria-describedby="my-helper-text" />
                              <FormHelperText error={true}>{emailerror}</FormHelperText>
                            </FormControl>
                    </Col>
                </Row>
                </Col>
                <Col xs='12' className="px-md-5">
                <Row className="my-3">
                <Col xs='12' md='4' className="px-md-5">
                            <FormControl className='w-100'>
                              <InputLabel htmlFor="my-input">PHONE</InputLabel>
                              <Input onChange={(e) => inputchange(e,"phone")} error={!!phoneerror} id="my-input" aria-describedby="my-helper-text" />
                              <FormHelperText error={true}>{phoneerror}</FormHelperText>
                            </FormControl>
                    </Col>
                    <Col xs='12' md='4' className="px-md-5">
                            <FormControl className='w-100'>
                              <InputLabel htmlFor="my-input">COMPANY</InputLabel>
                              <Input onChange={(e) => inputchange(e,"company")} error={!!companyerror} id="my-input" aria-describedby="my-helper-text" />
                              <FormHelperText error={true}>{companyerror}</FormHelperText>
                            </FormControl>
                    </Col>
                    <Col xs='12' md='4' className="px-md-5">
                            <FormControl className='w-100'>
                              <InputLabel htmlFor="my-input">SUBJECT</InputLabel>
                              <Input onChange={(e) => inputchange(e,"subject")} error={!!subjecterror} id="my-input" aria-describedby="my-helper-text" />
                              <FormHelperText error={true}>{subjecterror}</FormHelperText>                              
                            </FormControl>
                    </Col>
                    </Row>
                </Col>
                <Col xs='12' className="px-md-5">
                <Row className="my-3">
                    <Col xs='12' className="px-md-5">
                            <FormControl className="w-100">
                              <InputLabel htmlFor="my-input">MESSAGE</InputLabel>
                              <Input onChange={(e) => inputchange(e,"message")} error={!!messageerror} multiline id="my-input" aria-describedby="my-helper-text" />
                              <FormHelperText error={true}>{messageerror}</FormHelperText>
                            </FormControl>
                    </Col>
                    </Row>
                </Col>
                </Row>
                <Row className='mt-5 px-md-5'>
                    <Col xs='12' className='text-center px-md-5'>
                        <GoldButton type="submit">
                            GET IN TOUCH
                        </GoldButton>
                    </Col>
                </Row>
            </form>
            </Container>
        </Container>
        </Styledblock>
    );  
}

export default Form;