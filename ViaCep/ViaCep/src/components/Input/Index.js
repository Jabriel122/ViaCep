import { InputText } from "./style";

export function Input({
    placeholder,
    editable,
    fieldValue,
    oneChangeText,
    KeyType,
    maxLength
}) {
    return (

            <InputText
                placeholder={placeholder}
                editable={editable}
                keyboardType={KeyType}
                maxLength={maxLength}
                value={fieldValue}
                oneChangeText={oneChangeText}
            />

    )
}