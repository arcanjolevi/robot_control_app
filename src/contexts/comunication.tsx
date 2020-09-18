import React, {
  Children,
  createContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import io from 'socket.io-client';

interface ComProps {
  adress?: string;
  port?: string;
  answerTime?: number;
  steer: React.MutableRefObject<number>;
  speed: React.MutableRefObject<number>;
  autoMode: boolean;
  powerA: boolean;
  limit: number;
  lightOn: boolean;
  setLimit: (limit: number) => void;
  switchPowerA: () => void;
  switchLight: () => void;
  switchAutoMode: () => void;
  connectToServer: () => void;
  send: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const ComunicationContext = createContext<ComProps>({} as ComProps);

export const ComunicationProvider = ({ children }: ProviderProps) => {
  const [adress, setAdress] = useState('192.168.0.109');
  const [port, setPort] = useState('3000');
  const [client, setClient] = useState(io(`http://${adress}:${port}`));

  const steer = useRef(0);
  const speed = useRef(0);
  const [limit, setLimit] = useState(0);
  const [lightOn, setLightOn] = useState(false);
  const [autoMode, setAutoMode] = useState(false);
  const [powerA, setPowerA] = useState(false);

  const connectToServer = useCallback(() => {
    setClient(io(`http://${adress}:${port}`));
  }, []);

  const send = () => {
    if (client.connected) {
      client.emit('client_update', {
        data: {
          steer: steer.current,
          speed: speed.current,
          limit,
          lightOn,
          autoMode,
          powerA,
        },
      });
    }
  };

  return (
    <ComunicationContext.Provider
      value={{
        send,
        switchLight: () => setLightOn(!lightOn),
        switchAutoMode: () => setAutoMode(!autoMode),
        switchPowerA: () => setPowerA(!powerA),
        setLimit,
        lightOn,
        limit,
        autoMode,
        powerA,
        steer,
        speed,
        adress,
        connectToServer,
      }}
    >
      {children}
    </ComunicationContext.Provider>
  );
};
