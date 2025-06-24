import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/homeStyles";
import { colors } from "../styles/colors";

export default function Home() {
  const [selectedDays, setSelectedDays] = useState({
    seg: false,
    ter: false,
    qua: false,
    qui: false,
    sex: false,
    sab: false,
    dom: false,
  });

  const toggleDaySelection = (day: keyof typeof selectedDays) => {
    setSelectedDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

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
              backgroundColor: isSelected ? "white" : "transparent",
              borderRadius: 5,
              color: isSelected ? "green" : "black",
              textAlign: "center",
            },
          ]}
        />
      </TouchableOpacity>
    );
  };

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

        {/* Dias da semana */}
        <View style={styles.calendarDays}>
          {["seg", "ter", "qua", "qui", "sex", "sab", "dom"].map((day) => (
            <Text key={day} style={styles.calendarDaysText}>
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </Text>
          ))}
        </View>

        {/* Ícones dos dias */}
        <View style={styles.calendar}>
          {["seg", "ter", "qua", "qui", "sex", "sab", "dom"].map((day) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              {renderDayIcon(day as keyof typeof selectedDays)}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.noSmokeContainer}>
        <Text style={styles.noSmokeText}>Vezes que deixou de fumar</Text>
        <Text style={{ fontSize: 22, color: "#fff", fontWeight: "bold" }}>
          {selectedDaysCount}
        </Text>
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
