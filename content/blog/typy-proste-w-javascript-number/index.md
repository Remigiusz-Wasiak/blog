---
title: Typy proste w JavaScript - number
date: '2019-02-27'
heroImg: './hero_number.png'
tags: ['javascript', 'posty techniczne', 'podstawy javascript']
---
W czwartym wpisie z serii podstaw JavaScript weźmiemy pod lupę typ number. Czeka Cię solidna dawka konkretnej wiedzy. Poznamy między innymi podstawowe operatory arytmetyczne, napiszemy funkcję sprawdzającą nieparzystość liczby, ale również przyjrzymy się takim dziwolągom jak NaN czy Infinity. Zapraszam do dalszej lektury 🙂.

### Typ prosty number
W JavaScript do typu number zaliczamy zarówno liczby całkowite takie jak 5 czy 125 jak i zmiennoprzecinkowe np. 42.5 czy 3.14. Tak na prawdę, wszystkie traktowane są jako zmiennoprzecinkowe tylko zwyczajnie w przypadku liczb całkowitych nie widzimy kropki 😉. Zerknij na dwa szybkie przykłady:
```javascript
const integer = 25.00;
const float = 3.14;
console.log(integer); // 25 (1)
console.log(15 === 15.00); // true (2)
console.log(float); // 3.14 (3)
```
Nawet jeśli sztucznie umieścimy kropkę po liczbie to dopóki po kropce nie znajdzie się jakaś cyfra różna od zera, będziemy widzieć tę liczbę jako całkowitą. (1) Porównanie liczby "całkowitej" i zmiennoprzecinkowej, które różnią się tylko kropką zwróci nam `true` (2). Gdy po kropce występują cyfry inne niż 0 widzimy, że wyświetlana jest ona jako zmiennoprzecinkowa (3).

#### Zapis liczb
W JavaScript możliwe jest przedstawianie liczb za pomocą systemu binarnego, ósemkowego, dziesiętnego i szesnastkowego.
```javascript
// zapis binarny poprzedzony przez 0b
console.log(0b11001);; // 25
// zapis ósemkowy poprzedzony przez 0o
console.log(0o31); // 25
// zapis dziesiętny
console.log(25); // 25
// zapis szesnastkowy poprzedzony przez 0x
console.log(0x19); // 25
```
Jeżeli chciałbyś nauczyć się konwertowania liczb z jednego systemu na drugi to polecam film na YT Mirosława Zelenta [poruszający ten temat](https://www.youtube.com/watch?v=VUHwfugYFEA).

W przypadku liczb zmiennoprzecinkowych możemy wyróżnić dodatkowy zapis - tzw. notację naukową, która przyjmuje postać:
```javascript
const pi = 0.314e1;
console.log(pi); // 3.14 (1)
const longDecimal = 3e-6;
console.log(longDecimal); // 0.000003 (2)
```
Liczba po e jest wykładnikiem potęgi o podstawie 10. W przypadku `pi` było to 0.314 * 10^1 co daje nam `3.14` (1), a w przypadku `longDecimal` będzie to 3 * 10^-6 czyli `0.000003` (2).

#### Operacje arytmetyczne
W JavaScript mamy możliwość wykonywania różnych operacji arytmetycznych z użyciem dedykowanych operatorów.
```javascript
// operator dodawania +
console.log(5 + 2); // 6
// operator odejmowania -
console.log(5 - 2); // 3
// operator mnożenia *
console.log(5 * 2); // 10
// operator dzielenia /
console.log(5 / 2); // 2.5
// operator reszty z dzielenia %
console.log(5 % 2); // 1
console.log(-5 % 2); // -1
// operator potęgowania **
console.log(5 ** 2); // 25
```
Warte zaznaczenia jest to, że operator `%` może zwracać wartości zarówno dodatnie jak i ujemne, w zależności od znaku jaki ma wartość z którego liczona jest reszta. Musimy wziąć to pod uwagę np. przy tworzeniu funkcji sprawdzającej, czy przekazany argument jest nieparzysty. Napiszmy dwie takie funkcje 😉, zobaczymy która będzie lepsza.
```javascript
function isOdd(value) {
	return value % 2 === 1; // (1)
}

function isBetterOdd(value) {
	return Math.abs(value % 2) === 1; // (2)
}
console.log(isOdd(-3)); // false
console.log(isOdd(3)); // true
console.log(isBetterOdd(-3)); // true
console.log(isBetterOdd(3)); // true
```
Różnica między dwoma funkcjami polega na tym, że pierwsza zwraca bezpośrednio wartość reszty z dzielenia przez 2 (1) i porównuje ją z jedynką (każda liczba nieparzysta podzielona przez 2 ma resztę z dzielenia równą 1), a druga wyciąga wartość bezwzględną przed przyrównaniem do jedynki (2). W efekcie, funkcja `isOdd` zwraca poprawne wyniki tylko dla liczb dodatnich, a funkcja `isBetterOdd` działa poprawnie dla każdej liczby - zdecydowanie bardziej interesuje nas to drugie rozwiązanie!

Oprócz wspomnianych wcześniej operatorów matematycznych, znanych wszystkim chociażby z lekcji matematyki w szkole, JavaScript oferuje dodatkowe operatory, które możemy używać wraz z liczbami. Są nimi operatory inkrementacji `++` i dekrementacji `--`. Spójrzmy na przykład poniżej.
```javascript
let x = 10;
let y = 10;
// operator inkrementacji ++
console.log(++x); // 11 
// operator dekrementacji --
console.log(--y); // 9
```
Uwaga, dwa powyższe operatory mogą różnie oddziaływać na liczbę w zależności czy stoją przed nią czy za nią. 
* Jeżeli znajdują się przed liczbą (prefix) ich zachowanie można opisać tak: zmień liczbę, a potem ją zwróć
* Jeżeli znajdują się za liczbą (suffix), będą zachowywać się następująco: najpierw zwróć liczbę, a potem ją zmień

```javascript
let x = 10;
// operator inkrementacji jako suffix
console.log(x++); // 10 (1)
console.log(x); // 11 (2)
```
Zmienna `x` została zainicjowana liczbą 10. Następnie wyświetlamy w konsoli wynik inkrementacji tej zmiennej, używając operatora stojącego za zmienną. Operator inkrementacji w wersji suffix najpierw zwrócił zmienną, dlatego w konsoli widzimy wartość 10 (1), a dopiero potem ją zmodyfikował. Dopiero w drugim wylistowaniu zmiennej `x` widzimy, że zmieniła się jej wartość (2).

#### Konwertowanie do typu number
Co się stanie gdy przykładowo w operacji matematycznej użyjemy typu string zamiast number?  Jeśli będzie to możliwe, typ string zostanie skonwertowany na typ number. Spójrzmy na poniższy przykład.
```javascript
const a = 10;
const b = '4';
console.log(a - b); // 6 (1)
console.log(typeof (a - b)) // number (2)
// ale uwaga na dodawanie!!
console.log(a + b); // 104 (3)
console.log(typeof (a + b)); // string (4)
```
Co tam się zadziało! Prześledźmy wszystko po kolei. Zainicjowaliśmy zmienną `a` wartością typu number `10`, natomiast zmienną `b` wartością typu string `'4'`. Następnie wykonujemy operację odejmowania, a jej wynik wyświetlamy w konsoli (1). Zmienna `b` została skonwertowana do typu number, dzięki czemu możliwe było przeprowadzenie operacji odejmowania. W kolejnej linii sprawdziliśmy typ zwracanego wyniku, który tak jak się spodziewaliśmy jest liczbą (2). Wszystko byłoby pięknie gdyby nie kolejne linijki. Wynikiem dodawania `a + b`, który pokazał nam się w konsoli jest ... `104` (3).  10 + 4 = 104?! W kolejnej linii sprawdziliśmy typ zwracanego wyniku i okazuje się, że jest to ciąg znaków, a nie liczba (4). Niestety, jest to efekt tego, że znak + jest w JavaScript operatorem dodawania i jednocześnie służy do konkatenacji stringów, o czym mieliście możliwość przekonać się w [poprzednim wpisie](/typy-proste-w-javascript-string/#łączenie-stringów) z tej serii. W przypadku lini (3), wartość zmiennej `a` została skonwertowana na typ string i dołączona do zmiennej `b`. `10` zostało dołączone do `4` stąd wynik typu string `104`. Chodziło nam o coś zupełnie innego, więc jak inaczej konwertować na typ number by można było wykonać bezpiecznie operację dodawania?

Konwertowanie na typ number możemy wymusić "ręcznie" 😉. Możemy to zrobić na kilka sposobów.
```javascript
console.log(Number('10')); // 10
console.log(+'5'); // 5
console.log(parseFloat('2')); // 2
```
Wracając do poprzedniego przykładu z operacją dodawania, możemy go zmodyfikować w taki sposób by zwracał typ number.
```javascript
const a = 10;
const b = '4';
console.log(a + Number(b)); // 14
console.log(typeof (a + Number(b))); // number
```

###  Specjalne wartości typu number
W JavaScript występują 2 wartości, które są typu number, ale zwracane są w wyniku pojawienia się błędu w trakcie liczenia bądź konwersji z innego typu na tym number. Są to:
1. NaN - not a number, nazwa mówi sama za siebie
2. Infinity - nieskończoność

#### NaN
`NaN` zwracane jest w przypadku gdy nie można skonwertować wartości na typ number.
```javascript
// konwersja typu string, który nie jest złożony z cyfr
console.log(Number('string')); // NaN
```
`NaN` zwracane jest również wtedy gdy nie można przeprowadzić jakiejś operacji matematycznej bądź jest ona wykonywana na `NaN`
```javascript
// operacja pierwiastkowania liczby ujemnej
console.log(Math.sqrt(-16)); // NaN
// dodawanie z NaN
console.log(NaN + 100); // NaN
```
Wiemy już czym jest `NaN`, a więc jak możemy go obsłużyć w naszym kodzie - jego wystąpienie nie jest pożądane. Służy do tego funkcja `isNaN()`, przyjmuje ona za argument wartość, która ma być sprawdzana.
```javascript
// sprawdźmy czy można obliczyć logarytm naturalny z liczby ujemnej
console.log(isNaN(Math.log(-10))); // true (1)
console.log(isNaN(Number('string')); // true (2)
```
W powyższym przykładzie `Math.log(-10)` zwrócił `NaN`, w związku z czym funkcja `isNaN()` zwraca `true`. (1) Gdybyśmy chcieli zabezpieczyć się przed `NaN`, funkcję `isNaN()` należałoby uwzględnić w instrukcji warunkowej, która w przypadku wystąpienia `NaN` pokieruje wykonywaniem skryptu tak, by pojawienie się `NaN` nie wpłynęło negatywnie na dalsze jego działanie. Spróbujmy napisać prostą funkcję do pierwiastkowania, której argumentem ma być liczba dodatnia.
```javascript
function squareRoot(value) {
	const result = Math.sqrt(value); // (1)
	if(isNaN(result) || typeof value !== 'number') { // (2)
		console.log('Please provide correct value, number >= 0'); // (3)
	} else {
		console.log(`The square root of a ${value} is ${result}`); // (4)
	}
}
console.log(squareRoot(4)); // The square root of a 4 is 2
console.log(squareRoot(-4)); // Please provide correct value, number >= 0
console.log(squareRoot(null)); // Please provide correct value, number >= 0
console.log(squareRoot([])); // Please provide correct value, number >= 0
```
Stworzyliśmy funkcję, z jednym parametrem`value`. W jej ciele, tworzymy zmienną `result`, która przechowuje wynik działania pierwiastkowania parametru `value` (1). Następnie sprawdzamy w instrukcji warunkowej czy wynik pierwiastkowania parametru `value` przechowywany w zmiennej `result` nie jest przypadkiem `NaN` LUB ( znak `||` to operator logiczny LUB, który dokładniej będziemy omawiać w kolejnym poście z tego cyklu) czy przekazany do funkcji argument nie jest typem number. Jeżeli, któryś z tych warunków wystąpi (2), to informujemy użytkownika żeby wprowadził poprawną wartość, która musi być liczbą większa od 0 (3). We wszystkich pozostałych przypadkach zwracamy użytkownikowi informację z wynikiem pierwiastkowania (4). Na samym końcu możemy zobaczyć przykładowe wyniki wywołania funkcji `squareRoot`.

Omówmy sobie jeszcze jedną kwestię związaną z `NaN`. Dlaczego nie można po prostu szukać jej w sposób `value === NaN`? (`===` oraz `!==` użyty w poprzednich przykładach to operatory porównania identyczności i nieidentyczności o których dokładniej opowiemy sobie w innym wpisie - sprawdzają czy porównywane wartości są identyczne czy nie). Odpowiedź znajdziecie w listingu poniżej.
```javascript
const x = NaN; // (1)
console.log(x === NaN); // false (2)
```
Do zmiennej `x` przypisaliśmy wartość `NaN` (1). Następnie próbujemy porównać ją do wartości `NaN` i wyświetlić wynik w konsoli - o dziwo,  operacja identycznego porównania `===` zwróciła nam wartość `false` (2). Wniosek jest taki: w JavaScript `NaN` nie jest równe `NaN`, trzeba to zaakceptować 😄. Właśnie z tego powodu zalecane jest używanie funkcji `isNaN()`.

Warto w tym miejscu nadmienić jeszcze jedną rzecz na temat `isNaN()`. Sprawdza ona tak na prawdę czy przekazana do niej wartość nie jest liczbą. Oznacza to, że jeśli przekażemy tam przykładowo jakiś string czy null, funkcja `isNaN()` zwróci `true`.
```javascript
console.log(isNaN('string')); // true
console.log(isNaN(null)); // true
console.log('string' === NaN); // false
console.log(null === NaN); // false 
```
Widzimy, że ani `'string'`, ani `null` nie są równe `NaN`, a mimo to `isNaN()` zwraca dla nich `true`. Jezeli chcemy złapać "prawdziwe" `NaN` w naszym kodzie, musimy wykorzystać fakt, że `NaN` jest typu number. Warunkiem który to obsłuży będzie `(isNaN(value) && typeof value === 'number')`.

#### Infinity
Wartość nieskończoności zwracana jest w przypadku dzielenia przez 0 lub w przypadku przekroczenia zakresu zmiennej. 
```javascript
console.log(15/0); // Infinity (1)
console.log(-15/0); // -Infinity (2)
console.log(Math.pow(2, 1024)); // Infinity (3)
```
Pierwszy wiersz przedstawia dzielenie liczby dodatniej przez 0, którego wynikiem jest `Infinity` - dodatnia nieskończoność (1). W drugim wierszu widzimy, wynik dzielenia liczby ujemnej przez 0 - ujemna nieskończoność (2). Ostatni wiersz przedstawia wynik potęgowania dwójki, który przekracza maksymalną wartość która może być zaprezentowana (3).

Operacje matematyczne wykonywane na `Infinity` mogą zwrócić dwie różne wartości. 
```javascript
// NaN gdy chcemy neutralizować nieskończoność
console.log(Infinity - Infinity); // NaN 
console.log(Infinity / Infinity); // NaN
// Infinity w pozostałych przypadkach (wybrane przykłady)
console.log(Infinity - 10); // Infinity
console.log(Infinity * 2); // Infinity
console.log(Infinity / 100); // Infinity
```
Jak sprawdzać czy otrzymana wartość jest nieskończonością? W przypadku `Infinity` mamy dwie możliwości.
```javascript
const x = Infinity;
console.log(x === Infinity); // true (1)
console.log(isFinite(x)); // false (2)
```
Możemy to sprawdzić poprzez zwykłe przyrównanie do `Infnity`, tak jak w przypadku (1). Możemy również skorzystać z funkcji `isFinite()`, która sprawdza czy przekazana do niej wartość jest skończona. W przypadku przekazania tam wartości `Infinity` funkcja zwróci `false` (2).

### Praca własna
Pora na kilka zadań dzięki którym będziesz mógł sobie ułożyć zdobytą dzisiaj wiedzę.

**Ćwiczenie 1.** Jakie wartości zostaną wyświetlone w konsoli? Zanim wrzucisz je do przeglądarkowego devtools, pogłówkuj trochę nad rozwiązaniem lub poszukaj odpowiedzi w treści tego wpisu 🤓
```javascript
console.log(25.0 === 25);
console.log(0b10101 === 0x14);
console.log(3.14 === 0.00314e2);
console.log(10 + +'5');
console.log(10 / '5');
console.log(10 / 'pięć');
console.log(10 / 0);
console.log(NaN !== NaN);
console.log((10 % -3) === -1);
console.log((-10 % 3) === 1);
console.log(typeof Infinity);
```
**Ćwiczenie 2.** Co zostanie wyświetlone w konsoli i dlaczego?
```javascript
let a = 0;
console.log([++a, --a]);
let b = 0;
console.log([b++, --b]);
let c = 0;
console.log([c++, c--]);
```
**Ćwiczenie 3.** Pamiętasz funkcję do obliczania pierwiastka kwadratowego z liczby? Twoim zadaniem, będzie modyfikacja tej funkcji tak, by dalej działała w identyczny sposób.
```javascript
function squareRoot(value) {
	if() { // dopisz odpowiednie warunki w instrukcji if nie zmieniając reszty kodu
		const result = Math.sqrt(value);
		console.log(`The square root of a ${value} is ${result}`);
	} else {
		console.log('Please provide correct value, number >= 0');
	}
}
// sprawdź czy wywołania funkcji squareRoot zwracają oczekiwane wyniki:
console.log(squareRoot(4)); // The square root of a 4 is 2
console.log(squareRoot(-4)); // Please provide correct value, number >= 0
console.log(squareRoot(null)); // Please provide correct value, number >= 0
console.log(squareRoot([])); // Please provide correct value, number >= 0
```

### Bibliografia
1. Rauschamyer Axel, “JavaScript For Impatient Programmers”, Chapter 14 Numbers
2. Rauschamyer Axel, “Speaking JavaScript”, Chapter 11 Numbers,  [link](http://speakingjs.com/es5/ch11.html)

