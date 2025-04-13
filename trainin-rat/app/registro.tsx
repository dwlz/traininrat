import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function RegistroAtividade() {
  const [atividade, setAtividade] = useState('');
  const [valor, setValor] = useState('');
  const router = useRouter();

  const registrar = () => {
    console.log('Atividade:', atividade, 'Valor:', valor);
    router.back(); // volta pra tela anterior
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Atividade</Text>
      <TextInput
        value={atividade}
        onChangeText={setAtividade}
        placeholder="Ex: Bicicleta"
        style={{ borderWidth: 1, marginBottom: 12 }}
      />
      <Text>Valor</Text>
      <TextInput
        value={valor}
        onChangeText={setValor}
        placeholder="Ex: 3 km"
        style={{ borderWidth: 1, marginBottom: 12 }}
      />
      <Button title="Registrar" onPress={registrar} />
    </View>
  );
}