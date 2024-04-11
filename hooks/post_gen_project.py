from pathlib import Path

project_name = Path('{{ cookiecutter.project_name }}')
vue_project = Path('{{ cookiecutter.project_name }}_web')

templates_dir = project_name / "templates"
templates_dir.mkdir()

# Vue Project Directory
public_dir = vue_project / "public"
src_dir = vue_project / "src"
assets = src_dir / "assets"
components = src_dir / "components"
scss = src_dir / "scss"
stores = src_dir / "stores"
views = src_dir / "views"

for item in (public_dir, assets, components, scss, stores, views):
    item.mkdir(parents=True)
