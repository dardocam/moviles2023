<?php

function handleInputClima()
{
    $respuesta = array('cod' => '');
    if (isset($_GET['q'])) {
        if (strtolower($_GET['q']) == 'necochea') {
            //construye una query sql
            $q = trim($_GET['q']);
            //envia la peticion para recoger
            //la información almacenada por sensores en
            // un servidor SQL
            $respuesta['cod'] = '';
            $respuesta['estado'] = 'Clear';
            // $respuesta['weather'][0]['main'] = 'Clear';
            echo json_encode($respuesta);
        } else {
            $respuesta['cod'] = '404';
            echo json_encode($respuesta);
        }
    } else {
        echo "Bad request";
    }
}
