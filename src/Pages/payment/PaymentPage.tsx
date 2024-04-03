import { NavbarLayout } from "../../components/Navbar/Navbar";
import { PaymentForm } from "../../components/PaymentForm/PaymentForm";
import { MainSection } from "./main";

const PaymentPage = () => {
  return (
    <>
      <NavbarLayout />
      <MainSection />
      <PaymentForm />
    </>
  );
};
export default PaymentPage;