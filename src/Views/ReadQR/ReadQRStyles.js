import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: "#86c0f7",
    borderRadius: 7,
    backgroundColor: 'tomato'
  },
  containerButtons: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  }
});