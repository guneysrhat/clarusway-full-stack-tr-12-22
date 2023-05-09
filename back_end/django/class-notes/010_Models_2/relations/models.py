from django.db import models

class Account(models.Model):
    username = models.CharField(max_length=64)
    password = models.CharField(max_length=64)
    email = models.EmailField(max_length=256)

    def __str__(self):
        return f'{self.username}'

# OneToOneField():
class Profile(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    about = models.TextField()
    picture = models.ImageField(upload_to='profile/', null=True, blank=True)
    account = models.OneToOneField(Account, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.account} - {self.first_name} {self.last_name}'


'''
on_delete properties:
    # CASCADE -> if primary deleted, delete foreing too.
    # SET_NULL -> if primary deleted, set foreign to NULL. (null=True)
    # SET_DEFAULT -> if primary deleted, set foreing to DEFAULT value. (default='Value')
    # DO_NOTHING -> if primary deleted, do nothing.
    # PROTECT -> if foreign is exist, can not delete primary.
'''

COUNTRIES = (
    ('US', 'America'),
    ('DE', 'Germany'),
    ('TR', 'Turkey'),
)

# ManyToOne() == ForeingKey()
class Address(models.Model):
    name = models.CharField(max_length=64)
    address = models.TextField()
    country = models.CharField(max_length=2, choices=COUNTRIES)
    phone = models.CharField(max_length=16)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.account} - {self.name} - {self.country}'

# ManyToMany():
class Product(models.Model):
    brand = models.CharField('Marka', max_length=64)
    product = models.CharField(verbose_name='Ürün Adı', max_length=64)
    account = models.ManyToManyField(Account, verbose_name='Hesaplar') # Dont use: on_delete

    def __str__(self):
        return f'{self.brand} - {self.product}'


    class Meta:
        verbose_name = 'Ürün'
        verbose_name_plural = 'Ürünler'