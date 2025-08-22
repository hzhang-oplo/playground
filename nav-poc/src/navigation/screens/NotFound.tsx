import { Text } from "@react-navigation/elements";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function NotFound() {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.goBack();
    // Navigate to HomeTabs and close the modal
    navigation.navigate("HomeTabs", { screen: "Home" });
  };

  const openSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <View style={styles.container}>
      <Text>404</Text>
      <TouchableOpacity onPress={goToHome} style={styles.button}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openSettings} style={styles.button}>
        <Text style={styles.buttonText}>Open Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
