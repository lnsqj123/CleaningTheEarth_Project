import { StyleSheet, Text, View, Pressable, Alert, StatusBar, Image } from 'react-native';
import useState from 'react';
import * as ImagePicker from 'expo-image-picker';
import TierImg from './TierImg.js';
import CheckList from './CheckList.js';
import Items from './Items.json';

export default function App() {
    const [point, setPoint] = useState.useState(0);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
    
        if (!result.canceled) { // result를 넘겨주는 코드로 바꿀 것
            console.log(result); 
        } else {
            alert('You did not select any image.');
        }
    };

    return (
        <View style={{flex:1}}>
            <StatusBar style='auto'/>

            <View id='statusBar' style={styles.statusBar}>
                <Image source={require('./assets/favicon.png')} style={{height:32, margin:4, resizeMode:'contain'}}/>
                <View id='statusBtns' style={{flexDirection: 'row'}}>
                    <Pressable id='photoBtn' style={styles.statusBtn} onPress={pickImageAsync}>
                        <Text style={styles.buttonLabel}>G</Text>
                    </Pressable>
                    <Pressable id='cameraBtn' style={styles.tmpBtn} onPress={()=>console.log('Camera Button')}>
                        <Text style={styles.buttonLabel}>P</Text>
                    </Pressable>
                    <Pressable id='menuBtn' style={styles.tmpBtn} onPress={()=>console.log('Menu Button')}>
                        <Text style={styles.buttonLabel}>☰</Text>
                    </Pressable>
                </View>
            </View>

            {TierImg(point)}

            {CheckList(setPoint, point, Items)}
        </View>
    );
}

const styles = StyleSheet.create({
    statusBar: {
        paddingHorizontal: 14,
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    statusBtn: {
        margin: 4,
        width: 32,
        height: 32,
        backgroundColor: '#0088FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel: {
        fontSize:20, 
        fontWeight:'bold', 
        color:'white'
    },
    mainView: {
        padding: 16,
        width: '100%',
        height: 160,
        backgroundColor: '#CCCCCC',
        flexDirection: 'row',
        alignItems: 'center',
    },

    tmpBtn: {
        margin: 4,
        width: 32,
        height: 32,
        backgroundColor: '#FF0088',
        alignItems: 'center',
        justifyContent: 'center',
    },
});