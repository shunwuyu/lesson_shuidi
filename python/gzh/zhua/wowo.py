import requests

# r = requests.get("https://httpbin.org/ip")

# print(r)
# print(r.status_code)
# print(r.content)

# r = requests.post('http://httpbin.org/post', data = {'key':'value'})
#https://blog.csdn.net/s_zhchluo/article/details/85262887
# 豆瓣 没有header伪装请求不要东西  手机和PC区别
# url = 'https://www.douban.com/'
# headers = {'user-agent': 'Mozilla/5.0 (Linux; U; Android 8.1.0; zh-cn; BLA-AL00 Build/HUAWEIBLA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/8.9 Mobile Safari/537.36'}
# headers = {'user-agent': 'Mozilla/5.0'}
# r = requests.get(url, headers = headers)
# # r = requests.get(url, headers = headers)
# print(r.text)

# 
# s = requests.get('http://httpbin.org/cookies', cookies={'from-my': 'browser'})
# # print(s.text, s.content)

# 先不加， 再加 过时
# r = requests.get('https://google.com', timeout=5)
# print(r.status_code)
proxies = {
    'http': 'http://127.0.0.1:1080',
    'https': 'http://127.0.0.1:1080',
}

# r = requests.get('http://www.kuaidaili.com/free/', proxies=proxies, timeout=2)
