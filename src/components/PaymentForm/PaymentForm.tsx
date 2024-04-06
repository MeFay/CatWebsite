import { useState } from "react";
import { Toast } from "../Toast/Toast";
import { toast } from "react-toastify";
import { useContext } from "react";
import { CartContext, CartItem } from "../../Pages/cartPage/CartContext";

import {
  StyledForm,
  StyledContainer,
  StyledLabelContainer,
  StyledInputContainer,
  StyledLabel,
  StyledSelect,
  StyledButton,
  StyledInput,
  StyledTotal,
} from "./styled";

export const PaymentForm = () => {
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { cart } = useContext(CartContext);

  const paymentFees = [
    { name: "Card", fee: 0 },
    { name: "PayPal", fee: 0.03 },
    { name: "MB WAY", fee: 0.01 },
    { name: "Gift Card", fee: 0 },
  ];

  const calculateTotalPrice = () => {
    const itemsTotal = cart.reduce(
      (total: number, item: CartItem) => total + item.price,
      0
    );
    const selectedPaymentMethod = paymentFees.find(
      (method) => method.name === paymentMethod
    );
    const fee = selectedPaymentMethod
      ? itemsTotal * selectedPaymentMethod.fee
      : 0;
    const totalPrice = itemsTotal + fee;
    return totalPrice.toFixed(2);
  };

  const totalPrice = calculateTotalPrice();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    if (!email.includes("@")) {
      const message = "Please enter a valid email address.";
      setErrorMessage(message);
      toast.error(message);
      setIsLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const message =
        "The transaction was successfully submitted! You will receive a confirmation email";
      toast.success(message);
    } catch (err) {
      const message = "There was an error. Please try again.";
      setErrorMessage(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toast />
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
              type="number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
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
              {paymentFees.map((method) => (
                <option key={method.name} value={method.name}>
                  {method.name} {method.fee > 0 && `Fee: ${method.fee * 100}%`}
                </option>
              ))}
            </StyledSelect>
          </StyledInputContainer>
        </StyledContainer>
        <StyledTotal>Total: {totalPrice}$</StyledTotal>
        {errorMessage && <p>{errorMessage}</p>}
        <StyledButton type="submit" disabled={isLoading}>
          {isLoading ? "Processing... !" : "Pay"}
        </StyledButton>
      </StyledForm>
    </>
  );
};
