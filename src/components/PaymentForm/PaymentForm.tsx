import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../../Pages/cart/CartContext";
import { CartItem } from "../../types";
import { Toast } from "../Toast/Toast";

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

const paymentFees = [
  { name: "Card", fee: 0 },
  { name: "PayPal", fee: 0.03 },
  { name: "MB WAY", fee: 0.01 },
  { name: "Gift Card", fee: 0 },
];

export const PaymentForm = () => {
  const [formState, setFormState] = useState({
    address: "",
    phoneNumber: "",
    email: "",
    paymentMethod: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [, setErrorMessage] = useState<string | null>(null);
  const { cart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    const itemsTotal = cart.reduce(
      (total: number, item: CartItem) => total + item.price * item.quantity,
      0
    );
    const selectedPaymentMethod = paymentFees.find(
      (method) => method.name === formState.paymentMethod
    );
    const fee = selectedPaymentMethod
      ? itemsTotal * selectedPaymentMethod.fee
      : 0;
    return (itemsTotal + fee).toFixed(2);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    if (cart.length === 0) {
      toast.error("Your cart is empty. Please add items before checking out.");
      setIsLoading(false);
      return;
    }

    if (!formState.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(
        "The transaction was successfully submitted! You will receive a confirmation email."
      );
    } catch (err) {
      toast.error("There was an error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (selectedOption: any) => {
    setFormState({
      ...formState,
      paymentMethod: selectedOption.value,
    });
  };

  const options = paymentFees.map((method) => ({
    value: method.name,
    label: `${method.name} ${
      method.fee > 0 ? `Fee: ${method.fee * 100}%` : ""
    }`,
  }));

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
              name="address"
              value={formState.address}
              onChange={handleChange}
              required
            />
            <StyledInput
              type="number"
              name="phoneNumber"
              value={formState.phoneNumber}
              onChange={handleChange}
              required
            />
            <StyledInput
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
            />
            <StyledSelect options={options} onChange={handleSelectChange} />
          </StyledInputContainer>
        </StyledContainer>

        <StyledTotal>Total: {calculateTotalPrice()}$</StyledTotal>

        <StyledButton type="submit" disabled={isLoading}>
          {isLoading ? "Processing... !" : "Pay"}
        </StyledButton>
      </StyledForm>
    </>
  );
};
