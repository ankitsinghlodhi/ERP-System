export default function Card({ name, image, clicked }) {
  return (
    <div className="card" onClick={() => clicked(name)}>
      <img className="image" src={image} alt="" />
      <h2>{name}</h2>
    </div>
  );
}
