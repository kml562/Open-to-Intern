import Intern from "../models/internModel.js";
import College from "../models/collageModel.js";
import validator from "validator";



export const postIntern = async (req, res) => {
  try {
    const { name, email, mobile, collegeName } = req.body;
    if (!name)
      res.status(400).json({ status: false, message: "Name is required" });
    if (!email)
      res.status(400).json({ status: false, message: "Email is required" });
    if (!mobile)
      res.status(400).json({ status: false, message: "Mobile is required" });
    if (!collegeName)
      res.status(400).json({ status: false, message: "College is required" });
    if (!validator.isEmail(email))
      res.status(400).json({ status: false, message: "Email is invalid" });
    if (!validator.isMobilePhone (mobile))
      res.status(400).json({ status: false, message: "Mobile is invalid" });
    else {
      const findCollege = await College.findOne({ name: collegeName });
      if (!findCollege)
        res.status(404).json({ status: false, message: "College not found" });
      else {
        const findIntern = await Intern.findOne({ email: email });
        if (findIntern) {
          return res
            .status(400)
            .json({ status: false, message: "Intern already exists" });
        } else {
          const findInternMobile = await internModel.findOne({
            mobile: mobile,
          });
          if (findInternMobile)
            return res
              .status(400)
              .json({ status: false, message: "Intern already exists" });
          else {
            const internData = {
              name: name,
              email: email,
              mobile: mobile,
              collegeId: findCollege._id,
            };
            const intern = await internModel.create(internData);
            const selectedData = {
              name: intern.name,
              email: intern.email,
              mobile: intern.mobile,
              collegeId: intern.collegeId,
              isDeleted: intern.isDeleted,
            };
            res.status(201).json({ status: true, data: selectedData });
          }
        }
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: false, message: error.message });
  }
};

export const getIntern = async (req, res) => {
  try {
    const collegeName = req.query.collegeName;
    if (!collegeName)
      return res
        .status(404)
        .json({ status: false, message: "College Name is required" });
    else {
      const college = await collegeModel.findOne({ name: collegeName });
      if (!college)
        return res
          .status(404)
          .json({ status: false, message: "College not found" });
      else {
        const intern = await Intern.find({
          collegeId: college._id,
          isDeleted: false,
        });
        const details = {
          name: college.name,
          fullName: college.fullName,
          logoLink: college.logoLink,
          interns: intern,
        };
        res.status(200).json({ status: true, data: details });
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: false, message: error.message });
  }
};
