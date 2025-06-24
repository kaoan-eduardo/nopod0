import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/homeStyles";
import { colors } from "../styles/colors";

export default function Home() {
  // Criação do estado para controlar os dias selecionados
  const [selectedDays, setSelectedDays] = useState({
    seg: false,
    ter: false,
    qua: false,
    qui: false,
    sex: false,
    sab: false,
    dom: false,
  });

  // Função para alternar o estado de um dia
  const toggleDaySelection = (day: keyof typeof selectedDays) => {
    setSelectedDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day], // Alterna entre true/false
    }));
  };

  // Função para renderizar os ícones dos dias
  const renderDayIcon = (day: keyof typeof selectedDays) => {
    const isSelected = selectedDays[day];
    return (
      <TouchableOpacity onPress={() => toggleDaySelection(day)}>
        <MaterialIcons
          name="check-box"
          size={40}
          style={[
            styles.weekIcons,
            {
              backgroundColor: isSelected ? "white" : "transparent", // Fundo branco se selecionado
              borderRadius: 5, // Para dar bordas arredondadas no fundo branco
              color: isSelected ? "green" : "black", // Verde quando selecionado
              textAlign: "center", // Centralizar o ícone
            },
          ]}
        />
      </TouchableOpacity>
    );
  };

  // Contar os dias selecionados
  const selectedDaysCount = Object.values(selectedDays).filter(Boolean).length;

  return (
    <LinearGradient
      colors={[colors.pink[100], colors.blue[100]]}
      style={styles.container}
    >
      <View style={styles.informations}>
        {/* Logotipo */}
        <Image
          source={require("../assets/images/appLogo.png")}
          style={styles.appLogo}
        />

        <Image
          source={require("../assets/images/userLogo.png")}
          style={styles.userLogo}
        />
      </View>

      <View style={styles.weekControlContainer}>
        <Text style={styles.weekText}>Controle da semana</Text>
        <Text style={styles.weekTextTwo}>Dias que você deixou de fumar</Text>
        <View style={styles.calendarDays}>
          {["seg", "ter", "qua", "qui", "sex", "sab", "dom"].map((day) => (
            <Text key={day} style={styles.calendarDaysText}>
              {day.charAt(0).toUpperCase() + day.slice(1)}{" "}
              {/* Capitaliza o primeiro caractere */}
            </Text>
          ))}
        </View>
        <View style={styles.calendar}>
          {["seg", "ter", "qua", "qui", "sex", "sab", "dom"].map((day) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              {renderDayIcon(day as keyof typeof selectedDays)}{" "}
              {/* Chama a função para renderizar o ícone de cada dia */}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.noSmokeContainer}>
        <Text style={styles.noSmokeText}>Vezes que deixou de fumar</Text>
        <Text>{selectedDaysCount}</Text>{" "}
        {/* Mostra a quantidade de dias selecionados */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/NoSmokeLogo.png")}
            style={styles.noSmokeImage}
          />
        </View>
      </View>
    </LinearGradient>
  );
}
