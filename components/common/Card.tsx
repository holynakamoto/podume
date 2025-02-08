import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../styles/theme';

interface CardProps {
  children: React.ReactNode;
  style?: StyleSheet.NamedStyles<any>;
}

export function Card({ children, style }: CardProps) {
  const { colors, spacing } = useTheme();
  
  return (
    <View style={[styles.card, { backgroundColor: colors.card }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  }
}); 