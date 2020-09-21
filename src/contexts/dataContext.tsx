import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from 'react';
import { ComunicationContext } from './comunication';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

export const DataContext = createContext<ComProps>({} as ComProps);

export const DataContextProvider = ({ children }: ProviderProps) => {
  const { sendControl, sendAutoModeParams, connected } = useContext(
    ComunicationContext
  );

  const steer = useRef(0);
  const speed = useRef(0);
  const [limit, setLimit] = useState(0);
  const [lightOn, setLightOn] = useState(false);
  const [autoMode, setAutoMode] = useState(false);
  const [powerA, setPowerA] = useState(false);

  const [autoModeData, setAutoModeData] = useState<AutoModeProps>(
    defaultAutoModeData
  );

  const handleLightSwitch = () => {
    if (connected) {
      setLightOn(!lightOn);
    }
  };

  const handlePowerSwitch = () => {
    if (connected) {
      setPowerA(!powerA);
    }
  };

  const handleAutoModeSwitch = () => {
    if (connected) {
      setAutoMode(!autoMode);
    }
  };

  function handleSendData() {
    sendControl({
      limit,
      lightOn,
      autoMode,
      powerA,
      steer: steer.current,
      speed: speed.current,
    });
  }

  async function loadDataFromStorage() {
    const autoModeDataStoraged = await AsyncStorage.getItem('autoModeData');
    if (autoModeDataStoraged) {
      const obj = JSON.parse(autoModeDataStoraged) as AutoModeProps;
      setAutoModeData(obj);
    }
  }

  async function updateModeData(data: AutoModeProps) {
    const str = JSON.stringify(data);
    await AsyncStorage.setItem('autoModeData', str);
    setAutoModeData(data);
    Alert.alert('Sucesso', 'As informações foram salvas com êxito.');
  }

  useEffect(() => {
    handleSendData();
  }, [limit, lightOn, autoMode, powerA]);

  useEffect(() => {
    sendAutoModeParams(autoModeData);
  }, [autoMode, autoModeData]);

  useEffect(() => {
    loadDataFromStorage();
  }, []);

  return (
    <DataContext.Provider
      value={{
        switchLight: handleLightSwitch,
        switchAutoMode: handleAutoModeSwitch,
        switchPowerA: handlePowerSwitch,
        setLimit,
        lightOn,
        limit,
        autoMode,
        powerA,
        steer,
        speed,
        send: handleSendData,
        updateModeData,
        autoModeData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

interface ComProps {
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
  send: () => void;
  updateModeData: (data: AutoModeProps) => void;
  autoModeData: AutoModeProps;
}

interface ProviderProps {
  children: React.ReactNode;
}

interface AutoModeProps {
  limit: string;
  steer: string;
  speed: string;
  correctionsMovements: string;
  correctionFactor: string;
  detectDistance: string;
  moveTime: string;
  stopTime: string;
}

const defaultAutoModeData: AutoModeProps = {
  limit: '50',
  steer: '-2',
  speed: '-26',
  correctionsMovements: '5',
  correctionFactor: '15',
  detectDistance: '1.5',
  moveTime: '0',
  stopTime: '0',
};
