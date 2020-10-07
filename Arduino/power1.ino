#include <LiquidCrystal_I2C.h>
#ifdef ESP32
  #include <WiFi.h>
  #include <HTTPClient.h>
#else
  #include <ESP8266WiFi.h>
  #include <ESP8266HTTPClient.h>
  #include <WiFiClient.h>
#endif

#include <Wire.h>

int totalColumns = 16;
int totalRows = 2;
const int Analog_channel_pin= 34;
const int ledPin = 25;
int ADC_VALUE = 0;
float vout = 0.0;
float vin = 0.0;
float R1 = 100000.0; // resistance of R1 (100K) -see text!
float R2 = 50000.0; // 50k resistance
float tot;
String voltage;
String total;
const char* ssid     = "TIC_fiber-ram-lavan";
const char* password = "krizz.ch*9541";
// REPLACE with your Domain name and URL path or IP address with path
const char* serverName = "http://lavankumarch.heliohost.org/powerpiezo/php/upload.php";

LiquidCrystal_I2C lcd(0x27, totalColumns, totalRows);

void setup() 
{
lcd.init(); 
lcd.backlight();
pinMode(ledPin, OUTPUT);
WiFi.begin(ssid, password);  
  while(WiFi.status() != WL_CONNECTED) { 
    delay(500);
    
  }
}

void disp(int val){
  if(val == 1){
  lcd.clear();
  lcd.setCursor(0,0);
lcd.print("BITS-");
lcd.setCursor(5,0);
lcd.print(ADC_VALUE);
lcd.setCursor(9,0);
lcd.print(" TOTAL↓");
lcd.setCursor(0,1);
lcd.print(vin);
lcd.setCursor(5,1);
lcd.print("V   ");
lcd.setCursor(9,1);
lcd.print(tot);
lcd.setCursor(15,1);
lcd.print("V");
digitalWrite(ledPin, HIGH);
delay(500);
digitalWrite(ledPin, LOW);
delay(500);
}
else if(val == 2){
   lcd.clear();
  lcd.setCursor(0,0);
lcd.print("BITS-");
lcd.setCursor(5,0);
lcd.print(ADC_VALUE);
lcd.setCursor(9,0);
lcd.print(" TOTAL↓");
lcd.setCursor(0,1);
lcd.print(vin);
lcd.setCursor(5,1);
lcd.print("V   ");
lcd.setCursor(9,1);
lcd.print(tot);
lcd.setCursor(15,1);
lcd.print("V");
delay(500);
}
}
void loop() 
{
  lcd.clear();
ADC_VALUE = analogRead(Analog_channel_pin);
vout = (ADC_VALUE * 3.3 ) / (4095);
vin = vout/(R2/(R1+R2));
if(vin >0){
  tot = tot + vin;
  disp(1);
  if(WiFi.status()== WL_CONNECTED){
    HTTPClient http;
    
    // Your Domain name with URL path or IP address with path
    http.begin(serverName);
    
    // Specify content-type header
    http.addHeader("Content-Type", "application/x-www-form-urlencoded");
    
    // Prepare your HTTP POST request data
    voltage = String(vin);
    total = String(tot);
    String httpRequestData = "voltage=" + voltage + "";
    
   
    
    // You can comment the httpRequestData variable above
    // then, use the httpRequestData variable below (for testing purposes without the BME280 sensor)
    //String httpRequestData = "api_key=tPmAT5Ab3j7F9&sensor=BME280&location=Office&value1=24.75&value2=49.54&value3=1005.14";

    // Send HTTP POST request
    int httpResponseCode = http.POST(httpRequestData);
     
    // If you need an HTTP request with a content type: text/plain
    //http.addHeader("Content-Type", "text/plain");
    //int httpResponseCode = http.POST("Hello, World!");
    
    // If you need an HTTP request with a content type: application/json, use the following:
    //http.addHeader("Content-Type", "application/json");
    //int httpResponseCode = http.POST("{\"value1\":\"19\",\"value2\":\"67\",\"value3\":\"78\"}");
        
    if (httpResponseCode>0) {
      Serial.print("httpRequestData: ");
    Serial.println(httpRequestData);
      
    }
    else {
      Serial.print("httpRequestData: ");
    Serial.println(httpRequestData);
      
    }
    // Free resources
    http.end();
  }
  else {
    
  }  
  
  
}
else {
  disp(2);
}

}
