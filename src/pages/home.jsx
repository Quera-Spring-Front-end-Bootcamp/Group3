import { useState } from "react";
import CreateNewBoardTitle from "../components/BoardTitle/CreateNewBoardTitle";

function Home() {
  const [openNewBoardModal, setOpenNewBoardModal] = useState(false);
  const addNewBoardTitleClickHandler = () => {
    setOpenNewBoardModal(true);
  };
  return (
    <div>
      <button onClick={addNewBoardTitleClickHandler}>کلیک کنید</button>
      <CreateNewBoardTitle
        setOpenNewBoardModal={setOpenNewBoardModal}
        openNewBoardModal={openNewBoardModal}
      />
    </div>
  );
}

export default Home;
