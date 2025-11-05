import "./index.css";

export const ContactCard = ({ name, tel, email, icon, address }: Contact) => {
  return (
    <div className="contactCard">
      {!!icon?.length && (
        <div className="icons">
          {icon.map((image) => (
            <img src={image} />
          ))}
        </div>
      )}
      <div className="info">
        {!!name?.length && <p>{name?.join(" ")}</p>}
        {!!tel?.length && tel.map((item) => <p>{item}</p>)}
        {!!email?.length && email.map((item) => <p>{item}</p>)}
        {!!address?.length && address.map((item) => <p>{item}</p>)}
      </div>
    </div>
  );
};
