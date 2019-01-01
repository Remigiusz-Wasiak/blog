---
title: Co powinieneś wiedzieć o zmiennych w JavaScript?
date: '2019-01-01T13:00:00'
---

Witam Cię w pierwszym wpisie z serii podstaw JavaScript! W ramach kilkunastu następnych postów poznasz podstawowe kwestie JS, których dobre zrozumienie jest niezbędne, by móc przejść do bardziej zaawansowanych zagadnień. Zachęcam Cię do wnikliwej lektury i zmierzenia się z przygotowanymi przeze mnie zadaniami na końcu.

## Czego się dzisiaj dowiesz?
Przeczytasz o tym, jakie są rodzaje zmiennych w JavaScript i co je charakteryzuje. Dowiesz się czym jest blok i napomknę również conieco o obiektach globalnych w kontekście dywagacji o zmiennych. Na końcu czeka Cię quiz i kilka zadań do samodzielnego wykonania. Pamiętaj o tym, że dużo lepsze efekty osiągniesz gdy przetrenujesz materiał, samo czytanie o programowaniu nie przyniesie dużych korzyści.

## Rodzaje zmiennych i bloki
Być może już wiesz, że w JavaScript do zmiennych możemy przypisać każdą wartość, nie ma podziału na zmienne do przechowywania wyłącznie liczb czy tekstu (na przykład w przeciwieństwie do Javy). Od wersji ECMAScript 2015 wyróżniamy następujące rodzaje zmiennych:
1. let
2. const
3. var

Skoro do zmiennej możemy przypisać każdą wartość, to po co nam aż 3 różne możliwości definiowania zmiennych? Jak to zwykle w programowaniu bywa - diabeł tkwi w szczegółach.

Zanim przejdziemy do charakterystyki poszczególnych rodzajów zmiennych warto by się zaznajomić z pojęciem **bloku**. W JavaScript blok ograniczony jest dwoma nawiasami klamrowymi `{ ... }`. O wszystkim co znajduje się pomiędzy tymi klamrami możemy powiedzieć, że znajduje się w zasięgu tego bloku. Bloki mogą występować w kodzie samodzielnie, mogą też być poprzedzone instrukcją warunkową, np. `if(x = 2) { ... }`, pętlą, np. `while(x < 2) { ... }`, ale mogą również stanowić ciało funkcji np. `function add() { ... }`. Bloki służą do grupowania instrukcji, które chcemy wykonywać. Być może chcemy dany blok instrukcji wykonać kilka razy stosując pętlę, a może chcemy go wykonać tylko wtedy gdy zostanie spełniony określony warunek. Z kolei funkcje pozwalają nam wykonywać bloki instrukcji w dowolnym miejscu w kodzie. Jak widzisz, bloki są podstawowym elementem języka i używa się ich bardzo często. 

No dobrze, to była mała rozgrzewka, przejdźmy w końcu do głównego tematu - zmiennych. Aj... jeszcze jedno. Wspominałem Ci już, że przykłady które przedstawiam w trakcie omawiania poszczególnych zmiennych możesz przetestować samodzielnie by przekonać się o ich działaniu na własnej skórze? Jeśli nie wiesz jak, w sekcji z pracą domową pokazuję sposób z przeglądarką :) 

### Zmienna let
Zmienne deklarowane za pomocą słowa kluczowego **let** charakteryzują się tym, że mogą podlegać zmianom, tzn tej samej zmiennej możemy nadpisywać wartości na inne np.
```javascript
let x = 5;
console.log('x : ', x); // x : 5

x = x + 1
console.log('x : ', x); // x : 6

x = "example";
console.log('x : ', x); // x : example
```
Niedopuszczalne jest za to deklarowanie zmiennej o tej samej nazwie ponownie, otrzymamy wtedy błąd jasno mówiący o tym, że już gdzieś w danym bloku zmienna o takiej nazwie została zadeklarowana - `"Uncaught SyntaxError: Identifier 'x' has already been declared"` (w przykładach tego wpisu używam treści błędów występujących w przeglądarce Chrome, w innych przeglądarkach te same błędy mogą być inaczej sformułowane).
```javascript
let x = 5;
console.log('x : ', x); // x : 5

let x = x + 1; // Uncaught SyntaxError: Identifier 'x' has already been declared
```
Drugą cechą charakterystyczną dla **let** jest to, że nie trzeba jej inicjalizować (nadawać jej początkowej wartości). Być może w trakcie pisania programu nie będziesz wiedział jaką wartość początkową ma mieć dana zmienna i będziesz nadawać ją później. Miejmy tylko na względzie to, że nieuzasadniony brak deklarowania zmiennych nie zalicza się do dobrych praktyk - jeżeli znamy wartość początkową zmiennej to ją nadajmy.  
```javascript
let y;
console.log('y : ', y); // y : undefined (1)

y = 5;
console.log('y : ', y); // y : 5 (2)
```
Jak można zauważyć, zmienna **let** bez przypisanej wartości zwraca `undefined` (1). O tym czym dokładnie jest **undefined** będziemy uczyć się w kolejnych wpisach.

Trzecią bardzo ważną cechą **let** jest jej zasięg blokowy. Zmienna **let** będzie dostępna tylko w tym bloku w którym została umieszczona.
```javascript
{ // początek bloku

	let x = 5; // (1)
	console.log('x : ', x); // x : 5	(2)
	
} // koniec bloku
console.log('x : ', x); // x : undefined	(3)
```
Tak jak widać powyżej, zadeklarowana zmienna `x` (1) jest widoczna w zasięgu bloku (2) natomiast nie jest widoczna poza tym blokiem (3). W przypadku gdy zmienna nie ma zadeklarowanej wartości, `console.log` zwraca `undefined` (3).
Nie wspomniałem o tym wcześniej, ale bloki mogą być w sobie zagnieżdżane, a więc zobaczmy jak zasięg **let** wyglądą gdy skomplikujemy nieco sytuację.
```javascript
{ // początek pierwszego bloku

	let x = 5;
	
	{ // początek drugiego bloku
	
		let x = 10;
		console.log('x : ', x); // x : 10 (1)
		
	} // koniec drugiego bloku
	
	console.log('x : ', x); // x : 5 (2)
	
} // koniec pierwszego bloku
```
Możemy zauważyć że `console.log()` umieszczony w drugim bloku zwraca wartość zmiennej `x` zadeklarowanej również w drugim bloku (1), natomiast gdy wyjdziemy poza drugi blok, `console.log()` zwraca wartość zmiennej `x` zadeklarowanej w pierwszym bloku (2). 

### Zmienna const
Zmienna **const** w przeciwieństwie do let charakteryzuje się tym, że gdy raz coś do niej przypiszemy, to przypiszemy to na stałe. Nie możemy zmienić przypisania wartości do zmiennej, kiedy to zrobimy otrzymamy nieznany nam jeszcze błąd - zerknij poniżej.
```javascript
const y = 5;

y = 10;  // Uncaught TypeError: Assignment to constant variable.

```
Zwróć uwagę, że piszę o niezmienności **przypisania** wartości, ma to bardzo duże znaczenie, ponieważ powszechna jest wśród początkujących programistów błędna opinia, że przypisanej wartości nie można zmienić - owszem można, ale w przypadku bardziej złożonych wartości. Na przykład w przypadku obiektów czy tablic, możliwa jest ich modyfikacja - natomiast nie możliwe jest ich nadpisanie przez inny obiekt czy tablicę. Poniższy przykład powinien wyjaśnić nieco sprawę.
```javascript
const exampleObject = { exampleProperty: 0 }; //	(1)
console.log('first example : ', exampleObject); // first example : {exampleProperty: 0}	

exampleObject.exampleProperty = 1; //  (2)
console.log('second example : ', exampleObject); // second example : {exampleProperty: 1}  (3)

exampleObject = { propertyOfNewObject: 1 }; // Uncaught TypeError: Assignment to constant variable.  (4)
```
Jak więc widzisz, przypisaliśmy do zmiennej **const** o nazwie `exampleObject` obiekt z własnością `exampleProperty` o wartości `0` (1), następnie zmodyfikowaliśmy tę wartość z `0` na `1` - (2). Jak widać na odczycie z konsoli (3) obiekt ten ma zmienioną wartość własności, a był przecież przypisany do zmiennej **const** ;). Gdy spróbowaliśmy za to przypisać do zmiennej **const** nowy obiekt, otrzymaliśmy błąd (4). Nie możemy modyfikować w **const** wartości prostych (ang. primitive values), ale obiekty już tak.
Dodatkowo tak jak w przypadku zmiennej let nie możemy zadeklarować zmiennej **const** o tej samej nazwie:
```javascript
const exampleObject = { exampleProperty: 0 };

const exampleObject = 1; // Uncaught SyntaxError: Identifier 'exampleObject' has already been declared
```
Drugą cechą charakterystyczną dla **const** jest to, że w przeciwieństwie do zmiennej let musi być inicjalizowana od początku jej istnienia. Innymi słowy, nie możemy stworzyć zmiennej **const** bez przypisania jej początkowej wartości. Otrzymamy błąd, który dokładnie mówi nam co jest nie tak, spójrzmy poniżej:
```javascript
const noValueAssigned; // Uncaught SyntaxError: Missing initializer in const declaration

```
Trzecią cechą **const**, tak jak w przypadku let jest jej zasięg blokowy. W tej kwestii **const** zachowuje się dokładnie tak samo jak let.

### Zmienna var
Zmienne let i const zostały wprowadzone dopiero wraz z wdrożeniem wersji ECMAScript 2015, za to zmienna **var** jest dostępna w JavaScript od poczatku jego istnienia. Z tego też względu **var** różni się od swoich następczyń. Wskazane jest by unikać jej używania na rzecz let i const jeżeli projekt na nas tego nie wymusza. Mimo wszystko omówimy sobie cechy charakterystyczne **var**, bo jest bardzo prawdopodobne, że będziesz kiedyś skazany na to by brać ją pod uwagę. 

Zacznijmy więc od pierwszej cechy, którą jest możliwość nadpisywania wartości - podobnie jak w let. W przypadku **var**, możemy nie tylko nadpisać wartość zmiennej, ale również zadeklarować jeszcze raz zmienną o tej samej nazwie. Zerknijmy na kod poniżej.
```javascript
var x = 1; // (1)
console.log({x}); // x: 1

x = x + 1; // (2)
console.log({x}); // x: 2 (3)

var x = 10; // (4)
console.log({x}); // x: 10 (5)
```
Zadeklarowaliśmy zmienną `x` o wartości `1` (1). Następnie zmieniliśmy wartość `x` na `x + 1` (2). W konsoli widzimy nową wartość `x` czyli `2` (3). Na koniec deklarujemy na nowo zmienną o nazwie `x` i przypisujemy jej wartość `10` (4) - nie otrzymujemy żadnych błędów jak w przypadku let i const, które dla przypomnienia, nie pozwalają na deklarowanie jeszcze raz zmiennej o tej samej nazwie. Zamiast tego w konsoli ukazuje nam się nowa wartość `x` - czyli `10` (5). Warto nadmienić, że poprzednia wartość `x` czyli `2`, przepadła i nie możemy jej odzyskać. Może nam się w tym miejscu zapalić czerwona lampka - zmienne **var** umożliwiają nadpisanie zmiennej w której trzymane były jakieś dane poprzez omyłkowe zadeklarowanie zmiennej o tej samej nazwie. Jest to jeden z powodów dla których zależy nam na ograniczaniu używania **var**.

_**Ciekawostka:** Być może zastanawiasz się nad tym, czemu w powyższym przykładzie umieściłem `x` pomiędzy nawiasami klamrowymi w `console.log` - otóż jest to praktyczny skrót, który warto zapamiętać. Jak można zauważyć `console.log({x})` zwraca taki sam tekst w konsoli jak `console.log('x:', x)`._

Druga cecha **var** również pokrywa się z let - zmiennej **var** nie trzeba inicjalizować. Nie musimy nadawać jej początkowej wartości, ale jeśli zechcemy jej gdzieś użyć w kodzie bez nadanej wartości, będzie zwracała `undefined`.

Trzecią cechą **var** jest jej zasięg - uwaga - **funkcyjny**. Oznacza to, że zmienna **var** jest widoczna w bloku funkcji w której została zadeklarowana.
```javascript
function example() { // (1)
	var x = 10; // (2)
	console.log({x}); // x: 10 (4) 
}

example(); // (3)
console.log({x}); // x: undefined (5)
```
W sytuacji powyżej definiujemy funkcję o nazwie `example` (1) w której deklarujemy zmienną `x` o wartości `10` (2). Wywołujemy funkcję `example` (3) w której `console.log()` wyświetla nam w konsoli wartość `x: 10` (4), ponieważ zmienna `x` była zadeklarowana w funkcji `example`. `console.log()` spoza funkcji wyświetla wartość `x` równą `undefined` (5), dlatego że zmienna `x` ma zasięg tylko w obrębie funkcji `example`. Jeżeli coś jest dla Ciebie niejasne, prześledź ten kod jeszcze raz i dokładnie wczytaj się w opis jego działania. Spójrzmy na kolejny przykład.

```javascript
function outer() { // (1)
	var x = 10; // (2)
	
	function inner() { // (3)
		console.log({x}); // x: 10 (6)
	}
	
	inner(); // (5)
}

outer(); // (4)
```
W tej sytuacji widzimy funkcję `outer` (1), w której deklarujemy zmienną `x` o wartości `10` (2) i definiujemy funkcję `inner` (3). Wywołanie funkcji `outer()` (4) powoduje wywołanie funkcji `inner()` (5) w której wykonywana jest instrukcja wyświetlenia wartości `x`. W konsoli pokazuje się wartość `10` (6). Widzimy więc, że zmienna **var** o nazwie `x` ma zasięg również w funkcjach zagnieżdżonych (3) w funkcji (1) w której została zadeklarowana. Został nam już ostatni przykład.

```javascript
function example() { // (1)

	if (true) { // (2)
	
		var x = 10; // (3)
		console.log({x}); // x: 10 (4)
		
	}
	
	console.log({x}); // x: 10 (5)
}

example(); // (6)
```
Ten przypadek wygląda z pozoru niewinnie, a w rzeczywistości może stwarzać problemy. Definiujemy funkcję `example` (1) w której zamieszczamy instrukcję warunkową `if` (2) - w warunku `if` umieściłem `true`, żeby blok instrukcji po warunku był wykonany. Wewnątrz bloku poprzedzonego przez `if` deklarujemy zmienną `var x` o wartości `10` (3). Wywołanie funkcji `example()` (6) powoduje wykonanie instrukcji z bloku `if` - `console.log` wyświetla nam wartość `x` czyli `10` (4), a następnie wyświetlana jest w konsoli wartość `x` spoza bloku `if` (5) - jak widzimy, wartość `x` znowu wynosi `10`. Możemy więc powiedzieć, że zmienna var pomimo, że jest zadeklarowana w bloku warunkowym, to jej dostępność ogranicza zakres funkcji, przez co widoczna jest poza blokiem warunkowym. Dowodem na to jest wartość w konsoli (5). Powyższa sytuacja może nie być zawsze na rękę i jest prawdopodobne, że będzie nam kiedyś zależało na tym, aby ograniczyć widoczność zmiennej `x` tylko do zasięgu bloku `if`. Jak to zrobić? Bardzo prosto - np. użyć const zamiast var. A co jeśli nie używamy w projekcie ECMAScript 2015? Cóż, z tego też można wyjść obronną ręką poprzez użycie IIFE, czyli funkcji która jest natychmiastowo wykonywana. Prawdopodobnie napiszę o tym kiedyś w innym wpisie, ale jeżeli już chciałbyś wiedzieć o co chodzi to odsyłam do wujka google, z pewnością znajdziesz odpowiedź :)

## Obiekt globalny
Warto wspomnieć o jeszcze jednej cesze zmiennych w JavaScript, którą jest przynależność (lub jej brak) do własności obiektu globalnego - dla przeglądarki będzie to obiekt `window`. Nie chcę się rozwodzić teraz nad tym czym jest obiekt globalny, na ten moment po prostu przyjmijmy, że taki istnieje i dobrze jest o tym wiedzieć.
O co chodzi? Zacznijmy od zmiennej var:
Jeżeli zdefiniujemy zmienną var poza jakąkolwiek funkcją, zmienna ta zostanie przypisana do właności obiektu globalnego. Zerknijmy na przykład poniżej:
```javascript
function test() {
	var inner = 10; // (1)
}

var outer = 20; // (2)

console.log('inner:', window.inner); // inner: undefined (3)
console.log('outer:', window.outer); // outer: 20 (4)
```
Jak widzisz, zmienna `inner` zadeklarowana wewnątrz funkcji `test` (1) nie jest włączana do własności obiektu globalnego `window` (3), natomiast zmienna `outer` (2) jak najbardziej (4).

Jak w tej kwestii zachowują się zmienne let i const? Nie są one nigdzie przypisywane, obiekt globalny nie będzie posiadał ich nigdy w swoich własnościach. Zapewne domyślasz się co pokażą wyniki w konsoli?
```javascript
let outerLet = 10;
const outerConst = 10;

console.log('outerLet:', window.outerLet); // outerLet: undefined
console.log('outerConst:', window.outerConst); // outerConst: undefined
```
## Kiedy używać poszczególnych rodzajów zmiennych?
Zacznijmy od var - jeżeli w projekcie nad którym pracujesz używasz ECMAScript 2015 to o używaniu var możesz całkowicie zapomnieć. Są podobno wyjątkowe sytuacje, w których użycie var jest zasadne ale na chwilę obecną nie mam przykładów by to wyjaśnić.

Co w takim razie z const i let. Kiedy używać pierwszego, a kiedy drugiego? Zalecenie ogólne jest takie, aby let używać tylko wtedy kiedy nie można użyć const - czyli wtedy gdy zmienna będzie zmieniać przypisanie wartości. Jednakże tutaj pojawia się też trochę inny punkt widzenia - w zasadzie to nie wykluczający całkowicie poprzedniego. Const ma służyć przede wszystkim poprawie czytelności kodu - używajmy go wtedy, gdy chcemy zasygnalizować innym osobom czytającym nasz kod, że dana zmienna jest z założenia stałą i nie może się zmieniać.

## Praca domowa
Praktyka jest ważniejsza od teorii, zachęcam Cię do poeksperymentowania ze zmiennymi by utrwalić sobie zasady ich działania. Zrób poniższe ćwiczenia i zastanów się (szukając ew. odpowiedzi w tym poście) czemu otrzymujesz taki a nie inny wynik. 

Wszystkie ćwiczenia możesz wykonywać w konsoli swojej przeglądarki. W zależności od tego z jakiej przeglądarki korzystasz, konsolę możesz uruchomić w następujący sposób:
1. W przypadku Chrome otwórz w górnym menu Widok -> Programista -> Konsola JavaScript
2. W przeglądarce Firefox otwórz w górnym menu Narzędzia -> Dla twórców witryn -> Konsola WWW
3. W Safari należy otworzyć w górnym menu Programowanie -> Pokaż konsolę JavaScript

**Ćwiczenie 1.**
Poszczególne kroki są opisane w komentarzach kodu poniżej
```javascript
// Zadeklaruj w konsoli zmienną let:

let x;

// Następnie zadeklaruj zmienną const:

const x = 20; // co otrzymałeś i dlaczego?

// I jeszcze ostatnią zmienną - var:

var x = 20; // co otrzymałeś i dlaczego?
```

**Ćwiczenie 2.**
Poszczególne kroki są opisane w komentarzach kodu poniżej
```javascript
// Zadeklaruj zmienną var:
var y = 10;

// Następnie zadeklaruj zmienną let:

let y = 20; // co otrzymałeś i dlaczego?

// Następnie zadeklaruj zmienną var:

var y = 20; // co otrzymałeś? Jaką wartość ma teraz y i dlaczego? 

```

**Ćwiczenie 3.**
Poszczególne kroki są opisane w komentarzach kodu poniżej
```javascript
// Zadeklaruj zmienną var:
var i = 100;
var j = 100;

// Wyświetl wartość i oraz j w obiekcie globalnym window
console.log('global object:', window.i); // (1)
console.log('global object:', window.j); // (2)

// Następnie napisz pętlę for ze zmienną var
for (var i = 0; i < 5; i++) {
	console.log({i}); 
}

// Ponownie wyświetl wartość i w obiekcie globalnym 
console.log('global object var loop:', window.i); // (2)

// Utwórz teraz pętlę for ze zmienną let
for (let j = 0; j < 7; j++) {
	console.log({j});
}

// Na końcu znowu wyświetl wartość i w obiekcie globalnym 
console.log('global object after let loop:', window.j); // (3)

```
Jak zmieniła się wartość własności globalnego obiektu `window` w przypadku `i` (1), po przejściu pętli `for` ze zmienną **var** (2)? A jak to przebiegło w przypadku `j` po przejściu pętli ze zmienną **let** (3)? Dlaczego tak się zadziało?

## Bibliografia
1. Rauschamyer Axel, "JavaScript For Impatient Programmers", Chapter 9 Variables and assignment
2. Simpson Kyle, "You Don't Know JS: Up & Going", Chapter 1: Into Programming, [link](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#variables)
3. Simpson Kyle, "You Don't Know JS: ES6 & Beyond", Chapter 2: Syntax, [link](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20%26%20beyond/ch2.md) 
4. Johansson Mattias Peter, "var, let and const - What, why and how - ES JavaScript Features", [link](https://www.youtube.com/watch?v=sjyJBL5fkp8)
5. Alicea Anthony, "JavaScript: Understanding the Weird Parts", Chapter 2: Execution Contexts and Lexical Environments
