import React, { createContext, useState, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import io from 'socket.io-client';

export const ComunicationContext = createContext<ComProps>({} as ComProps);

export const ComunicationProvider = ({ children }: ProviderProps) => {
  const [adress, setAdress] = useState('192.168.0.109');
  const [port, setPort] = useState('3000');
  const [client, setClient] = useState(io(''));
  const [alertFlag, setAlertFlag] = useState(false);

  const send = (data: any) => {
    if (client.connected) {
      client.emit('client_update', {
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

  useEffect(() => {
    setClient(io(`http://${adress}:${port}`));
    loadInitialConfig();
    return () => {
      if (client.connected) {
        client.close();
      }
    };
  }, []);

  useEffect(() => {
    client.close();
    setClient(io(`http://${adress}:${port}`));
  }, [adress, port]);

  return (
    <ComunicationContext.Provider
      value={{
        updateAdress,
        updatePort,
        send,
      }}
    >
      {children}
    </ComunicationContext.Provider>
  );
};

interface ComProps {
  updateAdress: (adress: string) => void;
  updatePort: (port: string) => void;
  send: (data: any) => void;
  adress: string;
  port: string;
}

interface ProviderProps {
  children: React.ReactNode;
}
