import { useState, useContext } from "react";
import { toast } from "react-toastify";
import Select from "react-select";
import { CartContext, CartItem } from "../../Pages/cartPage/CartContext";
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { cart, completePurchase } = useContext(CartContext);

  const calculateTotalPrice = () => {
    const itemsTotal = cart.reduce(
      (total: number, item: CartItem) => total + item.price * item.quantity,
      0
    );

    console.log(itemsTotal.toString);
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
      const message =
        "Your cart is empty. Please add items before checking out.";
      setErrorMessage(message);
      toast.error(message);
      setIsLoading(false);
      return;
    }

    if (!formState.email.includes("@")) {
      const message = "Please enter a valid email address.";
      setErrorMessage(message);
      toast.error(message);
      setIsLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(
        "The transaction was successfully submitted! You will receive a confirmation email"
      );
      completePurchase();
    } catch (err) {
      const message = "There was an error. Please try again.";
      setErrorMessage(message);
      toast.error(message);
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
            <Select options={options} onChange={handleSelectChange} />
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
