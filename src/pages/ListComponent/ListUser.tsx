import Table from "react-bootstrap/Table";
import { DetailUser } from "../../models/userModel";
import { ROUTE_PATH } from "../../constants/appConstants";
import { useNavigate } from "react-router-dom";
interface IMyProps {
    data: DetailUser[];
  }
  
const ListUser = (props: IMyProps) => {
    let { data } = { ...props };
    const navigate = useNavigate();

    const handleRedirectDetail = (id: number) => {
      navigate("/" + ROUTE_PATH.detail + `/${id}`);
    };

    return (
      <div className="container-table">
        <Table striped bordered hover>
          <thead>
            <tr className="header-table-list">
              <th>#</th>
              <th>Name</th>
              <th>User name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user: any, key: any) => {
              return (
                <tr key={key} className="list-user-name">
                  <td>{user.id}</td>
                  <td
                    className="col-user-name"
                    onClick={() => {
                      handleRedirectDetail(user.id);
                    }}
                  >
                    {user.name}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <p>street: {user.address?.street}</p>
                    <p>suite: {user.address?.suite}</p>
                    <p>city: {user.address?.city}</p>
                    <p>zipcode: {user.address?.zipcode}</p>
                  </td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.company?.name}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };

  export default ListUser