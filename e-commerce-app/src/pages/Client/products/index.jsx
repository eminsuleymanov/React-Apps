import { InfoCircleOutlined} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useOutletContext } from 'react-router-dom';
const { Meta } = Card;

const Products = () => {
  const data = useOutletContext();
  console.log(data);

  return (
    <>
    <div style={{marginTop: '40px',flexWrap:'wrap'}} className="centered">
        {data.products && data.products.map((product)=>{
            // console.log(product.name);
             return <Card key={product.id}
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
                <InfoCircleOutlined key="detail"/>
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

        })}

    </div>
   
    </>
  )
}

export default Products