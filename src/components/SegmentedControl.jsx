import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

import "./style.css";

const SegmentedControl = ({
  name,
  segments,
  initalIndex = 0,
  onChange,
  controlRef,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(initalIndex);

  const handleSegmentClick = (index) => {
    setSelectedIndex(index);
    onChange(segments[index].value, index);
  };

  useEffect(() => {
    const activeSegmentRef = segments[selectedIndex].ref;
    const { offsetWidth, offsetLeft } = activeSegmentRef.current;
    const { style } = controlRef.current;

    style.setProperty("--highlight-width", `${offsetWidth}px`);
    style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
  }, [selectedIndex, onChange, segments, controlRef]);

  return (
    <div className="controls-container" ref={controlRef}>
      <div className="controls">
        {segments.map((segment, index) => {
          const selected = index === selectedIndex;

          return (
            <div
              key={segment.value}
              className={`segment ${selected ? "active" : "inactive"}`}
              ref={segment.ref}
            >
              <input
                type="radio"
                value={segment.value}
                id={segment.label}
                name={name}
                onChange={() => handleSegmentClick(index)}
                checked={selected}
              />
              <label htmlFor={segment.label}>{segment.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

SegmentedControl.propTypes = {
  name: PropTypes.string.isRequired,
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      ref: PropTypes.object.isRequired,
    })
  ).isRequired,
  initalIndex: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  controlRef: PropTypes.object.isRequired,
};

export default SegmentedControl;
