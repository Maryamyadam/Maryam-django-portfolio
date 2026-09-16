 Maryam Yusuf Portfolio Website

 Overview

This project is a dynamic personal portfolio website built with Django, JavaScript, HTML, and CSS. The website presents my software engineering work, technical skills, professional experience, and contact information in a responsive interface.

The original frontend was built with HTML, CSS, and JavaScript. For the final project, I integrated the frontend with a Django backend so that portfolio content is stored in a database and can be managed through Django's administrative interface. Instead of hard-coding every project, skill, and experience entry into the HTML, the website retrieves this information from Django models and displays it dynamically.

The project uses SQLite for local development. It can also use PostgreSQL when a `DATABASE_URL` environment variable is provided, making the project suitable for deployment. Static files are configured with WhiteNoise, and environment variables are loaded from a `.env` file.

## Distinctiveness and Complexity

This project is distinct from the applications created in CS50W Projects 0–4 because it is neither a wiki, e-commerce website, email client, nor social networking site. Its purpose is to provide a personal portfolio and a database-backed content management system for presenting professional work and experience.

The project is more complex than a purely static portfolio because the content is managed through Django models and the Django administration interface. There are three separate models: `Project`, `Skill`, and `Experience`. Each model represents a different type of portfolio information and has its own fields and administration configuration.

The `Project` model stores information such as the project title, year, description, result, technologies, and role. The `Skill` model stores technical skills and organizes them into categories such as Languages, Frontend, Backend, and Platform. The `Experience` model stores dates, positions, companies, and descriptions.

The Django view retrieves records from these models and passes them to the template. The template then uses Django's template language to generate the appropriate sections of the website dynamically. Projects are ordered by year, skills are ordered by category and name, and the template separates skills into their respective categories.

The Django admin interface also provides search and filtering functionality. Projects can be searched and filtered by year, skills can be searched and filtered by category, and experience entries can be searched by their relevant fields. This allows the portfolio content to be maintained without changing the HTML manually.

The frontend also contains JavaScript functionality rather than being a collection of static HTML pages. JavaScript provides smooth navigation between sections, changes the navigation appearance when scrolling, tracks the active section, and uses Intersection Observer animations for project and skill cards. The current year in the footer is also generated dynamically.

The website is responsive and contains separate CSS layouts for desktop, tablet-sized, and mobile-sized screens. The navigation, project grid, skills grid, buttons, contact section, and other elements adjust for smaller screens.

Together, the Django database models, dynamic template rendering, administrative content management, JavaScript interactions, responsive CSS, static-file handling, and deployment configuration make the project substantially different from a simple static portfolio page.

## Technologies Used

* Python
* Django
* SQLite
* PostgreSQL support through `DATABASE_URL`
* HTML5
* CSS3
* JavaScript
* Django Templates
* Django Admin
* WhiteNoise
* Gunicorn
* python-dotenv
* dj-database-url

## File Structure

### `manage.py`

The standard Django management script used to run development commands such as starting the development server, applying migrations, checking the project, and creating administrative users.

### `portfolio_backend/settings.py`

Contains the main Django configuration, including installed applications, middleware, database configuration, security settings, templates, static files, environment variables, and WhiteNoise configuration.

The project uses SQLite when no `DATABASE_URL` is supplied and can use PostgreSQL when one is available.

### `portfolio_backend/urls.py`

Defines the main URL routes. The homepage is connected to the `home` view, while `/admin/` provides access to Django's administrative interface.

### `portfolio_backend/asgi.py`

Provides the ASGI entry point for serving the Django project with ASGI-compatible servers.

### `portfolio_backend/wsgi.py`

Provides the WSGI entry point used by traditional Python web servers and deployment environments.

### `contact/models.py`

Defines the three database models used by the portfolio:

* `Project`
* `Skill`
* `Experience`

These models allow portfolio information to be stored in the database instead of being hard-coded into the webpage.

### `contact/views.py`

Contains the `home` view. It retrieves projects, skills, and experiences from the database and sends them to the `index.html` template.

### `contact/admin.py`

Registers the three models with Django Admin and provides customized search, display, and filtering options for managing portfolio content.

### `contact/templates/index.html`

The main portfolio webpage. It contains the website structure and uses Django template tags to display projects, skills, and experience records retrieved from the database.

It also contains the navigation, hero section, project section, skills section, about section, experience timeline, contact section, and footer.

### `contact/static/contact/style.css`

Contains the styling for the portfolio website. It defines the visual design, layouts, typography, cards, buttons, navigation, timeline, and responsive behavior for smaller screens.

### `contact/static/contact/script.js`

Contains the frontend JavaScript functionality. It handles smooth navigation, scroll-based navigation changes, active-section tracking, Intersection Observer animations, the contact email interaction, and the dynamic footer year.

### `contact/migrations/`

Contains Django migration files that create and update the database structure for the project's models.

### `requirements.txt`

Lists the Python packages required to run the project:

* Django
* Gunicorn
* python-dotenv
* psycopg2-binary
* dj-database-url
* WhiteNoise

### `.env`

Stores environment-specific configuration such as the Django secret key and database configuration. Sensitive values should not be committed publicly.

### `.gitignore`

Specifies files and directories that should not be committed to version control, including environment-specific and generated files.

### `db.sqlite3`

The SQLite database used for local development. It stores the portfolio records used by the Django application.

## How to Run the Application

First, open a terminal and navigate to the project directory:

```text
cd C:\CODES\maryam-portfolio\portfolio_backend
```

Install the required Python packages:

```text
py -m pip install -r requirements.txt
```

Apply the database migrations:

```text
py manage.py migrate
```

Create an administrator account if one does not already exist:

```text
py manage.py createsuperuser
```

Start the Django development server:

```text
py manage.py runserver
```

The website can then be opened at:

```text
http://127.0.0.1:8000/
```

The Django administration interface is available at:

```text
http://127.0.0.1:8000/admin/
```

After signing into the admin interface, portfolio projects, skills, and experience entries can be created or updated through Django Admin. The changes are then reflected on the main portfolio website because the homepage retrieves the information from the database.

## Database and Deployment Configuration

For local development, the project uses SQLite through `db.sqlite3`.

The settings also support PostgreSQL through the `DATABASE_URL` environment variable. When this variable is available, `dj-database-url` is used to configure the Django database connection.

Static files are configured with WhiteNoise so that the Django project can serve its static assets in a production environment. Gunicorn is included in `requirements.txt` as the production WSGI server.

The project uses environment variables for configuration rather than placing sensitive deployment values directly in the source code.

## Additional Information

The contact email on the website uses a `mailto:` link. Selecting the email address opens the visitor's configured email application so that they can compose a message to the portfolio owner.

The GitHub and LinkedIn buttons link to external professional profiles and open in a new browser tab.

The website is designed to be viewed on both desktop and mobile devices. The responsive CSS changes the layout, typography, grids, buttons, navigation, and other elements according to the screen width.

The Django Admin interface is intended for managing the portfolio's database content. It is not part of the public-facing portfolio design.

## Project Verification

Before submission, the Django project was checked using Django's system-check framework and database migration checks.

The following commands complete successfully:

```text
py manage.py check
```

and:

```text
py manage.py makemigrations --check
```

The project therefore has no outstanding Django system-check errors and no model changes waiting to be turned into migrations. 

check out my old static portfolio https://maryamyadam.dynome.com.ng  change it to this dynamic portfolio that I have created 
