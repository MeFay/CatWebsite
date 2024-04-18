import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import {
  updateForm,
  setLoading,
  setErrorMessage,
  resetForm,
} from "../../store/features/paymentForm";
import { cartListSlice } from "../../store/features/cartList";
import { toast } from "react-toastify";
import { Toast } from "../Toast/Toast";
import { CartItem } from "../../types";
import {
  StyledForm,
  StyledContainer,
  StyledLabelContainer,
  StyledLabel,
  StyledInputContainer,
  StyledInput,
  StyledSelect,
  StyledTotal,
  StyledButton,
} from "./styled";
import { markCatAsSold } from "../../store/features/catList";

const paymentFees = [
  { name: "Card", fee: 0 },
  { name: "PayPal", fee: 0.03 },
  { name: "MB WAY", fee: 0.01 },
  { name: "Gift Card", fee: 0 },
];

export const PaymentForm = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const formState = useSelector((state: RootState) => state.paymentForm);
  const dispatch = useDispatch();

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
    dispatch(setLoading(true));
    dispatch(setErrorMessage(null));

    if (cart.length === 0) {
      toast.error("Your cart is empty. Please add items before checking out.");
      dispatch(setLoading(false));
      return;
    }

    if (!formState.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      dispatch(setLoading(false));
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(
        "The transaction was successfully submitted! You will receive a confirmation email."
      );
      cart.forEach((item) => {
        if (item.id.startsWith("cat")) {
          dispatch(markCatAsSold(item.id));
        }
      });
      dispatch(cartListSlice.actions.resetCart());
    } catch (err) {
      toast.error("There was an error. Please try again.");
    } finally {
      dispatch(setLoading(false));
      dispatch(resetForm());
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    dispatch(updateForm({ [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (selectedOption: any) => {
    dispatch(updateForm({ paymentMethod: selectedOption.value }));
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

        <StyledButton type="submit">Pay</StyledButton>
      </StyledForm>
    </>
  );
};
