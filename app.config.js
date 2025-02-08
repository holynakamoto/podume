export default {
  expo: {
    name: 'Podume',
    slug: 'podume',
    // ... other config
    scheme: 'podume',
    // Add this section for proper development client behavior
    owner: 'your-expo-username',
    extra: {
      eas: {
        projectId: "your-project-id"
      }
    }
  }
}; 