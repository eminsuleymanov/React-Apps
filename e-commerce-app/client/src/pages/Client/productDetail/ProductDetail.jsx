import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const data = useOutletContext();
  useEffect(() => {
    setProduct(data.products.find((x) => x.id == id));
  }, [id, data.products]);

  return (
    <>
      {product && (
        <Card
          key={product.id}
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
          actions={
            [
              // <InfoCircleOutlined key="detail"/>
              //    <EditOutlined key="edit" />,
              //    <EllipsisOutlined key="ellipsis" />,
            ]
          }
        >
          <Meta
            avatar={<Avatar src={product.flagImg} />}
            title={product.name}
            description={product.salePrice}
          />
          <Meta title={`Stock count: ${product.stockCount}`} />
        </Card>
      )}
    </>
  );
};

export default ProductDetail;
