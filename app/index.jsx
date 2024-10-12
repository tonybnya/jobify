import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function RootLayout() {

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-700 font-bold text-8xl">Jobify</Text>
      <StatusBar style="auto" />
      <Text>Use this app to find your dream job.</Text>
      <Link href="/profile" style={{ color: 'blue' }}>Click here!</Link>
    </View>
  );
}