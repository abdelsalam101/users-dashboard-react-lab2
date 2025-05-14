import { useState } from "react";
import users from "../utils/users.json";
import UserCard from "./UserCard.jsx";
export default function UserList() {
  const [userList, setUserList] = useState(users);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const filteredUsers = users.filter((user) =>
      user.email.toLowerCase().includes(search.toLowerCase())
    );
    setUserList(filteredUsers);
  };
  const handleReset = () => {
    setUserList(users);
    setSearch("");
  };

  return (
    <div>
      <h1 className="text-center">User List</h1>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>

        <button className="btn btn-danger ms-2" onClick={handleReset}>
          Reset
        </button>
      </div>
      <hr />
      <div className="row row-cols-2 g-4 row-cols-md-4">
        {userList.map((user) => (
          <div className="col" key={user.id}>
            <UserCard data={user} />
          </div>
        ))}
      </div>
    </div>
  );
}
