import { NavbarLayout } from "../../components/Navbar/Navbar";
import { PaymentForm } from "../../components/PaymentForm/PaymentForm";
import { MainSection } from "./main";

export const PaymentPage = () => {
  return (
    <>
      <NavbarLayout />
      <MainSection />
      <PaymentForm />
    </>
  );
};