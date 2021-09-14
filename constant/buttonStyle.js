import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 120,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    padding: 10,
    borderWidth: 2,
    borderColor: "#5cb9ff",
    borderRadius: 15,
    margin: 5,

    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 7,
  },
  btnText: {
    color: "#5cb9ff",
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: "center",
  },
  secondaryButton: {
    width: 120,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#5cb9ff",
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#5cb9ff",
    margin: 5,

    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 7,
  },
  secondaryBtnText: {
    color: "white",
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: "center",
  },
});