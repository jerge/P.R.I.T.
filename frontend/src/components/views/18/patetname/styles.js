import styled from "styled-components";

import prit04 from "../../../../prit04.jpg";
import prit05 from "../../../../prit05.jpg";
import prit06 from "../../../../prit06.jpg";
import prit07 from "../../../../prit07.jpg";
import prit08 from "../../../../prit08.jpg";
import prit09 from "../../../../prit09.jpg";
import prit10 from "../../../../prit10.jpg";
import prit11 from "../../../../prit11.jpg";
import prit12 from "../../../../prit12.jpg";
import prit13 from "../../../../prit13.jpg";
import prit14 from "../../../../prit14.jpg";
import prit15 from "../../../../prit15.jpg";
import prit16 from "../../../../prit16.jpg";
import prit17 from "../../../../prit17.jpg";

export const ListContainer = styled.div`
  font-family: "Georgia";
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: 60%;
`;

export const PatetHeader = styled.h1`
  padding-top: 30px;
  font-weight: 400;
`;

export const PatetList = styled.ul`
  list-style: circle;
  text-align: left;
  float: left;
`;

export const PatetName = styled.li``;

function Imageize(year, widthheightratio) {
  return styled.div`
    background-image: url(${year});
    background-size: contain;
    width: 600px;
    height: ${600 / widthheightratio}px;
    margin: 20px;
    float: left;
  `;
}

export const Prit04image = Imageize(prit04, 1024 / 768);
export const Prit05image = Imageize(prit05, 659 / 558);
export const Prit06image = Imageize(prit06, 767 / 1024);
export const Prit07image = Imageize(prit07, 590 / 850);
export const Prit08image = Imageize(prit08, 767 / 1024);
export const Prit09image = Imageize(prit09, 600 / 399);
export const Prit10image = Imageize(prit10, 500 / 375);
export const Prit11image = Imageize(prit11, 656 / 354);
export const Prit12image = Imageize(prit12, 960 / 666);
export const Prit13image = Imageize(prit13, 5184 / 3456);
export const Prit14image = Imageize(prit14, 1398 / 932);
export const Prit15image = Imageize(prit15, 1024 / 683);
export const Prit16image = Imageize(prit16, 5472 / 3648);
export const Prit17image = Imageize(prit17, 3578 / 2344);
