# Generator Bezpiecznych Haseł

Aplikacja webowa służąca do generowania silnych, losowych haseł z możliwością personalizacji ich długości oraz zawartości. Projekt stworzony w czystym **JavaScript (Vanilla JS)**, **HTML5** i **CSS3** przy użyciu środowiska deweloperskiego **Vite**.

---

## Funkcjonalności aplikacji

* **Filtrowanie zawartości (Checkboxy):** Użytkownik decyduje, czy hasło ma zawierać cyfry i znaki specjalne. Zestaw znaków jest budowany dynamicznie przy użyciu operatora spread (`...`).
* **Regulowana długość:** Możliwość zdefiniowania długości hasła (maksymalnie 18 znaków). W przypadku braku wartości, aplikacja domyślnie generuje hasło 18-znakowe.
* **Kopiowanie jednym kliknięciem:** Kliknięcie w wygenerowane hasło automatycznie zaznacza je i kopiuje do schowka systemowego, wyświetlając komunikat "copied!".

## Kluczowe koncepty JS & CSS

* **Manipulacja tablicami:** Łączenie osobnych baz znaków (`letters`, `numbers`, `symbols`) za pomocą operatora rozwinięcia `[...characters, ...newItems]` w zależności od stanu właściwości `.checked`.
* **Clipboard API & Zdarzenia:** Wykorzystanie metod `.select()` oraz `document.execCommand("copy")` do intuicyjnej obsługi schowka.
* **Modern CSS UI:** Centrowanie aplikacji w oknie przeglądarki za pomocą Flexbox (`height: 100vh`), ukrywanie domyślnych strzałek inputów typu `number` oraz praca z pseudoklasą `:focus`.
