import Header from "../../components/Header";
import Main from "../../components/Main";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

function ConfirmedBooking() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <h1>Confirmed Booking</h1>
          <p>Your booking has been confirmed</p>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default ConfirmedBooking;
