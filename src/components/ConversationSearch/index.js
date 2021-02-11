import React from 'react';
import './ConversationSearch.css';
import { connect } from 'react-redux'
import { actions } from '../../redux/Actions/actions'
function mapStateToProps(state) {
  return {
    // hangouts: state.hangouts,
    // filteredList: state.filteredList
  }

}

const mapDispatchToProps = (dispatch) => ({
  setSearchReasult: (list, kindList) => dispatch(actions.setFilteredList({ list, kindList }))

})

export default connect(mapStateToProps, mapDispatchToProps)(function ConversationSearch(props) {
  const conversations = props.list;
  const { setSearchReasult, kindList } = props
  let filteredList = props.list;
  console.log("l;l;", props.list);

  filteredList = conversations;
  //setSearchReasult(filteredList, kindList);
  function search(eve) {
    debugger

    if (eve != "") {
      console.log(eve);
      searchConversations(eve)
    } else {
      console.log("press somthing ");

      filteredList = conversations
      // if(kindList=="filteredHangouts")
      setSearchReasult(filteredList, kindList)
    }
  }

  function searchConversations(searchText) {

    filteredList = [];

    //if(kindList=="filteredHangouts")
    // setSearchReasult(filteredList, kindList)

    // filteredList = []
    conversations.forEach(item => {
      //   "kindList=="filteredHangouts" && "

      //if the subject contains the searchTxt
      if (kindList == "filteredMessages" && item.body != undefined && item.body.toLowerCase().indexOf(searchText) > -1) {
        filteredList.push(item);
        // setSearchReasult(filteredList, kindList)
      }
      if (kindList == "filteredMembers" && item.email != undefined && item.email.toLowerCase().indexOf(searchText) > -1) {
        debugger
        filteredList.push(item);
        //  setSearchReasult(filteredList, kindList)
      }
      else if (item.name != undefined && item.name.toLowerCase().indexOf(searchText) > -1) {
        console.log(item.name);
        filteredList.push(item);
        // setSearchReasult(filteredList, kindList)
      }

    });
    setSearchReasult(filteredList, kindList)


    console.log(filteredList);
  }

  return (
    <div className="conversation-search">
      <input
        type="search" onChange={(e) => { search(e.target.value) }}
        className="conversation-search-input"
      />

    </div>

  );
})