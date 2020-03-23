/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import * as React from 'react';
//import React, { Whatever } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button,Input,Overlay } from 'react-native-elements';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ProgressBarAndroid,
  Alert,
  Modal,
  TouchableHighlight,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
handleSubmit = () => {
  Alert.alert('Play')
}



function Separator() {
  return <View style={styles.separator} />;
}

function HomeScreen({ navigation }) {

  var op1 = Math.floor(Math.random() * 10);
  var op2 = Math.floor(Math.random() * 10);
  var res = op1 + op2;
  var datagame = { 
     totalLevel: 10,
     Level: 0,
     score : 0,
     game : { 
             op1: op1,
             op2: op2,
             res : res
           }
 };

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>LET TRAIN YOUR BRAIN</Text>
            <Separator />
            <Text style={styles.sectionDescription}>
              <Text style={styles.highlight}>Quizy</Text> lets you keep your brain awake and alert. Are you ready to take up the challenge?
            </Text>
            <Separator />
            <Button 
            title="Start playing"
            onPress={() =>
              navigation.push('Play', {
                itemId:0,
                otherParam: datagame,
                answer: '',
              })
            }
            icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="white"
                />
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
    );
}

function PlayScreen({ route,navigation }) {

  
    const { itemId } = route.params;
    const { otherParam } = route.params;
    
    /*React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {*/
       var op1 = Math.floor(Math.random() * 10);
       var op2 = Math.floor(Math.random() * 10);
       var res = op1 + op2;
       
       var datagame = { 
          totalLevel: 10,
          Level: 1 + itemId,
          score : 0,
          game : { 
                  op1: op1,
                  op2: op2,
                  res : res
                }
      };
      var progess = datagame.Level / 10;
      if(datagame.Level>=10){
        var navigate = 'Score';
      }else{
        var navigate = 'Play';
      }
        //alert(datagame.Level)
        
     // });
  
      // Return the function to unsubscribe from the event so it gets removed on unmount
      //return unsubscribe;
    //}, []);
  

  return (
    <View style={{ /*flex: 1,*/}}>
      <View style={styles.container}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progess}
        />
      </View>
      <Text style={{fontSize:16,textAlign:"center", }} >Question n° : <Text style={{  color: "green",fontSize:18,}} > {datagame.Level}/{datagame.totalLevel} </Text>     Score : <Text style={{  color: "red",fontSize:18,}} > {datagame.score} </Text></Text>
      <Separator />
      <View style={{height: 300, alignItems: 'center', justifyContent: 'center' , backgroundColor: 'steelblue'}} >
         <Text style={{ textAlign:"center",color: "white",fontSize:35,}} > {datagame.game.op1} + {datagame.game.op2} = ? </Text>
      </View>
      
      <Input
        keyboardType='numeric'
        placeholder='Tape your answer here...'
      />
       <Separator />
       <Button 
            title="Validate answer"
            onPress={() =>
              navigation.push(navigate, {
                itemId:datagame.Level,
                otherParam: datagame,
                answer: '',
              })
            }
            icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="white"
                />
              }
      />
      

    </View>
  );
}

function ScoreScreen({ route,navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Score screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
        <Stack.Screen name="Score" component={ScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: Colors.primary,
    textAlign : "center",
  },
  sectionDescription: {
    marginTop: 14,
    fontSize: 20,
    fontWeight: '400',
    color: Colors.dark,
    textAlign : "center",
  },
  highlight: {
    fontWeight: '700',
  },
  
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  separator: {
    marginVertical: 8,
    marginTop: 14,
    marginBottom : 14,
    borderBottomColor: '#737373', 
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10,
    marginBottom : 5,
    marginTop:5,
  },
});

export default App;
