import React from 'react';
import LeelItem from './leel_item';
import NewPost from './new_post';

class LeelIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchLeels();

    }

    render() {
        const {leels} = this.props;

        return (
            
            <div className="leels">
                <ul className="new_post"><NewPost />
                </ul>
                
                
                <ul>

            {
                leels.map(leel=>(
                    <LeelItem
                        key={`leel${leel.id}`}
                        leel = {leel}
                         likeLeel = {leels.likeLeel}
                         unLikeLeel = {leels.unLikeLeel} />
                         
                )) }
                </ul>
            </div>
                )}
}

export default LeelIndex;