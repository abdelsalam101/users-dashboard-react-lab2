export default function UserCard(props) {
  const { data } = props;
  const isAdmin = data.role === "admin";
  const isModerator = data.role === "moderator"; 
  const isUser = data.role === "user";
  
  return (
    <div className="card h-100 text-center">
      <img src={data.image} className="card-img-top" />
      <div className="card-body">
        <h5 className={`badge bg-${isAdmin ? "danger" : isModerator ? "warning" : isUser ? "success" : "secondary"}`}>
          {data.role}
        </h5>
        <h5 className="card-title">{data.firstName + " " + data.lastName}</h5>
        <h6 className="card-text">{data.email}</h6>
        <h6 className="card-text"> {data.phone}</h6>
        <h6 className="card-text"> {data.birthDate}</h6>
      </div>
    </div>
  );
}
