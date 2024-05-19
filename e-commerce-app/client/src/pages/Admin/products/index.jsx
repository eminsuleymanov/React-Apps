import { Table, Button, Popconfirm } from "antd";
const { Column } = Table;
import { Link } from "react-router-dom";
import controller from "../../../services/requests";
import { endpoints } from "../../../services/constants";
import { useContext } from "react";
import { ProductsContext } from "../../../context/productsContext";

const ProductsAdmin = () => {
  // const data = useOutletContext();
  const { products, setProducts } = useContext(ProductsContext);
  console.log(products)
  async function handleDelete(id) {
    setProducts((currentProducts) => {
      return currentProducts.filter((x) => x._id != id);
    });
    controller.delete(endpoints.products, id);
  }

  return (
    <>
      <Table dataSource={products}>
        <Column title="Id" dataIndex="_id" key="_id" />

        <Column
          sorter={(a, b) => a.name.localeCompare(b.name)}
          title="Name"
          dataIndex="name"
          key="name"
        />

        <Column
          title="Image"
          key="image"
          render={(record) => {
            return (
              <img
                style={{ width: "70px", height: "70px", objectFit: "contain" }}
                src={record.imgSrc}
              />
            );
          }}
        />
        {/* <Column
        sorter={(a, b) => a.population - b.population}
        title="Population"
        dataIndex="population"
        key="population"
      /> */}
        <Column title="Stock Count" dataIndex="stockCount" key="stockCount" />
        <Column title="Created at" dataIndex="createdAt" key="createdAt" />

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
        <Column
          title="Detail"
          key="detail"
          render={(record) => {
            return (
              <Button type="">
                <Link to={`/admin/detail/${record._id}`}>Detail</Link>
              </Button>
            );
          }}
        />
      </Table>
    </>
  );
};

export default ProductsAdmin;
