import os
os.system('cls' if os.name=="nt" else 'clear')
# ---------------------------------------------
# ---------------------------------------------
# Python - OOP - 1
# ---------------------------------------------
# OOP = Object Oriented Programming
# Classes -> BluePrint: Mimarların kullandığı mavi şablon kağıdıdır. Obje orada tanımlanmıştır.
# DRY: Don't Repeat Yourself
# ---------------------------------------------
# def print_type(data_list):
#     for data in data_list:
#         print(data, type(data))

# print_type([ 'Qadir', 123, 123.45, True, (1,2,3), [1,2,3], lambda x:x ])
# ---------------------------------------------
# Temel Kurallar:
# Python'da Class oluşturma:
# class ClassName: # PascalCase yapıda isimlendirilir.

#     variable_for_class = 'value'  # Atrribute/Property

#     # if (Conditions) ... # Wrong Using.

#     # Method:
#     def example_function(paramatre, arguman):  # snake_case yapıda isimlendirilir.
         
#         variable_for_func = 'value'  # Parametre.

#         # if (Conditions)...
# ---------------------------------------------

# class Person:
#     name = 'Qadir'
#     surname = 'Adamson'

# print(Person)
# print(Person.name)
# print(Person.surname)

# Set Object from Class:
# personel = Person() # Instance = Classtan oluşturulmuş obje.

# print(personel)
# print(personel.name)
# print(personel.surname)

# print('----------------')

# personel.name = 'Rafe'
# personel.surname = 'Stefano'
# personel.age = 40

# print(personel.name)
# print(personel.surname)
# print(personel.age)

# print('----------------')

# print(Person.name)
# print(Person.surname)
# print(Person.age) # Instance'da yaptığımız değişkler class'ı ETKİLEMEZ.

# ---------------------------------------------

# Class'da yapılan değişiklikler Inctance'ı ETKİLER.
# class Person:
#     name = 'Qadir'
#     surname = 'Adamson'

# personel_1 = Person()

# print(personel_1.name)
# Person.name = 'Rafe'
# print(personel_1.name)

# ---------------------------------------------
# Bir instance'daki ekleme/güncelleme diğer instance'ı ETKİLEMEZ.
# class Person:
#     name = 'Qadir'
#     surname = 'Adamson'

# personel_1 = Person()
# personel_2 = Person()

# print(personel_1)
# print(personel_2)

# personel_1.name = 'Rafe'
# personel_2.name = 'Victor'

# print(personel_1.name)
# print(personel_2.name)

# personel_1.age = 40

# print(personel_1.age)
# print(personel_2.age)

# ---------------------------------------------

# class Person:
#     name = 'Qadir'
#     surname = 'Adamson'

# personel = Person # personel instance değil, class oldu.
# other_intance = personel() # Yeni class ile instance oluşturuldu.

# ---------------------------------------------

# class Person:

#     name = 'Qadir'
#     surname = 'Adamson'

#     # this -> self
#     def test(self):
#         # this yerine self kullanıyoruz.
#         # self her zaman ilk argüman olmak zorunda.
#         # Instance'dan method çağırırken self parametresi yollamıyıyoruz.
#         print(self.name + ' ' + self.surname)

# personel = Person()
# personel.name = 'Rafe'
# personel.surname = 'Stefano'
# personel.test() # Arka planda şu şekilde çalışır -> Person.test(personel)

# ---------------------------------------------
# Public / Private Attrs:

# class Person:

#     name = 'Qadir'
#     surname = 'Adamson'
#     # Underscore ile başlayan değişkenlerin instance tarafında çağırlmaması/değiştirilmemesi beklenir.
#     # Piyasa standartıdır. Çağrılabilir.
#     _path = 'FS'
#     # Double-Underscore ile başlayan değişkenleri dışardan çağrılmasını engeller.
#     __location = 'Germany'


# personel = Person()
# print(personel.name)
# personel._path = 'AWS'
# print(personel._path)
# print(personel.__location) # Private attr'e erişim sağlanmaz.
# print(personel._Person__location) # Private attr'e ulaşmanın yolu.

# ---------------------------------------------
# Getter ve Setter Methodlar:

# class Person:

#     name = 'Qadir'
#     surname = 'Adamson'
#     # Underscore ile başlayan değişkenlerin instance tarafında çağrılmaması/değiştirilmemesi beklenir.
#     # Piyasa standartıdır. Çağrılabilir.
#     _path = 'FS'
#     # Double-Underscore ile başlayan değişkenlerin dışardan çağrılmasını engeller.
#     __location = 'Germany'

#     def get_location(self):  # Getter Methods: get_ ile başlayan metodlar.
#         return self.__location

#     def set_location(self, new_val):  # Setter Methods: set_ ile başlayan metodlar.
#         self.__location = new_val

# personel = Person()
# print(personel.get_location())
# personel.set_location('Turkey')
# print(personel.get_location())

# class SendMail:

#     __is_sent = False

#     def send(self): # Setter Method.
#         # Mail gönderme komutları
#         # Mail gönderdikten sonra gönderildi bilgisini True yap.
#         self.__is_sent = True

#     def get_status(self): # Getter Method
#         # Mail gönderildi mi bilgisini ver.
#         return self.__is_sent

# mail = SendMail()
# print('Mail gönderildi mi?', mail.get_status()) # Bu bilgi hangi değişkenden olduğunu bilmiyoruz.
# mail.send()
# print('Mail gönderildi mi?', mail.get_status()) # Bu bilgi hangi değişkenden olduğunu bilmiyoruz.

# ---------------------------------------------
# Static Method:

# class Person:

#     name = 'Qadir'
#     surname = 'Adamson'

#     @staticmethod
#     def test():
#         print('Hello')

#     @staticmethod
#     def hello(name, surname):
#         print('Hello ' + name + ' ' + surname)

# personel = Person()
# personel.test()
# personel.hello('Qadir', 'Adamson')

# ---------------------------------------------
# Double-Underscore Methods: DunderMethods: __method__()
# Python için özel anlam içeren methodlardır. İsimleri sabittir.

# class Person:

#     name = 'Qadir'
#     surname = 'Adamson'

#     # __str__ : Instance default return.
#     def __str__(self):
#        return 'Bu benim yazdığım classtan üretilmiş bir intance\'dır.'

#     def ekrana_yaz(self):
#         print(f'{self.name} {self.surname}')

#     # Constructor Method:
#     # Instance oluşturulduğunda otomatik çalışan method.
#     def __init__(self):
#         self.name = 'Rafe'
#         self.surname = 'Stefano'



# # print(Person)
# personel = Person()
# print(personel)
# personel.ekrana_yaz()

# ---------------------------------------------

from module import Module

print(dir(Module))
instance = Module()
print(instance)
print(Module.__doc__)

