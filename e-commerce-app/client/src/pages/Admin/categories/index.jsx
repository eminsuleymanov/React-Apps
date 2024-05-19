import { useContext } from "react"
import { CategoryContext } from "../../../context/categoriesContext"
import { Table, Button, Popconfirm } from "antd";
const { Column } = Table;

const Categories = () => {
  const {categories,deleteCategory} = useContext(CategoryContext);
  const handleDelete = (id) => {
    deleteCategory(id);
  };

  return (
    <>
      <Table dataSource={categories}  rowKey={categories._id}>
        <Column title="Id" dataIndex="_id" key="_id"  />

        <Column
          sorter={(a, b) => a.name.localeCompare(b.name)}
          title="Name"
          dataIndex="name"
          key="name"
        />

        <Column
          title="Delete"
          key="delete"
          render={(record) => {
            return (
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => handleDelete(record._id)}
              >
                <Button type="" danger>
                  Delete
                </Button>
              </Popconfirm>
            );
          }}
        />
        <Column
          title="Update"
          key="update"
          render={() => {
            return (
              <Button type="" warning>
                Update
              </Button>
            );
          }}
        />
        {/* <Column
          title="Detail"
          key="detail"
          render={(record) => {
            return (
              <Button type="">
                <Link to={`/admin/detail/${record._id}`}>Detail</Link>
              </Button>
            );
          }}
        /> */}
      </Table>
    </>
  )
}

export default Categories