# SmartLabels - Sistema de Gestión de Etiquetas Electrónicas

**SmartLabels** es una plataforma web desarrollada en Node.js diseñada para la gestión, actualización y promoción de productos a través de etiquetas inteligentes basadas en tecnología ESP32.

Este sistema permite transformar el punto de venta tradicional en un entorno dinámico y digitalizado, optimizando la comunicación de precios y publicidad.

## 🚀 Características Principales

* **Capacidad 5-en-1:** Una sola etiqueta inteligente es capaz de gestionar y mostrar información detallada de hasta 5 productos diferentes, maximizando el uso del hardware.
* **Publicidad Dinámica:** Soporte para la reproducción de video promocional (formato MJPEG) almacenado localmente en el dispositivo, capturando la atención del cliente en el estante.
* **Conectividad Eficiente:** Utiliza el protocolo **ESP-NOW** para una comunicación de ultra bajo consumo y alta velocidad entre el nodo central (Data_Giver) y las etiquetas.
* **Gestión Centralizada:** Interfaz web intuitiva para la administración de inventario y contenidos visuales.

## 🛠️ Stack Tecnológico

* **Backend:** Node.js con Express.
* **Frontend:** EJS (Embedded JavaScript templates) para renderizado dinámico.
* **Estilos:** Tailwind CSS (vía CDN) para una interfaz moderna y responsiva.
* **Hardware Compatible:** Ecosistema ESP32 (S2, S3, C3) con soporte para pantallas integradas.

## 📦 Estructura del Proyecto

```text
smart_labels_web/
├── views/              # Plantillas EJS
│   ├── partials/       # Componentes reutilizables (Head, Navbar, Footer)
│   └── index.ejs       # Página principal (Landing Page)
├── public/             # Archivos estáticos (Imágenes, JS, CSS)
├── app.js              # Servidor principal de Express
└── package.json        # Dependencias y scripts del proyecto