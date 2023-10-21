import { Button, View,Text,Image } from "react-native-web";

import styles from "./styles";

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.viewImagem}>
                
            </View>
            <Image source={require('../../../assets/check.png')} style={styles.logo}/>
           <Text style={styles.nome}>Login bem-sucedido!</Text>
           <Button title="Sair" onPress={() => navigation.navigate('PaginaLogin')}/>
        </View>
    )
}