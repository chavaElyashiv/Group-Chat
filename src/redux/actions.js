export function setConversation(conversation){
    console.log("action");
    return {type:"SET_CONVERSATION", payload:conversation}
}