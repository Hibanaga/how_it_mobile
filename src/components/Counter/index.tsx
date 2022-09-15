import React, {FC, useState} from 'react';
import styles from './styles';
import {ICounterProps} from './types';
import {Text, TouchableOpacity, View} from 'react-native';

const Counter: FC<ICounterProps> = ({description}) => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setCount(count - 1)}
        style={styles.button}>
        <Text style={styles.buttonText}>decrement</Text>
      </TouchableOpacity>

      <Text>
        {description}: {count}
      </Text>

      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.button}>
        <Text style={styles.buttonText}>increment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
