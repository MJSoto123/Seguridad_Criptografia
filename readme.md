# Algoritmos de Criptografía

Los algoritmos que presentamos en este repositorio son parte del curso de Seguridad en Ciencia de la Computación.

## Integrantes

- Juan Manuel Soto Begazo
- Fiorela Estefany Villarroel Ramos
- Freddy Leonel Humpiri Valdivia

![image](https://github.com/MJSoto123/Seguridad_Criptografia/assets/79772873/28557be3-eb8e-4ff6-ad90-e5320494dc36)

## Desencriptador Polybios
El cifrado de Polybios, también conocido como cifrado cuadrado de Polybios, es una técnica de cifrado que asocia cada letra de un alfabeto a una serie de coordenadas en una cuadrícula bidimensional. Este cifrado es nombrado en honor al matemático griego Polybios , quien es conocido por haberlo descrito.
Aquí tienes los pasos básicos para entender cómo funciona el cifrado de Polibio:

Cómo funciona:

- **Creación de la Cuadrícula de Polibio:** Se crea una cuadrícula 5x5 (también puede ser 6x6 si incluyes caracteres especiales) que contiene letras del alfabeto (generalmente excluyendo "J" y usando "I" en su lugar). Las letras se organizan en filas y columnas.

- **Asociación de Coordenadas:** Cada letra del alfabeto se representa mediante un par de números que indican su ubicación en la cuadrícula. Por ejemplo, "A" se representa como "11", "B" como "12", "C" como "13", y así sucesivamente.
  
- **Cifrado de Mensajes:** Para cifrar un mensaje, se toma cada letra del mensaje y se busca su par de números en la cuadrícula de Polibio. Estos pares de números se concatenan para formar el mensaje cifrado.

- **Descifrado de Mensajes:** Para descifrar el mensaje, se toma cada par de números en el mensaje cifrado y se busca la letra correspondiente en la cuadrícula.

Para utilizar el desencriptador Polybios, siga los siguientes pasos:

1. Proporcione el mensaje cifrado que desea descifrar , todos los dígitos deben de estar en un rango de [1..5].
2. Ejecute el desencriptador Polybios.
3. El desencriptador traducirá el mensaje y mostrará el resultado.

### Interfaz 

![image](https://github.com/MJSoto123/Seguridad_Criptografia/assets/79772873/a99ed249-faba-42ea-8217-ba0c068c2589)

### Ejemplos

![image](https://github.com/MJSoto123/Seguridad_Criptografia/assets/79772873/f232026e-f9b1-4e52-aebe-62b83e7b3f58)
![image](https://github.com/MJSoto123/Seguridad_Criptografia/assets/79772873/c9d86b4a-d7d6-4bc7-a884-d358d738f15d)
![image](https://github.com/MJSoto123/Seguridad_Criptografia/assets/79772873/daff8d9a-e672-4476-9f64-757d4f5bbc53)
![image](https://github.com/MJSoto123/Seguridad_Criptografia/assets/79772873/0de868f9-e3a1-426b-88dd-90c4532c75b5)
![image](https://github.com/MJSoto123/Seguridad_Criptografia/assets/79772873/287427f7-ad61-4bdb-8078-9d7be51ca066)


## Encriptador Por Rejilla

¿Qué es un cifrador por rejilla?

Un cifrador por rejilla es una técnica de cifrado que utiliza una rejilla criptográfica para ocultar el texto original. La rejilla es una matriz con celdas que puede contener letras, números o símbolos. Para cifrar un mensaje, el cifrador coloca la rejilla sobre el mensaje original y solo revela las letras en las celdas seleccionadas, ocultando el resto del texto. Esto resulta en un mensaje cifrado que es difícil de entender sin la rejilla correcta.

Cómo funciona:

- Generación de la rejilla: El cifrador genera una rejilla criptográfica, que es una matriz de filas y columnas. El tamaño de la rejilla puede variar según la implementación.

- Colocación de la rejilla: El cifrador coloca la rejilla sobre el mensaje original de manera que solo algunas celdas de la rejilla cubren las letras del mensaje.

- Revelación de letras: Solo se revelan las letras en las celdas seleccionadas. El resto del texto queda oculto.

- Resultado cifrado: El resultado es el mensaje cifrado, que solo muestra las letras de las celdas seleccionadas en la rejilla.

Para utilizar el encriptador por rejilla, siga estos pasos:

1. Proporcione el texto que desea cifrar.
2. Ejecute la aplicación del encriptador por rejilla.
3. La aplicación generará una rejilla criptográfica y cifrará el texto.
4. El resultado es el texto cifrado.

## Interfaz
- Primera rotación
![image](https://github.com/MJSoto123/Seguridad_Criptografia/assets/79772873/4b181a76-29de-4f28-83ac-a50702cd114e)

- Segunda rotación
![image](https://github.com/MJSoto123/Seguridad_Criptografia/assets/79772873/09cafd94-bbee-40c5-95ce-bcedcdf55cc6)

- Tercera rotación
![image](https://github.com/MJSoto123/Seguridad_Criptografia/assets/79772873/3c01fa9a-bc4c-4bfa-9126-77c373a6bda3)

- Cuarta rotación 
![image](https://github.com/MJSoto123/Seguridad_Criptografia/assets/79772873/5b0faa40-6516-4801-8d68-446d5fa18555)

- Texto Cifrado
![image](https://github.com/MJSoto123/Seguridad_Criptografia/assets/79772873/585dcdd0-b93f-44a7-a624-ec3dca3f793a)



