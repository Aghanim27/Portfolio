import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Computer, Work } from "@mui/icons-material";

function WorkPage() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#00171F">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - Present"
          iconStyle={{ background: "#00171F", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            NY Chargrill{" "}
          </h3>
          <p>Part-time Service Crew</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default WorkPage;
