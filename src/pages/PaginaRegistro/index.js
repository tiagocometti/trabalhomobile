import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';
import { Button } from 'react-native';

export default function PaginaRegistro({navigation}){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input}/>
            <TextInput placeholder='Confirmar Senha' style={styles.input}/>
            <Button title="Login" onPress={() => navigation.navigate('Home')}/>
            
            <View style={styles.viewLinks}>
                <Link to={{screen: 'EsqueciaSenha'}}>Esqueceu a senha? </Link>
                <Link to={{screen: 'PaginaLogin'}}>Voltar para o Login </Link>
            </View>
        </View>
    )
}