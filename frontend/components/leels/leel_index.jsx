import React from 'react';
import LeelItem from './leel_item';
import NewPost from './new_post';
// import {likeLeel, unLikeLeel} from '../../actions/leels';

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
                <div className="leel_row">
    <div className="avatar_post">
        <img src={window.avatarURL} />
    </div>
                
                <div className="new_post"><NewPost />
                </div>
                </div>
                
                
                <ul>

            {
                leels.reverse().map(leel=>(
                    <LeelItem
                        key={`leel${leel.id}`}
                        leel = {leel}
                         likeLeel = {this.props.likeLeel}
                         unLikeLeel = {this.props.unLikeLeel} />
                         
                )) 
                
                }
                </ul>
            </div>
                )}
}

export default LeelIndex;