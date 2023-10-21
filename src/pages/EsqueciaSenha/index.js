import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';
import { Button } from 'react-native';

export default function EsqueciaSenha({navigation}){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <Button title="Recuperar Senha" onPress={() => navigation.navigate('EmailEnviado')}/>/
            
            <View style={styles.viewLinks}>
                <Link to={{screen: 'PaginaRegistro'}}>Cadastre-se </Link>
                <Link to={{screen: 'PaginaLogin'}}>Voltar para o Login </Link>
            </View>
        </View>
    )
}