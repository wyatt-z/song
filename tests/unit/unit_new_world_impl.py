from getgauge.python import step

from fire import hello


@step('Verify the greeting message')
def verify_msg():
    print('This is a unit test...')
    msg = 'This is the new world, and in this world, you can be whoever the fuck you want!'
    assert msg == hello.hello_world()['msg']
