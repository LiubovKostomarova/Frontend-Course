# Wiki-Flexbox

Created: June 29, 2021 5:59 PM
Created By: Liubov Kostomarova
Last Edited By: Liubov Kostomarova
Last Edited Time: June 29, 2021 7:16 PM

# Grundlegende Konzepte der Flexbox

Das Flexible Box Modul, üblicherweise als Flexbox bezeichnet, wurde als ein eindimensionales Layoutmodell und als eine Methode entwickelt, die eine Platzverteilung zwischen Elementen in einer Schnittstelle und leistungsstarke Ausrichtungsmöglichkeiten bietet. Dieser Artikel gibt einen Überblick über die Hauptmerkmale von Flexbox, die wir im Folgenden näher erläutern werden.

Wenn wir Flexbox als eindimensional bezeichnen, beschreiben wir die Tatsache, dass Flexbox sich mit dem Layout in einer Dimension zu einem Zeitpunkt beschäftigt - entweder als eine Zeile oder als eine Spalte. Dies kann mit dem zweidimensionalen Modell von [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), das Spalten und Zeilen zusammen steuert, kontrastiert werden.

## [Die zwei Achsen der Flexbox](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#die_zwei_achsen_der_flexbox)

Bei der Arbeit mit Flexbox muss man in zwei Achsen denken - der Hauptachse und der Querachse. Die Hauptachse wird durch die Eigenschaft `[flex-direction` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) definiert, und die Querachse verläuft senkrecht dazu. Alles, was wir mit flexbox machen, bezieht sich auf diese Achsen, so dass es sich lohnt zu verstehen, wie sie von Anfang an funktionieren.

### [Die Hauptachse](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#die_hauptachse)

Die Hauptachse wird durch `flex-direction` definiert, die vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, läuft Ihre Hauptachse entlang der Zeile in **Zeilenrichtung**.

![Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled.png](Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled.png)

Wählen Sie column oder column-reverse und Ihre Hauptachse läuft von oben nach unten - in **Blockrichtung.**

![Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled%201.png](Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled%201.png)

### [Die Querachse](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#die_querachse)

Die Querachse (cross axis) verläuft senkrecht zur Hauptachse, d.h. wenn Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` eingestellt ist, läuft die Querachse die Spalten hinunter. 

![Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled%202.png](Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled%202.png)

Wenn Ihre Hauptachse column oder column-reverse ist, dann verläuft die Querachse entlang der Zeilen.

![Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled%203.png](Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled%203.png)

Es ist wichtig zu verstehen, welche Achse die richtige ist, wenn wir uns mit der Ausrichtung und Justierung von Flex-Elementen befassen; Flexbox bietet Eigenschaften, die den Inhalt entlang der einen oder anderen Achse ausrichtet und justiert.

**Start- und Endzeilen**

Ein weiterer wichtiger Bereich des Verständnisses ist, wie Flexbox keine Annahmen über den Schreibmodus des Dokuments macht. In der Vergangenheit wurde CSS stark in Richtung horizontale und links-nach-rechts-Schreibweise ausgerichtet. Moderne Layoutmethoden umfassen den Bereich der Schreibmodi und so gehen wir nicht mehr davon aus, dass eine Textzeile oben links in einem Dokument beginnt und nach rechts verläuft, wobei neue Zeilen untereinander erscheinen.

Sie können mehr über die Beziehung zwischen Flexbox und der Writing Modes Spezifikation in einem späteren Artikel lesen, aber die folgende Beschreibung soll helfen zu erklären, warum wir nicht über links und rechts und oben und unten sprechen, wenn wir die Richtung beschreiben, in die unsere Flex Elemente fließen.

Wenn die `flex-direction` `row` ist und ich in Englisch arbeite, dann ist die Anfangskante der Hauptachse links, die Endkante rechts.

![Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled%204.png](Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled%204.png)

### **Der Flex Container.**

Ein mit Flexbox angelegter Bereich eines Dokuments wird als **Flex Container** bezeichnet. Um einen Flex Container zu erstellen, setzen wir den Wert der Eigenschaft `[display](https://developer.mozilla.org/de/docs/Web/CSS/display)` des Bereichscontainers auf `flex` oder `inline-flex`. Sobald wir dies tun, werden die direkten Kinder dieses Containers zu flexiblen Elementen. Wie bei allen Eigenschaften in CSS sind einige Initialwerte definiert, so dass sich beim Erstellen eines Flex Containers alle enthaltenen Flex Items wie folgt verhalten.

- Elemente werden in einer Zeile angezeigt (die Standardeinstellung der Eigenschaft `flex-direction` ist `row`).
- Die Positionen beginnen an der Startkante der Hauptachse.
- Die Elemente dehnen sich nicht auf der Hauptdimension aus, sondern können schrumpfen.
- Die `[flex-basis` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) Eigenschaft wird auf `auto` gesetzt.
- Die`[flex-wrap](https://developer.mozilla.org/de/docs/Web/CSS/flex-wrap)` Eigenschaft wird auf `nowrap` gesetzt.

Dies hat zur Folge, dass Ihre Elemente in einer Reihe angeordnet werden, wobei die Größe des Inhalts als Größe in der Hauptachse verwendet wird. Wenn es mehr Elemente gibt, als in den Container passen, werden sie nicht eingepackt, sondern überlaufen. Wenn einige Elemente größer als andere sind, dehnen sich alle Elemente entlang der Querachse aus, um ihre volle Größe zu erreichen.

Wie das aussieht, sehen Sie im folgenden Live-Beispiel. Versuchen Sie, die Elemente zu bearbeiten oder zusätzliche Elemente hinzuzufügen, um das anfängliche Verhalten von Flexbox zu testen.

![Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled%205.png](Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled%205.png)

### [Wechsel der flex-direction](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#wechsel_der_flex-direction)

Das Hinzufügen der Eigenschaft `[flex-direction` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) zum Flex Container erlaubt es uns, die Richtung zu ändern, in der unsere Flex Elemente angezeigt werden. Einstellung der `flex-direction`: `row-reverse` behält die Anzeige entlang der Zeile bei, jedoch werden die Start- und Endlinien umgeschaltet.

Wenn wir die `flex-direction` in eine Spalte (`column)`ändern, schaltet die Hauptachse um und unsere Elemente werden nun in einer Spalte angezeigt. Setzen Sie `column-reverse` und die Start- und Endzeilen werden wieder umgeschaltet.

Das folgende Live-Beispiel hat die `flex-direction` auf `row-reverse` eingestellt. Versuchen Sie die anderen Werte - `row`, `column` and `column-reverse` - um zu sehen, was mit dem Inhalt passiert.

![Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled%206.png](Wiki-Flexbox%20fceb8e1d0767439e886bb6d79c3265d8/Untitled%206.png)