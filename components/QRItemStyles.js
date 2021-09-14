import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    backgroundColor: '#ffffff',
  },
  fontName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  font: {
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  image: {
    resizeMode: "contain",
    height: 100,
    width: 200
  },
  url: {
    fontSize: 20,
    fontWeight: "normal",
  },
  item: {
    borderWidth: 1,
    borderColor: "#5cb9ff",
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 7,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 7,
  },
})