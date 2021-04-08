import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  justify-content: center;
  padding: 15px 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
  margin-top: 10px;
`;

export const HeaderContainer = styled.View`
  padding-top: 60px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const LogOutButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
