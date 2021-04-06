import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  justify-content: center;
  padding: 15px 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 50px;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
