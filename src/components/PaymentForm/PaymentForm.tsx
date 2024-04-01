import { useState } from "react";
import { toast } from "react-toastify";
import {
  StyledForm,
  StyledContainer,
  StyledLabelContainer,
  StyledInputContainer,
  StyledLabel,
  StyledSelect,
  StyledButton,
  StyledInput,
} from "./styled";

export const PaymentForm = () => {
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    toast.success("Wonderful! We have successfully made the transaction");
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContainer>
        <StyledLabelContainer>
          <StyledLabel>Address:</StyledLabel>
          <StyledLabel>Number:</StyledLabel>
          <StyledLabel>Email:</StyledLabel>
          <StyledLabel>Payment:</StyledLabel>
        </StyledLabelContainer>

        <StyledInputContainer>
          <StyledInput
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <StyledInput
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <StyledInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <StyledSelect
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select a payment method</option>
            <option value="card">Card</option>
            <option value="paypal">PayPal</option>
            <option value="mbway">MB WAY</option>
            <option value="giftCard">Gift Card</option>
          </StyledSelect>
        </StyledInputContainer>
      </StyledContainer>

      <StyledButton type="submit">Pay</StyledButton>
    </StyledForm>
  );
};
