import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import controller from "../../../services/requests";
import { endpoints } from "../../../services/constants";
import { Avatar, Card } from 'antd';
import Meta from "antd/es/card/Meta";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await controller.getOne(endpoints.products, id);
        setProduct(result.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Card key={product.id}
             style={{
               width: 350,
               margin: '10px'
             }}
             cover={
               <img
                 alt="example"
                 src={product.imgSrc}
                 style={{width:'250px',margin:' 15px 50px',height:"200px",objectFit:"contain"}}
               />
             }
             actions={[
                // <InfoCircleOutlined key="detail"/>
            //    <EditOutlined key="edit" />,
            //    <EllipsisOutlined key="ellipsis" />,
             ]}
           >
             <Meta
               avatar={<Avatar src={product.flagImg} />}
               title={product.name}
               description={product.salePrice}
             />
             <Meta title={`Stock count: ${product.stockCount}`}/>
           </Card>
  )
}

export default ProductDetail