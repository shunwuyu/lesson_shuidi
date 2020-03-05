import ssl
#加密浏览器和服务器之间的数据传输，确保隐私数据的安全性和完整性
from urllib.request import Request
from urllib.request import urlopen

context = ssl._create_unverified_context()

request = Request(url="https://foofish.net/pip.html",
                  method="GET",
                  headers={"Host": "foofish.net"},
                  data=None)

response = urlopen(request, context=context)
headers = response.info()
content = response.read()
code = response.getcode()
# print(headers)
