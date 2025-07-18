#include <SoftwareSerial.h>

SoftwareSerial BTSerial(2, 3); // RX, TX

const int motor1A = 5;
const int motor1B = 6;
const int motor2A = 10;
const int motor2B = 9;

int speed = 150;

void setup() {
  pinMode(motor1A, OUTPUT);
  pinMode(motor1B, OUTPUT);
  pinMode(motor2A, OUTPUT);
  pinMode(motor2B, OUTPUT);
  BTSerial.begin(9600); // Default baud rate of the HC-05 module
  Serial.begin(9600);
}

void loop() {
  if (BTSerial.available()) {
    char command = BTSerial.read();
    Serial.println(command);
    switch (command) {
      case 'F': // Forward
        analogWrite(motor1A, speed);
        digitalWrite(motor1B, LOW);
        analogWrite(motor2A, speed);
        digitalWrite(motor2B, LOW);
        break;
      case 'B': // Backward
        digitalWrite(motor1A, LOW);
        analogWrite(motor1B, speed);
        digitalWrite(motor2A, LOW);
        analogWrite(motor2B, speed);
        break;
      case 'L': // Left
        digitalWrite(motor1A, LOW);
        analogWrite(motor1B, speed);
        analogWrite(motor2A, speed);
        digitalWrite(motor2B, LOW);
        break;
      case 'R': // Right
        analogWrite(motor1A, speed);
        digitalWrite(motor1B, LOW);
        digitalWrite(motor2A, LOW);
        analogWrite(motor2B, speed);
        break;
      case 'S': // Stop
        digitalWrite(motor1A, LOW);
        digitalWrite(motor1B, LOW);
        digitalWrite(motor2A, LOW);
        digitalWrite(motor2B, LOW);
        break;
        case 'q':
        speed = 250;
        break;
        case '7':
        speed = 225;
        break;
        case '5':
        speed = 190;
        break;
        case '2':
        speed = 160;
        break;

    }
  }
}
