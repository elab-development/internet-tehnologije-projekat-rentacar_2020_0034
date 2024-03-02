# Rent A Car web aplikacija
![Rent A Car](https://i.ibb.co/c8gHLHB/512fee76586dc7070009826f55207dbe.jpg)

Rent A Car je sveobuhvatna platforma za iznajmljivanje različitih tipova vozila, uključujući automobile, motocikle, kombije i druge vrste vozila. Ova aplikacija pojednostavljuje proces iznajmljivanja vozila i omogućava korisnicima uvid i manipulaciju sa vozilima, kao i mogućnost kontaktiranja agencija za iznajmljivanje vozila.
Agencije za iznajmljivanje vozila imaju mogućnost postavljanja svojih ponuda vozila u vezi sa iznajmljivanjem, pružajući detaljne informacije o lokaciji, ceni, opisu, slikama i kontakt podacima vozila. Korisnici, s druge strane, mogu lako pretraživati dostupna vozila i vršiti rezervacije putem aplikacije. Pretragu je moguće vršiti putem pretrage naziva vozila ili pretrage vozila po tipu, a postoje i dodatne mogućnosti sortiranja i pretrage vozila.

Aplikacija koristi GoogleOAuth za pristup i autentifikaciju korisnika, osiguravajući siguran i jednostavan pristup. Sve slike vezane za vozila i rezervacije čuvaju se u okviru Cloudinary cloud memorije radi efikasne i pouzdane manipulacije slikama.
Agencije za iznajmljivanje vozila imaju pregled svih vozila i pristup svojim profilima s kontakt informacijama. Mogu izmeniti ili obrisati svoja vozila, ali ne mogu izmeniti ili obrisati vozila drugih agencija.

Administrator ima potpunu kontrolu nad svim vozilima na aplikaciji, s mogućnošću brisanja i izmene. Takođe, ima pristup statističkim podacima i profilima svih agencija za iznajmljivanje vozila koje koriste aplikaciju. Ipak, administrator ne može direktno kreirati nove vozila, ograničen je isključivo na administrativne funkcije.
Za organizaciju i održavanje, aplikacija koristi Model-View-Controller (MVC) patern, jasno razdvajajući logiku aplikacije, prezentaciju i interakciju korisnika. Ova struktura čini kod organizovanim, lako održivim i omogućava buduće ažuriranje i modifikacije.

Aplikacija je izgrađena pomoću MERN stack-a (MongoDB, Express, React, Node.js), koristeći MongoDB kao bazu podataka, Express kao backend okvir, React za dinamički frontend, i Node.js kao runtime okruženje na serverskoj strani za pokretanje aplikacije. Ova tehnološka kombinacija omogućava skalabilnost i brz razvoj, koristeći popularan skup tehnologija za veb aplikacije.
U suštini, Rent A Car olakšava pregled i manipulaciju sopstvenom ponudom vozila, kontaktiranje agencija za iznajmljivanje vozila, ostavljanje rezervacije nad vozilima, pretragu po nazivu, pretragu po tipu vozila, sortiranje po ceni i paginaciju vozila.

# Rent A Car koriscene tehnologije

Za razvoj naše veb aplikacije, pažljivo smo izabrali **MERN arhitekturu**, koja se sastoji od četiri ključne tehnologije - MongoDB, Express.js, React.js (konkretno Refine) i Node.js. Svaka od ovih komponenti igra ključnu ulogu u omogućavanju brze, skalabilne i efikasne implementacije aplikacije.

**MongoDB** se koristi kao baza podataka za skladištenje podataka u formatu JSON dokumenata. Ova NoSQL baza podataka omogućava nam fleksibilno čuvanje podataka bez rigidnih tabela, što je od suštinskog značaja za našu aplikaciju koja se bavi različitim tipovima vozila i njihovim detaljima.

**Express.js**, kao okvir za veb aplikacije za Node.js, pruža nam robustan set funkcionalnosti, uključujući rutiranje i upravljanje HTTP zahtevima. Ovo olakšava izradu i organizaciju API-ja za komunikaciju između našeg front-end React dela i back-end Node.js dela.

**React.js**, popularna JavaScript biblioteka, služi za izradu interaktivnog i intuitivnog korisničkog interfejsa. Ova tehnologija omogućava nam da kreiramo komponente korisničkog interfejsa koje su lako ponovno upotrebljive i prilagodljive, što je ključno za efikasan razvoj i održavanje aplikacije. Refine je React.js framework za izgradnju upravljačkih ploča (dashboard) i aplikacija sa složenim interfejsom. Refine nudi komponente za brzu izgradnju kvalitetnih i funkcionalnih korisničkih interfejsa, a takođe podržava i prilagođavanje i proširenje postojećih komponenti. Refine takođe uključuje i mnoštvo alata za upravljanje podacima, kao što su filtriranje, sortiranje, paginacija i pretraga, što čini ovaj framework idealnim za izgradnju aplikacija koje zahtevaju veliku količinu podataka i brzo pretraživanje istih.

**Node.js**, kao JavaScript runtime na strani servera, omogućava našoj aplikaciji da se izvršava na serveru. To je ključno za sve aspekte server-side logike, autentifikaciju korisnika i komunikaciju sa bazom podataka.

**MERN stack** je odabran ne samo zbog svoje efikasnosti, već i zbog sposobnosti da brzo implementira osnovne CRUD operacije (Create, Read, Update, Delete), koje su esencijalne za gotovo svaku modernu aplikaciju. Ova arhitektura nam omogućava da gradimo Rent A Car aplikaciju koja je skalabilna, performantna i pouzdana, pružajući korisnicima intuitivno iskustvo u pretrazi i rezervaciji vozila.


![Tehnologije](https://i.ibb.co/GJw8Ygq/MERN-stack.png)


# Implementacija MVC Paterna

Aplikacija Rent A Car je projektovana i razvijena koristeći **Model-View-Controller (MVC) obrazac**, koji je ključni konceptualni okvir za organizaciju i razdvajanje komponenata aplikacije. Ovaj obrazac igra ključnu ulogu u održavanju čistog i organizovanog koda, što je od suštinskog značaja za skalabilnost i održavanje aplikacije.

**Model**: MongoDB, kao baza podataka, predstavlja "Model" u MVC arhitekturi. Model se koristi za predstavljanje podataka i poslovne logike aplikacije. U ovom slučaju, MongoDB čuva sve informacije o vozilima, agencijama za iznajmljivanje i druge entitete relevantne za Rent A Car aplikaciju. Ovaj deo aplikacije je odgovoran za čuvanje, ažuriranje i upravljanje podacima, uključujući sve CRUD operacije (Create, Read, Update, Delete).

**View**: React.js(okvir Refine) se koristi kao "View" u MVC arhitekturi. React omogućava izradu korisničkog interfejsa i predstavljanje podataka korisnicima na intuitivan način. React komponente su odgovorne za prikazivanje informacija o vozilima, ponudama i omogućavanje korisnicima da pregledaju i rezervišu vozila. Ovaj deo aplikacije se fokusira na prezentaciju podataka i interakciju sa korisnicima.

**Controller**: Express.js igra ključnu ulogu kao "Controller" u MVC arhitekturi. Express.js prima unos korisnika preko različitih HTTP zahteva (GET, POST, PUT, DELETE) i ruti te zahteve prema odgovarajućem Modelu (MongoDB) ili View-u (React.js). Na primer, kada korisnik želi da rezerviše vozilo, Express.js kontroler upravlja procesom prikupljanja informacija, ažuriranja Modela i prikazivanja odgovarajućeg View-a.

Korišćenjem MVC obrazca, aplikacija Rent A Car je organizovana na način koji omogućava jasno razdvajanje odgovornosti između komponenata. Ovo olakšava održavanje, skaliranje i nadogradnju aplikacije, čineći je efikasnom i pouzdanom za korisnike i razvojni tim.

![MVC](https://i.ibb.co/j6pT5Rw/MVC-patern.png)


# Nacin pokretanja

Potrebno je uci u direktorijum projekat u kome se nalaze client folder i server folder.

Nacin pokretanja klijentske strane

```
cd projekat
npm run dev
```

Nacin pokretanja serverske strane

```
cd projekat
npm start
```



