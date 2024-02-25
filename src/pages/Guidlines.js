export default function Guidlines() {
    return (
        <main class="guideMain">
            <article>
                <h2>Webbriktlinjer</h2>
                <ul>
                    <li><h3>Ange i kod vad sidans olika delar har för roll</h3>
                        <p>Semantiska taggar används i koden </p></li>

                    <li><h3>Ange sidans språk i koden</h3>
                        <p>Alla sidor har "lang="sv" "</p></li>

                    <li><h3>Ange språkförändringar i koden</h3>
                        <p>Bara svenska som anvädns på sidan</p></li>

                    <li><h3>ändra inte enbart färg för att förmedla information</h3>
                        <p>färg används för att visa vilken sida man är på men finns även en titel längst upp på sidan</p></li>

                    <li><h3>Använd tillräcklig kontrast mellan text och bakgrund</h3>
                        <p> färgerna får godkänt på siegemedia contrast ratio</p></li>

                    <li><h3>Använd tillräckliga kontraster i komponenter och grafik</h3>
                        <p>knappar och formulärfält syns tydligt</p></li>

                    <li><h3>Erbjud alternativ till komplexa fingerrörelser</h3>
                        <p>sidans gränssnitt kräver inga komplexa fingerrörelser</p></li>

                    <li><h3>Ge användaren möjlighet att pausa, stänga av eller sänka ljud</h3>
                        <p> finns inget ljud på sidan</p></li>

                    <li><h3>Erbjud möjlighet att hoppa förbi återkommande innehåll</h3>
                        <p>skip länk som hoppar över navbar är först när man klickar på tab</p></li>

                    <li><h3> Ge användarna möjlighet att justera tidsbegränsningar</h3>
                        <p> Inga tidsbegränsningar på sidan</p></li>

                    <li><h3> Ge användarna möjlighet att pausa eller stänga av rörelser</h3>
                        <p> Inga rörelser på sidan</p></li>

                    <li> <h3>Ge förslag på hur fel kan rättas till</h3>
                        <p>inga fel att rätta till</p></li>

                    <li><h3>Ge möjlighet att ångra, korrigera eller bekräfta vid viktiga transaktioner</h3>
                        <p> inga viktiga transaktioner på sidan</p></li>

                    <li><h3> Gör det möjligt att ångra klick</h3>
                        <p>inget att ångra</p></li>

                    <li><h3> Gör en logisk tab-ordning</h3>
                        <p>Tab går från vänster till höger och jobbar sig neråt</p></li>

                    <li><h3> Markera tydligt vilket fält eller element som är i fokus</h3>
                        <p>röd kant på det som är i fokus vid navigering med tangentbordet</p></li>

                    <li><h3>Märk upp vanliga formulärfält i koden</h3>
                        <p>formulärfält är namngivna i koden</p></li>

                    <li><h3>Popup-funktioner ska kunna hanteras och stängas av alla</h3>
                        <p>popup har stäng knapp</p></li>

                    <li><h3>Presentera innehållet i en meningsfull ordning för alla</h3>
                        <p>skärm läsare läser i rätt ordning</p></li>

                    <li><h3>Se till att allt innehåll presenteras rätt oavsett skärmens riktning</h3>
                        <p>ser bra ut liggande</p></li>

                    <li><h3>Se till att det går att öka avstånd mellan tecken, rader, stycken och ord</h3>
                        <p>text ser bra ut med värden från WCAG och testat med bookmarklet</p></li>

                    <li><h3>Se till att hjälpmedel kan presentera meddelanden som inte är i fokus</h3>
                        <p>skärmläsare kan läsa popup</p></li>

                    <li><h3>Se till att koden validerar</h3>
                        <p>filerna blir godkända av w3c</p></li>

                    <li><h3>Se till att markören inte fastnar vid tangentbordsnavigation</h3>
                        <p>markören loopar runt och fastnar inte</p></li>

                    <li><h3>Se till att skräddarsydda komponenter fungerar i hjälpmedel</h3>
                        <p>inga skräddarsydda komponenter</p></li>

                    <li><h3>Se till att text går att förstora utan problem</h3>
                        <p>texten fungerar vid 200%</p></li>

                    <li><h3>Se till att text på knappar och kontroller överensstämmer med maskinläsbara etiketter</h3>
                        <p>lables har namn som stämmer med fälten</p></li>

                    <li><h3>Skapa en flexibel layout som fungerar vid förstoring eller liten skärm</h3>
                        <p>navbar och sidor som har fler kolumner flyttas vid mindre skärmar</p></li>

                    <li><h3>Skapa kortkommandon med varsamhet</h3>
                        <p>har inga kortkommandon</p></li>

                    <li><h3>Skapa tydliga och klickbara fältetiketter/ledtexter</h3>
                        <p>kontaktformulär har tydliga etiketter och exemple text i rutan</p></li>

                    <li><h3>Utför inga oväntade förändringar vid fokusering</h3>
                        <p>inga förändringar sker vid fokusering</p></li>

                    <li><h3>Utför inga oväntade förändringar vid inmatning</h3>
                        <p>inga förändringar sker vid inmatning</p></li>

                    <li><h3>Utveckla systemet så att det går att hantera med enbart tangentbordet</h3>
                        <p>sidan går att navigera med tangentbordet</p></li>

                    <li><h3>Visa var ett fel uppstått och beskriv det tydligt</h3>
                        <p>kontaktformulär skickar vidare till en "not found" sida</p></li>

                </ul>
            </article>
        </main>
    );
}