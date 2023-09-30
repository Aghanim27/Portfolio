import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Computer } from "@mui/icons-material";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#00171F">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009 - 2014"
          iconStyle={{ background: "#00171F", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            No.24 BEHS, Mandalay, Myanmar{" "}
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014-2020"
          iconStyle={{ background: "#00171F", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Medicine, Mandalay, Myanmar
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - present"
          iconStyle={{ background: "#00A8E8", color: "#fff" }}
          icon={<Computer />}
        >
          <h3 className="vertical-timeline-element-title">
            Started Learning Programming
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
