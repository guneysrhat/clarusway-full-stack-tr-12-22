python3 to python (run only once) (for MacOS/Linux)
```
echo "alias py='python3'" >> ~/.bash_profile
echo "alias python='python3'" >> ~/.bash_profile
echo "alias pip='pip3'" >> ~/.bash_profile
echo "alias py='python3'" >> ~/.zshrc 
echo "alias python='python3'" >> ~/.zshrc 
echo "alias pip='pip3'" >> ~/.zshrc 
```

```sh

    $ python --version # python.org en güncel sürüm kurulsun.
    $ python -m venv env # Environment ortamı kur.

    $ source env/bin/activate
    # for Windows -> $ env\Scripts\activate 
    # for Windows GitBash -> $ source env/Scripts/activate 
    # Windows PermissionDenied -> $ Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
    # for env-close -> $ deactivate

    $ # pip install module_name
    $ # pip uninstall module_name
    $ pip list
    $ pip freeze

    # Installation DJANGO:
    $ pip install django
    $ django-admin --version
    $ pip freeze > requirements.txt
    $ django-admin startproject project_name .
    $ django-admin startapp app_name

    # Run Django:
    $ python manage.py runserver # for close "Ctrl + C"

    # DB Migrate:
    $ python manage.py migrate
    # Create SuperUser:
    $ python manage.py createsuperuser
    # RunServer:
    python manage.py runserver
    # Go to Admin Dashboard:
    http://127.0.0.1:8000/admin/

```