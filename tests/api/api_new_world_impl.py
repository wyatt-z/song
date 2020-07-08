import requests
from getgauge.python import step


@step('Verify the greeting message')
def verify_api_msg():
    print('This is a API test...')
    msg = 'This is the new world, and in this world, you can be whoever the fuck you want!'
    res = requests.get('http://localhost:5000/api/say_hello')
    assert res.status_code == 200
    assert res.json()['msg'] == msg
