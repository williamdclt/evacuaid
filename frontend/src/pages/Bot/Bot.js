import * as React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#edf8f6',
  fontFamily: 'Noto Sans',
  headerBgColor: '#fc7978',
  headerFontColor: '#edf8f6',
  headerFontSize: '15px',
  botBubbleColor: '#5eb7b7',
  botFontColor: '#fff',
  userBubbleColor: '#ffafb0',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'What would you like to learn about',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: `
    Preventing Fire. Follow local ordinances when burning yard waste. Avoid backyard burning in windy conditions, and keep a shovel, water, and fire retardant nearby to keep fires in check. Remove all flammables from the yard when burning.
    `,
    trigger: '4',
  },
  {
    id: '4',
    message: 'Anything else?',
    trigger: '5',
  },
  {
    id: '5',
    user: true,
    trigger: '6',
  },
  {
    id: '6',
    message: 'OK - well stay safe out there',
    end: true,
  },
]

const Bot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot speechSynthesis={{ enable: true, lang: 'en', voice: window.speechSynthesis.getVoices()[10] }}
      recognitionEnable theme={theme} steps={steps} />
  </ThemeProvider>
);

export default Bot;
