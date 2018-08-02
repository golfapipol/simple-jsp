# Build Docker Image and Run
Go to yourproject/ in terminal, and type it to build a Docker image:
```
$ docker build -t jsp .
```
And then run:
```
$ docker run -it -p -d 8888:8080 jsp
```
Visit http://localhost:8888/webapp to see if your website is running!

