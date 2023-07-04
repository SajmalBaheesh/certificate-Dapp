import { Router } from "express";
const router = Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

/* GET issue page. */
router.get("/issue", function (req, res) {
  res.render("issueCertificate",{messageClass:'hidden' ,certificateID:"",formClass:""});
});

/* GET issue page. */
router.post("/view", function (req, res) {
  res.render("viewCertificate", {
    data: {
      certificateID: 'ID',
      name: 'Name',
      course: "Course",
      grade: "Grade",
      date: 'Date'
    }
  });
});



export default router;
