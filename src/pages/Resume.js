import React from "react";
import { Tab } from "semantic-ui-react";
import EducationHistories from "../components/EducationHistories";
import Trainings from "../components/Trainings";
import WorkingHistories from "../components/WorkingHistories";

const Resume = () => {
  const panes = [
    {
      menuItem: "Works",
      render: () => (
        <Tab.Pane attached={false}>
          <WorkingHistories />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Educations",
      render: () => (
        <Tab.Pane attached={false}>
          <EducationHistories />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Trainings",
      render: () => (
        <Tab.Pane attached={false}>
          <Trainings />
        </Tab.Pane>
      )
    }
  ];
  return (
    <div className="animated fadeIn">
      <Tab
        menu={{ color: "teal", secondary: true, pointing: true }}
        panes={panes}
      />
    </div>
  );
};

export default Resume;
