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
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(
        "The transaction was successfully submitted! You will receive a confirmation email"
      );
    } catch (err) {
      setErrorMessage(
        "There was an error while submitting the form. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
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

      {errorMessage && <p>{errorMessage}</p>}
      <StyledButton type="submit" disabled={isLoading}>
        {isLoading ? "Processing... !" : "Pay"}
      </StyledButton>
    </StyledForm>
  );
};
