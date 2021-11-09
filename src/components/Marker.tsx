import React from 'react';
import {requireNativeComponent, Platform, ImageSourcePropType} from 'react-native';
// @ts-ignore
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import {Point} from '../interfaces';

export interface MarkerProps {
  children?: React.ReactElement;
  zIndex?: number;
  scale?: number;
  onPress?: () => void;
  point: Point;
  source?: ImageSourcePropType;
  anchor?: { x: number, y: number };
  id?: number
}

const NativeMarkerComponent = requireNativeComponent<MarkerProps & { pointerEvents: 'none' }>('YamapMarker');

interface State {
  recreateKey: boolean;
  props: MarkerProps;
}

export class Marker extends React.Component<MarkerProps, State> {
  state = {
    recreateKey: false,
    props: this.props,
  };

  static getDerivedStateFromProps(nextProps: MarkerProps, prevState: State): Partial<State> {
    return {
      props: nextProps,
      recreateKey:
        nextProps.toString() === prevState.props.toString()
          ? prevState.recreateKey
          : !prevState.recreateKey,
    };
  }

  private resolveImageUri(img?: ImageSourcePropType) {
    return img ? resolveAssetSource(img).uri : '';
  }

  private getProps() {
    return {
      ...this.props,
      source: this.resolveImageUri(this.props.source),
    };
  }

  render() {
    return (
        <NativeMarkerComponent
          {...this.getProps()}
          pointerEvents='none'
          key={this.props.id || String(this.state.recreateKey)}
        />
    );
  }
}
