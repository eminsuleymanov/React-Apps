import { useOutletContext } from "react-router-dom"


const Dashboard = () => {
    const context = useOutletContext();
    console.log(context);
  return (
    <h2 className="centered">
        Countries sayi: {context.countries.length}
        
    </h2>
  )
}

export default Dashboard