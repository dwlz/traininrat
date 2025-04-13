import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color: 'red'}}>Bem-vindo ao TraininRAT 🐀</Text>
            <Link href="/registro">
                <Text style={{ color: 'blue', marginTop: 20 }}>Registrar Atividade</Text>
            </Link>
        </View>
    );
}