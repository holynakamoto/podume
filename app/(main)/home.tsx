import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTheme } from '../../styles/theme'; // Ensure this path is correct
import { useResumes } from '../../hooks/useResumes'; // Ensure this path is correct

const HomeScreen = () => {
  const theme = useTheme();
  const { resumes, isLoading, createResume } = useResumes();

  const handleCreateResume = async () => {
    const newResume = {
      title: 'New Resume',
      file_type: 'pdf',
      file_url: 'https://example.com/resume.pdf',
      user_id: 'user-id', // Replace with actual user ID
      userId: 'user-id', // Add this if it's required
      content: 'Resume content goes here', // Add this if it's required
    };
    await createResume(newResume);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Welcome to the Home Screen</Text>
      <Button title="Create Resume" onPress={handleCreateResume} />
      {resumes && resumes.length > 0 ? (
        resumes.map((resume) => (
          <View key={resume.id} style={styles.resumeItem}>
            <Text style={{ color: theme.colors.text }}>{resume.title}</Text>
          </View>
        ))
      ) : (
        <Text style={{ color: theme.colors.text }}>No resumes found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  resumeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default HomeScreen;
