import { useState } from "react";
import BoardTitle from "../../components/BoardTitle/BoardTitle";
import CreateNewBoardTitle from "../../components/BoardTitle/CreateNewBoardTitle";

function ColumnView() {
  const [openNewBoardModal, setOpenNewBoardModal] = useState(false);
  const addNewBoardTitleClickHandler = () => {
    setOpenNewBoardModal(true);
  };
  return (
    <div>
      <BoardTitle addNewBoardTitleClickHandler={addNewBoardTitleClickHandler} />
      <CreateNewBoardTitle
        setOpenNewBoardModal={setOpenNewBoardModal}
        openNewBoardModal={openNewBoardModal}
      />
    </div>
  );
}

export default ColumnView;
