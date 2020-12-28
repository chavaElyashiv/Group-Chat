import React from 'react';
import './ConversationSearch.css';
import { connect } from 'react-redux'
import {actions} from '../../redux/Actions/actions'
function mapStateToProps(state) {
  return {
      hangouts: state.hangouts,
      filteredHangouts: state.filteredHangouts
  }

}

const mapDispatchToProps = (dispatch) => ({
  setSearchReasult: (filteredHangouts) => dispatch(actions.setFilteredHangouts(filteredHangouts))
  
})

export default connect(mapStateToProps,mapDispatchToProps)(function ConversationSearch(props) {
  const conversations=props.hangouts;
  const {setSearchReasult} = props
  let filteredHangouts=props.filteredHangouts
  
  filteredHangouts=conversations;
  function search (eve) {
  
    if (eve != "") {
        console.log(eve);
        searchConversations(eve)
    } else {
      filteredHangouts=conversations 
      setSearchReasult(filteredHangouts)
    }
}

function searchConversations(searchText) {
 
  filteredHangouts=[];
  setSearchReasult(filteredHangouts)
    // filteredHangouts = []
    conversations.forEach(item => {
    
        //if the groupChat contains the searchTxt
        if (item.name != undefined && item.name.toLowerCase().indexOf(searchText) > -1) {
           console.log(item.name);
           filteredHangouts.push(item);
           setSearchReasult(filteredHangouts)
        }
        
    });

    console.log(filteredHangouts);
}
   
    return (
      <div className="conversation-search">
        <input
          type="search" onChange={(e)=>{search(e.target.value)}}
          className="conversation-search-input"
          placeholder="Search Messages"
        />
      </div>
    );
})