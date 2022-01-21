import React from 'react';
import styled from 'styled-components';
import FormBase from '../../components/FormBase/FormBase';

const FormTitle = styled.h3`
  text-align: center;
  font-weight: 400;
  color: teal;
  font-size: 30px;
`;

const Form = styled.form`
  box-sizing: border-box;
`;
const FormGroup = styled.div`
  margin-top: 30px;
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 30px;
  font-size: 18px;
  background-color: teal;
  color: #fff;
  margin-top: 50px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Register = () => {
  return (
    <FormBase>
      <FormTitle>Register</FormTitle>
      <Form>
        <FormGroup>
          <Input placeholder='Username' type='text' />
        </FormGroup>
        <FormGroup>
          <Input placeholder='Email' type='email' />
        </FormGroup>
        <FormGroup>
          <Input placeholder='Passwor' type='password' />
        </FormGroup>
        <FormGroup>
          <Input placeholder='Confirm' type='password' />
        </FormGroup>
        <Button>Register</Button>
      </Form>
    </FormBase>
  );
};

export default Register;
