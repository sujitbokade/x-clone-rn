import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useClerk } from "@clerk/clerk-expo";

const Home = () => {
  const { signOut } = useClerk();
  return (
    <View>
      <Text>index</Text>
      <Button title="SignOut" onPress={() => signOut()} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
