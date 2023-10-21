import { Button, View,Text,Image } from "react-native-web";

import styles from "./styles";

export default function EmailEnviado({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.viewImagem}>
                
            </View>
            <Image source={require('../../../assets/email.png')} style={styles.logo}/>
           <Text style={styles.nome}>E-mail de recuperação enviado!</Text>
           <Button title="Sair" onPress={() => navigation.navigate('PaginaLogin')}
        />
        </View>
    )
}