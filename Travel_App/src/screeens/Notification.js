import React, { Component ,useState }from 'react';
import { View, ScrollView } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { Input, Button, Card, Tile } from 'react-native-elements';
import InputTaker from '../Reusable/InputTaker';
import { FontAwesome } from '@expo/vector-icons';


let items = [{
  id: '92iijs7yta',
  name: 'Boating'
}, {
  id: 'a0s0a8ssbsd',
  name: 'Trekking'
}, {
  id: '16hbajsabsd',
  name: 'Surfing'
}, {
  id: 'nahs75a5sg',
  name: 'Scuba diving'
}, {
  id: '667atsas',
  name: 'Exploring'
}, {
  id: 'hsyasajs',
  name: 'Canoeing'
}, {
  id: 'djsjudksjd',
  name: 'Rafting'
}, {
  id: 'sdhyaysdj',
  name: 'kayaking'
}, {
  id: 'suudydjsjd',
  name: 'Zip-Lining'
}
];
const org = "#db5e40"



// const CategoryPicker =()=>
// {
//     return(

//     )
// }

// export default CategoryPicker


export default class MultiSelectExample extends Component {

  state = {
    selectedItems: [],
    adv:""
  };
  //const [adv,setadv]= useState("")


  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });

  };

  render() {
    const { selectedItems } = this.state;

    return (
      <ScrollView>





        <View style={{ marginTop: 80, flexDirection: "row",justifyContent:"center" }}>
          <InputTaker

            leftIcon={<FontAwesome name="search" size={22} color="#db5e40" />}
            placeholder="  Add tag"
            widthpass={225}
            heightpass={50}
            keyboardType="default"
        //    onChangeText={
        //       function (currentInput) {
        //           setadv(currentInput)
        //       }
        //  }
          >


          </InputTaker>
          <View style={{justifyContent:"center"}}>
            <Button
              buttonStyle={{ borderRadius: 10, backgroundColor: '#db5e40', width: 100, }}
              icon={{
                name: "add",
                size: 20,
                color: "white"
              }}
              title="Add"
              raised={true}
            //onPress={pickImage}
              onPress= {
                function()
                {
                  items.push({id:"syyks",name:})
                }
              }

            />
          </View>
        </View>
        <View style={{ justifyContent: "center", width: 320, alignSelf: "center", marginTop: 20, borderRadius: 15 }}>
          <MultiSelect
            //searchInputStyle={{paddingLeft:20}}
            styleDropdownMenuSubsection={{paddingLeft:10,backgroundColor:'#dedede',borderRadius:10}}
              styleListContainer={{borderRadius:10,backgroundColor:"#dedede"}}
              
            hideTags
            items={items}
            textColor="gray"
            uniqueKey="id"
            ref={(component) => { this.multiSelect = component }}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Pick Tags"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={(text) => console.log(text)}

            tagRemoveIconColor={org}
            tagBorderColor={org}
            tagTextColor="black"
            selectedItemTextColor={org}
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: '#CCC' }}
            submitButtonColor={org}
            submitButtonText="Submit"


          />
          <View>
            {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}


          </View>
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Button
              buttonStyle={{ borderRadius: 15, backgroundColor: '#db5e40' }}
              icon={{
                name: "photo",
                size: 20,
                color: "white"
              }}
              title="Upload Image"
              raised={true}
            //onPress={pickImage}
            />
          </View>


        </View>
      </ScrollView>
    );
  }
}