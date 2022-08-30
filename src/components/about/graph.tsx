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

  const handleDisplay = (index: number, year:number) => ({ index, year });
  return (

    <div className="timeline">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            {
              timelineList.map(({ id, year }) => (
                <button type="button" key={id} onClick={(event: React.MouseEvent<HTMLElement>) => handleDisplay(id, year)}>{year}</button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default TimeLine;
