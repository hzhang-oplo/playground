import { Text } from "@react-navigation/elements";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Settings() {
  const navigation = useNavigation();

  const goToProfile = () => {
    // First close the modal by going back
    navigation.goBack();
    navigation.goBack();
    // Then navigate to Profile screen in card mode
    // We need to use setTimeout to ensure the modal is closed first
    setTimeout(() => {
      navigation.navigate("Profile", { user: "test" });
    }, 100);
  };

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <TouchableOpacity onPress={goToProfile} style={styles.button}>
        <Text style={styles.buttonText}>Go to Profile</Text>
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
  row: {
    flexDirection: "row",
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
