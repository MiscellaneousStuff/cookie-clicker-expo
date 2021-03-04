import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { TouchableHighlight, Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { BottomNavigation } from 'react-native-paper';
import * as Device from 'expo-device';

import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import { WebView } from 'react-native-webview';

// You can import from local files
import AssetExample from './components/AssetExample';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const lowQualitySave = "Mi4wMzF8fDE2MTQ4MTU4OTkwMzE7MTYxNDgxNTg5OTAzMTsxNjE0ODE1OTQ3Nzc5O0ZyZW5ldGljIFBhcnJvdDtoZHJ0ZXwwMTExMTAwMTEwMDAwMDEwMDEwMTF8MDswOzA7MDswOzA7MDswOzA7MDswOzA7MDswOzA7MDswOzA7MDswOzA7MDs7MDswOzA7MDswOzA7MDstMTstMTstMTstMTstMTswOzA7MDswOzgxOzA7MDstMTstMTsxNjE0ODE1ODk5MDMwOzA7MDs7MDswOzA7MDt8MCwwLDAsMCwsMCwwOzAsMCwwLDAsLDAsMDswLDAsMCwwLCwwLDA7MCwwLDAsMCwsMCwwOzAsMCwwLDAsLDAsMDswLDAsMCwwLCwwLDA7MCwwLDAsMCwsMCwwOzAsMCwwLDAsLDAsMDswLDAsMCwwLCwwLDA7MCwwLDAsMCwsMCwwOzAsMCwwLDAsLDAsMDswLDAsMCwwLCwwLDA7MCwwLDAsMCwsMCwwOzAsMCwwLDAsLDAsMDswLDAsMCwwLCwwLDA7MCwwLDAsMCwsMCwwOzAsMCwwLDAsLDAsMDswLDAsMCwwLCwwLDA7fDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMHwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwfHw%3D%21END%21";
const gigaStackedSave = "Mi4wMzF8fDE2MTQ3MjY4NjE5NDU7MTYxNDcyNjg2MTk0NTsxNjE0NzI2ODk0MDI5O1ByZXR0eSBDb29rO3N6bWlkfDAxMTExMDAxMTAwMDAwMTAxMTAxMHw2MTg0NDYxNzQ0NjcyNDM2OzYxODQ0NjE3NDQ2NzI0MzY7MDswOzA7MDswOzA7MDszOzA7MDswOy0xOzA7MDswOzA7MDswOzE7MTtjaHJpc3RtYXM7MDswOzA7MDswOzA7MDstMTstMTstMTstMTstMTsxOzA7MDswOzUwOzA7MDsxMDE7MTAxOzE2MTQ4MDkwNjE5NDU7MDswOzswOzE7MTs4LjQ4MzExMTI2OTkxOTg4N2UrMzM7fDYwMCw2MDAsMCwwLCwwLDAsNjAwOzEwMCwxMDAsMCwwLCwwLDEwMDsxMDAsMTAwLDAsMCwsMCwxMDA7MTAwLDEwMCwwLDAsLDAsMTAwOzEwMCwxMDAsMCwwLCwwLDEwMDsxMDAsMTAwLDAsMCwsMCwxMDA7MTAwLDEwMCwwLDAsLDAsMTAwOzcwMCw3MDAsMCwwLCwwLDcwMDs2MDAsNjAwLDAsMCwsMCw2MDA7NjAwLDYwMCwwLDAsLDAsNjAwOzEwMCwxMDAsMCwwLCwwLDEwMDs0MDAsNDAwLDAsMCwsMCw0MDA7MjAwLDIwMCwwLDAsLDAsMjAwOzQwMCw0MDAsMCwwLCwwLDQwMDs3MDAsNzAwLDAsMCwsMCw3MDA7NjAwLDYwMCwwLDAsLDAsNjAwOzUwMCw1MDAsMCwwLCwwLDUwMDs3MDAsNzAwLDAsMCwsMCw3MDA7fDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDExMTExMTExMDAxMTExMTEwMDEwMTAxMTExMTExMTExMDAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTAxMDAwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDAxMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAxMDEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMDAwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDExMTExMTExMTExMTAwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMXwxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMDAwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExfDAsNTMxMCw1MzEwLDcsMCwwOzEsNDIwLDQyMCw2NjYsMCwwOzIsMzYxMjAsMzYxMjAsMC41LDAsMDszLDgyODAsODI4MCwxNSwwLDA7NCw1NzAsNTcwLDUsMCwwOzUsNjkwLDY5MCwzLjg1MzY3MDEzMjE3NDUwODRlKzM5LDAsMDs2LDkwMCw5MDAsNzc3LDAsMDs3LDY5MCw2OTAsMTExMSwwLDA7OCw1MTAsNTEwLDcsMCwwOzksMjA3MCwyMDcwLDYxLDAsNjAwOzEwLDIwNzAsMjA3MCw2MSwwLDYwMDsxMSwyNTkyMDAwLDI1OTIwMDAsMCwwLDA7MTMsMTA4MDAwLDEwODAwMCwyLDAsMDsxNSwxMDgwMDAsMTA4MDAwLDIsMCwwOzE3LDE4MDAwLDE4MDAwLDUsMCwwOzE4LDMwMCwzMDAsNywwLDA7MTksMTA4MDAwLDEwODAwMCwzLDAsMDsyMCwyMTYwMDAsMjE2MDAwLDEuNSwwLDA7MjEsNDMyMDAwLDQzMjAwMCwwLjI1LDAsMDsyMiwxMjA2LDEyMDYsMiwwLDA7MjMsNzIwMDAsNzIwMDAsMC4xLDAsMDsyNCw1MTg0MDAwLDUxODQwMDAsMS4yLDAsMDsyNSwxMjk2MDAwMCwxMjk2MDAwMCwwLjgsMCwwO3w%3D%21END%21";

const cookieGardenHelper = "Game.LoadMod('https://rawgit.com/yannprada/cookie-garden-helper/master/cookie-garden-helper.js');";
const fortuneCookie = "https://klattmose.github.io/CookieClicker/FortuneCookie.js";

const addOns = {
  "fortuneCookie": "https://klattmose.github.io/CookieClicker/FortuneCookie.js",
  "cookieMonster": "https://aktanusa.github.io/CookieMonster/CookieMonster.js"
}

const tabs = ["main", "info", "store"];

const Tab = props => {
  return (
    <View>
      <TouchableHighlight>
        {props.children}
      </TouchableHighlight>
      {props.active && (<View style={styles.tabHighlight} />)}
    </View>
  )
}

export default function App() {
  const webViewRef = useRef(null);
  const [orientation, setOrientation] = useState("PORTRAIT");
  const [autoClick, setAutoClick] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const autoClickColor = (autoClick) ? "blue" : "white";

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'main', title: 'Main', icon: 'game-controller' },
    { key: 'info', title: 'Info', icon: 'info' },
    { key: 'Store', title: 'Store', icon: 'store' },
  ]);

  // Keep track of orientation to adjust padding
  useEffect(() => {
    Dimensions.addEventListener('change', ({window:{width,height}})=>{
      if (width<height) {
        setOrientation("PORTRAIT")
      } else {
        setOrientation("LANDSCAPE")
      }
    })
  }, []);

  // Updates the current tab based on the current tab variable
  useEffect(() => {
    webViewRef.current.injectJavaScript(`handleTabSwitch("${activeTab}");`);
  }, [activeTab]);

  const injectJS = () => {
    webViewRef.current.injectJavaScript("document.body.innerHTML = '';")
  };
  const switchTab = tab => {
    setActiveTab(tab);
  };
  const reloadSite = () => {
    webViewRef.current.reload();
  };
  const loadSave = save => {
    webViewRef.current.injectJavaScript(`Game.ImportSaveCode("${save}");`);
  };
  const saveGame = () => {
    webViewRef.current.injectJavaScript("Game.useLocalStorage = 1; Game.WriteSave();");
  }
  const autoClickToggle = () => {
    let oldAutoClick = autoClick;
    setAutoClick(!autoClick);
    webViewRef.current.injectJavaScript("toggleAuto();");
  };
  const addAddOn = addOn => {
    let addOnUrl = addOns[addOn];
    let js = `Game.LoadMod("${addOnUrl}");`;
    console.log(js);
    webViewRef.current.injectJavaScript(addOnUrl);
  };

  let devicePadding = null;
  let model = Device.modelName || "";
  if (model.includes("iPhone X")) {
    if (orientation=="PORTRAIT") {
      devicePadding = {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: Constants.statusBarHeight / 2 
      };
    } else {
      devicePadding = {paddingLeft: Constants.statusBarHeight};
    }
  }

  return (
    <View style={[styles.container, devicePadding]}>
      <WebView
        style={styles.webView}
        ref={webViewRef}
        //source={{ uri: "https://miscellaneousstuff.github.io/" }}
        source={{ uri: "https://miscellaneousstuff.github.io/" }}
        //source={{ uri: "file:///page/index.html" }}
        originWhitelist={['*']}
        scrollEnabled={ false }
        incognito={ true } /* Set this to false if you want to check for user-data persistance between sessions, this blocks page caching on iOS */
        onLoadEnd = {
          (syntheticEvent) => {
            // loadSave(lowQualitySave);
            loadSave(gigaStackedSave);
          }
        }
      />
      <View style={styles.tabs}>
        <Tab active={activeTab == "main"}>
          <Entypo name="game-controller" size={36} style={styles.tabIcon} onPress={() => switchTab("main")} />
        </Tab>
        <Tab active={activeTab == "info"}>
          <MaterialCommunityIcons name="information-outline" size={36} style={styles.tabIcon} onPress={() => switchTab("info")} />
        </Tab>
        <Tab active={activeTab == "store"}>
          <MaterialCommunityIcons name="store" size={36} style={styles.tabIcon} onPress={() => switchTab("store")} />
        </Tab>
        <MaterialCommunityIcons name="cursor-default-outline" size={36} style={[styles.tabIcon, {color: autoClickColor}]} onPress={() => autoClickToggle()} />
        <MaterialCommunityIcons name="content-save-outline" size={36} style={styles.tabIcon} onPress={() => saveGame()} />
      </View>
    </View>
  );
}

// <MaterialIcons name="settings" size={36} style={styles.tabIcon} onPress={() => loadSave(gigaStackedSave)} />

/*
<View style={styles.tabs}>
  <Button style={styles.tab} onPress={() => switchTab("main")} title="Main" />
  <Button style={styles.tab} onPress={() => switchTab("info")} title="Info" />
  <Button style={styles.tab} onPress={() => switchTab("store")} title="Store" />
  <Button style={styles.tab} onPress={() => reloadSite()} title="Reload" />
  <Button style={styles.tab} onPress={() => loadSave(gigaStackedSave)} title="Eg" />
  <Button style={styles.tab} onPress={() => autoClickToggle()} title="Auto" />
</View>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  webView: {
    flex: 1
  },
  tabs: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between'
  },
  tabIcon: {
    width: 36,
    height: 36,
    color: 'white',
    margin: 10,
  },
  tabHighlight: {
    backgroundColor: 'white',
    height: 2,
  }
});