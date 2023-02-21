import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";
import SpecialCard from "../SpecialCard";
import styles from "./Specials.module.css";

const specials = [
  {
    title: "Greek salad",
    price: "$12.99",
    image: "/images/greek-salad.jpg",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    title: "Bruchetta",
    price: "$5.99",
    image: "/images/hermes-rivera.jpg",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    image: "/images/amirali-mirhashemian.jpg",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Specials() {
  const navigate = useNavigate();

  const redirect = () => navigate("/order-online");

  return (
    <div className={styles.specialsContainer}>
      <Container>
        <div className={styles.header}>
          <h2>This weeks specials!</h2>
          <Button onClick={redirect}>Online Menu</Button>
        </div>
        <div className={styles.cardContainer}>
          {specials.map(({ title, price, image, description }, index) => (
            <SpecialCard title={title} price={price} image={image} description={description} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Specials;
