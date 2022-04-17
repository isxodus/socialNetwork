import {ChangeEvent} from "react";
import {PostAndMessageActionType, StateType} from "../../../redux/reduxStore";
import {connect} from "react-redux";
import {addMessageActionCreator, onMessageChangeHandlerActionCreator} from "../../../redux/conversationsPageReducer";
import {Conversations} from "./Conversations";


let mapStateToProps = (state: StateType) => {
    return {
        conversations: state.conversationsPage.conversations,
        messages: state.conversationsPage.messages,
        newMessageText: state.conversationsPage.newMessageText,
    }
}


let mapDispatchToProps = (dispatch: (action: PostAndMessageActionType) => void) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        editMessageTextHandler: (event: ChangeEvent<HTMLTextAreaElement>) => {
            const currentValue = event.currentTarget.value
            dispatch(onMessageChangeHandlerActionCreator(currentValue))
        }
    }
}

export const ConversationsContainer = connect(mapStateToProps, mapDispatchToProps)(Conversations)