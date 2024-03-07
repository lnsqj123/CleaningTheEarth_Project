import { View, StyleSheet, Text, Pressable } from 'react-native';
import useState from 'react';

export default function CheckList(setPoint, point, Items) { 
    function getItemList() {
        let result = [];
        for (let i in Items) {
            result.push(
                <View key={i} id='tmpItem' style={styles.tmpItem}>
                    <View id='tmpItemThumbnail' style={styles.tmpItemThumbnail}/>
                    <View style={{flex:1, height:'100%', justifyContent:'center', padding:8}}>
                        <Text style={{fontWeight:'bold', fontSize:16}}>{Items[i].name}</Text>
                        <Text style={{fontWeight:'bold', fontSize:20}}>+{Items[i].point}</Text>
                    </View>
                    <View id='itemBtns' style={{flexDirection: 'row'}}>
                        <Pressable id='countItemBtn' style={styles.statusBtn} onPress={()=>setPoint(point+Items[i].point)}>
                            <Text style={styles.buttonLabel}>+</Text>
                        </Pressable>
                        <Pressable id='countItemBtn' style={styles.tmpBtn} onPress={()=>{setPoint(0);console.log('tmp Reset, will be Edit Button')}}>
                            <Text style={styles.buttonLabel}>⋯</Text>
                        </Pressable>
                    </View>
                </View>
            );
        }

        return result;
    };


    return (
        <View id='tmpCheckList'>
            {getItemList()}
        </View>
    );
}

const styles = StyleSheet.create({
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

    tmpBtn: {
        margin: 4,
        width: 32,
        height: 32,
        backgroundColor: '#FF0088',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tmpItem: {
        padding: 14,
        width: '100%',
        height: 96,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tmpItemThumbnail: {
        marginHorizontal: 4,
        width: 72,
        height: 72,
        backgroundColor: '#CCCCCC',
    },
});