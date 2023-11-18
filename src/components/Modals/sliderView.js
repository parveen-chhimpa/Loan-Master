import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        // console.log(this.props.agentName);
        return (
            <View style={{ height: 120, width: 120, marginLeft: 20, borderWidth: 0.2, borderColor: '#00BFFF',backgroundColor:'white',borderRadius:5,elevation:1 }}>
                <View style={{ flex: 2 }}>
                    <Image source={{uri: this.props.imageUri}}
                        style={{ flex: 2, width: null, height: null, resizeMode: 'stretch' }}
                    />
                    {/* {this.props.agentName?<Text style={{position:"absolute",fontSize:5,color:'black',fontFamily:"serif"}}>{this.props.agentName}{"\n"}{this.props.mobile}{"\n"}Certified Loan Expert</Text>:null} */}
                </View>
                {/* <View style={{ flex: 1, paddingTop: 10,alignItems:'center' }}>
                    <Text style={{fontSize:12}}>{this.props.name}</Text>
                </View> */}
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
