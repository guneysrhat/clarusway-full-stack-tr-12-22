import os
os.system('cls' if os.name=="nt" else 'clear')
# ---------------------------------------------
# ---------------------------------------------
# Python - OOP - 2
# ---------------------------------------------
# Encapcullation: Kapsülleme. Aynı amaç için kullanılan değişken ve methodları bir class içinde yazıyor olmsı
#    ve class içinde tanımlanan private attre erişelmiyor olması.
# Abstraction: Soyutlama. Kodların gizliliği ve birbirinde bağımsız çalışmaları.
# ---------------------------------------------
# Inheritance: Miras Alma. Bir classın tüm özelliklerinin başka bir classa aktarılmasına denir.
# Polymorphism: Miras alınan (inherit edilen) classın özellik/metodlarını yeniden yazılabilyor/değiştirebiliyor olmasına denir.

# ---------------------------------------------

class Person:

    company = 'Clarusway'

    def __init__(self, name, age, gender='Male'):
        self.name = name
        self.age = age
        self.gender = gender
        print('Personel Oluşturuldu.')

    def __str__(self):
        return f'{self.name} - {self.age}'

    def get_detail(self):
        return f'{self.name} - {self.age} - {self.gender} - {self.company}'

# person_1 = Person('Qadir', 40) # Bir classın atandığı değişkene instance denir.
# Bir classtan türetilmiş objeye instance denir.
# print(person_1)
# print(person_1.get_detail())

class Department:

    def __init__(self):
        print('Departman çalıştı.')

    def set_department(self, department):
        self.department = department

# Inheritance:
# JS -> class Employee extends Person
class Employee(Person, Department):
# Person classının tüm özellikleri Employee classına aktarıldı.

    salary = 5000

    def set_salary(self, salary):
        self.salary = salary

    # Override:
    def __init__(self, name, age, gender, salary, department='AWS'):
        # Super(), inherit ettiğimiz ilk class'dan itibaren bulduğu ilk methodu çağırır.
        super().__init__(name, age, gender)
        # Inherit edilen class methodunu çalıştırma:
        # super() kullanmıyor isek self parametresi gönderilmelidir.
        Department.set_department(self, department)
        self.salary = salary

    # Polymorphism (Override, Overload)
    # Mevcut bir methodu tekrar tanımlama imkanına "Polymorphism" denir.
    # Yeni methodun eski methodu ezmesine "override" denir.
    # Yeni method ile eski methodun aynı anda aktif olmasına da "overload" denir.
    # Python "overload" desteklemez.
    def get_detail(self):
        return f'{self.name} - {self.age} - {self.salary} - {self.gender} - {self.company} - {self.department}'

# person_1 = Employee('Busra', 29, 'Female')
# person_1.set_salary(3000)
# print(person_1.get_detail())

person_1 = Employee('Selim', 34, 'Male', 1500, 'Fullstack')
# person_1.set_department('FullStack')
print(person_1.get_detail())


