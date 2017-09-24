import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements';
import { Constants } from 'expo';

import ProgramPage from '../ProgramPage';

import style from './style.js';

class TabMenu extends Component {
  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
    this.renderTabs = this.renderTabs.bind(this);
    this.state = {
      selectedTab: 'program'
    }
    this.tabsConfig = {
      feed: {
        title: 'Feed'.toUpperCase(),
        titleStyle: style.titleStyle,
        selectedTitleStyle: style.selectedTitleStyle,
        icon: 'md-flame',
        iconType: 'ionicon',
        iconColor: '#6296f9',
        iconColorSelected: '#5e6977',
        onPress: this.changeTab('feed'),
        renderComponent: () => <View><Text>Shit here</Text></View>
      },
      program: {
        title: 'Program'.toUpperCase(),
        titleStyle: style.titleStyle,
        selectedTitleStyle: style.selectedTitleStyle,
        icon: 'md-school',
        iconType: 'ionicon',
        iconColor: '#6296f9',
        iconColorSelected: '#5e6977',
        onPress: this.changeTab('program'),
        renderComponent: () => <ProgramPage />
      },
      notifications: {
        title: 'Notifications'.toUpperCase(),
        titleStyle: style.titleStyle,
        selectedTitleStyle: style.selectedTitleStyle,
        icon: 'md-notifications',
        iconType: 'ionicon',
        iconColor: '#6296f9',
        iconColorSelected: '#5e6977',
        onPress: this.changeTab('notifications'),
        renderComponent: () => <View><Text>Shit here</Text></View>
      }
    }
  }

  changeTab(selectedTab) {
    return () => {
      this.setState({
        selectedTab
      })
    }
  }

  renderIcon(tabConfig, selected=false) {
    return () => {
      if (selected) {
        return <Icon 
          containerStyle={
            {
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22
            }
          }
          color={tabConfig.iconColor}
          type={tabConfig.iconType} 
          name={tabConfig.icon}
          size={33} 
        />
      } else {
        return <Icon 
          color={tabConfig.iconColorSelected}
          type={tabConfig.iconType}
          name={tabConfig.icon}
          size={30}
        />
      }
    }
  }

  renderTabs() {
    let TabComponents = [];
    for(let prop in this.tabsConfig) {
      let currentConfig = this.tabsConfig[prop];
      let selected = this.state.selectedTab === prop;
      TabComponents.push(
        <Tab
          title={selected ? currentConfig.title : null}
          titleStyle={currentConfig.titleStyle}
          selectedTitleStyle={currentConfig.selectedTitleStyle}
          selected={selected}
          renderIcon={this.renderIcon(currentConfig)}
          renderSelectedIcon={this.renderIcon(currentConfig, true)}
          onPress={currentConfig.onPress}>
          {currentConfig.renderComponent()}
        </Tab>
      )
    }
    return TabComponents
  }

  render() {
    let { selectedTab } = this.state;
    return (
      <View>
        <StatusBar translucent backgroundColor="red" />
        <Tabs>
          {this.renderTabs()}
        </Tabs>
      </View>
    );
  }
}


export default TabMenu;
