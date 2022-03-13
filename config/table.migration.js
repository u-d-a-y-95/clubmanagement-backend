exports.usertable = `create table if not exists users ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name text not null,
    email text not null,
    password text not null,
    status integer
    )`;
exports.membertable = `create table if not exists members ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name text not null,
    email text not null,
    password text not null,
    mobile text,
    address text,
    imgUrl text,
    status integer
    )`;
