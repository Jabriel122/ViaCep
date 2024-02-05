

import { Input } from "../Input/Index"
import { Label } from "../Label"
import { FieldContent } from "./style"

export const BoxInput = ({
    fieldWidth = 100,
    editable = true,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    KeyType = 'default',
    maxLenght

}) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>

            {/* //Label */}
            <Label textLabel={textLabel}/>
            {/* //Input */}
            <Input 
                placeholder={placeholder}
                editable={editable}
                KeyType = {KeyType}
                maxLenght = {maxLenght}
                fieldValue = {fieldValue}
                onChangeText = {onChangeText}
            />

        </FieldContent>

    )
}