import React, { Component } from 'react';
import { View, TextInput } from 'react-native';


interface MetaInformationFieldsProps extends React.Props<any> {
    value: string
    valueChange:any
}

export class MetaInformationFields extends React.Component<MetaInformationFieldsProps, any> {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    handeChange = (text) => {
        this.setState({ text: text })
        this.props.valueChange(text)
     }

    render(){
      return(

        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder={this.props.value}
            onChangeText = {this.handeChange}
            value={this.state.text}
            />
      )
    
  }
}
