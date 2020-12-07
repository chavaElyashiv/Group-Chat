import React from 'react';
import './ConversationSearch.css';
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
      hangouts: state.hangouts
  }

}

export default connect(mapStateToProps)(function ConversationSearch(props) {
  const conversations=props.hangouts;
 
   function searchObj(obj, searchText) {

    for (let key in obj) {
        let value = obj[key];
        if (typeof value === 'object') {
            return searchObj(value, searchText);
        }
        else {
            try {
                value = `${value}`;
            }
            finally {
                if (typeof value === 'string' && value.toLowerCase().indexOf(searchText) > -1) {
                    return obj;
                }
            }
        }
    }
}


let searchPromise;

async function asyncSearchFunction(elementRefValue) {
    let textValue = elementRefValue.toLowerCase();
    await (
        searchPromise = new Promise((resolve, reject) => {

            let searchFilter = conversations.filter(obj => {
                return searchObj(obj, textValue);
            });

            resolve(searchFilter)
        })
    )


    searchPromise.then((msg) => {
        console.log("Promise resolved");
        console.log(msg);
       
    }, () => {
        console.log("Promise reject");
       
    })
}

    return (
      <div className="conversation-search">
        <input
          type="search" onChange={(e)=>{asyncSearchFunction(e.target.value)}}
          className="conversation-search-input"
          placeholder="Search Messages"
        />
      </div>
    );
})