import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  appLogo: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },

  informations: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 40,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  userLogo: {
    marginTop: 80,
    width: 40,
    height: 40,
  },

  weekControlContainer: {
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
    alignItems: "center",
    borderColor: colors.white[100],
    borderRadius: 30,
    borderWidth: 0.7,
    width: "90%",
  },

  weekText: {
    alignSelf: "center",
    color: colors.white[100],
    fontSize: 25,
    fontWeight: "600",
  },

  weekTextTwo: {
    padding: 5,
    alignSelf: "center",
    color: colors.white[100],
    fontSize: 15,
    fontWeight: "300",
  },

  calendarDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },

  calendarDaysText: {
    color: colors.white[100],
    fontSize: 15,
    textAlign: "center",
    flex: 1,
  },

  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 1,
  },

  weekIcons: {
    flex: 1,
    textAlign: "center",
  },

  noSmokeContainer: {
    marginTop: 30,
    alignItems: "center",
    flexDirection: "column", // Mudança para empilhar o texto e imagem
    justifyContent: "center",
    width: "90%",
    borderColor: colors.white[100],
    borderWidth: 0.7,
    borderRadius: 30,
    padding: 20, // Ajuste para garantir mais espaço
  },

  noSmokeText: {
    color: colors.white[100],
    fontSize: 20,
    flexWrap: "wrap",
    marginBottom: 10, // Espaçamento entre o texto e a imagem
  },

  noSmokeImage: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    borderRadius: 50, // Para garantir que a imagem seja circular
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "center", // Garantir centralização
  },
});
