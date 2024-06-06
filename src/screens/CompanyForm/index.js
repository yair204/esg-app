import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, ScrollView } from 'react-native';
import { styles } from './style'; 

const CompanyCardForm = () => {
  const [employees, setEmployees] = useState('');
  const [officeArea, setOfficeArea] = useState('');
  const [labArea, setLabArea] = useState('');
  const [parkingSpots, setParkingSpots] = useState('');
  const [greenBuilding, setGreenBuilding] = useState(false);
  const [renewableEnergy, setRenewableEnergy] = useState(false);
  const [greenRoof, setGreenRoof] = useState(false);
  const [communityVolunteering, setCommunityVolunteering] = useState(false);

  const handleSubmit = () => {
    const formData = {
      employees,
      officeArea,
      labArea,
      parkingSpots,
      greenBuilding,
      renewableEnergy,
      greenRoof,
      communityVolunteering,
    };
    console.log(formData);
    // Handle form submission, e.g., send to API or save in state
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Company Card Form</Text>

      <Text style={styles.label}>עובדים/תלמידים/תושבים:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={employees}
        onChangeText={setEmployees}
      />

      <Text style={styles.label}>שטחי משרדים/כיתות (מ"ר):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={officeArea}
        onChangeText={setOfficeArea}
      />

      <Text style={styles.label}>שטחי מעבדות (מ"ר):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={labArea}
        onChangeText={setLabArea}
      />

      <Text style={styles.label}>כמות חניות:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={parkingSpots}
        onChangeText={setParkingSpots}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>תקן בנייה ירוקה:</Text>
        <Switch value={greenBuilding} onValueChange={setGreenBuilding} />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>אנרגיה מתחדשת:</Text>
        <Switch value={renewableEnergy} onValueChange={setRenewableEnergy} />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>גג ירוק/גינה קהילתית:</Text>
        <Switch value={greenRoof} onValueChange={setGreenRoof} />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>תכניות התנדבות בקהילה:</Text>
        <Switch value={communityVolunteering} onValueChange={setCommunityVolunteering} />
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default CompanyCardForm;
