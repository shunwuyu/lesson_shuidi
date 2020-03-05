[source](https://juejin.im/entry/59bcce1b5188257e82676b53)

master 
  负责 agent 的启动、退出、重启 child_process 的 fork 模式
    秘书的存在，只负责帮它们处理轻量级的服务
  负责各个 worker 进程的启动、退出、以及 refork ，在开发模式下负责重启
  负责 agent 和各个 worker 之间的通信
    worker 在 cluster 的预处理下能够对同一端口进行监听而不会产生端口冲突
  负责各个 worker 之间的通信
 worker  
 
 agent
