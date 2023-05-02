/*
-- INSERT -- Kayıt Ekleme
INSERT INTO student (first_name, last_name, age)
VALUES ('Qadir', 'Adamson', 40);
*/
/*
-- INSERT -- Kayıt Ekleme (Multi)
INSERT INTO student (first_name, last_name, age)
VALUES 
	('Qadir', 'Adamson', 40),
	('Qadir', 'Adamson', 41),
	('Qadir', 'Adamson', 42),
	('Qadir', 'Adamson', 43);
*/
/*
-- UPDATE -- Kayıt Güncelleme
UPDATE student SET first_name = 'Rafe', last_name = 'Stefano' WHERE id = 2;
*/
/*
-- DELETE -- Kayıt Silme
DELETE FROM student WHERE id=3;
*/