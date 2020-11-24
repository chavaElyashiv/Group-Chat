// import $ from 'jquery';
// import axios from 'axios'
  let userID = "ym4MmM09W3fan5xkOw6AmxxyNba2";
    let jwt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhUERrUlFmU01rU3BrU1FWSlRQWHFRVlQ3SWkyIiwiZW1haWwiOiJtaW5kaWZyQGdtYWlsLmNvbSIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDUxNzg4NjZ9.fm0jv-pQbTve2DPIskk0wqMNkrBSuGpGv_kLRw44lvM";
class ConvesationsService {

    
    getConversationsForUser = () => {
      
        return fetch(`https://chat.leader.codes/api/${userID}/getAllHangouts`, {
            method: 'POST',
            headers: {
                Authentication: jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => { 
            return res.json() 
        
        
        }).then((res) => {
            console.log(res.hangouts)
            return res

        });


    }

      getHangoutByID=(hangoutId)=>{
        return fetch(` https://chat.leader.codes/api/${userID}/${hangoutId}/getHangout`, {
            method: 'POST',
            headers: {
                Authentication: jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => { 
            return res.json() 
        
        
        }).then((res) => {
            console.log(res.waves)
            return res

        });
       
      }




    }
export default new ConvesationsService();