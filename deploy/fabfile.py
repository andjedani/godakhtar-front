from fabric.contrib.files import exists
from fabric.api import cd, env, local, run

REPO_URL = 'git@github.com:andjedani/godakhtar-front.git'


def deploy():
    site_folder = f'/home/ubuntu/godakhtar-front/'
    run(f'mkdir -p {site_folder}')
    with cd(site_folder):
        _get_latest_source()
        _yarn()


def _get_latest_source():
    if exists('.git'):
        run('git fetch')
    else:
        run(f'git clone {REPO_URL} .')
    current_commit = local("git log -n 1 --format=%H", capture=True)
    run(f'git reset --hard {current_commit}')


def _yarn():
    run('yarn install')
    run('yarn build')
