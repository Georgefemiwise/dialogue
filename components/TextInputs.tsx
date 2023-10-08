import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'

interface TextInputProps {
  errorText?: string
  description?: string
  inputType:
    | 'email'
    | 'numeric'
    | 'text'
    | 'tel'
    | 'decimal'
    | 'password'
    | 'search'
    | 'none'
    | 'text'
    | 'url'
}

const TextInput: React.FC<TextInputProps & any> = ({
  errorText,
  description,
  inputType,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor="red"
        underlineColor="transparent"
        inputMode={inputType}
        mode="outlined"
        textColor="black"
        {...props}
      />
      {/* {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null} */}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
  },
  input: {
    backgroundColor: '#',
    color: '#111',
  },
  description: {
    fontSize: 13,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: 'red',
    paddingTop: 8,
  },
})

export default TextInput
