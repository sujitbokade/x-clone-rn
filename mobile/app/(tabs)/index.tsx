import { StyleSheet, Text, Button } from "react-native";
import React from "react";
import { useClerk } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUserSync } from "@/hooks/useUserSync";

const Home = () => {
  const { signOut } = useClerk();
  useUserSync();
  return (
    <SafeAreaView className="flex-1">
      <Text>HomeScreen</Text>
      <Button title="SignOut" onPress={() => signOut()} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
