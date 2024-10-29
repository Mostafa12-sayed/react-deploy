import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function ViewMore({ pathname, classname }) {
  return (
    <div class="btn-area">
      <Link to={pathname}>
        <button className={classname}>
          View More
          <span>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </button>
      </Link>
    </div>
  );
}

export default ViewMore;
