import { useState } from "react";
import Button from "../components/Button";
import InfoTask from "../components/InfoTask/InfoTask";
function Home() {
  const [infoTaskOpen, setInfoTaskOpen] = useState(false);
  // return <div>Home Pgae</div>;
  return (
    <div className="flex flex-row justify-center items-center">
      <Button title="Info Task" handleClick={() => setInfoTaskOpen(true)} />
      {infoTaskOpen ? <InfoTask infoTaskOpen= {infoTaskOpen} setInfoTaskOpen = {setInfoTaskOpen} /> : null }
    </div>
  );
}

export default Home;
