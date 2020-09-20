import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    Container,
    Texto,
    Botao
} from './styles'

export default () => {
    const navigation = useNavigation()

    return(
        <Container>
            <Texto>TELA DE TAREFAS</Texto>
            <Botao title="Ir para EDITar" onPress={() => navigation.navigate('EditNote')} />
        </Container>

    )
}
