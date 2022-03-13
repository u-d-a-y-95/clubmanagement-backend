const Models = require("../models");
const Utilies = require("../utilities");
const DAO = require("../dao");

exports.createMember = async (req, res) => {
  const { body } = req;
  try {
    hashpassword = await Utilies.hash.getHash(body.password);
    body.password = hashpassword;
    const newMember = new Models.member(body);
    const result = await DAO.member.createMember(newMember);
    newMember["id"] = result.lastID;
    return newMember;
  } catch (error) {
    throw error;
  }
};

exports.getMembers = async (req, res) => {
  try {
    const result = await DAO.member.getMembers();
    return result.map((item) => ({
      id: item?.id,
      name: item?.name,
      email: item?.email,
      mobile: item?.mobile,
      address: item?.address,
      imgUrl: item?.imgUrl?.split("/")[1],
      status: item?.status ? true : false,
    }));
  } catch (error) {
    throw error;
  }
};
exports.getMemberById = async (id) => {
  try {
    const result = await DAO.member.getMemberById(id);
    return result[0];
  } catch (error) {
    throw error;
  }
};

exports.updateMemberById = async (id, req, res) => {
  try {
    const result = await DAO.member.getMemberById(id);
    if (result.length > 0) {
      const { body } = req;
      const updateMember = {
        ...result[0],
        ...body,
      };
      const updateResult = await DAO.member.updateMemberById(id, updateMember);
      return updateMember;
    } else {
      return "data not found"
    }
  } catch (error) {
    throw error;
  }
};

exports.deleteMemberById = async (id) => {
  try {
    const result = await DAO.member.getMemberById(id);
    if (result.length > 0) {
      await DAO.member.deleteMemberById(id);
      Utilies.file.removeFiles(result.map((item) => ({ path: item.imgUrl })));
      return result;
    } else {
      return "data not found"
    }
  } catch (error) {
    throw error;
  }
};
