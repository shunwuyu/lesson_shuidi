import requests
import json

class SimpleCrawler:
  def crawl(self, params=None):
    url = "https://www.zhihu.com/api/v4/columns/pythoneer/followers"
    params = {
      "limit": 20,
      "offset": 0,
      "include": "data[*].follower_count, gender, is_followed, is_following"
    }
    headers = {
      "authority": "www.zhihu.com",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
      "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36",
    }
    response = requests.get(url, headers=headers, params=params)
    # print("请求URL：", response.url)
    # print("返回数据：", response.text)
    # print(response.json())
    for follower in response.json().get("data"):
      print(follower)
    with open('./followers.json', "w") as f:
      json.dump(response.json().get("data"), f, ensure_ascii=False)
      print("加载文件完成...")
    
if __name__ == '__main__':
  SimpleCrawler().crawl()