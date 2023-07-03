import { useState } from "react";
import Button from "../components/Button";
import InfoTask from '../components/InfoTask/InfoTask';
function Home() {
  const [infoTask,setInfoTask] = useState(false)
  return <div className="flex flex-row justify-center items-center">
    <Button  title="Info Task" handleClick={() => setInfoTask(true)} />
    {infoTask ? <InfoTask/> : null}
  </div>;
}

export default Home;
