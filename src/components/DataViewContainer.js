import React from 'react';
import { ShotChart } from './ShotChart';

export class DataViewContainer extends React.Component {
    render() {
        return (
          <div className="data-view">
          <ShotChart
              playerId={this.props.playerId}
              minCount={2}
              chartType={"hexbin"}
              displayToolTips={true}
          />
          </div>
        );
    }
}
