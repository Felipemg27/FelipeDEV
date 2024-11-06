import React, { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles'; // Importa os estilos do arquivo styles.ts

export default function User() {
    const faixas = [
        {
            nome: "Faixa Branca",
            idade: "5 a 10 anos",
            cor: "#ffffff",
            requisitos: `Tempo de Treino: 6 meses a 1 ano;
Requisitos: Nenhum requisito específico além de começar o treino.
            `,
        },
        {
            nome: "Faixa Amarela",
            idade: "11 a 15 anos",
            cor: "#ffcc00",
            requisitos: `Tempo de Treino: 6 meses a 1 ano de treino na faixa branca;
Requisitos: Evolução nas técnicas e uma avaliação de desempenho durante o treino.
            `,
        },
        {
            nome: "Faixa Laranja",
            idade: "16 a 20 anos",
            cor: "#ff6600",
            requisitos: `Tempo de Treino: 1 a 2 anos de treino na faixa amarela;
Requisitos: Domínio técnico das posições básicas e resistência física.
            `,
        },
        {
            nome: "Faixa Verde",
            idade: "21 a 25 anos",
            cor: "#00cc00",
            requisitos: `Tempo de Treino: 2 a 3 anos de treino na faixa laranja;
Requisitos: Demonstrar domínio técnico das técnicas básicas e avançadas.
            `,
        },
        {
            nome: "Faixa Azul",
            idade: "26 a 30 anos",
            cor: "#0066ff",
            requisitos: `Tempo de Treino: 3 a 4 anos de treino na faixa verde;
Requisitos: Demonstrar um nível técnico considerável e capacidade de aplicação em sparrings.
            `,
        },
        {
            nome: "Faixa Roxa",
            idade: "31 a 35 anos",
            cor: "#6600cc",
            requisitos: `Tempo de Treino: 4 a 5 anos de treino na faixa azul;
Requisitos: Habilidades refinadas e grande domínio técnico.
            `,
        },
        {
            nome: "Faixa Marrom",
            idade: "36 a 40 anos",
            cor: "#993300",
            requisitos: `Tempo de Treino: 5 a 6 anos de treino na faixa roxa;
Requisitos: Habilidades apuradas e capacidade de ensinar e aplicar as técnicas de forma consistente.
            `,
        },
        {
            nome: "Faixa Preta",
            idade: "41 anos ou mais",
            cor: "#000000",
            requisitos: `Tempo de Treino: 5 a 6 anos de treino na faixa marrom;
Requisitos: Dominar a arte e ser capaz de ensiná-la.
            `,
        },
    ];

    
    const [faixaSelecionada, setFaixaSelecionada] = useState<string | null>(null);

    
    const toggleRequisitos = (nome: string) => {
        setFaixaSelecionada(faixaSelecionada === nome ? null : nome); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faixas (Requisitos)</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {faixas.map((faixa, index) => (
                    <View key={index}>
                        <TouchableOpacity onPress={() => toggleRequisitos(faixa.nome)}>
                            <View style={[styles.faixaContainer, { borderColor: faixa.cor }]}>
                                <Text style={styles.faixaNome}>{faixa.nome}</Text>
                                <Text style={styles.faixaIdade}>{faixa.idade}</Text>
                            </View>
                        </TouchableOpacity>
                        {faixaSelecionada === faixa.nome && (
                            <View style={[styles.requisitosContainer, { borderColor: faixa.cor }]}>
                                <Text style={styles.requisitosText}>{faixa.requisitos}</Text>
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
