import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [longPressedKey, setLongPressedKey] = useState(null);

  const handleInput = (value) => {
    setPhoneNumber(phoneNumber + value);
  };

  const clearInput = () => {
    setPhoneNumber('');
  };

  const handleLongPress = (letters) => {
    setLongPressedKey(letters);
  };

  const handleSelectLetter = (letter) => {
    setPhoneNumber(phoneNumber + letter);
    setLongPressedKey(null);
  };

  const handleContinue = () => {
    // Show success message
    Alert.alert('Đăng Nhập Thành Công', 'Bạn đã đăng nhập thành công với số điện thoại ' + phoneNumber, [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={styles.container}>
        {/* Status Bar */}
        <View style={styles.statusBar}>
          <Icon name="wifi" size={18} color="#fff" style={styles.statusIcon} />
          <Icon name="signal" size={18} color="#fff" style={styles.statusIcon} />
          <Icon name="battery-full" size={18} color="#fff" style={styles.statusIcon} />
        </View>

        {/* Login title */}
        <Text style={styles.title}>Đăng Nhập</Text>

        {/* Text description */}
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        {/* Phone number label */}
        <Text style={styles.phoneNumberLabel}>Số điện thoại</Text>

        {/* Phone number input */}
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="Nhập số điện thoại"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}  // Allow text input from the keyboard
          keyboardType='phone-pad'  // Show phone number keyboard
        />

        {/* Display long-pressed letters */}
        {longPressedKey && (
          <View style={styles.longPressContainer}>
            {longPressedKey.split('').map((letter, index) => (
              <TouchableOpacity
                key={index}
                style={styles.letterButton}
                onPress={() => handleSelectLetter(letter)}
              >
                <Text style={styles.longPressText}>{letter}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Continue button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue} activeOpacity={0.8}>
          <Text style={styles.continueButtonText}>Tiếp Tục</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  statusIcon: {
    marginHorizontal: 8,
  },
  title: {
    fontSize: 32,
    color: '#333',
    marginBottom: 20,
    textAlign: 'left',
    fontWeight: '700',
    marginLeft: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'left',
    fontWeight: '600',
    marginLeft: 10,
    lineHeight: 24,
  },
  phoneNumberLabel: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    textAlign: 'left',
    marginLeft: 10,
  },
  phoneNumberInput: {
    fontSize: 24,
    fontWeight: 'bold',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  longPressContainer: {
    position: 'absolute',
    top: 150,
    left: '50%',
    transform: [{ translateX: -75 }],
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 200,
    alignItems: 'center',
  },
  letterButton: {
    padding: 5,
    margin: 2,
    borderRadius: 5,
    backgroundColor: '#444',
  },
  longPressText: {
    color: '#fff',
    fontSize: 16,
  },
  continueButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
