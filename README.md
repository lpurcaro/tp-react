# Amigos Peludos - App de atencion veterinaria

Este proyecto esta hecho con [Create React App](https://github.com/facebook/create-react-app).

## Librerias utilizadas
- [React Router](https://reactrouter.com/)
- [React Redux](https://react-redux.js.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Datepicker](https://reactdatepicker.com/)
- [React Bootstrap Icons](https://www.npmjs.com/package/react-bootstrap-icons)

## Cómo levantar la app
Para levantar la app lo primero que debemos hacer es instalar las dependencias definidad en el package.json
```
    npm install
```

Luego corremos el script para levantarla
```
    npm start
```

Automáticamente se abrirá una pestaña en el navegador con la app levantada, en caso de que no funcione podemos levantarla nosotros mismos en [http://localhost:3000](http://localhost:3000)


## Cómo está organizada la app
La aplicacion cuenta con 3 pestañas principales: `turnos, pacientes y servicios`. Las mismas tienen su correspodiente store que permite gestionar los datos que vayamos a manejar.

## Qué se puede hacer con la app
El administrativo de una veterinaria podra realizar operaciones de alta baja y  modificacion respecto de los servicios que brinda, los pacientes que atiende y los turnos que otorga.


