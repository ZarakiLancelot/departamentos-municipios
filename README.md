# Departamentos y Municipios de GUATEMALA
[![Netlify Status](https://api.netlify.com/api/v1/badges/2d5cab90-2a48-43de-bb8c-b1e40e4dc1b4/deploy-status)](https://app.netlify.com/sites/departamentos-municipios-guatemala/deploys)


JSON para obtener los departamentos y sus respectivos municipios de Guatemala.

## Descripción
Este es un servicio que devuelve un JSON estático con todos los departamentos y municipios de Guatemala, para que pueda ser usado como referencia y ser consumido para sus proyectos.

## Instalación
1. Clona este repositorio:
```bash
git clone https://github.com/ZarakiLancelot/departamentos-municipios
```

2. Instala dependencias:
```bash
npm install
```

3. Inicia el servicio:
```bash
node server.js
```

4. Accede a la API mediante la URL:
```bash
http://localhost:3000/api/datos
```
Reemplaza `localhost:3000` con la URL correspondiente en caso de que hayas desplegado tu API en un servidor.

## Endpoints

```bash
GET /api/datos
```
Como pueden ver es una petición del tipo `GET` hacia la ruta `/api/datos`. Esta devuelve un JSON con todos los departamentos y municipios de Guatemala con la siguiente estructura:

```JSON
{
  "departamentos": [
    {
      "departamento" : "Escuintla",
      "municipios" : [
        "Escuintla",
        "Guanagazapa",
        "Iztapa",
        "La Democracia",
        "La Gomera",
        "Masagua",
        "Nueva Concepción",
        "Palín",
        "San José",
        "San Vicente Pacaya",
        "Santa Lucía Cotzumalguapa",
        "Siquinalá",
        "Tiquisate"
      ]
    },
    {
      "departamento" : "Guatemala",
      "municipios" : [
        "Amatitlán",
        "Chinautla",
        "Chuarrancho",
        "Fraijanes",
        "Guatemala City",
        "Mixco",
        "Palencia",
        "Petapa",
        "San José del Golfo",
        "San José Pinula",
        "San Juan Sacatepéquez",
        "San Pedro Ayampuc",
        "San Pedro Sacatepéquez",
        "San Raymundo",
        "Santa Catarina Pinula",
        "Villa Canales"
      ]
    }
  ]
}
```


## Licencia
ISC License


## Contacto
Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto conmigo:

- Edwin Einsen Vásquez Velásquez
- kenpachi2783@gmail.com
