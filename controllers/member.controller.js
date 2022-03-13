const Service = require("../services");
const utilities = require("../utilities");

exports.login = async (req, res) => {
  try {
    const result = await Service.user.loginUser(req, res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.registration = async (req, res) => {
  try {
    const result = await Service.user.createUser(req, res);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllMember = async (req, res) => {
  try {
    const result = await Service.member.getMembers(req, res);
    res.status(200).json(utilities.response.formattedData(200, "", result));
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getMemberById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Service.member.getMemberById(id);
    res.status(200).json(utilities.response.formattedData(200, "", result));
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateMemberById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Service.member.updateMemberById(id,req,res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteMemberById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Service.member.deleteMemberById(id);
    res.status(200).json(utilities.response.formattedData(200, "", result));
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.create = async (req, res) => {
  const { body } = req;
  body.imgUrl = req.files[0].path;
  try {
    const result = await Service.member.createMember(req, res);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
