-- Bu artık bir yorum satırıdır. SingleLine.

/*
	MultiLine
	Comment
*/

-- SELECT 1 AS one -- Tek block işlemler için noktalı-virgül zorunlu değildir.

-- SELECT 1 AS one; -- Bundan sonrası yorumdur. SELECT 2 AS one;

-- SELECT 1 AS One, /* Araya yorum ekleyebilirim. */ 2 AS Two;

-- NOT Case-Sensitive:
-- select 1 AS one; -- Piyasa standardına uygun değildir.
-- SELECT 2 AS TWO;

-- Piyasa Standartları:
-- * SQL Temel komutları BÜYÜK harfle yazılır. SELECT * FROM Album WHERE AlbumID=1;
-- * String verilerde tek-çift tırnak kullanabilirsiniz. Standart olan tek tırnaktır.  SELECT 'string' AS yazi;
-- * Her bir temel komut yeni bir satıra yazılır:
/*
SELECT	* 
FROM	Album 
WHERE	AlbumID=1;
*/

--- --- --- SQL --- --- ---

-- * SELECT - Seç getir.
-- * FROM - Hangi tablodan?
-- SELECT * FROM Album; -- * = Tüm sutunlar.
-- SELECT AlbumId, Title FROM Album; -- İstediğim sutunları getir. -- Tavsiye edilen yöntem ayrı-ayrı yazmaktır.

-- * AS -- Tablo veya Sutunları geçici adlandırmak için kullanılır. -- Lakap Takma
-- SELECT 'data' AS baslik; -- Data gönder.
-- SELECT 1+2  AS sonuc; -- Matematiksel ifade yazdır.
-- SELECT AlbumId AS numara, Title AS baslik FROM Album; -- Sutun isimlendirme
-- SELECT AlbumId+3 AS numara, Title AS baslik FROM Album;
-- SELECT Album.AlbumId, Album.Title FROM Album;
-- SELECT a.AlbumId, a.Title FROM Album AS a; -- Tablo isimlendirme
-- SELECT a.AlbumId AS Numara, a.Title AS Baslik FROM Album AS a;
-- SELECT a.AlbumId Numara, a.Title Baslik FROM Album a; -- AS kullanmadan da isimlendirme yapabiliriz.

-- * DISTINCT - Tekrar edilen kayıtarın tekrar edilmesini engeller (tek kayıt olarak getirir)
-- SELECT DISTINCT City FROM Customer;
-- SELECT DISTINCT City, Country FROM Customer; -- Bütün sutunlardaki ortak olanları 1 kere getirir.

-- * WHERE - Filtreleme
-- SELECT * FROM Customer WHERE Country = 'USA' -- Eşit olanları getir.
-- SELECT * FROM Customer WHERE Country != 'USA' -- Eşit olMAanları getir.
-- SELECT * FROM Customer WHERE Country <> 'USA' -- Eşit olMAanları getir.
-- SELECT * FROM Customer WHERE CustomerId > 20 -- Büyük olanları getir.
-- SELECT * FROM Customer WHERE CustomerId >= 20 -- BüyükEşit olanları getir.
-- SELECT * FROM Customer WHERE CustomerId < 20 -- Küçük olanları getir.
-- SELECT * FROM Customer WHERE CustomerId <= 20 -- KüçükEşit olanları getir.
-- SELECT * FROM Customer WHERE CustomerId BETWEEN 10 AND 20 -- 10 ile 20 arasında olanları getir. (her ikiside dahil)

-- * WHERE - AND/OR/NOT
-- * SELECT * FROM table WHERE True OR NOT True
-- SELECT * FROM Customer WHERE NOT Country = 'USA'
-- SELECT * FROM Customer WHERE Country = 'USA' AND Company NOT NULL
-- SELECT * FROM Customer WHERE Country = 'USA' OR Country = 'Brazil' OR Country='Denmark';
-- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Brazil' OR Country='Denmark') AND CustomerId > 25;
-- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Brazil' OR Country='Denmark') AND (CustomerId BETWEEN 25 AND 27)

-- * WHERE - IN / NOT IN
-- SELECT * FROM Customer WHERE Country IN ('USA', 'Brazil', 'Denmark');
-- SELECT * FROM Customer WHERE Country NOT IN ('USA', 'Brazil', 'Denmark');
-- SELECT * FROM Customer WHERE CustomerID IN (2,3,4,10,11);

-- * WHERE - LIKE ( _ = SingleChar, % = JokerChar)
-- SELECT * FROM Customer WHERE Country LIKE 'USA' -- "USA" olanlar.
-- SELECT * FROM Customer WHERE Address LIKE '627 Broadway' -- "627 Broadway" olanlar.
-- SELECT * FROM Customer WHERE Address LIKE '1498%'  -- "1498" ile başlayan kayıtlar.
-- SELECT * FROM Customer WHERE Address LIKE '%langer'  -- "langer" ile biten kayıtlar.
-- SELECT * FROM Customer WHERE Address LIKE '%rue%'  -- içinde "rue" geçen kayıtlar 
