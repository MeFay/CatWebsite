import { NavbarLayout } from "../../Navbar/Navbar";
import { PaymentForm } from "../../components/Payment/Payment";
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
