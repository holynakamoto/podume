import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ErrorMessageProps {
  message: string | null;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;
  
  return (
    <Text style={styles.error}>{message}</Text>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
}); 