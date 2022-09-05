import React, { useState } from 'react';
import TIMELINE__SCHEMA from './timeLine.json';

interface obj {
    id: number,
    title: string,
    image: string,
    year: number,
    content: string
}
function TimeLine() {
  const [active, setActive] = useState(true);
  const timelineList: obj[] = TIMELINE__SCHEMA;
  // timelineList.reduce((arr, objs) => {
  //   if (!arr.some((o: any) => o.year === objs.year)) {
  //     //
  //     return 'helo';
  //   }
  //   return arr;
  // }, []);

  const handleDisplay = (year:number) => {
    const filtered = timelineList.filter((val) => (val.year === year));
    console.log(filtered);
  };
  return (

    <div className="timeline">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            {
              timelineList.map(({ id, year }) => (
                <div key={id} className="p-2 d-flex d-column d-row">
                  <button type="button" onClick={(event: React.MouseEvent<HTMLElement>) => handleDisplay(year)}>{year}</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default TimeLine;
