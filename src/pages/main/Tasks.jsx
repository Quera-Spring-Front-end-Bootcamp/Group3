import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import AXIOS from "../../Utils/axios.js";

import Calendar from "../../components/Calendar";
import ProjectList from "../../components/ListView/ProjectList";
import VerticalDivider from "../../components/VerticalDivider";
import MainLayoutHeaderItem from "../../components/MainLayoutHeaderItem";
import ListCheckIcon from "../../assets/Icons/ListCheckIcon";
import ArtBoardIcon from "../../assets/Icons/ArtBoardIcon";
import CalendarIcon from "../../assets/Icons/CalendarIcon";
import ShareIcon from "../../assets/Icons/ShareIcon";
import ShareCard from "../../components/ShareCard/ShareCard";
import ColumnViewComponent from "../../components/ColumnViewComponent";
import store from "../../redux/store";
import { setBoards } from "../../redux/slices/boardSlice";

function Tasks() {
  const [openShareProjectModal, setOpenShareProjectModal] = useState(false);
  const [projectName, setProjectName] = useState();
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setIsOpenFilter(true);
  };
  const { view } = useParams();
  const { projectId } = useParams();

  function handleOpenShareProject() {
    setOpenShareProjectModal(true);
  }

  const handleGetProjectData = useCallback(
    async function handleGetProjectData() {
      try {
        const response = (await AXIOS.get(`/board/${projectId}`)).data.data;
        store.dispatch(setBoards(response));
      } catch (e) {
        console.log(e);
      }
    },
    [projectId]
  );
  const handleGetProjectName = useCallback(
    async function handleGetProjectName() {
      try {
        const response = (await AXIOS.get(`/projects/${projectId}`)).data.data;
        setProjectName(response.name);
      } catch (e) {
        console.log(e);
      }
    },
    [projectId]
  );

  useEffect(() => {
    handleGetProjectData();
    handleGetProjectName();
  }, [handleGetProjectData, handleGetProjectName]);

  return (
    <>
      <header className="flex flex-row items-center justify-between fixed top-0 right-[305px] left-3">
        <div className="flex flex-row items-center h-20 gap-3">
          <div className="font-semibold text-xl">{projectName}</div>
          <VerticalDivider />
          <MainLayoutHeaderItem
            icon={<ListCheckIcon />}
            title="نمایش لیستی"
            link="listView"
          />
          <VerticalDivider />
          <MainLayoutHeaderItem
            icon={<ArtBoardIcon />}
            title="نمایش ستونی"
            link="columnView"
          />
          <VerticalDivider />
          <MainLayoutHeaderItem
            icon={<CalendarIcon />}
            title="تقویم"
            link="calendarView"
          />
          <VerticalDivider />
        </div>
        <button
          className="flex flex-row items-center"
          onClick={() => handleOpenShareProject()}
        >
          <div>{<ShareIcon />}</div>
          <span className="mr-2 font-normal text-base">اشتراک گذاری</span>
        </button>
        {openShareProjectModal && (
          <ShareCard
            openShareModal={openShareProjectModal}
            setOpenShareModal={setOpenShareProjectModal}
            title="اشتراک گذاری پروژه"
          />
        )}
      </header>
      <div>
        {view === "listView" && (
          <ProjectList
            projectName={projectName}
            isOpenFilter={isOpenFilter}
            setIsOpenFilter={setIsOpenFilter}
            handleOpenFilter={handleOpenFilter}
          />
        )}
        {view === "columnView" && (
          <ColumnViewComponent
            isOpenFilter={isOpenFilter}
            setIsOpenFilter={setIsOpenFilter}
            handleOpenFilter={handleOpenFilter}
          />
        )}
        {view === "calendarView" && <Calendar />}
      </div>
    </>
  );
}

export default Tasks;
