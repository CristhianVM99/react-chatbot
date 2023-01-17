import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import WikipediaSearch from '../WikipediaSearch/WikipediaSearch'

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#eb3449',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#eb3449',
    botFontColor: '#fff',
    userBubbleColor: '#0cb3c9',
    userFontColor: '#fff',
}

export default class Contenido extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot 
                    headerTitle={'Chatbot'}
                    floating={true}
                    recognitionEnable={true}
                    steps={[
                        {
                            id: "1",
                            message: "Hola. ¿Cuál es tu nombre?",
                            trigger: "2"
                        },                        
                        {
                            id: "2",
                            user: true,
                            validator: (value) => {
                                if (/^[A-Z]{0}[a-z]{2,15}$/.test(value)) {
                                    return true;
                                }
                                else {
                                    return 'Por favor ingresa un nombre válido.';
                                }
                            },
                            trigger: "3"
                        },
                        {
                            id: "3",
                            message: "Hola {previousValue}, gusto en conocerte!",
                            trigger: "4"
                        },
                        {
                            id: "4",
                            message: "¿Necesitas realizar alguna busqueda?",
                            trigger: "5"
                        },
                        {
                            id: "5",
                            options: [
                                {value: "y", label: "Si", trigger: "6A"},
                                {value: "n", label: "No", trigger: "6B"},
                            ]
                        },
                        {
                            id: "6A",
                            message: "Genial! Dime que buscas...",
                            trigger: "searchWiki"
                        },
                        {
                            id: "6B",
                            message: "Lo siento si no puedo ser de ayuda para usted. Hasta luegor",
                            end: true
                        },
                        {
                            id: "searchWiki",
                            user: true,
                            trigger: 9
                        },
                        {
                            id: "9",
                            component: <WikipediaSearch />,
                            asMessage: true,
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "preguntaVuelta",
                            message: "¿Necesitas saber algo más?",
                            trigger: "respuestaVuelta",
                        }, 
                        {
                            id: "respuestaVuelta",
                            options: [
                                {value: "y", label: "Si", trigger: "6A"},
                                {value: "n", label: "No", trigger: "6B"},
                            ],
                        }
                    ]}
                />
            </ThemeProvider>
        )
    }
}
