import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
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
    marginTop: 50,
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: "#86c0f7",
    borderRadius: 15,
    backgroundColor: 'tomato',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 7,
  },
  containerButtons: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    marginTop: 20,
    marginBottom: 20
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    height: 50,
    backgroundColor: '#fff',
  },
  modal: {
    /* flex: 1, */
    /* justifyContent: 'center',
    alignItems: "center", */
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#5cb9ff",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 5,
    padding: 10,
  },
  buttonSave: {
    padding: 10,
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    padding: 10,
    backgroundColor: "#ef4374",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
  },

  input: {
    width: 250,
    height: 40,
    margin: 30,
    borderWidth: 3,
    borderColor: "#5cb9ff",
    borderRadius: 7,
    padding: 10,
  },
});