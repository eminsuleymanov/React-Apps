import { Table, Button, Popconfirm } from "antd";

const { Column } = Table;
import { Link, useOutletContext } from "react-router-dom";
import { deleteOne } from "../../../API/services/requests";
import { endpoints } from "../../../API/constants";


const AdminCountries = () => {
  const data = useOutletContext();

  async function handleDelete(id) {
    data.setCountries((currentCountries) => {
      return currentCountries.filter((x) => x.id != id);
    })
    deleteOne(endpoints.countries,id);
  }

  return (
    <>
     <Table dataSource={data.countries}>
      <Column title="Id" dataIndex="id" key="id" />

      <Column sorter={(a, b) => a.name.localeCompare(b.name)} title="Name" dataIndex="name" key="name" />

      <Column  title="Capital" dataIndex="capital" key="capital" />
      <Column
        sorter={(a, b) => a.population - b.population}
        title="Population"
        dataIndex="population"
        key="population"
      />

      <Column
        title="Delete"
        key="delete"
        render={(record) => {
          return  <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
          <Button type="" danger>Delete</Button>
        </Popconfirm>
           
        }}
      />
      <Column
        title="Update"
        key="update"
        render={() => {
          return <Button type="" warning>Update</Button>;
        }}
      />
      <Column
        title="Detail"
        key="detail"
        render={(record) => {
          return <Button type=""  ><Link to={`/admin/detail/${record.id}`}>Detail</Link></Button>;
        }}
      />
    </Table>
  </>
  )
}

export default AdminCountries