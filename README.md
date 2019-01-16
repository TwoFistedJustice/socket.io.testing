If you got this far, thank you for putting in the effort.
The Q&A won't allow me to post long questions or links. And it
doesn't generate any kind of error message. I don't know if this
is a bug, or some ill-conceived way of enforcing some unreasonable
standard.


So here is my question:

Testing with socket.io is really hard.

I've been trying to muddle through it by trial and error and can
get one test, and no more than one to pass.

What happens when I run the test is the test passes, but I get a
multiple done call error on the before hook.  My code is very
simple and I don't believe I have multiple calls anywhere.

I made this  repo to figure it out. It has two javascript files,
testServer and test. I have removed or disabled any code that
might make debugging harder, such as passing data from client
to server. Data only goes from server to client, and the expected
test value is hard coded.

Any help would be appreciated.

