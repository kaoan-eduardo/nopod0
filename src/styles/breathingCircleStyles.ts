import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: colors.button[100],
  },
  goBackButton: {
    position: "absolute", // Faz o botão ficar fixo
    top: 20, // Ajuste o topo conforme necessário
    left: 10, // Ajuste a distância da esquerda conforme necessário
    flexDirection: "row", // Alinha o ícone e o texto horizontalmente
    alignItems: "center", // Alinha verticalmente
  },
  goBackPressable: {
    flexDirection: "row", // Alinha ícone e texto dentro do Pressable
    alignItems: "center", // Centraliza verticalmente
    gap: 3, // Espaço entre ícone e texto
  },
  pressableText: {
    color: colors.white[100], // Cor do texto
  },
});
