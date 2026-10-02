# Cvičný text — sazba a typografie (Word / Markdown)

## Zdrojový text (bez formátování)

Zkopírujte text níže do Wordu (jedna skupina) nebo do souboru .md (druhá skupina) přesně tak, jak je — bez jakéhokoliv formátování. Text obsahuje záměrné typografické prohřešky, které budete v rámci cvičení opravovat.

---

Git a verzovací systémy

Git je nástroj pro správu verzí souborů, který vyvinul Linus Torvalds v roce 2005 pro potřeby vývoje linuxového jádra. Dnes je nejpoužívanějším distribuovaným verzovacím systémem na světě - používá ho drtivá většina profesionálních vývojářů i školních projektů.

Proč Git používat

Historie změn - kdykoliv se můžeš vrátit k libovolné předchozí verzi souboru. Spolupráce - více lidí může pracovat na stejném projektu bez přepisování navzájem své práce. Zálohování - repozitář může být uložen na GitHubu, takže přijdeš-li o počítač, kód nezmizí. Portfolio - GitHub slouží i jako veřejná prezentace tvé práce pro budoucí zaměstnavatele.

Rozdíl mezi centralizovaným a distribuovaným systémem

U centralizovaného systému (např. starší SVN) existuje jeden centrální server a všichni k němu přistupují. U distribuovaného systému, jako je Git, má každý vývojář kompletní kopii historie projektu na svém počítači.

Jak začít pracovat s Git repozitářem

Nejdřív repozitář naklonuješ příkazem git clone a adresa repozitáře. Pak provedeš změny v souborech. Následně změny přidáš do stage pomocí git add tečka. Pak změny uložíš commitem - git commit -m "popis změny". Nakonec změny nahraješ na server příkazem git push.

Srovnání Git a SVN: Git je distribuovaný, funguje offline, větvení je rychlé a levné. SVN je centralizovaný, vyžaduje připojení k serveru, větvení je pomalé a nákladné.

Jak řekl Linus Torvalds: "Talk is cheap. Show me the code." Tento přístup - preferovat funkční kód před dlouhými diskuzemi - je jednou z klíčových hodnot open source komunity.

Více informací najdeš v oficiální dokumentaci na adrese https://git-scm.com/doc.

---

## Instrukce k formátování

Upravte text tak, aby splňoval typografická minima z metodiky. Konkrétně:

### Struktura (obojí)
1. Hlavní nadpis „Git a verzovací systémy" → nejvyšší úroveň nadpisu (Word: styl **Nadpis 1**; MD: `#`).
2. „Proč Git používat", „Rozdíl mezi centralizovaným a distribuovaným systémem", „Jak začít pracovat s Git repozitářem" → nižší úroveň (Word: **Nadpis 2**; MD: `##`).
3. Odstavec „Proč Git používat" rozdělte na **odrážkový seznam** (4 body) — pořadí nehraje roli.
4. Odstavec „Jak začít pracovat…" rozdělte na **číslovaný seznam** (5 kroků) — na pořadí záleží.
5. Odstavec „Srovnání Git a SVN" přepište jako **tabulku** (sloupce: Vlastnost / Git / SVN).
6. Citát Linuse Torvaldse zvýrazněte jako **citaci/poznámku** (Word: styl Citát nebo kurzíva + odsazení; MD: `>`).
7. Příkazy `git clone`, `git add`, `git commit`, `git push` označte jako **inline kód** (Word: neproporcionální font, např. Consolas; MD: zpětné apostrofy).
8. Vložte **vlastní screenshot** (např. výstup `git status` nebo `git log` z vlastního repozitáře) s popiskem pod obrázkem ve tvaru „Obrázek 1: …".
9. Odkaz na dokumentaci upravte na klikatelný text (Word: hypertextový odkaz; MD: `[text](url)`).

### Typografické opravy (obojí)
- Nahraďte všechny výskyty `-` použité jako pomlčka za typografickou pomlčku **–** (s mezerami kolem).
- Rovné uvozovky u anglického citátu ponechte (`"Talk is cheap..."` je anglická citace), ale pokud budete psát vlastní český text v uvozovkách, použijte **„takto"**.
- Zkontrolujte jednopísmenné předložky/spojky na konci řádku (k, s, v, z, a, i, o, u) — přidejte nezlomitelnou mezeru (Word: Ctrl+Shift+mezerník; MD: `&nbsp;` nebo entita, pokud to render podporuje).

### Jen pro Word
- Nastavte písmo Calibri nebo Arial, 11–12 pt, řádkování 1,15–1,5.
- Okraje 2,5 cm, zarovnání do bloku.
- Vložte číslo stránky do zápatí.

### Jen pro Markdown
- Zkontrolujte si výsledek v náhledu (VS Code preview nebo přímo na GitHubu), ne jen v syrovém textu.
- Popisek pod obrázkem přidejte jako samostatný řádek kurzívou hned pod `![]()` (Markdown sám popisek nevykreslí).
