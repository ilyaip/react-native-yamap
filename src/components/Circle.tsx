import React from 'react';
import { requireNativeComponent } from 'react-native';
import { processColorProps } from '../utils';
import { Point } from '../interfaces';

const NativeCircleComponent = requireNativeComponent('YamapCircle');

export interface CircleProps {
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  zIndex?: number;
  onPress?: () => void;
  center: Point;
  radius: number;
}

export class Circle extends React.Component<CircleProps> {
  static defaultProps = {
  };

  render() {
    const props = { ...this.props };
    processColorProps(props, 'fillColor' as keyof CircleProps);
    processColorProps(props, 'strokeColor' as keyof CircleProps);
    return <NativeCircleComponent {...props} />;
  }
}
