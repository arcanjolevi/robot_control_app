import React, { createContext, useState, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import io from 'socket.io-client';

export const ComunicationContext = createContext<ComProps>({} as ComProps);

export const ComunicationProvider = ({ children }: ProviderProps) => {
  const [adress, setAdress] = useState('192.168.0.109');
  const [port, setPort] = useState('3000');
  const [alertFlag, setAlertFlag] = useState(false);
  const [connected, setConnected] = useState(false);
  const [client, setClient] = useState(io(''));

  const sendControl = (data: any) => {
    if (connected) {
      client.emit('control_update', {
        data,
      });
    }
  };

  const sendAutoModeParams = (data: any) => {
    if (connected) {
      client.emit('auto_mode_params_update', {
        data,
      });
    }
  };

  const loadInitialConfig = async () => {
    const adressStr = await AsyncStorage.getItem('adress');
    const portStr = await AsyncStorage.getItem('port');
    if (adressStr && portStr) {
      setAdress(adressStr);
      setPort(portStr);
    }
  };

  const updateAdress = async (value: string) => {
    await AsyncStorage.setItem('adress', value);
    setAdress(value);
  };

  const updatePort = async (value: string) => {
    await AsyncStorage.setItem('port', value);
    setPort(value);
  };

  const connect = () => {
    client.close();
    const newClient = io(`http://${adress}:${port}`);

    newClient.on('disconnect', () => {
      setConnected(false);
      console.log('Cliente desconectado');
    });

    newClient.on('connect', () => {
      setConnected(true);
      console.log('Cliente connectado');
    });

    newClient.on('data_from_robot', (data: any) => {
      Alert.alert('Hey', 'Message from robot, check the console logs');
      console.log('Message from robot');
      console.log(data);
    });

    setClient(newClient);
  };

  useEffect(() => {
    loadInitialConfig();
    return () => {
      if (client.connected) {
        client.close();
      }
    };
  }, []);

  useEffect(() => {
    connect();
  }, [adress, port]);

  return (
    <ComunicationContext.Provider
      value={{
        sendAutoModeParams,
        adress,
        port,
        updateAdress,
        updatePort,
        sendControl,
        connected,
      }}
    >
      {children}
    </ComunicationContext.Provider>
  );
};

interface ComProps {
  updateAdress: (adress: string) => void;
  updatePort: (port: string) => void;
  sendControl: (data: any) => void;
  sendAutoModeParams: (data: any) => void;
  adress: string;
  port: string;
  connected: boolean;
}

interface ProviderProps {
  children: React.ReactNode;
}
