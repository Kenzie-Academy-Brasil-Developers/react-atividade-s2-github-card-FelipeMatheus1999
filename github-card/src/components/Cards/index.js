import "./style.css";

const Cards = ({ api }) => {
  const cardsSuccess = api.filter((value) => {
    return value.full_name !== undefined;
  });

  const card = cardsSuccess.map((value, index) => {
    return (
      <div key={index} className="card">
        <img src={`${value.owner.avatar_url}`} alt="" className="card__image" />
        <div className="card__details">
          <h1 className="card__title">{value.full_name}</h1>
          <span className="card__description">{value.description}</span>
        </div>
      </div>
    );
  });

  return card;
};

export default Cards;
