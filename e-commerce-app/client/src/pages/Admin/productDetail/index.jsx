import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { LeftCircleFilled } from "@ant-design/icons";
const AdminProductDetail = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState([]);
  const data = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    setProduct(data.products.find((x) => x.id == _id));
  }, [_id, data.products]);

  return (
    <>
      {product && (
        <Card
          key={product._id}
          style={{
            width: 350,
            margin: "10px",
          }}
          cover={
            <img
              alt="example"
              src={product.imgSrc}
              style={{
                width: "250px",
                margin: " 15px 50px",
                height: "200px",
                objectFit: "contain",
              }}
            />
          }
          actions={[
            <LeftCircleFilled
              style={{ fontSize: "20px" }}
              onClick={() => {
                navigate("/products");
              }}
              key="back"
            />,
          ]}
        >
          <Meta
            avatar={<Avatar src={product.imgSrc} />}
            title={product.name}
            description={`Sale Price: ${product.salePrice}`}
          />
          <Meta title={`Stock count: ${product.stockCount}`} />
        </Card>
      )}
    </>
  );
};

export default AdminProductDetail;
