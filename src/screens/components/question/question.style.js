import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1E18",
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 10,
    // justifyContent: "center",
  },
  text: {
    color: "#D9FFF5",
    fontSize: 40,
    fontWeight: "bold",
  },
  header: {
    color: "#6B8F71",
    fontSize: 30,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    borderRadius: 50,
    backgroundColor: "#D9FFF5",
  },
  question: {
    fontSize: 30,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    borderRadius: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
},
    question_text: {
    color: "#D9FFF5",
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    },
    options_btn_container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 100,
        gap: 7
    },
    option_btn: {
        backgroundColor: "#6B8F71",
        borderRadius: 10,
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        
    },


});

export default styles;
