import { Link } from "react-router-dom";

export const StaffList = ({ staffList }) => {
  console.log(staffList);

  return (
    <div>
      <h1>Staff List Page</h1>
      {staffList.map((user) => (
        <div key={user.id} style={{ marginBottom: "2rem", paddingTop: "10px" }}>
          <h2>Name: {user.name}</h2>
          <h3>Age: {user.age}</h3>
          <h4>Salary: {user.salary}</h4>
          <Link to={`/staffs/${user.id}`}>
            <button>View more</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
