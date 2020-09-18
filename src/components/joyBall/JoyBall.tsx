import React, { useRef, memo, useEffect } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

interface JoyProps {
  width?: number;
  height?: number;
  ballRadius?: number;
  backgroundColor?: string;
  ballColor?: string;
  refX: React.MutableRefObject<number>;
  refY: React.MutableRefObject<number>;
}

const Joy = ({
  backgroundColor = '#f5f5f5',
  ballColor = 'tomato',
  ballRadius = 50,
  height = 300,
  width = 200,
  refX,
  refY,
}: JoyProps) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      let vertical = gestureState.dy;
      let horizontal = gestureState.dx;

      if (vertical >= 0 && vertical + ballRadius > height / 2) {
        vertical = height / 2 - ballRadius;
      } else if (vertical < 0 && vertical - ballRadius < -height / 2) {
        vertical = -height / 2 + ballRadius;
      }

      if (horizontal > 0 && horizontal + ballRadius > width / 2) {
        horizontal = width / 2 - ballRadius;
      } else if (horizontal < 0 && horizontal - ballRadius < -width / 2) {
        horizontal = -width / 2 + ballRadius;
      }

      if (refX)
        refX.current = Number(
          ((horizontal * 100) / (width / 2 - ballRadius)).toFixed(2)
        );
      if (refY)
        refY.current = Number(
          (((vertical * 100) / (height / 2 - ballRadius)) * -1).toFixed(2)
        );

      Animated.timing(pan, {
        toValue: { x: horizontal, y: vertical },
        useNativeDriver: true,
        duration: 0,
      }).start();
    },
    onPanResponderRelease: () => {
      if (refX) refX.current = 0;
      if (refY) refY.current = 0;
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }).start();
    },
  });

  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          pan.getTranslateTransform(),
          {
            backgroundColor: ballColor,
            width: ballRadius * 2,
            height: ballRadius * 2,
            borderRadius: ballRadius,
            elevation: 5,
          },
        ]}
      />
    </View>
  );
};

export default memo(Joy);
