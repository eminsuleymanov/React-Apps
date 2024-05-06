import { useEffect, useState } from "react";
import { endpoints } from "../../../API/constants";
import { getAll } from "../../../API/services/requests";
import { InfoCircleOutlined} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const Countries = () => {
    const [countries, setCountries] = useState([]);

  async function getCountries() {
    const countries = await getAll(endpoints.countries);
    // console.log(countries.data);
    setCountries(countries.data);
  }

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <>
    <div style={{marginTop: '40px',flexWrap:'wrap'}} className="centered">
        {countries && countries.map((country)=>{
            // console.log(country.name);
             return <Card key={country.id}
             style={{
               width: 350,
               margin: '10px'
             }}
             cover={
               <img
                 alt="example"
                 src={country.flagImg}
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
               avatar={<Avatar src={country.flagImg} />}
               title={country.name}
               description={country.description}
             />
             <Meta title={`Capital: ${country.capital}`}/>
             <Meta description={`Population: ${country.population}`}/>
           </Card>

        })}

    </div>
   
    </>
  )
}

export default Countries