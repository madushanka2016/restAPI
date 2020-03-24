# restAPI
end point

## Add user

**POST** -> http://localhost:5000/user

{
    "name":String,
    "age":Number,
    "gender":"MALE" or "FEMALE",
    "image":file
}

## Add friend

**POST** -> http://localhost:5000/user/< id >/friend

{
    "friendId":String
}

## Delete user

**DELETE** -> http://localhost:5000/user/< id >

## Get all user

**GET** -> http://localhost:5000/user/

## Get user

**GET** -> http://localhost:5000/user/< id >

## Get friends

**GET** -> http://localhost:5000/user/< id >/friends


