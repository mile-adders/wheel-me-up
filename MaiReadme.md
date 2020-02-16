build signin and sign up route "the basic auth  "


## to test signin 

http post :3000/signin -a "here put your user":"here put your passward"
(example) (http post :3000/signin -a mai_you:12345)

## to test signup 

 echo '{"username":"here put your user","password":"here put your passward" }' | http post :3000/signup