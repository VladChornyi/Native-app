import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

export default function App() {
  const [securePassword, setSecurePassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const hideKeyboard = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImg}
        source={require("./assets/regBg.jpg")}
        resizeMode="cover"
      >
        <View
          style={{ ...styles.form, marginBottom: isShowKeyboard ? -250 : 0 }}
        >
          <KeyboardAvoidingView style={styles.keyWrapper} behavior="padding">
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
            />
            <View style={styles.passwordBox}>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                secureTextEntry={securePassword}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSecurePassword(!securePassword)}
                style={styles.hideButton}
              >
                <Text style={styles.hideText}>показати</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            activeOpacity={0.7}
            onFocus={hideKeyboard}
            style={styles.regBtn}
          >
            <Text style={styles.regBtnText}>Зареєструватись</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
    height: 549,
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  keyWrapper: {
    width: "100%",
  },
  input: {
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 16,
    borderRadius: 8,
    height: 50,
    width: "100%",
    marginBottom: 16,
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
  },
  passwordBox: {
    width: "100%",
  },
  hideButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  hideText: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "right",
    color: "#1B4371",
  },
  regBtn: {
    width: "100%",
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
  },
  regBtnText: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
});
