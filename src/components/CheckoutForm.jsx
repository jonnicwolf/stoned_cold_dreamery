import React from 'react';
import styled from 'styled-components';
import SelectCountry from './SelectCountry';
import SelectState from './SelectState';

const CheckoutForm = () => {
  return (
    <Container>
      <Form action="">
        <label htmlFor="email" required>Email*</label>
        <Input type="email" style={{border: '1px solid grey', borderRadius: '5px'}}/>
        <br />

        <label htmlFor="cardInfo" required>Card information*</label>
        <Info>
          <Input type="number" placeholder='1234 1234 1234 1234'style={{borderBottom: '1px solid grey', width: '95%',}} required />
          <SideBySide>
            <Input type="month" placeholder='mm/yy' style={{borderRight: '1px solid grey'}} required />
            <Input type="text" placeholder='CVC' required />
          </SideBySide>
        </Info>
        <br />

        <label htmlFor="name">Name on card*</label>
        <Input type="text" style={{border: '1px solid grey', borderRadius: '5px'}} required />
        <br />

        <label htmlFor="billing">Billing Address*</label>
        <Info>
          <SelectCountry /><br />
          <Input type="text" placeholder='Address line 1' style={{borderBottom: '1px solid grey', width: '95%'}} required /><br />
          <Input type="text" placeholder='Address line 2' style={{borderBottom: '1px solid grey', width: '95%'}} required />
          <SideBySide>
            <Input type="text" style={{borderRight: '1px solid grey', borderBottom: '1px solid grey'}} placeholder='City' required />
            <Input type="number" style={{borderBottom: '1px solid grey', width: '100%'}} placeholder='Zip' required />
          </SideBySide>
          <SelectState />
        </Info>
        <br />

        <SideBySide>
          <input type="radio" />
          <label htmlFor="matchAddresses">Billing address is shipping address</label>
        </SideBySide><br />

        <Button>Pay</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
`;
const Button = styled.button`
  background-color: rgb(122, 233, 255, 0.8);
  border: none;
  border-radius: 15px;
  font-size: 18px;
  height: 5vh;
`;
const Form = styled.form`
  display: flex;
  font-family: 'Chakra Petch';
  flex-direction: column;
  font-size: 20px;
`;
const Info = styled.div`
  border: 1px solid grey;
  border-radius: 8px;
  padding: 4px;
`;
const Input = styled.input`
  border: none;
  font-size: 18px;
  padding: 6px;
  padding-left: 10px;
  padding-right: 10px;


  ::placeholder {
    opacity: 0.5;
  }
`;
const SideBySide = styled.div`
  display: flex;
`;

export default CheckoutForm;