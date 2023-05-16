'''
    # https://faker.readthedocs.io/en/master/
    $ pip install faker # install faker module
    python manage.py flush # delete all exists data from db. dont forget: createsuperuser
    python manage.py shell
    from todo.faker import run
    run()
    exit()
'''


from .models import Todo
from faker import Faker

def run():
    fake = Faker() # Faker(['tr-TR'])
    for todo in range(200):
        Todo.objects.create(
            title = fake.sentence(),
            description = fake.text(),
            priority = fake.random_int(min=1, max=3),
            is_done = fake.boolean()
        )
    print('Finished')
    