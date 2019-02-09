---
title: Typy proste w JavaScript - string
date: '2019-02-09'
---
Jest to trzeci wpis z serii podstaw JavaScript! Dzisiaj zagłębiamy się bardziej w temat dotyczący typu prostego string. Poznasz podstawowe zagadnienia związane z tym typem oraz zobaczysz przykładowe operacje jaki można na nim wykonać. Zachęcam Cię również bardzo do przerobienia zadań jakie przygotowałem dla Ciebie na końcu wpisu.

### Co powinieneś już wiedzieć?
Jeżeli nie czytałeś jeszcze wcześniejszych wpisów z serii, to zachęcam Cię być zaczął od nich. Od tego momentu zakładam, że wiesz już jakie mamy [rodzaje zmiennych](/co-powinienes-wiedziec-o-zmiennych-w-javascript/), czym różnią się od siebie var, let i const. Znasz też podstawowy [podział typów](/co-powinienes-wiedziec-o-typach-w-javascript/) oraz ich charakterystykę.

### Typ prosty string
Czym jest **string**?  Tłumacząc z angielskiego na polski - **string** to łańcuch znaków. Mówiąc w tym momencie o **stringach** mamy na myśli tekst, a nie skrawek materiału do noszenia. W JavaScript **stringi** zawarte są pomiędzy apostrofami, cudzysłowami lub grawisami. Zerknij na kod poniżej.
```javascript
const txt1 = 'text'; // (1)
const txt2 = "text"; // (2)
const txt3 = `text`; // (3)
const txt4 = '4'; // (4)
```
Pierwsze 3 linie pokazują tekst kolejno między apostrofami (1), cudzysłowami (2) i grawisami (3). Wszystkie 3 zmienne `txt1`, `txt2` oraz  `txt3` zawierają wartości typu **string**. OK, a co ze zmienną `txt4` (4), jaką wartość przechowuje? Widzimy tam cyfrę 4 pomiędzy apostrofami - JavaScript, będzie traktował ją jak ciąg tekstowy. Możemy to sprawdzić następująco (mała powtórka z poprzedniego wpisu).
```javascript
const txt4 = '4';
console.log(typeof txt4); // "string" (1)
```
Operator `typeof` jasno mówi nam, że zmienna `txt4` posiada wartość typu **string**.

#### Apostrof czy cudzysłów?
Tekst pomiędzy grawisami jest bardziej złożonym tematem, dlatego poświęciłem na niego osobny akapit. Skupmy się narazie tylko na apostrofach i cudzysłowach. Jeżeli chodzi o funkcjonalność, nie ma znaczenia czy będziesz używać apostrofów czy cudzysłowów, ważne jest to, żeby ich ze sobą nie mieszać. Nie możesz stworzyć **stringa** otwierając go apostrofem, a zamykając cudzysłowem. Szybko się o tym przekonasz patrząc na błędy w konsoli ;). Możesz za to zagnieżdżać w sobie oba sposoby, powiedzmy, że chcesz stworzyć **string** - cytat, który będzie zawierał znaki cudzysłowu. Nic nie stoi na przeszkodzie by zapisać go w następujący sposób:
```javascript
const quote = 'Martin Luther King said - "I have a dream ..."';
console.log(quote); // Martin Luther King said - "I have a dream ..."
``` 

#### Znaki specjalne
Co jeśli w swoim **stringu** chcę zawrzeć zarówno znak apostrofu jak i cudzysłowu? Znak backslash `\` może nam w tym pomóc. 
```javascript
const quote = 'Darth Vader said - "I\'m your father"';
console.log(quote); // Darth Vader said - "I'm your father"
```
Do czego jeszcze możemy wykorzystać znak backslash? Do tworzenia znaków specjalnych:
* nowa linia  - `'\n'` (system Unix) i `'\r\n'` (system Windows)
* tabulator - `'\t'`
* a także do wypisania znaku backslash :D - `'\\'`

#### Dostęp do zawartości stringów 
Jeżeli chcesz sprawdzić, jaka jest 11 litera w słowie *konstantynopolitańczykowianeczka* możesz to zrobić poprzez podanie indeksu litery w nawiasie kwadratowym. Indeksowanie liter w **stringach**, podobnie jak w przypadku tablic, rozpoczyna się od 0. Żeby dostać się do 11 litery, musisz użyć indeksu 10. 
```javascript
const text = 'konstantynopolitańczykowianeczka';
console.log(text[10]); // o
```
Jedenastą literą tego długiego słowa (które zresztą nie istnieje) jest litera 'o'. Możesz być też ciekaw, ile tak na prawdę to słowo ma liter. Do tego możemy posłużyć się własnością **stringów** - `length`. 
```javascript
const text = 'konstantynopolitańczykowianeczka';
console.log(text.length); // 32
```
#### Metody stringów
**Stringi** posiadają wiele wbudowanych metod, które mogą okazać się niezwykle przydatne. Warto tutaj zaznaczyć jedną rzecz, metody wywoływane na zmiennej zawierającej **string** nie modyfikują zawartości zmiennej, ale zwracają nową wartość. Wynika to z tego, że **string** jako typ prosty jest niemodyfikowalny - możemy na nim operować, ale nie możemy go zmienić. Zerknij na poniższy przykład, a wszystko stanie się bardziej jasne.
```javascript
const a = 'JavaScript';
const b = a.slice(2, 6); // (1)
console.log({a}); // {a: "JavaScript"} // (2)
console.log({b}); // {b: "vaSc"} // (3)
```
Metoda `slice()` wydobywa z łańcucha znaków jakąś (określoną przez nas) jego część. Przyjmuje dwa argumenty - pierwszy to indeks od którego rozpoczynamy wyciąganie, a drugi to indeks na którym kończymy wyciąganie. Pisząc indeks, mam na myśli indeks każdej litery w łańcuchu znaków. Tak więc `a.slice(2, 6)` (1), wyciąga tekst ze **stringa** przypisanego do zmiennej `a` począwszy od indeksu 2 a skończywszy na indeksie 6. Wiedząc, że indeksy swoje numerowanie rozpoczynają od 0, literą o indeksie 2 w słowie JavaScript jest 'v' i od tej litery (włącznie z nią) rozpoczynamy wyciąganie. Kończymy na indeksie 6 dla którego - uwaga - przypada litera 'r'. Metoda slice kończy wyciąganie do indeksu 6, ale nie pobiera już z tego indeksu litery. Stąd wynik 'vaSc' (3). Warto też zwrócić uwagę na to co się stało ze zmienną `a` (2), a raczej na to, że nic się z nią nie stało :) Spójrzmy na kolejne ciekawe przykłady metod.
```javascript
const a = 'To jest tekst zakończony tabem \t';
console.log({a}); // {a: "To jest tekst zakończony tabem 	"} (1)
const b = a.trimEnd(); // (2)
console.log({b}); // {b: "To jest tekst zakończony tabem"} (3)
const c = b.split(' '); // (4)
console.log(c); // ["To", "jest", "tekst", "zakończony", "tabem"] (5)
```
Na samym początku zainicjalizowaliśmy zmienną `a` z tekstem, który na końcu zawiera znak specjalny `\t` - tabulator. Wyświetlamy tekst w konsoli i widzimy, że rzeczywiście zakończony jest tabem (1). Następnie wykonujemy na zmiennej `a` metodę `trimEnd()`, która usuwa białe znaki z końca **stringa**. Tak zmodyfikowany **string**, zwracamy do zmiennej `b` (2). Wartość zmiennej `b` widoczna w konsoli rzeczywiście ma obcięty z końca tabulator (3). Ostatnią użytą metodą jest metoda `split()`, która przyjmuje jako argument separator na podstawie którego ma podzielić nasz łańcuch znaków - w wyniku metoda zwraca tablicę **stringów**, które były oddzielone separatorem.  W naszym przypadku, przekazaliśmy jej separator w postaci spacji (4), a w konsoli zobaczyliśmy tablicę zawierającą słowa naszego zdania (5).

#### Łączenie stringów
Wartości tekstowe możemy ze sobą łączyć. W technicznej terminologii nazywamy coś takiego **konkatenacją**. Spójrzmy na przykład poniżej.
```javascript
const a = 'Java';
const b = 'Script';
const c = a + b; // (1)
console.log({c}); // {c: "JavaScript"} (2)
console.log(c + ' string concatenation'); // JavaScript string concatenation (3)
console.log({c}); // {c: "JavaScript"} (4)
```
Pierwsze dwie linie to inicjalizacja zmiennych `a` i `b` z wartościami typu **string**. Następnie przy pomocy operatora dodawania łączymy ze sobą oba łańcuchy znaków (1). W wyniku tego połączenia w zmiennej `c` otrzymaliśmy zupełnie nowy **string** co możemy zobaczyć w konsoli (2). Następnie wyświetlamy w konsoli wynik dołączenia tekstu `' string concatenation'` do łańcucha znaków znajdującego się w zmiennej `c` (3). Ta operacja oczywiście nie zmieniła zawartości zmiennej `c`, co potwierdza wynik w konsoli (4).

#### Grawisy - nowość z ES2015
Wspominałem wcześniej, że łańcuchy znaków mogą być zawarte również między grawisami. Tak utworzone łańcuchy nazywamy łańcuchami szablonowymi i charakteryzują się one tym, że posiadają dwie dodatkowe funkcjonalności.
1. Możliwość tworzenia wielu linii w jednym łańcuchu, bez użycia znaków nowej linii
2. Możliwość wstawiania wyrażeń do łańcucha

Do omówienia punktu pierwszego posłużę się następującym przykładem.
```javascript
const literalString = 'multiple \nlines'; // (1)
const templateString = `multiple
lines`; // (2)
console.log(literalString); // multiple
							// lines (3)
console.log(templateString); // multiple
							 // lines (4)
const badTemplateString = `multiple
						   lines`; // (5)
console.log(badTemplateString); // multiple
								// 						   lines (6)
```
Na samym początku inicjalizujemy zmienną `literalString` z wartością zawierającą zwykły **string** ze znakiem nowej linii `\n` (1). Następnie utworzyliśmy łańcuch szablonowy przypisany do zmiennej `templateString` (2). Łańcuch ten złamaliśmy po prostu poprzez wciśnięcie klawisza enter na klawiaturze. Jak widzimy, konsola  pokazuje dokładnie taki sam wynik w przypadku wylistowania zmiennej `literalString` i `templateString` (3)(4). Taki wieloliniowy **string** jest znacznie czytelniejszy w łańcuchu szablonowym. Musimy mimo wszystko zachować ostrożność. W wieloliniowych **stringach** łatwo o pojawienie się niechcianych białych znaków. Ciężko je wychwycić na pierwszy rzut oka - patrząc na sformatowany kod. Taki błąd celowo popełniłem w zmiennej `badTemplateString` (5). Zawiera ona łańcuch szablonowy i na pierwszy rzut oka ten **string** wygląd bardziej czytelnie niż  w przypadku zmiennej `templateString` (2). Niestety tak sformatowany kod zawiera niechciane przez nas białe znaki spacji, o czym możemy się przekonać listując nasz **string** w konsoli (6).

Przejdźmy do omówienia możliwości wstawiania wyrażeń do łańcuchów szablonowych. Możemy to zrobić poprzez użycie `${ ... }` wewnątrz naszego łańcucha.
```javascript
const word = 'JavaScript'; // (1)
const sentence = `Word ${word} has ${word.length} letters.` // (2)
console.log(sentence); // Word JavaScript has 10 letters. (3)
```
Zaczynamy od stworzenia zmiennej `word` (1). Następnie inicjalizujemy zmienną `sentence` w której wstawiamy wyrażenia `${word}` i `${word.length}` (2). Jak możemy później zobaczyć w konsoli, wyrażenia zawarte w naszym łańcuchu szablonowym zostały podmienione wartościami jakie te wyrażenia zawierały (3). 
### Praca własna
**Ćwiczenie 1.** Poszczególne kroki opisane są w komentarzach kodu poniżej
```javascript
const sentence = 'Be brave. Take risks. Nothing can substitute experience.';
const array = sentence.split('.'); // na ile części zostanie podzielone zdanie przypisane do zmiennej sentence?
console.log(array); // co będzie zawierał ostatni element naszej nowo utworzonej tablicy? Dlaczego ostatni element ma taką zawartość?
```

**Ćwiczenie 2.** Zapoznaj się dokładnie z opisem metody `String.slice()`, który znajduje się [tutaj](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice).
```javascript
const sentence = 'To be or not to be, that is the question.';
const txt1 = sentence.slice(20, -1);
const txt2 = sentence.slice(-21, -1);
console.log(txt1); // jaki tekst zawiera zmienna txt1?
console.log(txt2); // jaki tekst zawiera zmienna txt2?
```

**Ćwiczenie 3.** Zapoznaj się dokładnie z opisem metody `String.startsWith()`, który znajduje się [tutaj](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith).
```javascript
const sentence = 'A person who never made a mistake, never tried anything new.';
console.log(sentence.startsWith('person', 2)); // co zobaczysz w konsoli, true czy false? Dlaczego?
console.log(sentence.startsWith('a')); // co zobaczysz w konsoli, true czy false? Dlaczego?
```

### Bibliografia
1. Rauschamyer Axel, “JavaScript For Impatient Programmers”, Chapter 16 Strings
2. Rauschamyer Axel, “JavaScript For Impatient Programmers”, Chapter 17 Using template literals and tagged templates
3. Rauschamyer Axel, “Speaking JavaScript”, Chapter 1 Basic JavaScript,  [link](http://speakingjs.com/es5/ch01.html#basic_strings)
4. Haverbeke Marijn, "Eloquent JavaScript", Chapter 1 Values, Types and Operators [link](http://eloquentjavascript.net/01_values.html)
