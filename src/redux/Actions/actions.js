// export function setConversation(conversation){
//     console.log("action");
//     return {type:"SET_CONVERSATION", payload:conversation}
// }

function convertActionNameToType(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase()
}

export const actions = new Proxy(

    {},//target
    {

        get: function (target, prop) {
            //debugger
            if (target[prop] === undefined) {
                return function (args) {
                    return {
                        type: convertActionNameToType(prop),
                        payload: args
                    };

                }

            }
            else return target[prop];
        }

    }
)
