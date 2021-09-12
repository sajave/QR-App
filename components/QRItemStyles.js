import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    backgroundColor: '#ffffff',
  },
  font: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    resizeMode: "contain",
    height: 100,
    width: 200
  },
  containerURL: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  url: {
    fontSize: 20,
    fontWeight: "normal",
  },
  item: {
    backgroundColor: '#86c0f7',
    borderRadius: 10,
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
    }
  },
})