import styled from 'styled-components/native'

export const Container  = styled.SafeAreaView`
    flex:1;
    background-color: #333;
`
export const Texto = styled.Text``
export const TitleInput = styled.TextInput`
    font-size:18px;
    font-weight: bold;
    padding: 16px;
    color: #FFF;
`
export const BodyInput = styled.TextInput`
    flex:1;
    padding: 16px;
    font-size: 16px;
    color: #FFF;
`
export const SaveButton = styled.TouchableHighlight`
    margin-right:16px;
`
export const SaveButtonImage = styled.Image`
    width:24px;
    height:24px;
`
export const CloseButton = styled.TouchableHighlight`
    margin-left:16px;
`
export const CloseButtonImage = styled.Image`
    width:18px;
    height:18px;
`
export const DeleteButton = styled.TouchableOpacity`
    height: 40px;
    background-color: #FF3333;
    justify-content: center;
    align-items: center;
`
export const DeleteButtonText = styled.Text`
    font-size: 12px;
    color: white;
`