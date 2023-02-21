import Header from "../../components/Header";
import Main from "../../components/Main";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import BookingForm from "../../components/BookingForm";

function BookingPage() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <h1>Reservations</h1>
          <BookingForm />
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default BookingPage;
