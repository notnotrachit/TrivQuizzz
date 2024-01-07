import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1E18",
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 10,
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
  cat_grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
    gap: 7
  },
});

export default styles;
