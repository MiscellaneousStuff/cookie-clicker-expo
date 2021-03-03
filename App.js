import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { BottomNavigation } from 'react-native-paper';

import { WebView } from 'react-native-webview';

// You can import from local files
import AssetExample from './components/AssetExample';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const gigaStackedSave = "Mi4wMzF8fDE2MTQ3MjY4NjE5NDU7MTYxNDcyNjg2MTk0NTsxNjE0NzI2ODk0MDI5O1ByZXR0eSBDb29rO3N6bWlkfDExMTExMDAxMTAwMTAwMTAxMTAxMHw2MTg0NDYxNzQ0NjcyNDM2OzYxODQ0NjE3NDQ2NzI0MzY7MDswOzA7MDswOzA7MDszOzA7MDswOy0xOzA7MDswOzA7MDswOzE7MTtjaHJpc3RtYXM7MDswOzA7MDswOzA7MDstMTstMTstMTstMTstMTsxOzA7MDswOzUwOzA7MDsxMDA7MTAwOzE2MTQ3MjY4NjE5NDU7MDswOzswOzE7MTs4LjQ1NjUxNzEzMzIyNTQyNGUrMzM7fDYwMCw2MDAsMCwwLCwwLDAsNjAwOzEwMCwxMDAsMCwwLCwwLDEwMDsxMDAsMTAwLDAsMCwsMCwxMDA7MTAwLDEwMCwwLDAsLDAsMTAwOzEwMCwxMDAsMCwwLCwwLDEwMDsxMDAsMTAwLDAsMCwsMCwxMDA7MTAwLDEwMCwwLDAsLDAsMTAwOzcwMCw3MDAsMCwwLCwwLDcwMDs2MDAsNjAwLDAsMCwsMCw2MDA7NjAwLDYwMCwwLDAsLDAsNjAwOzEwMCwxMDAsMCwwLCwwLDEwMDs0MDAsNDAwLDAsMCwsMCw0MDA7MjAwLDIwMCwwLDAsLDAsMjAwOzQwMCw0MDAsMCwwLCwwLDQwMDs3MDAsNzAwLDAsMCwsMCw3MDA7NjAwLDYwMCwwLDAsLDAsNjAwOzUwMCw1MDAsMCwwLCwwLDUwMDs3MDAsNzAwLDAsMCwsMCw3MDA7fDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDExMTExMTExMDAxMTExMTEwMDEwMTAxMTExMTExMTExMDAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTAxMDAwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDAxMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAxMDEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMDAwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDExMTExMTExMTExMTAwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMXwxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMDAwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExfDAsNTMxMCw1MzEwLDc7MSw0MjAsNDIwLDY2NjsyLDM2MTIwLDM2MTIwLDAuNTszLDgyODAsODI4MCwxNTs0LDU3MCw1NzAsNTs1LDY5MCw2OTAsMy44NTM2NzAxMzIxNzQ1MDg0ZSszOTs2LDkwMCw5MDAsNzc3OzcsNjkwLDY5MCwxMTExOzgsNTEwLDUxMCw3OzksMjA3MCwyMDcwLDYxLDAsNjAwOzEwLDIwNzAsMjA3MCw2MSwwLDYwMDsxMSwyNTkyMDAwLDI1OTIwMDA7MTMsMTA4MDAwLDEwODAwMCwyOzE1LDEwODAwMCwxMDgwMDAsMjsxNywxODAwMCwxODAwMCw1OzE4LDMwMCwzMDAsNzsxOSwxMDgwMDAsMTA4MDAwLDM7MjAsMjE2MDAwLDIxNjAwMCwxLjU7MjEsNDMyMDAwLDQzMjAwMCwwLjI1OzIyLDEyMDYsMTIwNiwyOzIzLDcyMDAwLDcyMDAwLDAuMTsyNCw1MTg0MDAwLDUxODQwMDAsMS4yOzI1LDEyOTYwMDAwLDEyOTYwMDAwLDAuODt8%21END%21";

const cookieGardenHelper = "Game.LoadMod('https://rawgit.com/yannprada/cookie-garden-helper/master/cookie-garden-helper.js');";
const fortuneCookie = "https://klattmose.github.io/CookieClicker/FortuneCookie.js";

const addOns = {
  "fortuneCookie": "https://klattmose.github.io/CookieClicker/FortuneCookie.js",
  "cookieMonster": "https://aktanusa.github.io/CookieMonster/CookieMonster.js"
}

export default function App() {
  const webViewRef = useRef(null);
  const [orientation, setOrientation] = useState("PORTRAIT");

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

  const injectJS = () => {
    webViewRef.current.injectJavaScript("document.body.innerHTML = '';")
  };
  const switchTab = tab => {
    console.log("CODE:", `handleTabSwitch(${tab});`);
    webViewRef.current.injectJavaScript(`handleTabSwitch("${tab}");`);
  };
  const reloadSite = () => {
    webViewRef.current.reload();
  };
  const loadSave = save => {
    webViewRef.current.injectJavaScript(`Game.ImportSaveCode("${save}");`);
  };
  const autoClickToggle = () => {
    webViewRef.current.injectJavaScript("toggleAuto();");
  };
  const addAddOn = addOn => {
    let addOnUrl = addOns[addOn];
    let js = `Game.LoadMod("${addOnUrl}");`;
    console.log(js);
    webViewRef.current.injectJavaScript(addOnUrl);
  };
  
  const topPadding  = (orientation=="PORTRAIT")
                    ? {paddingTop: Constants.statusBarHeight, paddingLeft: 0}
                    : {paddingTop: 0, paddingLeft: Constants.statusBarHeight};

  return (
    <View style={[styles.container, topPadding]}>
      <WebView
        style={styles.webView}
        ref={webViewRef}
        //source={{ uri: "https://miscellaneousstuff.github.io/" }}
        source={{ uri: "http://192.168.0.16:8080" }}
        //source={{ uri: "file:///page/index.html" }}
        originWhitelist={['*']}
        scrollEnabled={ false }
        incognito={ true } /* Set this to false if you want to check for user-data persistance between sessions, this blocks page caching on iOS */
      />
      <View style={styles.tabs}>
        <Button style={styles.tab} onPress={() => switchTab("main")} title="Main" />
        <Button style={styles.tab} onPress={() => switchTab("info")} title="Info" />
        <Button style={styles.tab} onPress={() => switchTab("store")} title="Store" />
        <Button style={styles.tab} onPress={() => reloadSite()} title="Reload" />
        <Button style={styles.tab} onPress={() => loadSave(gigaStackedSave)} title="Eg" />
        <Button style={styles.tab} onPress={() => autoClickToggle()} title="Auto" />
        <Button style={styles.tab} onPress={() => addAddOn("fortuneCookie")} title="Fortune Cookie" />
        <Button style={styles.tab} onPress={() => addAddOn("cookieMonster")} title="Cookie Monster" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: Constants.statusBarHeight / 2,
    backgroundColor: '#000',
  },
  tabs: {
    flexDirection: 'row'
  },
  webView: {
    flex: 1
  },
  tab: {

  }
});
