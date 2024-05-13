import { Card } from 'antd';
import Meta from "antd/es/card/Meta";
import { useGetMovieQuery } from '../../features/movie/movieQuerySlice';
const DetailPage = (id) => {
    const { data:movie } = useGetMovieQuery(id);

  return (
    <>
     <Card key={movie.id}
             style={{
               width: 350,
               margin: '10px'
             }}
             cover={
               <img
                 alt="example"
                 src={movie.posterImg}
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
               title={movie.title}
               description={movie.releaseYear}
             />
             <Meta title={`Stock count: ${movie.genre}`}/>
           </Card>
    </>
  )
}

export default DetailPage