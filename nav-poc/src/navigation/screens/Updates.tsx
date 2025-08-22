import { Text } from "@react-navigation/elements";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Updates() {
  const navigation = useNavigation();

  const navigateToNotFound = () => {
    navigation.navigate("Modal", { screen: "NotFound" });
  };

  const navigateToSettings = () => {
    navigation.navigate("Modal", { screen: "Settings" });
  };

  return (
    <View style={styles.container}>
      <Text>Updates Screen</Text>
      <TouchableOpacity onPress={navigateToNotFound} style={styles.button}>
        <Text style={styles.buttonText}>Go to NotFound Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToSettings} style={styles.button}>
        <Text style={styles.buttonText}>Go to Settings Screen</Text>
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
