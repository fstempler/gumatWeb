import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { initReactI18next } from 'react-i18next'
import  i18n  from 'i18next'

i18n
.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        inicio: 'INICIO',
        nosotros: 'NOSOTROS',
        pilares: 'PILARES',
        productos: 'PRODUCTOS',
        contacto: 'CONTACTO',
        languageButton: 'EN',
        headerTitle: 'Desarrollo y Fabricación de Módulos para Iluminación y Electrónica',
        aboutText: `Nos especializamos en el desarrollo y la fabricación de Módulos de Electrónica, Módulos Led y Componentes para Iluminación, Línea Blanca e Industria Automotriz.                   
                    Ofrecemos una amplia gama de productos orientados a los Fabricantes de Alumbrado Público, Antiexplosivo, Industrial, Automotriz, Comercial, Señalización y Línea Blanca.                    
                    Contamos con Líneas de montaje electrónico automáticas, un sistema de montaje para trabajos especiales, I+D y un sistema de gestión de calidad a lo largo de todo el proceso productivo.                    
                    Trabajamos con diferentes Marcas de Led y componentes, con el fin de brindar a los fabricantes y ensambladores, distintas soluciones adecuadas para cada segmento de mercado.
                    Nuestro modelo de trabajo OEM nos lleva a ser un eslabón clave en la Cadena Industrial, proporcionando soluciones tecnológicas competitivas y de vanguardia que permitan promover el desarrollo de la Industria Nacional, a través de nuestros clientes. Gracias al formato de nuestro proceso productivo, somos competitivos tanto en producciones de gran escala como en las pequeñas.`,
        pilar1: 'RELACIÓN CON EL CLIENTE Y SU SATISFACCIÓN',
        pilar2: 'INNOVACIÓN PERMANENTE ANTE EL CAMBIO CONSTANTE',
        pilar3: 'CONSCIENCIA EN LA SUSTENTABILIDAD',
        pilar4: 'ENFOQUE EN LOS FABRICANTES Y ENSAMBLADORES NACIONALES',
        pilar5: 'MANEJO PROFESIONAL DE LA INFORMACIÓN DEL CLIENTE',
        MPTitle: 'Módulos Potencia:',
        MPText: `Para Alumbrado Público, Industrial, Antiexplosivo, Deportivo.
                  PCB: FR4, Metalcore u otro.
                  Con o sin bornera rápida, con salida de cables.
                  Con o sin sensor NTC para comandar el Driver por excesos de Temperatura.
                  Para Driver de Corriente o Tensión Constante, 12/24vcc o Driver-on-board.
                  Led: de media, baja y alta potencia.
                  Rango de 2500k a 6500k en blanco y en colores.
                `,
        MLTitle: 'Módulos Lineales:',
        MLText: `Para Alumbrado Comercial, Antiexplosivo, Señalética.
                  PCB: FR4, Metalcore u otro.
                  Con o sin bornera rápida, con salida de cables.
                  Para Driver de Corriente o Tensión Constante, 12/24vcc o Driver-on-board.
                  Led: de media, baja y alta potencia.
                  Rango de 2500k a 6500k en blanco y en colores.
                `,
        MATitle: 'Módulos Automotriz:',
        MAText: `Para faros delanteros, traseros, laterales, niebla, direccionamiento.
                  PCB: FR4, Metalcore u otro.
                  Con o sin bornera rápida, con salida de cables.
                  12/24vcc, Bi-voltaje.
                  Posición, Freno, Baliza, Giro, Luz Cortesía, Patente.
                  Led: de media, baja y alta potencia.
                  Rango de 2500k a 6500k en blanco y en colores.        
                  `,
        MHTitle: 'Módulos Horticultura:',
        MHText: `Para vegetación, floración y cultivos indoor específicos.
                  PCB: FR4, Metalcore u otro.
                  Con o sin bornera rápida, con salida de cables.
                  Para Driver de Corriente o Tensión Constante, 12/24vcc o Driver-on-board.
                  Led: de media, baja y alta potencia Horticultura.
                  Rango de 2500k a 6500k en blanco, Rojo, rojo lejano, Azul y UV.
                `,
        DLTitle: 'Drivers Led:',
        DLText: `Drivers de Corriente Constante para Alumbrado Público e Industrial, on-off, corriente de salida parametrizable, dimerizable.
                  Drivers de Tensión Constante para tiras de Led.
                 `,      
        formName: 'Nombre',
        formLastName: 'Apellido',
        formTel: 'Teléfono',
        formSubject: 'Asunto',
        formMessage: 'Mensaje',
        formSend: 'Enviar',
      },
    },
    en: {
      translation: {
        nosotros: 'ABOUT US',
        pilares: 'PRINCIPLES',
        productos: 'PRODUCTS',
        contacto: 'CONTACT',
        languageButton: 'ES',
        headerTitle: 'Development and Manufacturing of Modules for Lighting and Electronics',
        aboutTitle: 'ABOUT US',
        aboutText: `We develop and produce Electronic Modules, Led Modules and Components for Lighting, Home Appliance and Automotive Industry.
                    With a wide variety of products, we are focused to Manufacturers and Assemblers of Streetlight, Explosive Proof, Industrial, Automotive, Commercial, Signal and Home Appliance.
                    With fully integrated SMT Electronic production lines, a special mounting process for rare components, R+D and a Q&A Management along the process.
                    We have different Led and Component Brands to provide specific and accurate Solutions to Manufacturers and Assemblers, in relation with each market segment.
                    As an OEM Manufacturer, we are a critical gear in the Industry Chain, forced to provide Competitive technological Solutions and chase vanguard to promote always the National Industry development, through our customers.
                    Thanks to our production process, we are competitive in high and low scale productions.
                  `,
        pilar1: 'CUSTOMER RELATIONSHIP & SATISFACTION',
        pilar2: 'PERMANENT INNOVATION FACING CONSTANT CHANGE',
        pilar3: 'SUSTAINABILITY CONSCIOUSNESS',
        pilar4: 'NATIONAL MANUFACTURERS AND ASSEMBLERS FOCUS',
        pilar5: 'PROFESSIONAL HANDLING OF CUSTOMER INFORMATION',
        MPTitle: 'Power Modules:',
        MPText: `For Streetlight, Industrial, Explosive Proof, Sport Light.
                  PCB: FR4, Metalcore, others.
                  With/without SMD connector, wire Access.
                  With/without NTC Sensor.
                  For Current or Voltage Constant Led Driver, 12/24vcc or DOB.
                  Led: Low, Medium and Hi-Power.                  
                  White 2500k to 6500k, and colors.
                `,
        MLTitle: 'Linear Modules:',
        MLText: `For Commercial Light, Explosive Proof, Signal Light.
                  PCB: FR4, Metalcore, others.
                  With/without SMD connector, wire Access.
                  For Current or Voltage Constant Led Driver, 12/24vcc or DOB.
                  Led: Low, Medium and Hi-Power.
                  White 2500k to 6500k, and colors.
                `,
        MATitle: 'Automotive Modules:',
        MAText: `For front, rear, sider, guiding, fog Light.
                  PCB: FR4, Metalcore, others.
                  With/without SMD connector, wire Access
                  12/24vcc, Bi-voltaje
                  Position, Stop, Position, Dome, Fog, Side, Turn, Ambience, Car Plate.
                  Led: Low, Medium and Hi-Power.
                  White 2500k to 6500k, and colors.
                `,        
        MHTitle: 'Horticultural Modules:',
        MHText: `Para vegetación, floración y cultivos indoor específicos.
                          PCB: FR4, Metalcore u otro.
                          Con o sin bornera rápida, con salida de cables.
                          Para Driver de Corriente o Tensión Constante, 12/24vcc o Driver-on-board.
                          Led: de media, baja y alta potencia Horticultura.
                          Rango de 2500k a 6500k en blanco, Rojo, rojo lejano, Azul y UV.
                        `,            
        DLTitle: 'Led Drivers:',
        DLText: `Constant Current Drivers for Industrial and Street Light, on-off, dimmable, output current settable.
                  Constant Voltage Led Drivers for Led Strips.
                `,
        formName: 'Name',
        formLastName: 'Last Name',
        formTel: 'Tel',
        formSubject: 'Subject',
        formMessage: 'Message',
        formSend: 'Send',
      },
    },
  },
  lng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
