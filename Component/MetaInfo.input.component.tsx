import React from 'react';
import { TextInput } from 'react-native';


interface MetaInfoInputProps extends React.Props<any> {
    value: string
    valueChange:any
}

export class MetaInfoInput extends React.Component<MetaInfoInputProps, any> {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    handleChange = (text) => {
        this.setState({ text: text })
        this.props.valueChange(text)
     }

    render(){
      return(

        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder={this.props.value}
            onChangeText = {this.handleChange}
            value={this.state.text}
            />
      )
    
  }
}
