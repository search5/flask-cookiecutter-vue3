from pathlib import Path

project_name = Path('{{ cookiecutter.project_name }}')
vue_project = Path('{{ cookiecutter.project_name }}')

templates_dir = Path("src_python") / project_name / "templates"
templates_dir.mkdir(parents=True)

# Vue Project Directory
public_dir =  Path("public")
src_dir = Path("src")
assets = src_dir / "assets"
components = src_dir / "components"
stores = src_dir / "stores"
views = src_dir / "views"

# python project directory
tests = project_name / "tests"

for item in (public_dir, assets, components, stores, views, tests):
    item.mkdir(parents=True)
