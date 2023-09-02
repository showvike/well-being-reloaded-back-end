// require
const doctorModel = require("../../models/doctor/doctor.model");

// doctor registration controller
const doctorRegistrationController = async (req, res) => {
  console.log("hit: /doctor/registration POST");

  const doctorDetails = ({
    firstName,
    lastName,
    email,
    mobileNumber,
    specialty,
    designation,
    nationalId,
    bmaNumber,
    dateOfBirth,
    bloodGroup,
    gender,
    profilePictureUrl,
    district,
    thana,
    area,
    buildingNo,
    password,
  } = req.body);

  try {
    await doctorModel.create(doctorDetails);

    console.log("doctor registration successful");

    return res.status(200).json({
      status: "ok",
      body: {
        message: "doctor registration successful",
      },
    });
  } catch (err) {
    console.log(`doctor registration error: ${err}`);

    return res.status(500).json({
      status: "error",
      body: {
        message: `doctor registration error: ${err}`,
      },
    });
  }
};

// export
module.exports = doctorRegistrationController;
