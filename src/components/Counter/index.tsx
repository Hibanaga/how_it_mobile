import React, {FC, useState} from 'react';
import styles from './styles';
import {Text, TouchableOpacity, View} from 'react-native';

interface ICounterProps {
  description: string;
}

const Counter: FC<ICounterProps> = ({description}) => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCounter(counter + 1)}>
        <Text>increment</Text>
      </TouchableOpacity>

      <View>
        <Text>
          {description}: {counter}
        </Text>
      </View>
    </View>
  );
};

export default Counter;
