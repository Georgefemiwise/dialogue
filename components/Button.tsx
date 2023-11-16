import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
interface PaperButtonProps {
  title: string
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal'
  handlePress: () => void
}

export default function Button(props: PaperButtonProps) {
  const { title, handlePress, mode = 'elevated' } = props

  return (
    <PaperButton
      mode={mode}
      onPress={handlePress}
      style={{ ...styles.button, ...styles.text }}
    >
      {title}
    </PaperButton>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: '100',
    fontSize: 15,
    lineHeight: 26,
  },
})
