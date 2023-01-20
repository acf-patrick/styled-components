import CardStyled from "./styles/Card.styled";

interface ICardProps {
  id: number;
  title: string;
  body: string;
  image: string;
}

function Card({ item }: { item: ICardProps }) {
  return (
    <CardStyled layout={(item.id % 2) ? null : "row-reverse"}>
      <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
      <div>
        <img src={"/src/assets/images/" + item.image} alt={item.image} />
      </div>
    </CardStyled>
  );
}

export default Card;
