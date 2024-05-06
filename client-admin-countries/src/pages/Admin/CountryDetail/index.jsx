import { useState, useEffect } from 'react';
import { endpoints } from "../../../API/constants";
import { Avatar, Card } from 'antd';
import { getOne } from "../../../API/services/requests";
import { useParams } from "react-router-dom";

const { Meta } = Card;

const CountryDetailAdmin = () => {
  const { id } = useParams();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getOne(endpoints.countries, id);
        setCountry(result.data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Card 
        style={{
          width: 350,
          margin: '10px'
        }}
        cover={
          <img
            alt="example"
            src={country.flagImg}
            style={{ width:'250px', margin:' 15px 50px', height:"200px", objectFit:"contain" }}
          />
        }
      >
        <Meta
          avatar={<Avatar src={country.flagImg} />}
          title={country.name}
          description={country.description}
        />
        <Meta title={`Capital: ${country.capital}`}/>
        <Meta description={`Population: ${country.population}`}/>
      </Card>
    </>
  );
}

export default CountryDetailAdmin;
