import { useParams } from "react-router-dom";

const calcSalary = (salary) => {
  const netSalary = salary * 2;
  return netSalary;
};

export const StaffDetail = ({ staffList }) => {
  const params = useParams();
  const staffId = params.staffId * 1;

  // console.log(staffList.length);

  // console.log("Staff: ", typeof convertStaffId);
  console.log(params);
  // console.log(staffId);

  const staff = staffList.filter((staff) => {
    return staff.id === staffId;
  });
  // [staff] Array  - staff bo di []

  console.log(staff);
  console.log(staff[0]);

  return (
    <div>
      <h1>Staff Detail Page</h1>
      <h2>Name: {staff[0].name}</h2>
      <h3>Age: {staff[0].age}</h3>
      <h4>Salary: {calcSalary(staff[0].salary)}</h4>
    </div>
  );
};
