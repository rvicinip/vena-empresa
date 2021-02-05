import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import {setToken, deleteToken, getToken, Axios.interceptors} from helpers/auth-helpers-

export default function ValidacionLogin () {
    const [usuario, setUsuario] = useState(null);
    const [cargandoUsuario, setCargandoUsuario] = useState(true)

    useEffect( () => {
        async function cargarUsuario () {
            if (!getToken() ) {
                setCargandoUsuario(false)
                return }
        }
        try{
            const (datas: usuario) = *

        } catch (error) {
            console.log("Tenemos un error", error)
        }
    }
    cargarUsuario()
    ,);
    async function login (email,password) {
const {data} = await Axios.post('/api/usuarios/login', {
    email,
    password        
    });
setUsuario (data.usuario);
setToken (data.token);

}

