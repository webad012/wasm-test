# WASM test
* compare performance between js and wasm (rust)
* standalone image. just build&run in docker and expirience how faster is same code with wasm

## build and run
### build
```
bash run.sh -b
```
### run
```
bash run.sh -r
```
### stop
```
bash run.sh -s
```
### restart
```
bash run.sh -s && bash run.sh -b && bash run.sh -r
```

## current result (on my local machine):
#### JS fibonacci result:
* fibonnacci_input: 50
* fibonnacci_call_count: 1000000
* fibonnacci_result: 12586269025
* exec_time: 240ms

#### WASM fibonacci result:
* fibonnacci_input: 50
* fibonnacci_call_count: 1000000
* fibonnacci_result: 12586269025
* exec_time: 70ms
