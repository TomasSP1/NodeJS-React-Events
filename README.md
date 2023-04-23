Project-events

Project is made by Tomas SP team combining two newest technologies nodejs and react.

Run application
In the "backend" directory open new terminal and run

npm i

npm run dev


Test application end-points
Register user
Method: POST
End-point: http://localhost:8080/api/user/
Messsage in body e.g.:
{
"name": "Jonas",
"email": "jonas@gmail.com",
"password": "jonas",
}
Response e.g.:
{
"_id": "6403943e135ad0adaf4fb9cd",
"name": "Jonas",
"email": "jonas@gmail.com",
}


Post event
Method: POST
End-point: http://localhost:8080/api/events/
Messsage in body e.g.:
{
    "title": "plaukimas baidaremis",
    "description": "plaukimas nemunu iki pat galo ir atgal",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/5/53/Nemunas.jpg",
    "user": "64457d49c6a3b8ef0849ec14"
}

Response e.g.:
{
    "title": "plaukimas baidaremis",
    "description": "plaukimas nemunu iki pat galo ir atgal",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/5/53/Nemunas.jpg",
    "user": "64457d49c6a3b8ef0849ec14",
    "_id": "64457fbfdbb946ac62b97655",
    "createAt": "2023-04-23T18:58:07.556Z",
    "__v": 0
}

Get all user's events
Method: GET
End-point: http://localhost:8080/api/events/
Messsage in body e.g.:
{
    "id": "64039e2acd33c9d4d5866aef",
}
Response e.g.:
[
    {
        "_id": "64457f4edbb946ac62b97651",
        "title": "koncertas",
        "description": "labai geras koncertas, visa nakti",
        "photo": "lalaila",
        "user": "64457d49c6a3b8ef0849ec14",
        "createAt": "2023-04-23T18:56:14.387Z",
        "__v": 0
    },
    {
        "_id": "64457f89dbb946ac62b97653",
        "title": "naktinis zygis",
        "description": "200km pesciomis, jokio poilsio, eisit kol galesit arba isnes",
        "photo": "https://www.pza.lt/wp-content/uploads/2022/12/Vilkijos-%C5%BEygis-2023.01.07-1-1024x576.png",
        "user": "64457d49c6a3b8ef0849ec14",
        "createAt": "2023-04-23T18:57:13.534Z",
        "__v": 0
    },
    {
        "_id": "64457fbfdbb946ac62b97655",
        "title": "plaukimas baidaremis",
        "description": "plaukimas nemunu iki pat galo ir atgal",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/5/53/Nemunas.jpg",
        "user": "64457d49c6a3b8ef0849ec14",
        "createAt": "2023-04-23T18:58:07.556Z",
        "__v": 0
    }
]