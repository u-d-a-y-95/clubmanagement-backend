const database = require("../config/dbConfig");

exports.createMember = (member) => {
  const query = `Insert into members (name,email,password,mobile,address,imgUrl,status) values(?,?,?,?,?,?,?);`;
  return new Promise((resolve, reject) => {
    database.db.run(
      query,
      [
        member?.name,
        member?.email,
        member?.password,
        member?.mobile,
        member?.address,
        member?.imgUrl,
        member?.status,
      ],
      function (err, res) {
        if (err) {
          reject(err);
        }
        resolve(this);
      }
    );
  });
};

exports.getMembers = () => {
  const query = `select * from members`;
  return new Promise((resolve, reject) => {
    database.db.all(query, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

exports.getMemberById = (id) => {
  const query = `select * from members where id=${id}`;
  return new Promise((resolve, reject) => {
    database.db.all(query, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

exports.updateMemberById = async (id,member) => {
  const query = `update members set name=?,email=?,password=?,mobile=?,address=?,imgUrl=?,status=? where id=${id}`;
  return new Promise((resolve, reject) => {
    database.db.run(
      query,
      [
        member?.name,
        member?.email,
        member?.password,
        member?.mobile,
        member?.address,
        member?.imgUrl,
        member?.status,
      ],
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve("Update");
      }
    );
  });
};

exports.deleteMemberById = async (id) => {
  const query = `delete from members where id=${id}`;
  return new Promise((resolve, reject) => {
    database.db.run(query, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve("Delete");
    });
  });
};
