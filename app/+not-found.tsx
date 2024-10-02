import { Link, Stack } from 'expo-router';
import { StyleSheet, Text } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Text style={styles.container}>
        <Text >
          <a type="title">This screen doesn't exist.</a></Text>
        <Link href="/" style={styles.link}>
          <Text >
          <a type="link">Go to home screen!</a></Text>
        </Link>
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
