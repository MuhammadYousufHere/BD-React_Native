import React,{useState} from "react";
import { View } from "react-native";
import AnimatedInput from "react-native-animated-input";

const Search = () => {
       const [isValid, setIsValid] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleChange = ()=>{
     
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
      <AnimatedInput
        placeholder="Email"
        valid={isValid}
        errorText="Error"
        onChangeText={handleChange}
        value={email}
        styleLabel={{ fontWeight: "600" }}
        styleBodyContent={{ borderBottomWidth: 1.5 }}
      />
    </View>
  );
};
export default Search;