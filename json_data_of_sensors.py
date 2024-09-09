import serial
import json
import time
ser = serial.Serial('COM8', 9600, timeout=1)

def read_data():
    while True:
        if ser.in_waiting > 0:
            try:
                line = ser.readline().decode('utf-8', errors='ignore').strip()
                intensity = int(line)
                distance = int(ser.readline().decode('utf-8', errors='ignore').strip())
                data = {
                    'intensity': 1023-intensity,
                    'distance': distance
                }
                json_data = json.dumps(data)
                print(json_data)
                
            except ValueError:
                data = {
                    'intensity': "...",
                    'distance': "..."
                }
                json_data = json.dumps(data)
                print(json_data)
                time.sleep(1)
            
if __name__ == "__main__":
    read_data()
    ser.close()
