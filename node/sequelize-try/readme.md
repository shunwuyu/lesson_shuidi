- ./node_modules/.bin/sequelize init
- ./node_modules/.bin/sequelize db:create
- ./node_modules/.bin/sequelize migration:create --name create-shops-table
- ./node_modules/.bin/sequelize db:migrate
- ./node_modules/.bin/sequelize db:seed:all

- config 
- migrations 数据库迁移 
会将mysql 表， 字段 创建，修改 迁移 留下记录
- models 业务模型层
  表映射为对象 
  Article  
  Insert into 
  new Article({title:''})
- seeders 
  测试数据

- 离开sql 来到工具