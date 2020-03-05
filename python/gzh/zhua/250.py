import requests
from bs4 import BeautifulSoup
#设置请求头伪装
header = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'}
# 先使用requests发送网络请求从而获取网页
html = requests.get('https://movie.douban.com/top250', headers=header).content
# 传入html构建DOM
soup=BeautifulSoup(html,'html.parser')
movieNodes = soup.find('ol', attrs={'class': 'grid_view'})
movies=[]
for movie in movieNodes.find_all('li'):
    title=movie.find('div',attrs={'class':'hd'})
    titles=title.find_all('span')
    info=movie.find('p').get_text()
    score=movie.find('span',attrs={'class':'rating_num'}).get_text()
    # print(info, '+++++++++')
    movies.append({
      'titles': titles,
      'info': "".join(info.split()),
      'score': score
    })
f = open("mainpy.json", "w", encoding='utf-8')
# 由于list 中包含数字，不能直接转化为string  需要先遍历将每一个元素转为字符串
m=" ".join('%s' %id for id in movies)
f.write(m)
f.close()