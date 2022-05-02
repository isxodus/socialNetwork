import React, {useState, DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes, ChangeEvent} from 'react';

// DEFAULT PROPS FOR INPUT AND TEXTAREA
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type DefaultTextAreaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
// TYPES
type UniversalInputAreaTypeType = 'textarea' | 'input'

// UNIVERSAL TYPE
type  UniversalInputAreaPropsType = DefaultInputPropsType & DefaultTextAreaPropsType & {
    type: UniversalInputAreaTypeType
    createNewEntityFunction: (newText: string) => void
    placeholders?: Array<string>
    buttonText?: string
}


export const UniversalInputArea: React.FC<UniversalInputAreaPropsType> = (
    {
        type,
        placeholders,
        placeholder,
        buttonText,
        createNewEntityFunction
    }) => {
    //edit text
    const [newText, setNewText] = useState('')
    const editNewTextHandler = (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
        setNewText(e.currentTarget.value)
    }

    //add text
    const createNewEntityHandler = () => {
        createNewEntityFunction(newText)
        setNewText('')
    }


    const localPlaceholder = placeholders ? placeholders[Math.floor(Math.random() * placeholders.length)] : placeholder
    return <div>
        {type === 'input' && <input value={newText} placeholder={localPlaceholder} onChange={editNewTextHandler}/>}
        {type === 'textarea' && <textarea value={newText} placeholder={localPlaceholder} onChange={editNewTextHandler}/>}
        <button onClick={createNewEntityHandler}>{buttonText ? buttonText : "ADD"}</button>
    </div>
}