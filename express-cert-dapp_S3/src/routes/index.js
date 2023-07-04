import { Router } from "express";
const router = Router();
import {deployerAddress,instance} from '../instance.js';

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

/* GET issue page. */
router.get("/issue", function (req, res) {
  res.render("issueCertificate",{messageClass:'hidden' ,certificateID:"",formClass:""});
});

router.post("/issue", async function (req, res) {
  const data = req.body;
  const trx = await instance.methods.issue(data.certificateID,data.name,data.course,data.grade,data.date).send({from:deployerAddress,gas:927000});
  res.render("issueCertificate",{messageClass:"" ,certificateID:data.certificateID,formClass:'hidden'});
});

/* GET issue page. */
router.post("/view", async function (req, res) {
  const data = req.body;

  const result = await instance.methods.Certificates(data.certificateID).call();
  console.log(result);
  res.render("viewCertificate", {
    data: {
      certificateID: data.certificateID,
      name: result.name,
      course: result.course,
      grade: result.grade,
      date: result.date
    }});

});



export default router;
