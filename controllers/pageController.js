const nodemailer = require("nodemailer");
const Course = require("../models/Course");
const User = require("../models/User");

exports.getIndexPage = async (req, res) => {
  //en son oluşmuş iki kursu gönder
  const courses = await Course.find().sort("-createdAt").limit(2);
  const totalCourses = await Course.find().countDocuments();
  const totalStudents = await User.countDocuments({ role: "student" });
  const totalTeachers = await User.countDocuments({ role: "teacher" });
  res.render("index", {
    page_name: "index",
    courses,
    totalCourses,
    totalStudents,
    totalTeachers
  });
};

exports.getAboutPage = (req, res) => {
  res.render("about", {
    page_name: "about",
  });
};

exports.getRegisterPage = (req, res) => {
  res.render("register", {
    page_name: "register",
  });
};

exports.getLoginPage = (req, res) => {
  res.render("login", {
    page_name: "login",
  });
};

exports.getContactPage = (req, res) => {
  res.render("contact", {
    page_name: "contact",
  });
};
