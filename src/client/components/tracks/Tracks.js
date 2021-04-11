import React, { useContext } from 'react';
import { Context } from '../Context';
import Spinner from '../spinner/Spinner';
import Track from '../tracks/Track';

const Tracks = () => {
  const [state] = useContext(Context);
  const { track_list, heading } = state;

  return (
    <Context.Consumer>
      {value => {
        const { track_list } = value[0];

        if (track_list === undefined || track_list.length === 0) {
          return <Spinner/>
        } else {
          return (
            <React.Fragment>
              <h1 className="text-center mb-4">{heading}</h1>
                <div className="row">{
                  track_list.map((item) =>{
                    return (
                      <Track
                        key={item.track.track_id}
                        track={item.track}
                      />
                    )
                  })
                }
                </div>
            </React.Fragment>
          )
        }
      }}
    </Context.Consumer>
  )
}

export default Tracks;
