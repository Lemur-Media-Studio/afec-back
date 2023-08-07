# AFEC

| FRONT | BACK |
| --- | --- |
|  |  |
| https://afec.onrender.com/ | https://afecapp.onrender.com/ |
|  | https://cloud.mongodb.com/v2/63ce41999c05fb6ca51fc463#/clusters |

---

| ESTRUCTURA BASE DE DATOS ETIQUETAS | EXPLICACION DE ETIQUETAS |
| --- | --- |
|  |  |

---

**LISTA DE VIDEOS** 

| Estado | Descripcion |
| --- | --- |
| 🟩 - Verde | Todo okey y subido a la API |
| 🍊 - Naranja | Falta subir a la API |
| 🟥 - Rojo | Falta JSON o conflicto en datos |

---

| Categoria | Link (Listas de reproduccion) | Imagenes (por categoria) | JSON |
| --- | --- | --- | --- |
| Finalizaciones | https://www.youtube.com/playlist?list=PL9loOxIQgy48fEXhF4IfoeKdtd1kQ2K-M | https://ibb.co/album/N6ZjKy |  |
| Juegos |  https://www.youtube.com/playlist?list=PL9loOxIQgy4-BG2_5JtAz0zLv4o6-begh | https://ibb.co/album/CpGJmN |  |
| Duelos |  https://www.youtube.com/playlist?list=PL9loOxIQgy4-YXkAHqWTno9yTgHm6Onz6 | https://ibb.co/album/smJtK3 |  |
| Juegos de situación | https://www.youtube.com/playlist?list=PL9loOxIQgy485Cm71MkAPyL8Af76UgWpl | https://ibb.co/album/3Rffvr |  |
| Técnica/Táctica | https://www.youtube.com/playlist?list=PL9loOxIQgy49dKTe2dD2xX-SnWnHYac4P | https://ibb.co/album/6Xf8Vs?sort=name_asc |  |
| Partidos | https://www.youtube.com/playlist?list=PL9loOxIQgy4-bq9PB1bcQxUC7Xxpkgpsx | https://ibb.co/album/52fwYN |  |
| Rondos |  https://www.youtube.com/playlist?list=PL9loOxIQgy48AYuf50MqEhbcNF9rIvcYC | https://ibb.co/album/Z69TXN |  |
| Juegos de posesión |  https://www.youtube.com/playlist?list=PL9loOxIQgy4_82hGNgnuUoAtL2irU1g2N | https://ibb.co/album/p6GzMH |  |
| Rueda de pases | https://www.youtube.com/playlist?list=PL9loOxIQgy4-8l_VEwsHG9GHktGm_CRbD | https://ibb.co/album/gZg22C |  |
| Juegos de posición |  https://www.youtube.com/playlist?list=PL9loOxIQgy4_H252G-YZhnE00UfCpDBeq | https://ibb.co/album/D49rY7 |  |

| Estado general: todo bien. Algunos videos se subieron con espacio al final |
| --- |

---

**Filtro videos youtube**

Script que utilice para extraer los links y ordenar por numero los videos de cada lista

```
function getElementsById(elementID){
var elementCollectionvideo = new Array();
var allElements = document.getElementsByTagName("*");
for(i = 0; i < allElements.length; i++){
if(allElements[i].id == elementID)
elementCollectionvideo.push(allElements[i].title.substr(0,20).match(/(\d+)/g) + " -> " + allElements[i].href
.replace('www.', '')
.replace('.com','.be')
.replace('"', '')
.split('&')[0]);
elementCollectionvideo.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

```
}
return elementCollectionvideo

```

}
const videos = "video-title";
getElementsById(videos);
```

---

**Base de datos imagenes y categorias**

Base de datos que se realizo para enlazar los videos con la categoria, etiquetas y imagenes

[https://docs.google.com/spreadsheets/d/1ThYOpxvharwxLTuabfo5g8ueQKf5lhjU/edit?usp=drive_link&ouid=102326164660111304601&rtpof=true&sd=true](https://docs.google.com/spreadsheets/d/1ThYOpxvharwxLTuabfo5g8ueQKf5lhjU/edit?usp=drive_link&ouid=102326164660111304601&rtpof=true&sd=true)

Archivos originales: https://drive.google.com/file/d/19NBn0RIvldt_iyJYsjw55asC5MAbq-dq/view?usp=drive_link

[Cronograma de tareas](AFEC%20e89048e8ec73417eb9cac18e2f9964d6/Cronograma%20de%20tareas%2012b2227333804eb6a0e7bcd4323f1074.csv)
