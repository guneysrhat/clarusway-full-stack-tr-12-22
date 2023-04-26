
-- * WHERE - LIKE ( _ = SingleChar, % = JokerChar)
-- SELECT * FROM Customer WHERE Country LIKE 'USA' -- "USA" olanlar.
-- SELECT * FROM Customer WHERE Address LIKE '627 Broadway' -- "627 Broadway" olanlar.
-- SELECT * FROM Customer WHERE Address LIKE '1498%'  -- "1498" ile başlayan kayıtlar.
-- SELECT * FROM Customer WHERE Address LIKE '%langer'  -- "langer" ile biten kayıtlar.
-- SELECT * FROM Customer WHERE Address LIKE '%rue%'  -- içinde "rue" geçen kayıtlar.
-- SELECT * FROM Customer WHERE Phone LIKE '_55 %' ;-- 2. ve 3. karakteri 55 olan kayıtlar.
-- SELECT * FROM Customer WHERE Address LIKE '_a_%'; -- 2 karakteri "a" olan ve en az 3 karakter olan.
-- SELECT * FROM Customer WHERE Phone LIKE '+__ 030%'; -- Ülke kodu bilinmeyen 030 ile başlaya telefonlar.

-- * ORDER BY - Sıralama
-- * ASC - A-Z Sıralama
-- * DESC - Z-A Sıralama
-- SELECT * FROM Customer ORDER BY Country ASC; -- Normal sıralama
-- SELECT * FROM Customer ORDER BY Country; -- Default: ASC
-- SELECT * FROM Customer ORDER BY Country DESC; -- Ters sıralama
-- SELECT * FROM Customer ORDER BY Country, City, LastName -- Sırasıyla ülke - şehir ve soyisim sırala.
-- SELECT * FROM Customer WHERE Country IN ('USA', 'Brazil') AND CustomerId > 12 AND Company NOT NULL ORDER BY Company ASC
/* 
-- Piyasada standartı her satıra ayrı ayrı yazmaktır:
SELECT * 
FROM Customer 
WHERE Country IN ('USA', 'Brazil') 
	AND CustomerId > 12
	AND Company NOT NULL 
ORDER BY Company ASC 
*/

-- * LIMIT - Belli sayıda kayıt getir.
-- SELECT * FROM Customer LIMIT 0, 10 -- LIMIT kaçıncı kayıttan itibaren, kaç ADET kayıt.
-- SELECT * FROM Customer LIMIT 5 -- Başlangıç default: 0
-- SELECT * FROM Customer LIMIT 10, 5 -- 10. kayıttan sonraki 5 adet kaydı getir.
-- SELECT * FROM Customer ORDER BY LastName ASC, FirstName DESC LIMIT 0, 5; -- Srıalamaya göre ilk 5 kayıt.
-- SELECT * FROM Customer ORDER BY LastName ASC, FirstName DESC LIMIT 5, 5; -- Srıalamaya göre ikinci 5 kayıt.

-- * SUBQUERY (SELECT IN SELECT) (Nested Query)
-- SELECT * FROM Album WHERE ArtistId = (SELECT ArtistId FROM Artist WHERE Name = 'Led Zeppeli') -- Sanatçı ID'sini SubSelect'den aldık.
-- SELECT AlbumId, Title, (SELECT Name FROM Artist WHERE ArtistId = 22) AS Artist FROM Album;
/*
-- SubSELECT sorgusunu tablo gibi kullanmak:
SELECT FirstName, LastName
FROM (
	SELECT * FROM Customer WHERE Country = 'USA' AND CustomerId > 22
) WHERE FirstName LIKE '%a%'
*/

-- -- -- -- -- -- -- -- JOINS -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

-- Birden fazla tablodaki kayıtları tek bir tabloda getirmek için kullanıyor.

-- * INNER JOIN -- Yalnızca kesişen kayıtları getirir.
-- * (Alternatif Yazım: JOIN) Default JOIN yöntemi INNER JOIN'dir.
/*
SELECT *
FROM Artist AS art
JOIN Album AS alb ON alb.ArtistId=art.ArtistId -- JOIN == INNER JOIN
ORDER BY ArtistId ASC, AlbumId ASC
*/
/*
SELECT c.FirstName, c.LastName, c.Country, i.InvoiceId, i.InvoiceDate, i.Total
FROM Customer AS c
INNER JOIN Invoice AS i ON i.CustomerId = c.CustomerId
ORDER BY c.CustomerId
*/
/*
SELECT t.Name Sarki, a.Title Album, m.Name Dosya, g.Name Tur
FROM Track t
INNER JOIN Album a ON a.AlbumId=t.AlbumId
INNER JOIN MediaType m ON t.MediaTypeId=m.MediaTypeId
INNER JOIN Genre g ON g.GenreID=t.GenreId
*/

-- * LEFT JOIN -- FROM tablodaki BÜTÜN kayıtlar ve JOIN tablodaki KESİŞEN kayıtları getir.
/*
SELECT *
FROM Artist AS art
LEFT JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC
*/

-- * RIGHT JOIN -- FROM tablodaki KESİŞEN kayıtlar ve JOIN tablodaki BÜTÜN kayıtları getir.
/*
SELECT *
FROM Artist AS art
RIGHT JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC
*/

-- * FULL  OUTER JOIN -- Her iki tablonun BÜTÜN kayıtlarını göster, Eşleşenleri yanyana göster.
/*
SELECT *
FROM Artist AS art
FULL OUTER JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC
*/

-- * CROSS JOIN -- Her iki tablonun BÜTÜN kayıtlarını göster, İlişki gözetme.
/*
SELECT *
FROM Artist AS art, Album AS alb
ORDER BY ArtistId ASC, AlbumId ASC
*/

-- * JOIN ÖRNEKLER
/*
-- Hangi sanatçı hangi albümleri çıkarmıştır. Bir albüme sahip olmayan sanatçıları gösterme. Sadece albüme sahip olan sanatçıları göster.
SELECT t1.ArtistId, t1.Name AS sanatci, t2.Title AS album
FROM Artist AS t1
INNER JOIN Album AS t2 ON t1.ArtistId=t2.ArtistId
-- WHERE t1.Name = 'Led Zeppeli'
ORDER BY t1.ArtistId
*/
/*
-- Bütün sanatçıları göster. Hangi sanatçı hangi albüme sahip onu da göster. Ama albüm sahibi olmayan kayıtlara NULL yaz.
SELECT t1.ArtistId, t1.Name AS sanatci, t2.Title AS album
FROM Artist AS t1
LEFT JOIN Album AS t2 ON t2.ArtistId=t1.ArtistId
ORDER BY t1.ArtistId
*/

-- -- -- -- -- -- -- --  FUNCTIONS -- -- -- -- -- -- -- -- -- -- -- -- 

--* COUNT -- Kayıt Sayısı
-- SELECT COUNT(*) AS kayitSayisi FROM Customer -- * kullanmak efektif değil. 
-- SELECT COUNT(CustomerId) AS kayitSayisi FROM Customer; -- Herhangi bir sutun ismi kullanmalıyız (PRIMARY)

-- * SUM -- Toplam
-- SELECT SUM(Total) AS toplam FROM Invoice; -- Toplam fatura tutarı
-- SELECT SUM(Total) AS toplam, BillingCountry FROM Invoice WHERE BillingCountry='USA'; -- Amerikaya kesilen fatura toplamı.

-- * AVG - Ortalama alır.
-- SELECT AVG(Total) AS ortalama FROM Invoice;

-- * ROUND -- Yuvarlama
-- SELECT ROUND(AVG(Total)) AS ortalama FROM Invoice;
-- SELECT ROUND(AVG(Total), 2) AS ortalama FROM Invoice;

-- * MIN -- En küçük değer.
-- SELECT MIN(Total) AS ortalama FROM Invoice;

-- * MAX -- En büyük değer.
-- SELECT MAX(Total) AS ortalama FROM Invoice;

-- * LENGTH -- Karakter Sayısı -- Satır satır.
-- SELECT LENGTH(BillingAddress) AS ortalama FROM Invoice;

-- -- -- -- GROUP BY -- -- -- -- 

-- * GROUP BY -- İşlemleri gruplayarak yap.
-- SELECT BillingCountry, SUM(Total) AS toplam FROM Invoice GROUP BY BillingCountry; -- Ülkeye göre toplam tutarları ver.
-- SELECT BillingCountry, COUNT(InvoiceId) AS faturaSayisi FROM Invoice GROUP BY BillingCountry;  -- hangi ülkeye kaç adet fatura göster.
-- SELECT BillingCountry, AVG(Total) AS ortalama FROM Invoice GROUP BY BillingCountry;  -- Ülkeye göre ortalama fatura tutarı.
-- SELECT BillingCountry, ROUND(AVG(Total), 2) AS ortalama FROM Invoice GROUP BY BillingCountry;  -- Ülkeye göre ortalama fatura tutarı. -- yuvarlanmış
-- SELECT BillingCountry, MIN(Total) AS minimum FROM Invoice GROUP BY BillingCountry;  -- Ülkeye göre minimum fatura tutarı.
-- SELECT BillingCountry, MAX(Total) AS maximum FROM Invoice GROUP BY BillingCountry;  -- Ülkeye göre maximum fatura tutarı.
