
# Bilder vs Web Site

-   <h4>PNG
-   <h4>JPEG
-   <h4>SVG
  
-----------------------------
#### PNG (Portable Network Graphics)
---------------------------------------

| Vorteile |
| :- |
| + Verlustfreie Kompression (hohe Qualität) |
| + Transparenz (Alphakanal)|
| + 24-Bit-Farbtiefe |
| + Breite Softwareunterstüzung |
| + Verlustfreie Bildbearbeitung |

| Nachteile |
| :- |
| - Grössere Dateigrössen |
| - Eingeschränkte Animation(gegensatz zu GIF) |

<figure>
  <img src="../assets/img/moon.png" alt="moon in PNG" width='300'>
  <figcaption>"Transparenz ist ein Hauptbestandteil einer PNG-Datei."[1]</figcaption>
</figure>

--------------------------------
#### JPEG (Joint Photographic Experts Group)
-------------------------------

| Vorteile |
| :- |
| + Effiziente Kompression(verlustbehaftet); |
| + Breite Unterstützung |
| + Platzsparend |
| + Anpasbare Qualität |

| Nachteile |
| :- |
| - Verlustbehaftete Kompression |
| - Keine Transparenz |
| - Eingeschränkte Farbtiefe (in der Regel 8-bit könen aber auch bis zu 24-bit(selten) ) |
| - Nicht geeignet für Bilder mit scharfen Kontrasten |
| - Mehrfache Bearbeitung kann die Qualität verschlechtern |

<figure>
  <img src="../assets/img/quickie-jpeg.jpg" alt="Saturn mit schlechte Auflössung" width='300'>
  <figcaption>"Die Verlustbehaftete Kompression"[2]</figcaption>
</figure>

---------------------------------------------
#### SVG (Scalable Vector Graphics)
--------------------------------------

| Vorteile |
| :- |
| + Skalierbarkeit |
| + Kleine Dateigrössen(im vergleich zu Bitmap-Formaten) |
| + Textunterstüzung(textbasierte Elemente in Grafiken zu inegrieren) |
| + Interaktivität |
| + Kein Qualitätsverlust |

| Nachteile |
| :- |
| - Komplexität für Fotografie |
| - Eingeschränkte Filter und Effekte |
| - Komplexe Grafiken können kompliziert werden |
| - Animationsleistung |


```xml
  <path
     d="M 11.631579,0 23.263158,4.1447368 21.5,19.539474 
     11.631579,25 1.7631579,19.539474 0,4.1447368 11.631579,0 
     m 0,2.7631579 L 4.3552632,19.078947 
     H 7.065789 l 1.460527,-3.657894 h 6.18421 l 1.460527,3.657894 h 2.697368 
     L 11.631579,2.7631579 m 2.131579,10.3947371 
     h -4.25 l 2.118421,-5.092106 z"
     fill="#e53935"
     id="path2"
     style="stroke-width:1.31579" />
</svg> 
```
<figure>
  <img src="../assets/img/angular.svg" alt="Angular in Svg" width='300'>
  <figcaption>"Tatsächliche SVG."[3]</figcaption>
</figure>

------------------------------------------------------------------
###### Beispiel anwendung an einer website
--------------------------------------------

[Beispiel bei einer Website](https://www.reddit.com/r/pictures/.json)