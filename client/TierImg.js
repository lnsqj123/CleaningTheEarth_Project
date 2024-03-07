import { View, StyleSheet, Text } from 'react-native';

const CUTLINE = [100, 200, 300, 400, 500, 600];
const COLOR = ['#cd7f32', '#c0c0c0', '#d4af37', '#2c87b1', '#ff3afb', '#00ffff'];
const NAME = '테스트용 이름'

export default function TierImg(Point) {
    let tier = parseInt(Point / 100);
    let color = COLOR[tier];
    let subTier = parseInt(Point % 100 / 20);

    function getSubTier() {
        let result = [];
        for (let i=0; i<4; i++) {
            if (i < 4-subTier) 
                result.push(
                    <View key={i} id='subTierCircle' style={styles.subTierBack}/>
                );
            else
                result.push(
                    <View key={i} id='subTierBack' style={styles.subTierBack}>
                        <View id='subTierInner' style={styles.subTierInner}/>
                    </View>
                );
        }
        return result;
    };


    return (
        <View id='mainView' style={styles.mainView}>
            <View id='tierBack' style={styles.tierBack}>
                {/* 나중에 이미지로 교체할 것 */}
                <View id='tierImg' style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        backgroundColor: color,
                }}/>
            </View>

            <View id='subTierBack' style={styles.subTier}>
                {getSubTier()}
            </View>

            <View style={{padding:4}}>
                <Text style={{fontWeight:'bold', fontSize:20}}>{NAME}</Text>
                <Text style={{fontWeight:'bold', fontSize:26}}>{Point}
                    <Text style={{fontWeight:'normal', fontSize:16, color:'grey'}}> / {CUTLINE[tier]}</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        padding: 16,
        width: '100%',
        height: 160,
        backgroundColor: '#CCCCCC',
        flexDirection: 'row',
        alignItems: 'center',
    },
    tierBack: {
        marginLeft: 16,
        width: 128,
        height: 128,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subTier: {
        width: 28,
        height: 128,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    subTierBack: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subTierInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#888888',
    },
});